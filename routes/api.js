var express = require("express");
var router = express.Router();
const foodCtrl = require("../controllers/foodItems");
const fetch = require("node-fetch");

router.get("/canada", async (req, res) => {
  try {
    const canadaFood = await foodCtrl.fetchCanada();
    res.render("canada", { canadaFood });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
