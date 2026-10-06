import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { assertBridgeRuntime, bridgeCommand, bridgeCompatibility, checkWadizRelease, resolveWadizScript } from '../skills/sangse/scripts/wadiz-bridge.mjs';

const compatibleRelease = { name: 'wadiz-detail-page-production', version: '0.3.0', schema_version: 1, node: '>=22.0.0' };
async function fixture(t, script = 'import-sangse.mjs', relativeRoot = '') {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'wadiz-bridge-'));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const skill = path.join(root, relativeRoot);
  await fs.mkdir(path.join(skill, 'scripts'), { recursive: true });
  await fs.writeFile(path.join(skill, 'scripts', script), '// fixture');
  await fs.writeFile(path.join(skill, 'release.json'), JSON.stringify(compatibleRelease));
  return { root, skill, script: path.join(skill, 'scripts', script) };
}

test('bridge targets explicit installed script without shell parsing or altering source arguments', async t => {
  const { root } = await fixture(t);
  const argv = ['import', 'product with spaces', '--out', 'new output', '--wadiz-skill', root, '--category', 'living'];
  const resolved = bridgeCommand(argv, {});
  assert.equal(resolved.command, process.execPath);
  assert.deepEqual(resolved.args.slice(1), ['product with spaces', '--out', 'new output', '--category', 'living']);
  assert.deepEqual(argv, ['import', 'product with spaces', '--out', 'new output', '--wadiz-skill', root, '--category', 'living']);
});

test('repository root and WADIZ_SKILL_ROOT resolve consistently', async t => {
  const { root, script } = await fixture(t, 'convert-legacy-jobs.mjs', 'wadiz-detail-page-production');
  assert.equal(bridgeCommand(['convert-jobs', 'old.json', '--out', 'new.json'], { WADIZ_SKILL_ROOT: root }).args[0], script);
});

test('CODEX_HOME default installed layout works without changing the original argument list', async t => {
  const { root, script } = await fixture(t, 'compile-page-plan.mjs', 'skills/wadiz-detail-page-production');
  assert.equal(bridgeCommand(['plan', 'brief.json', '--out', 'new'], { CODEX_HOME: root }).args[0], script);
});

test('Node runtime minimum is explicit and checked before invoking a production script', () => {
  assert.equal(bridgeCompatibility.node, '>=22.0.0');
  for (const version of ['18.20.0', '20.9.0', '20.19.0', '21.0.0', '21.99.99', 'invalid']) assert.throws(() => assertBridgeRuntime(version), /Node >=22\.0\.0/);
  for (const version of ['22.0.0', '22.1.0', '24.0.0', '24.3.0']) assert.doesNotThrow(() => assertBridgeRuntime(version));
  assert.throws(() => resolveWadizScript('/no-script-must-start', 'import', { nodeVersion: '21.99.99' }), /Node >=22\.0\.0/);
});

test('a script without readable release metadata is not treated as a compatible installation', async t => {
  const { root } = await fixture(t);
  await fs.rm(path.join(root, 'release.json'));
  assert.throws(() => resolveWadizScript(root, 'import'), /metadata is missing or invalid/);
  await fs.writeFile(path.join(root, 'release.json'), 'broken json');
  assert.throws(() => resolveWadizScript(root, 'import'), /metadata is missing or invalid/);
});

test('unsupported versions, pre-releases, schema changes and other skills fail closed', async t => {
  const { root } = await fixture(t);
  const unsupported = [
    { version: '0.2.1' }, { version: '0.4.0' }, { version: '1.0.0' }, { version: '0.3.1-beta.1' },
    { schema_version: 2 }, { schema_version: '1' }, { name: 'unrelated-skill' },
  ];
  for (const change of unsupported) {
    await fs.writeFile(path.join(root, 'release.json'), JSON.stringify({ ...compatibleRelease, ...change }));
    assert.throws(() => resolveWadizScript(root, 'import'), /Unsupported Wadiz release/);
  }
});

test('stable 0.3.x releases with schema 1 are forward compatible within the declared range', async t => {
  const { root } = await fixture(t);
  await fs.writeFile(path.join(root, 'release.json'), JSON.stringify({ ...compatibleRelease, version: '0.3.12' }));
  assert.equal(checkWadizRelease(root).version, '0.3.12');
  assert.doesNotThrow(() => resolveWadizScript(root, 'import'));
});

test('missing installation, invalid action and missing flag value return actionable errors', () => {
  assert.throws(() => resolveWadizScript('/missing-skill', 'import'), /not found/);
  assert.throws(() => bridgeCommand(['import', '--wadiz-skill'], {}), /requires a directory/);
  assert.throws(() => bridgeCommand(['paid-generation'], {}), /Unknown bridge action/);
});
