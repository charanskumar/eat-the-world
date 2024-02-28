const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const rewviewSchema = new Schema({
    content: {type: String, required: true},
    rating: {type: Number, min: 1, max: 5, required: true}
}, {
    timestamps: true
})

const itemSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    ingredients: {type: String},
    price: {type: Number, required: true},
    reviews: [rewviewSchema]
}, {
    timestamps: true
});