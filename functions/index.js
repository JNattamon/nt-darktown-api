const functions = require('firebase-functions');
const accountRoute = require('./route/account');

require('dotenv').config({ path: '.env.development' });

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started

exports.account = functions.https.onRequest(accountRoute);