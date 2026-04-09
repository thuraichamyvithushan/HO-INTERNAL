const { google } = require('googleapis');
const key = require('./serviceAccountKey.json');

async function testStorage() {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: key,
            scopes: ['https://www.googleapis.com/auth/cloud-platform']
        });

        const client = await auth.getClient();
        const projectId = await auth.getProjectId();

        console.log('Project ID:', projectId);

        // List buckets using REST
        const res = await client.request({
            url: `https://storage.googleapis.com/storage/v1/b?project=${projectId}`
        });

        console.log('--- BUCKETS IN PROJECT ---');
        if (res.data.items && res.data.items.length > 0) {
            res.data.items.forEach(b => console.log(b.name));
        } else {
            console.log('NO BUCKETS FOUND FOR THIS SERVICE ACCOUNT.');
        }
        console.log('--------------------------');

    } catch (error) {
        console.error('Diagnostic error:', error.message);
    }
}

testStorage();
