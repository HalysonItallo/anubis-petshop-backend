import * as admin from 'firebase-admin';

var serviceAccount = require("../../../../anubisApp-Anubis-admin.json")

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

export const db = admin.firestore();
