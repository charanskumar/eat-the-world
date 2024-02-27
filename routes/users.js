var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render("entrees", { title: "Eat the World" });
});

module.exports = router;
