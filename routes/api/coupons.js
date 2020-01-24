const express = require("express");
const router = express.Router();

const Coupon = require("../../models/Coupon");

// @route   GET api/coupons
// @desc    Get all coupons
// @access  Public
router.get("/", (req, res) => {
  Coupon.find()
    .sort({ date: -1 })
    .then(coupons => res.json(coupons));
});

// @route   POST api/coupons
// @desc    Create a coupon
// @access  Public
router.post("/", (req, res) => {
  const newCoupon = new Coupon({
    coupon_name: req.body.coupon_name,
    coupon_code: req.body.coupon_code,
    coupon_picture: req.body.coupon_picture,
    coupon_desc: req.body.coupon_desc,
    coupon_percentage: req.body.coupon_percentage,
    coupon_amount: req.body.coupon_amount,
    coupon_qty: req.body.coupon_qty,
    coupon_max: req.body.coupon_max,
    coupon_min: req.body.coupon_min,
    full_order_amount: req.body.full_order_amount,
    issue_start_date: req.body.issue_start_date,
    issue_end_date: req.body.issue_end_date,
    valid_start_date: req.body.valid_start_date,
    valid_end_date: req.body.valid_end_date,
    coupon_status: req.body.coupon_status
  });

  newCoupon.save().then(coupon => res.json(coupon));
});

// @route   DELETE api/coupons/:id
// @desc    Delete a coupon
// @access  Public
router.delete("/:id", (req, res) => {
  Coupon.findById(req.params.id)
    .then(coupon => coupon.remove().then(() => res.json({ delete: true })))
    .catch(err => res.status(404).json({ delete: false }));
});

module.exports = router;
