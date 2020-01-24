const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CouponSchema = new Schema({
  coupon_name: {
    type: String,
    required: true
  },

  coupon_code: {
    type: String,
    required: true
  },

  coupon_picture: {
    type: String
  },

  coupon_desc: {
    type: String,
    required: true
  },

  coupon_percentage: {
    type: String,
    required: true
  },

  coupon_amount: {
    type: String,
    required: true
  },

  coupon_qty: {
    type: String,
    required: true
  },

  coupon_max: {
    type: String,
    required: true
  },

  coupon_min: {
    type: String,
    required: true
  },

  full_order_amount: {
    type: String,
    required: true
  },

  issue_start_date: {
    type: Date
  },

  issue_end_date: {
    type: Date
  },

  valid_start_date: {
    type: Date
  },

  valid_end_date: {
    type: Date
  },

  coupon_status: {
    type: Boolean,
    default: false
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Coupon = mongoose.model("coupon", CouponSchema);
