var express = require('express');
const db = require('../db2temp');
var router = express.Router();

router.get('/', (req, res, next) => { 
    db.authenticate();
    res.json([{
        startTime: new Date(),
    }])
});

module.exports = router;