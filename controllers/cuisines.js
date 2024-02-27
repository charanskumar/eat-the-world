const cuisineCatCards = require('../categoryCards');

function index(req, res) {
    const cuisine = req.params.id;
    //const foodCategories = await cuisineCatCards[cuisine];
    res.render('cuisine/index', {cuisine: cuisine});
}

module.exports = {
    index,
}