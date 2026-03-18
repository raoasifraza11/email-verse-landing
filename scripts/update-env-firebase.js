#!/usr/bin/env node
/**
 * Update .env with Firebase client config (apiKey, authDomain, projectId).
 * Usage: node scripts/update-env-firebase.js <apiKey> <authDomain> <projectId>
 * Or pipe JSON: echo '{"apiKey":"x","authDomain":"y","projectId":"z"}' | node scripts/update-env-firebase.js
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const envPath = path.join(rootDir, '.env');

let apiKey, authDomain, projectId;

if (process.stdin.isTTY) {
  [, , apiKey, authDomain, projectId] = process.argv;
  if (!apiKey || !authDomain || !projectId) {
    console.error('Usage: node update-env-firebase.js <apiKey> <authDomain> <projectId>');
    process.exit(1);
  }
} else {
  let input = '';
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (chunk) => { input += chunk; });
  process.stdin.on('end', () => {
    try {
      const data = JSON.parse(input);
      apiKey = data.apiKey;
      authDomain = data.authDomain;
      projectId = data.projectId;
      if (!apiKey || !authDomain || !projectId) throw new Error('Missing fields');
      run();
    } catch (e) {
      console.error('Invalid JSON or missing apiKey/authDomain/projectId:', e.message);
      process.exit(1);
    }
  });
  return;
}

run();

function run() {
  const vars = {
    NEXT_PUBLIC_FIREBASE_API_KEY: apiKey,
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: authDomain,
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: projectId,
  };

  let content = '';
  if (fs.existsSync(envPath)) {
    content = fs.readFileSync(envPath, 'utf8');
  }

  const lines = content.split('\n');
  const keys = Object.keys(vars);
  const seen = new Set();
  const out = [];

  for (const line of lines) {
    let replaced = false;
    for (const key of keys) {
      if (line.startsWith(key + '=')) {
        out.push(`${key}=${vars[key]}`);
        seen.add(key);
        replaced = true;
        break;
      }
    }
    if (!replaced) out.push(line);
  }

  for (const key of keys) {
    if (!seen.has(key)) out.push(`${key}=${vars[key]}`);
  }

  fs.writeFileSync(envPath, out.join('\n') + (out[out.length - 1] === '' ? '' : '\n'));
  console.log('Updated .env with NEXT_PUBLIC_FIREBASE_* (apiKey, authDomain, projectId).');
}
