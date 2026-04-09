const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'huntsman-optics.appspot.com'
});

const corsConfiguration = [
    {
        maxAgeSeconds: 3600,
        method: ['GET', 'PUT', 'POST', 'DELETE', 'HEAD', 'OPTIONS'],
        origin: ['*'],
        responseHeader: ['*'],
    },
];

async function configureCors() {
    try {
        const bucket = admin.storage().bucket();
        await bucket.setCorsConfiguration(corsConfiguration);
        console.log(`CORS applied to ${bucket.name} successfully!`);
    } catch (err) {
        console.error('Failed to apply CORS:', err.message);
    }
}

configureCors();
