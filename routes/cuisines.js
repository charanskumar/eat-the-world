var express = require("express");
var router = express.Router();
const cuisinesCtrl = require('../controllers/cuisines');

// GET cuisine's Main Page
router.get('/:id', cuisinesCtrl.index);

module.exports = router;