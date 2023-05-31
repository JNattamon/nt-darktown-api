const response = require('../shared/response');
const AccountService = require('../service/account');
const bodyParser = require('body-parser')
const express = require('express')

const router = express();
router.use(bodyParser.json())
router.get('/', function (req, res) {
    var result = new response()
    res.contentType('application/json');
    res.send(result)
});

router.get('/character-detail', async function (req, res) {
    let result = await AccountService.getDetail(req.query.code)
    res.contentType('application/json');
    res.send(result)
});

router.get('/character-list', async function (req, res) {
    let result = await AccountService.getCharacterlist()
    res.contentType('application/json');
    res.send(result)
});

router.post('/create-character', async function (req, res) {
    let create_result = await AccountService.createCharacter(req.body)
    res.contentType('application/json');
    res.send(create_result)
});

router.delete('/delete-character', async function (req, res) {
    let delete_result = await AccountService.deleteCharacter(req.query.code)
    res.contentType('application/json');
    res.send(delete_result)
});

module.exports = router