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
//....


//const {isMeal} = req.param,//handel id coming from my DB

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

module.exports = router;
