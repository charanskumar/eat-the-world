var express = require("express");
var router = express.Router();
const foodCtrl = require("../controllers/foodItems");

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
    const foodItem = await foodCtrl.fetchFoodId(idMeal);
    res.render("cuisine/singleMeal", { foodItem });
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
    const areaFoods = await foodCtrl.fetchFoodByCategory(strCategory);
    res.render(`category/index`, { areaFoods, cuisine: strCategory });
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
