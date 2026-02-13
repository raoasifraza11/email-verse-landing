import admin from 'firebase-admin';

// Initialize Firebase Admin
// In production, this will use Application Default Credentials from GCP
let app: admin.app.App | null = null;

export function getAuth(): admin.auth.Auth {
  if (!app) {
    // Check if already initialized
    if (admin.apps.length === 0) {
      // Initialize with default credentials
      // For Cloud Run, this will automatically use the service account
      app = admin.initializeApp({
        credential: admin.credential.applicationDefault(),
        projectId: process.env.GCP_PROJECT_ID || process.env.GOOGLE_CLOUD_PROJECT,
      });
    } else {
      app = admin.app();
    }
  }
  return app.auth();
}

// Verify ID token from client
export async function verifyIdToken(idToken: string): Promise<admin.auth.DecodedIdToken> {
  const auth = getAuth();
  return await auth.verifyIdToken(idToken);
}

// Check if user is admin
export async function isAdmin(uid: string): Promise<boolean> {
  const auth = getAuth();
  const user = await auth.getUser(uid);
  // Check custom claims for admin role
  return user.customClaims?.admin === true;
}

