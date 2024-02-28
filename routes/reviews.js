const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

// POST review for food item
router.post('/meal/:id/reviews', reviewsCtrl.create);

module.exports = router;