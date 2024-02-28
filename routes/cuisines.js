var express = require("express");
var router = express.Router();
const cuisinesCtrl = require('../controllers/cuisines');

// GET cuisine's Main Page
router.get('/:id', cuisinesCtrl.index);

// GET cuisine/:id subCuisins
router.get('/:id/show', cuisinesCtrl.show);

//GET

module.exports = router;