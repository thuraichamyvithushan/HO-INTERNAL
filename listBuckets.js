const { Storage } = require('@google-cloud/storage');
const storage = new Storage({
    keyFilename: './serviceAccountKey.json',
    projectId: 'huntsman-optics'
});

async function listBuckets() {
    try {
        const [buckets] = await storage.getBuckets();
        console.log('Buckets:');
        buckets.forEach(bucket => {
            console.log(bucket.name);
        });

        // As a fallback, try to get the metadata of the explicit bucket
        try {
            const [metadata] = await storage.bucket('huntsman-optics.firebasestorage.app').getMetadata();
            console.log("Metadata for huntsman-optics.firebasestorage.app:", metadata.name);
        } catch (e) {
            console.log("Error fetching metadata for .firebasestorage.app:", e.message);
        }

    } catch (err) {
        console.error('ERROR:', err);
    }
}
listBuckets();
