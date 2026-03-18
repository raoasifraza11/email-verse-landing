#!/usr/bin/env bash
# One-time local bootstrap for the EmailVerse blog/admin stack.
# - Logs into gcloud (if needed)
# - Ensures ADC and project ID
# - Generates .env from gcloud/Firebase
# - Grants Firebase admin claim to a user
#
# Usage (recommended):
#   cd /Users/raoasifraza/code/clients/email-verse-landing
#   ADMIN_EMAIL=admin@example.com ./scripts/bootstrap-local.sh
#
# You must have:
# - gcloud CLI installed
# - firebase-tools optional (for auto-filling NEXT_PUBLIC_FIREBASE_* in .env)

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
cd "$ROOT_DIR"

echo "=== EmailVerse local bootstrap ==="

if ! command -v gcloud &>/dev/null; then
  echo "Error: gcloud CLI not found. Install from https://cloud.google.com/sdk/docs/install"
  exit 1
fi

echo ""
echo "-> Ensuring gcloud user login..."
gcloud auth list --quiet &>/dev/null || gcloud auth login

echo ""
echo "-> Ensuring Application Default Credentials (ADC)..."
gcloud auth application-default print-access-token &>/dev/null || gcloud auth application-default login

PROJECT_ID="${GCP_PROJECT_ID:-$(gcloud config get-value project 2>/dev/null || true)}"
if [ -z "$PROJECT_ID" ] || [ "$PROJECT_ID" = "(unset)" ]; then
  echo "Error: No GCP project configured."
  echo "Run: gcloud config set project YOUR_PROJECT_ID"
  exit 1
fi

echo "Using GCP project: $PROJECT_ID"

echo ""
echo "-> Enabling required APIs (idempotent)..."
gcloud services enable \
  firestore.googleapis.com \
  storage.googleapis.com \
  identitytoolkit.googleapis.com \
  run.googleapis.com \
  artifactregistry.googleapis.com \
  cloudbuild.googleapis.com \
  firebase.googleapis.com >/dev/null

export GCP_PROJECT_ID="$PROJECT_ID"
export GOOGLE_CLOUD_PROJECT="$PROJECT_ID"

echo ""
echo "-> Generating .env from gcloud/Firebase..."
chmod +x "$SCRIPT_DIR/generate-env.sh"
"$SCRIPT_DIR/generate-env.sh"

echo ""
echo "-> Fetching Firebase Web config (apiKey) into .env..."
if command -v firebase &>/dev/null && chmod +x "$SCRIPT_DIR/fetch-firebase-web-config.sh" 2>/dev/null; then
  "$SCRIPT_DIR/fetch-firebase-web-config.sh" 2>/dev/null || echo "   (Skip: run 'make firebase-login' then 'make firebase-env' to fill NEXT_PUBLIC_FIREBASE_API_KEY)"
else
  echo "   (Skip: install firebase-tools and run 'make firebase-login' then 'make firebase-env')"
fi

echo ""
ADMIN_EMAIL="${ADMIN_EMAIL:-}"
if [ -z "$ADMIN_EMAIL" ]; then
  read -rp "Enter Firebase admin user email (will be created if missing): " ADMIN_EMAIL
fi

if [ -z "$ADMIN_EMAIL" ]; then
  echo "No ADMIN_EMAIL provided, skipping admin claim. You can run later, for example:"
  echo "  ADMIN_EMAIL=you@example.com ADMIN_PASSWORD='Admin12345!' node scripts/set-admin.js you@example.com"
else
  # Default local admin password if not provided
  ADMIN_PASSWORD="${ADMIN_PASSWORD:-Admin12345!}"
  export ADMIN_PASSWORD

  echo ""
  echo "-> Granting Firebase admin claim to $ADMIN_EMAIL ..."
  echo "   (User will be auto-created if missing, with password: ${ADMIN_PASSWORD})"
  node "$SCRIPT_DIR/set-admin.js" "$ADMIN_EMAIL" || {
    echo ""
    echo "NOTE: Ensure this project matches your Firebase project ('$PROJECT_ID')."
    exit 1
  }
fi

echo ""
echo "=== Bootstrap complete ==="
echo "Next steps:"
echo "  1) If login still says 'Firebase is not configured', run: make firebase-login   then   make firebase-env"
echo "  2) npm install"
echo "  3) npm run dev"
echo "  4) Visit http://localhost:3000/admin/login and log in with the admin user."

