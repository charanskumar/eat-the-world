const cuisineCatCards = require('../categoryCards');

function index(req, res) {
    const cuisine = req.params.id;
    const foodCategories = cuisineCatCards[cuisine];
    res.render('cuisine/index', {cuisine: cuisine, foodCategories: foodCategories});
    console.log(foodCategories)
}

module.exports = {
    index,
}