const Item = require('../models/item');

module.exports = {
    create
};

async function create(req, res) {
    try {
        const idMeal = req.params.idMeal;
        const item = await Item.findOne({idMeal});
        console.log(idMeal);
        console.log(item);
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        item.reviews.push(req.body);
        await item.save();
        res.redirect(`/food/meal/${item.idMeal}`);
    } catch (err) {
        console.log(err);
    }
}