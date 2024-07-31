const mongoose = require('mongoose');



const productSchema = new mongoose.Schema({


    id: {
      type: Number,
      required: true,
  
    },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  newPrice: {
    type: Number,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: true,
  },
  reviews: {
    type: Number,
    // required: true,
  },
  category: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    // required: true,
    default : true , 
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  },

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;