#!/usr/bin/env bash
# Fetch Firebase web app config (apiKey, authDomain, projectId) and write to .env.
# Uses Firebase Management REST API + gcloud auth.
# If the GCP project is not yet a Firebase project, adds Firebase and creates a Web app via API.
# Usage: ./scripts/fetch-firebase-web-config.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
cd "$ROOT_DIR"

PROJECT_ID="${GCP_PROJECT_ID:-${GOOGLE_CLOUD_PROJECT:-}}"
if [ -z "$PROJECT_ID" ]; then
  if command -v gcloud &>/dev/null; then
    PROJECT_ID=$(gcloud config get-value project 2>/dev/null || true)
  fi
fi
if [ -z "$PROJECT_ID" ] || [ "$PROJECT_ID" = "(unset)" ]; then
  echo "Error: Set GCP_PROJECT_ID or run: gcloud config set project YOUR_PROJECT_ID"
  exit 1
fi

if ! command -v gcloud &>/dev/null; then
  echo "Error: gcloud CLI not found. Run: make auth"
  exit 1
fi

TOKEN=$(gcloud auth application-default print-access-token 2>/dev/null || true)
if [ -z "$TOKEN" ]; then
  echo "Error: Run 'make auth' or 'gcloud auth application-default login' first."
  exit 1
fi

echo "Using project: $PROJECT_ID"

# Enable Firebase Management API and Identity Toolkit (Auth) from CLI (idempotent)
echo "Enabling Firebase Management API..."
gcloud services enable firebase.googleapis.com --project="$PROJECT_ID" >/dev/null 2>&1 || true
echo "Enabling Identity Toolkit (Auth) API..."
gcloud services enable identitytoolkit.googleapis.com --project="$PROJECT_ID" >/dev/null 2>&1 || true

# Helper: poll Operation until done (max 5 min)
wait_operation() {
  local OP_NAME="$1"
  local OP_URL="https://firebase.googleapis.com/v1beta1/${OP_NAME}"
  local i=0
  local max=60
  while [ $i -lt $max ]; do
    local OP_JSON
    OP_JSON=$(curl -sS -H "Authorization: Bearer $TOKEN" "$OP_URL" 2>/dev/null || true)
    if echo "$OP_JSON" | grep -q '"done":\s*true'; then
      if echo "$OP_JSON" | grep -q '"error"'; then
        echo "Operation failed: $OP_JSON" >&2
        return 1
      fi
      return 0
    fi
    sleep 5
    i=$((i + 1))
  done
  echo "Operation timed out." >&2
  return 1
}

# Step 1: List web apps
LIST_URL="https://firebase.googleapis.com/v1beta1/projects/${PROJECT_ID}/webApps"
HTTP_CODE=$(curl -sS -o /tmp/firebase-list.json -w "%{http_code}" -H "Authorization: Bearer $TOKEN" "$LIST_URL" 2>/dev/null || echo "000")
LIST_JSON=$(cat /tmp/firebase-list.json 2>/dev/null || true)

# Step 2: If 404 "Firebase project not found", add Firebase via API
if [ "$HTTP_CODE" = "404" ] && echo "$LIST_JSON" | grep -q "not found"; then
  echo "Adding Firebase to this GCP project (via API)..."
  ADD_RESP=$(curl -sS -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
    -d '{}' "https://firebase.googleapis.com/v1beta1/projects/${PROJECT_ID}:addFirebase" 2>/dev/null || true)
  if echo "$ADD_RESP" | grep -q '"name"'; then
    OP_NAME=$(echo "$ADD_RESP" | node -e "let d=JSON.parse(require('fs').readFileSync(0,'utf8')); console.log(d.name||'');" 2>/dev/null)
    if [ -n "$OP_NAME" ]; then
      echo "Waiting for Firebase provisioning..."
      wait_operation "$OP_NAME" || { echo "addFirebase failed."; exit 1; }
      echo "Firebase added."
    fi
  else
    echo "addFirebase response: $ADD_RESP" >&2
    exit 1
  fi
  # Re-fetch list
  HTTP_CODE=$(curl -sS -o /tmp/firebase-list.json -w "%{http_code}" -H "Authorization: Bearer $TOKEN" "$LIST_URL" 2>/dev/null || echo "000")
  LIST_JSON=$(cat /tmp/firebase-list.json 2>/dev/null || true)
fi

# Step 2b: Initialize Auth first (required so config exists; fixes auth/configuration-not-found)
echo "Initializing Firebase Auth (Identity Platform)..."
INIT_AUTH_RESP=$(curl -sS -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d '{}' "https://identitytoolkit.googleapis.com/v2/projects/${PROJECT_ID}/identityPlatform:initializeAuth" 2>/dev/null || true)
if echo "$INIT_AUTH_RESP" | grep -q '"error"'; then
  if ! echo "$INIT_AUTH_RESP" | grep -qE 'ALREADY_EXISTS|409|already exists'; then
    echo "   Note: $INIT_AUTH_RESP"
  fi
fi

echo "Enabling Email/Password sign-in..."
AUTH_CONFIG_RESP=$(curl -sS -X PATCH -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  "https://identitytoolkit.googleapis.com/admin/v2/projects/${PROJECT_ID}/config?updateMask=signIn.email" \
  -d '{"signIn":{"email":{"enabled":true,"passwordRequired":true}}}' 2>/dev/null || true)
if echo "$AUTH_CONFIG_RESP" | grep -q '"error"'; then
  echo "   Note: $AUTH_CONFIG_RESP"
elif ! echo "$AUTH_CONFIG_RESP" | grep -q '"enabled"'; then
  echo "   (Auth may already be set; try logging in)"
fi

# Step 3: If 200 but no web app, create one via API
APP_NAME=""
if [ "$HTTP_CODE" = "200" ] && [ -n "$LIST_JSON" ]; then
  APP_NAME=$(echo "$LIST_JSON" | node -e "
    let d;
    try { d = JSON.parse(require('fs').readFileSync(0, 'utf8')); } catch (_) { process.exit(1); }
    const apps = d.apps || [];
    const web = apps.find(a => (a.platform || '').toLowerCase() === 'web') || apps[0];
    if (web && web.name) console.log(web.name);
  " 2>/dev/null)
fi

if [ -z "$APP_NAME" ] && [ "$HTTP_CODE" = "200" ]; then
  echo "Creating Firebase Web app (via API)..."
  CREATE_RESP=$(curl -sS -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
    -d '{"displayName":"EmailVerse Web"}' "https://firebase.googleapis.com/v1beta1/projects/${PROJECT_ID}/webApps" 2>/dev/null || true)
  if echo "$CREATE_RESP" | grep -q '"name"'; then
    OP_NAME=$(echo "$CREATE_RESP" | node -e "let d=JSON.parse(require('fs').readFileSync(0,'utf8')); console.log(d.name||'');" 2>/dev/null)
    if [ -n "$OP_NAME" ]; then
      echo "Waiting for Web app creation..."
      wait_operation "$OP_NAME" || { echo "webApps.create failed."; exit 1; }
      echo "Web app created."
    fi
  fi
  # Re-fetch list
  HTTP_CODE=$(curl -sS -o /tmp/firebase-list.json -w "%{http_code}" -H "Authorization: Bearer $TOKEN" "$LIST_URL" 2>/dev/null || echo "000")
  LIST_JSON=$(cat /tmp/firebase-list.json 2>/dev/null || true)
  APP_NAME=$(echo "$LIST_JSON" | node -e "
    let d;
    try { d = JSON.parse(require('fs').readFileSync(0, 'utf8')); } catch (_) { process.exit(1); }
    const apps = d.apps || [];
    const web = apps.find(a => (a.platform || '').toLowerCase() === 'web') || apps[0];
    if (web && web.name) console.log(web.name);
  " 2>/dev/null)
fi

# Step 4: Require success and at least one web app
if [ "$HTTP_CODE" != "200" ] || [ -z "$LIST_JSON" ]; then
  echo "Error: Could not list Firebase web apps (HTTP $HTTP_CODE)."
  [ -n "$LIST_JSON" ] && echo "Response: $LIST_JSON"
  exit 1
fi

if [ -z "$APP_NAME" ]; then
  echo "Error: No web app found after setup. Response: $LIST_JSON"
  exit 1
fi

# Step 5: Get web app config
CONFIG_URL="https://firebase.googleapis.com/v1beta1/${APP_NAME}/config"
CONFIG_JSON=$(curl -sS -H "Authorization: Bearer $TOKEN" "$CONFIG_URL" 2>/dev/null || true)

if [ -z "$CONFIG_JSON" ] || echo "$CONFIG_JSON" | grep -q '"error"'; then
  echo "Error: Could not fetch web app config. Check API access."
  exit 1
fi

echo "$CONFIG_JSON" | node -e "
  let d;
  try { d = JSON.parse(require('fs').readFileSync(0, 'utf8')); } catch (_) { process.exit(1); }
  console.log(JSON.stringify({
    apiKey: d.apiKey,
    authDomain: d.authDomain,
    projectId: d.projectId
  }));
" | node "$SCRIPT_DIR/update-env-firebase.js"

echo "Done. Restart 'npm run dev' if it is running."
