const express = require('express');
const router = express.Router();
const searchController = require('../controllers/search');

// POST /search
router.git('/meal/:name/search', searchController.show);


module.exports = router;
