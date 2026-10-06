#!/usr/bin/env node
/** Optional local bridge. Existing sangse scripts remain the default path. */
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawnSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

const actions = { import: 'import-sangse.mjs', 'convert-jobs': 'convert-legacy-jobs.mjs', plan: 'compile-page-plan.mjs' };

export const bridgeCompatibility = Object.freeze({ wadiz: '0.3.x', schema_version: 1, node: '>=20.9.0' });

export function assertBridgeRuntime(nodeVersion = process.versions.node) {
  const match = /^(\d+)\.(\d+)\.(\d+)$/.exec(nodeVersion);
  if (!match || Number(match[1]) < 20 || (Number(match[1]) === 20 && Number(match[2]) < 9)) {
    throw new Error(`Wadiz bridge requires Node >=20.9.0; current version is ${nodeVersion}. No production command was started.`);
  }
}

export function checkWadizRelease(skillDirectory) {
  const releaseFile = path.join(skillDirectory, 'release.json');
  let release;
  try { release = JSON.parse(fs.readFileSync(releaseFile, 'utf8')); }
  catch { throw new Error(`Wadiz release metadata is missing or invalid: ${releaseFile}. Install the verified Wadiz v0.3.0 release; no legacy fallback is allowed.`); }
  if (release.name !== 'wadiz-detail-page-production' || !/^0\.3\.\d+$/.test(release.version ?? '') || release.schema_version !== 1) {
    throw new Error(`Unsupported Wadiz release: ${release.name ?? 'unknown'} ${release.version ?? 'unknown'}, schema ${release.schema_version ?? 'unknown'}. This bridge supports stable Wadiz 0.3.x / schema 1 only. Install v0.3.0 or explicitly upgrade and re-test the bridge.`);
  }
  return release;
}

export function resolveWadizScript(skillRoot, action, { nodeVersion = process.versions.node } = {}) {
  const filename = actions[action];
  if (!filename) throw new Error(`Unknown bridge action: ${action}`);
  assertBridgeRuntime(nodeVersion);
  const root = path.resolve(skillRoot);
  const candidates = [path.join(root, 'scripts', filename), path.join(root, 'wadiz-detail-page-production', 'scripts', filename), path.join(root, 'skills', 'wadiz-detail-page-production', 'scripts', filename)];
  const match = candidates.find(candidate => fs.existsSync(candidate) && fs.statSync(candidate).isFile());
  if (!match) throw new Error(`Wadiz script ${filename} not found under ${root}. Set --wadiz-skill to the installed skill folder.`);
  checkWadizRelease(path.dirname(path.dirname(match)));
  return match;
}

export function bridgeCommand(argv, env = process.env) {
  const args = [...argv];
  const action = args.shift();
  let root = env.WADIZ_SKILL_ROOT;
  const index = args.indexOf('--wadiz-skill');
  if (index >= 0) {
    if (!args[index + 1] || args[index + 1].startsWith('--')) throw new Error('--wadiz-skill requires a directory.');
    root = args[index + 1];
    args.splice(index, 2);
  }
  root ??= path.join(env.CODEX_HOME ?? path.join(os.homedir(), '.codex'), 'skills', 'wadiz-detail-page-production');
  return { command: process.execPath, args: [resolveWadizScript(root, action), ...args], action };
}

export function main(argv) {
  if (!argv.length || argv[0] === '--help' || argv[0] === 'help') {
    console.log('Usage: node wadiz-bridge.mjs import <sangse-project> --out <new-dir> [--category <id>] [--topic <id>] [--wadiz-skill <folder>]\n       node wadiz-bridge.mjs convert-jobs <legacy.json> --out <new.json> [--backend codex_native|ima2] [--wadiz-skill <folder>]\n       node wadiz-bridge.mjs plan <product-brief.json> --out <new-dir> [--style <id>] [--wadiz-skill <folder>]\nWadiz is resolved from --wadiz-skill, WADIZ_SKILL_ROOT, or CODEX_HOME/skills/wadiz-detail-page-production. Preflight requires stable Wadiz 0.3.x with release.json schema_version 1 and Node >=20.9.0. These commands do not generate images or install dependencies.');
    return 0;
  }
  const command = bridgeCommand(argv);
  const child = spawnSync(command.command, command.args, { stdio: 'inherit', shell: false });
  if (child.error) throw child.error;
  if (child.signal) throw new Error(`Wadiz command terminated with ${child.signal}.`);
  return child.status ?? 1;
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try { process.exitCode = main(process.argv.slice(2)); }
  catch (error) { console.error(error.message); process.exitCode = 1; }
}
