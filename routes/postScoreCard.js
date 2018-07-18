var express = require('express');
var router = express.Router();

router.post('/api/add-scorecard', (req, res) => {
    // res.json(req.body);
    console.log(req.body);
});

module.exports = router;