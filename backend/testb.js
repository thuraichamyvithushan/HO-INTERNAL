const admin = require('firebase-admin');
const key = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(key)
});

async function testBucket(name) {
    try {
        const bucket = admin.storage().bucket(name);
        const [exists] = await bucket.exists();
        console.log(`Bucket ${name} exists: ${exists}`);
    } catch (e) {
        console.error(`Bucket ${name} test failed:`, e.message);
    }
}

async function run() {
    await testBucket('huntsman-optics.appspot.com');
    await testBucket('huntsman-optics.firebasestorage.app');
    process.exit();
}

run();
