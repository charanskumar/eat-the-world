const cuisineCatCards = require('../categoryCards');
const cuisineCardsInfo = require('../categoryCards');
module.exports = {
    index,
    show,
}
function index(req, res) {
    const cuisine = req.params.id;
    const foodCategories = cuisineCatCards[cuisine];
    res.render('cuisine/index', {cuisine: cuisine, foodCategories: foodCategories});
    console.log(foodCategories)
}
function show(req, res){
    const cuisine = req.params.id;
        res.render("cuisine/show", { title: "Eat the World" });}

     