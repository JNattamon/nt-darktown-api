const express = require('express')
const accountRoute = require('./route/account');
const port = 3000;

require('dotenv').config({ path: '.env.development' });

const app = express();
app.use('/account', accountRoute);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});