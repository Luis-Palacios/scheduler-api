var express = require('express');
const db = require('../data/models').sequelize;
var router = express.Router();

router.get('/', (req, res, next) => { 
    db.authenticate();
    res.json([{
        startTime: new Date(),
    }])
});

module.exports = router;