var express = require("express");
var router = express.Router();
const foodCtrl = require("../controllers/items");
const Item = require('../models/item');
const mongoose = require('mongoose');

router.get("/region/:strArea", async (req, res) => {
  const { strArea } = req.params;
  //console.log("Router Str: ", strArea);
  try {
    const areaFoods = await foodCtrl.fetchFoodByArea(strArea);
    res.render(`cuisine/index`, { areaFoods, cuisine: strArea });
  } catch (error) {
    console.error(error);
  }
});

router.get("/meal/:idMeal", async (req, res) => {
  const { idMeal } = req.params;
  //console.log(idMeal);
  //const item = await Item.find({idMeal:idMeal});
  //const savedItem = await item.save();
  try {
    let item = await Item.findOne({idMeal});
    if (!item) {
      const foodItem = await foodCtrl.fetchFoodId(idMeal);
      item = new Item({
        _id: new mongoose.Types.ObjectId(),
        name: foodItem.meals[0].strMeal,
        idMeal: foodItem.meals[0].idMeal,
        ingredients: `${foodItem.meals[0].strIngredient1}, ${foodItem.meals[0].strIngredient2}, ${foodItem.meals[0].strIngredient3}, ${foodItem.meals[0].strIngredient4}, ${foodItem.meals[0].strIngredient5}`
      });
      item = await item.save();
    }
    console.log(item.idMeal);
    console.log(item._id);
  //console.log('Item retrieved:', item);
  //const { idMeal } = req.params;
    //const foodItem = await foodCtrl.fetchFoodId(idMeal);
      res.render("cuisine/singleMeal", { /*foodItem,*/ item });
  } catch (error) {
    console.error(error);
  }
});

router.get("/regions", async (req, res) => {
  try {
    const areaList = await foodCtrl.fetchAreaList();
    //console.log("Router: ", areaList);
    res.render("region/index", { areaList });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
