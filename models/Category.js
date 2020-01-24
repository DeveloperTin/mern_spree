const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  cat_name: {
    type: String,
    required: true
  },

  cat_icon: {
    type: String
  },

  cat_status: {
    type: Boolean,
    default: false
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Category = mongoose.model("category", CategorySchema);
