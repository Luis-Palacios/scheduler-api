var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => { 
    res.json([{
        startTime: new Date(),
    }])
});

module.exports = router;