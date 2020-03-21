const express = require("express");
const router = express.Router();
const m = require('./scenarios');

router.get('/:category', (req, res) => {
    let catArray = m.generateBinary(req.params.category)
    res.json(catArray);
})

module.exports = router;