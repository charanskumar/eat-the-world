const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    idMeal: {type: Number},
    content: {type: String, required: true},
    rating: {type: Number, min: 1, max: 5, required: true},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    userName: String,
}, {
    timestamps: true
});

const itemSchema = new Schema({
    _id: Schema.Types.ObjectId,
    idMeal: {type: Number, required: true},
    name: {type: String, required: true},
    ingredients: {type: String},
    price: {type: Number},
    reviews: [reviewSchema]
}, {
    timestamps: true
});



module.exports = mongoose.model('Item', itemSchema);