const express = require("express");
const router = express.Router();
const scenario = require('./scenarios');

router.get('/:category', (req, res) => {
    res.send([scenario]);
})



module.exports = router;