/**
 * Script to set admin custom claim on a Firebase user
 * 
 * Usage:
 *   node scripts/set-admin.js <user-email>
 * 
 * Requires:
 *   - GOOGLE_APPLICATION_CREDENTIALS environment variable pointing to service account key
 *   - Or run with gcloud auth application-default login
 */

const admin = require('firebase-admin');

// Initialize Firebase Admin
// This will use Application Default Credentials from GCP
if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
}

async function setAdminClaim(email) {
  try {
    // Get user by email
    const user = await admin.auth().getUserByEmail(email);
    
    console.log(`Found user: ${user.email} (UID: ${user.uid})`);
    
    // Set admin custom claim
    await admin.auth().setCustomUserClaims(user.uid, { admin: true });
    
    console.log(`✅ Admin claim set successfully for ${email}`);
    console.log('\nNote: User may need to sign out and sign back in for changes to take effect.');
    
    process.exit(0);
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      console.error(`❌ User with email ${email} not found.`);
      console.error('Please create the user in Firebase Console > Authentication > Users first.');
    } else {
      console.error('❌ Error setting admin claim:', error.message);
    }
    process.exit(1);
  }
}

// Get email from command line arguments
const email = process.argv[2];

if (!email) {
  console.error('Usage: node scripts/set-admin.js <user-email>');
  console.error('Example: node scripts/set-admin.js admin@example.com');
  process.exit(1);
}

setAdminClaim(email);

