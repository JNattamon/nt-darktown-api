const functions = require('firebase-functions');
const account_route = require('./route/account');
const port = 3000;

require('dotenv').config({ path: '.env.development' });

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started

exports.account = functions.https.onRequest(account_route);

// account_route.listen(port, () => {
//     console.log(`Listening at http://localhost:${port}`);
// });