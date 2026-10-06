#!/usr/bin/env node
'use strict';
/* contentscoin/sangse fork notifier, MIT.
 * Based on the update-cache/ancestry approach in fivetaku/gptaku_plugins.
 * The upstream shared gptaku-update-check.cjs is preserved unchanged.
 * Read-only Git inspection: never fetch, pull, install, or change settings.
 */
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { execFileSync } = require('node:child_process');

const MARKETPLACE_NAME = 'contentscoin-sangse';
const REPOSITORY = 'https://github.com/contentscoin/sangse';
const CACHE_MS = 24 * 60 * 60 * 1000;
const silent = () => ({ continue: true, suppressOutput: true });
const shaPattern = /^[a-f0-9]{40}$/i;

function isForkRemote(remote) {
  return /^(?:https:\/\/github\.com\/|git@github\.com:|ssh:\/\/git@github\.com\/)contentscoin\/sangse(?:\.git)?\/?$/i.test(remote);
}

function checkForUpdate({ configDir = process.env.CLAUDE_CONFIG_DIR || path.join(os.homedir(), '.claude'), exec = execFileSync, now = Date.now() } = {}) {
  const marketplace = path.join(configDir, 'plugins', 'marketplaces', MARKETPLACE_NAME);
  if (!fs.existsSync(path.join(marketplace, '.git'))) return silent();
  const git = args => exec('git', ['-C', marketplace, ...args], { encoding: 'utf8', timeout: 1000, stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  try {
    // Never advertise a fork update for an unrelated or upstream marketplace.
    const origin = git(['remote', 'get-url', 'origin']);
    if (!isForkRemote(origin)) return silent();
    const localSha = git(['rev-parse', 'HEAD']);
    if (!shaPattern.test(localSha)) return silent();
    const cacheFile = path.join(configDir, '.contentscoin-sangse-update', 'check-cache.json');
    let cache;
    try { cache = JSON.parse(fs.readFileSync(cacheFile, 'utf8')); } catch {}
    let remoteSha = cache?.repository === REPOSITORY && cache.localSha === localSha && Number.isFinite(cache.timestamp) && now >= cache.timestamp && now - cache.timestamp < CACHE_MS && shaPattern.test(cache.remoteSha) ? cache.remoteSha : '';
    if (!remoteSha) {
      remoteSha = git(['ls-remote', 'origin', 'HEAD']).split(/\s+/)[0];
      if (!shaPattern.test(remoteSha)) return silent();
      try {
        fs.mkdirSync(path.dirname(cacheFile), { recursive: true });
        fs.writeFileSync(cacheFile, JSON.stringify({ repository: REPOSITORY, timestamp: now, localSha, remoteSha }));
      } catch {}
    }
    if (localSha === remoteSha) return silent();
    try {
      git(['merge-base', '--is-ancestor', remoteSha, localSha]);
      return silent(); // An ahead-of-remote checkout does not need an update.
    } catch (error) {
      // Missing remote objects are expected in shallow marketplace clones.
      // This is an update notice, not a claim that a remote release passed QA.
      if (error?.code === 'ETIMEDOUT') return silent();
    }
    return {
      continue: true,
      hookSpecificOutput: {
        hookEventName: 'SessionStart',
        additionalContext: `[sangse 포크 업데이트 있음] ${REPOSITORY}에 새 커밋이 있습니다 (${localSha.slice(0, 7)} → ${remoteSha.slice(0, 7)}). /plugin marketplace update ${MARKETPLACE_NAME} 후 /plugin update sangse@${MARKETPLACE_NAME}를 실행하고 재시작하세요. 이 알림은 자동 설치하지 않으며 Wadiz 설치는 별도입니다.`,
      },
    };
  } catch { return silent(); }
}

module.exports = { checkForUpdate, isForkRemote, MARKETPLACE_NAME, REPOSITORY };
if (require.main === module) {
  try { process.stdout.write(JSON.stringify(checkForUpdate())); }
  catch { process.stdout.write(JSON.stringify(silent())); }
}
