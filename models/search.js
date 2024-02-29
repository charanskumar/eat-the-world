// // // Create a schema
// // const ItemSchema = new mongoose.Schema({
// //     name: String,
// //     description: String
// //   });
  
// //   // Create a model
// //   const Item = mongoose.model('Item', ItemSchema);

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const searchSchema = new Schema({
//     name: {type: String},
//     idMeal: {type: Number/*, required: true*/},
// }, {
//     timestamps: true
// });




// module.exports  = mongoose.model('Search', searchSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const searchSchema = new Schema({
    name: { type: String },
    idMeal: { type: Number },
}, {
    timestamps: true
});

mongoose.model.exports.findX = (searchDe)

const Search = mongoose.model('Search', searchSchema);
module.exports = Search;


