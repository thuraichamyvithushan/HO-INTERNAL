require('dotenv').config();
const admin = require('firebase-admin');

try {
    const credential = admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') : undefined,
    });

    admin.initializeApp({
        credential: credential,
        storageBucket: 'huntsman-optics.firebasestorage.app'
    });

    const bucket = admin.storage().bucket();
    // Test if we can list files (which makes an actual network call instead of just local auth)
    bucket.getFiles({ maxResults: 1 })
        .then(() => {
            console.log("STORAGE SUCCESS");
            process.exit(0);
        })
        .catch(err => {
            console.error("STORAGE ERROR:", err.message);
            process.exit(1);
        });
} catch (e) {
    console.error("INIT ERROR:", e.message);
    process.exit(1);
}
