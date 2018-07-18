var express = require('express');
var router = express.Router();

router.post('/api/add-scorecard', (req, res) => {
    var info = req.body;
    res.json(info);
});