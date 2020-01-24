const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BrandSchema = new Schema({
  brand_name: {
    type: String,
    required: true
  },

  brand_logo: {
    type: String
  },

  brand_status: {
    type: Boolean,
    default: false
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Brand = mongoose.model("brand", BrandSchema);
