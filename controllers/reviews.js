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
    //try {
        await item.save();
        res.redirect(`/food/meal/${item.idMeal}`);
    } catch (err) {
        console.log(err);
    }
    //console.log(idMeal);
    //res.redirect(`/food/meal/${item.idMeal}`);
    /*try {
        const apiData = req.body
        console.log(apiData);*/
    /*const savedItem = await Item.create(apiData);
    console.log(savedItem);
    /*const review = {
        savedItem,
        user: req.user._id,
        userName: req.user.name
    }*/
        //console.log(review);
        //item.reviews.push(review);
        //await item.save();
    /*} catch (err) {
        console.log(err.message);
    }*/
    //res.redirect(`/meal/${item._id}`);
}