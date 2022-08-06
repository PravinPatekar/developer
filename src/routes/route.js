const express = require('express');

const router = express.Router();
const logger =require('../logger/logger.js')
const helper =require('../util/helper.js')
const formatter =require('../validator/formatter.js')

router.get('/test-me', function (req, res) {
logger.message()
helper.printDate()
helper.printMonth()
helper.printBatchInfo()
formatter.trim()
formatter.LowerCase()
formatter.UpperCase()
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason