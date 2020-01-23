const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  category: {
    type: String,
    required: true
  },

  eng_name: {
    type: String,
    required: true
  },

  brand: {
    type: String
  },

  sku: {
    type: String
  },

  pic_upload: {
    type: String
  },

  specification: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  warranty_type: {
    type: String,
    required: true
  },

  selling_price: {
    type: String,
    required: true
  },

  msrp_price: {
    type: String,
    required: true
  },

  original_price: {
    type: String,
    required: true
  },

  qty: {
    type: String,
    required: true
  },

  weight: {
    type: String
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Product = mongoose.model("product", ProductSchema);
