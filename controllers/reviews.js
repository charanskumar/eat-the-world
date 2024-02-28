const Item = require('../models/item');

module.exports = {
    create
};

async function create(req, res) {
    try {
        const apiData = req.body
        console.log(apiData);
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
    } catch (err) {
        console.log(err.message);
    }
    //res.redirect(`/meal/${item._id}`);
}