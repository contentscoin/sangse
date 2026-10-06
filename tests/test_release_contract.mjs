import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const { checkForUpdate, isForkRemote, MARKETPLACE_NAME } = require('../setup/contentscoin-update-check.cjs');
const sourceRoot = new URL('../', import.meta.url);
const read = name => fs.readFile(new URL(name, sourceRoot), 'utf8');
const localSha = 'a'.repeat(40);
const remoteSha = 'b'.repeat(40);

test('plugin and self-contained marketplace versions/provenance agree while upstream author and license remain', async () => {
  const plugin = JSON.parse(await read('.claude-plugin/plugin.json'));
  const marketplace = JSON.parse(await read('.claude-plugin/marketplace.json'));
  assert.equal(plugin.version, '0.8.1');
  assert.equal(marketplace.name, MARKETPLACE_NAME);
  assert.equal(marketplace.plugins.length, 1);
  assert.equal(marketplace.plugins[0].name, plugin.name);
  assert.equal(marketplace.plugins[0].source, './');
  assert.equal(marketplace.plugins[0].version, plugin.version);
  assert.equal(plugin.repository, 'https://github.com/contentscoin/sangse');
  assert.equal(plugin.author.name, 'chulrolee');
  assert.match(await read('LICENSE'), /Copyright \(c\) 2026 fivetaku/);
  assert.match(await read('CHANGELOG.md'), new RegExp(`^## ${plugin.version.replaceAll('.', '\\.')} `, 'm'));
});

test('all advertised installation paths point at the fork and optional bridge docs pin the supported Wadiz release', async () => {
  for (const file of ['README.md', 'README.ko.md', 'README.ja.md', 'README.zh.md', 'README.es.md']) {
    const text = await read(file);
    assert.match(text, /\/plugin marketplace add https:\/\/github\.com\/contentscoin\/sangse\.git/);
    assert.match(text, /\/plugin install sangse@contentscoin-sangse/);
    assert.match(text, /wadiz-bridge\.md/);
  }
  const docs = await read('skills/sangse/references/wadiz-bridge.md');
  assert.match(docs, /v0\.3\.0/);
  assert.match(docs, /20\.9/);
  assert.match(docs, /schema.*1|schema_version.*1/);
});

async function fakeMarketplace(t) {
  const configDir = await fs.mkdtemp(path.join(os.tmpdir(), 'sangse-release-'));
  t.after(() => fs.rm(configDir, { force: true, recursive: true }));
  const marketplace = path.join(configDir, 'plugins', 'marketplaces', MARKETPLACE_NAME);
  await fs.mkdir(path.join(marketplace, '.git'), { recursive: true });
  const calls = [];
  const exec = (command, args) => {
    calls.push({ command, args });
    assert.equal(command, 'git');
    assert.equal(args[1], marketplace);
    const action = args.slice(2).join(' ');
    if (action === 'remote get-url origin') return 'https://github.com/contentscoin/sangse.git';
    if (action === 'rev-parse HEAD') return localSha;
    if (action === 'ls-remote origin HEAD') return `${remoteSha}\tHEAD`;
    if (action.startsWith('merge-base --is-ancestor')) throw Object.assign(new Error('not present'), { status: 128 });
    throw new Error(`Unexpected command: ${action}`);
  };
  return { configDir, calls, exec };
}

test('fork notifier rejects upstream/unrelated remotes and never contacts their network', async t => {
  for (const url of ['https://github.com/fivetaku/sangse.git', 'https://github.com/contentscoin/sangse-malicious.git', 'https://example.com/contentscoin/sangse']) assert.equal(isForkRemote(url), false);
  for (const url of ['https://github.com/contentscoin/sangse.git', 'git@github.com:contentscoin/sangse.git', 'ssh://git@github.com/contentscoin/sangse.git']) assert.equal(isForkRemote(url), true);
  const { configDir } = await fakeMarketplace(t);
  let calls = 0;
  const result = checkForUpdate({ configDir, exec: () => { calls++; return 'https://github.com/fivetaku/sangse.git'; } });
  assert.equal(result.suppressOutput, true);
  assert.equal(calls, 1);
});

test('fork notifier uses correct update commands and cached read-only Git checks', async t => {
  const fixture = await fakeMarketplace(t);
  const first = checkForUpdate({ ...fixture, now: 100000 });
  assert.equal(first.continue, true);
  assert.match(first.hookSpecificOutput.additionalContext, /marketplace update contentscoin-sangse/);
  assert.match(first.hookSpecificOutput.additionalContext, /plugin update sangse@contentscoin-sangse/);
  assert.equal(fixture.calls.filter(call => call.args.includes('ls-remote')).length, 1);
  checkForUpdate({ ...fixture, now: 100100 });
  assert.equal(fixture.calls.filter(call => call.args.includes('ls-remote')).length, 1);
  assert.ok(fixture.calls.every(call => !call.args.some(arg => ['fetch', 'pull', 'push', 'checkout'].includes(arg))));
});

test('equal or ahead local checkout, missing install and unavailable Git stay silent and non-blocking', async t => {
  const fixture = await fakeMarketplace(t);
  assert.equal(checkForUpdate({ configDir: path.join(fixture.configDir, 'missing'), exec: () => { throw new Error('must not run'); } }).suppressOutput, true);
  assert.equal(checkForUpdate({ configDir: fixture.configDir, exec: () => { throw new Error('git unavailable'); } }).suppressOutput, true);
  const equal = (command, args) => args.includes('ls-remote') ? `${localSha}\tHEAD` : fixture.exec(command, args);
  assert.equal(checkForUpdate({ configDir: fixture.configDir, exec: equal, now: 100000 }).suppressOutput, true);
  const ahead = (command, args) => args.includes('merge-base') ? '' : fixture.exec(command, args);
  assert.equal(checkForUpdate({ configDir: fixture.configDir, exec: ahead, now: 999999999 }).suppressOutput, true);
});

test('fork setup registers its own hook idempotently without altering upstream hooks or unrelated settings', async t => {
  const base = await fs.mkdtemp(path.join(os.tmpdir(), 'sangse-setup-'));
  t.after(() => fs.rm(base, { recursive: true, force: true }));
  const configDir = path.join(base, 'config');
  await fs.mkdir(configDir);
  const settingsPath = path.join(configDir, 'settings.json');
  const upstreamHook = { matcher: '*', hooks: [{ type: 'command', command: 'node upstream/gptaku-update-check.cjs' }] };
  const settings = { permissions: { allow: ['Read'] }, hooks: { SessionStart: [upstreamHook] } };
  await fs.writeFile(settingsPath, JSON.stringify(settings));
  const script = fileURLToPath(new URL('../setup/setup.sh', import.meta.url));
  const bash = process.platform === 'win32' ? 'C:/Program Files/Git/bin/bash.exe' : 'bash';
  const env = { ...process.env, CLAUDE_CONFIG_DIR: configDir, SANGSE_SETUP_STATE_DIR: path.join(base, 'state') };
  execFileSync(bash, [script], { env, timeout: 10000, stdio: 'pipe' });
  const once = JSON.parse(await fs.readFile(settingsPath, 'utf8'));
  assert.deepEqual(once.permissions, settings.permissions);
  assert.deepEqual(once.hooks.SessionStart[0], upstreamHook);
  assert.equal(once.hooks.SessionStart.length, 2);
  assert.match(once.hooks.SessionStart[1].hooks[0].command, /contentscoin-update-check\.cjs/);
  assert.equal(await fs.readFile(path.join(configDir, 'scripts/contentscoin-update-check.cjs'), 'utf8'), await read('setup/contentscoin-update-check.cjs'));
  execFileSync(bash, [script], { env, timeout: 10000, stdio: 'pipe' });
  assert.deepEqual(JSON.parse(await fs.readFile(settingsPath, 'utf8')), once);
});

test('fresh hook registration works and malformed settings are preserved rather than overwritten', async t => {
  const base = await fs.mkdtemp(path.join(os.tmpdir(), 'sangse-setup-first-'));
  t.after(() => fs.rm(base, { recursive: true, force: true }));
  const script = fileURLToPath(new URL('../setup/setup.sh', import.meta.url));
  const bash = process.platform === 'win32' ? 'C:/Program Files/Git/bin/bash.exe' : 'bash';
  for (const [label, contents] of [['fresh', '{}'], ['broken', '{ // existing JSONC must survive']]) {
    const configDir = path.join(base, label);
    await fs.mkdir(configDir);
    const settings = path.join(configDir, 'settings.json');
    await fs.writeFile(settings, contents);
    const env = { ...process.env, CLAUDE_CONFIG_DIR: configDir, SANGSE_SETUP_STATE_DIR: path.join(base, `${label}-state`) };
    execFileSync(bash, [script], { env, timeout: 10000, stdio: 'pipe' });
    const after = await fs.readFile(settings, 'utf8');
    if (label === 'fresh') assert.match(JSON.parse(after).hooks.SessionStart[0].hooks[0].command, /contentscoin-update-check/);
    else assert.equal(after, contents);
  }
});
