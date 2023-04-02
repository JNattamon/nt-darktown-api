const response = require('../shared/response');
const AccountService = require('../service/account');
const response_code = require('../constants/response_code');
const express = require('express')

const app = express();
app.get('/', function (req, res) {
    var result = new response()
    res.contentType('application/json');
    res.send(result)
});

app.get('/character-list', async function (req, res) {
    let data = await AccountService.getCharacterlist()
    var result = new response(response_code.SUCCESS_CODE, 'Success', data);
    res.contentType('application/json');
    res.send(result)
});

// app.post('/create-character', async function (req, res) {
//     let create_result = await AccountService.createCharacter(req.body)
//     console.log(create_result)
//     // var result = new response(response_code.SUCCESS_CODE, 'Success', data);
//     // res.contentType('application/json');
//     // res.send(result)
// });

module.exports = app