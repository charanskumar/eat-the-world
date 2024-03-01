var express = require("express");
var router = express.Router();
const foodCtrl = require("../controllers/foodItems");
const Item = require("../models/item");
const mongoose = require("mongoose");

router.get("/region/:strArea", async (req, res) => {
  const { strArea } = req.params;
  console.log("Router Str: ", strArea);
  try {
    const areaFoods = await foodCtrl.fetchFoodByArea(strArea);
    res.render(`cuisine/index`, { areaFoods, cuisine: strArea });
  } catch (error) {
    console.error(error);
  }
});

router.get("/meal/:idMeal", async (req, res) => {
  const { idMeal } = req.params;
  try {
    let item = await Item.findOne({ idMeal });
    const foodItem = await foodCtrl.fetchFoodId(idMeal);
    if (!item) {
      item = new Item({
        _id: new mongoose.Types.ObjectId(),
        name: foodItem.meals[0].strMeal,
        idMeal: foodItem.meals[0].idMeal,
        ingredients: `${foodItem.meals[0].strIngredient1}, ${foodItem.meals[0].strIngredient2}, ${foodItem.meals[0].strIngredient3}, ${foodItem.meals[0].strIngredient4}, ${foodItem.meals[0].strIngredient5}`,
      });
      await item.save();
    }
    console.log(item.idMeal);
    console.log(item._id);
    res.render("cuisine/singleMeal", { foodItem, item });
  } catch (error) {
    console.error(error);
  }
});

router.get("/regions", async (req, res) => {
  try {
    const areaList = await foodCtrl.fetchAreaList();
    console.log("Router: ", areaList);
    res.render("region/index", { areaList });
  } catch (error) {
    console.error(error);
  }
});

router.get("/category/:strCategory", async (req, res) => {
  const { strCategory } = req.params;
  console.log("Router Str: ", strCategory);
  try {
    const catFoods = await foodCtrl.fetchFoodByCategory(strCategory);
    res.render(`cuisine/mealByCat`, { catFoods, category: strCategory });
  } catch (error) {
    console.error(error);
  }
});

router.get("/category", async (req, res) => {
  try {
    const categoryList = await foodCtrl.fetchCategoryList();
    console.log("Router: ", categoryList);
    res.render("categories/index", { categoryList });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
