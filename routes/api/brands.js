const express = require("express");
const router = express.Router();

const Brand = require("../../models/Brand");

// @route   GET api/brands
// @desc    Get all brands
// @access  Public
router.get("/", (req, res) => {
  Brand.find()
    .sort({ date: -1 })
    .then(brands => res.json(brands));
});

// @route   POST api/brands
// @desc    Create a brand
// @access  Public
router.post("/", (req, res) => {
  const newBrand = new Brand({
    brand_name: req.body.brand_name,
    brand_logo: req.body.brand_logo,
    brand_status: req.body.brand_status
  });

  newBrand.save().then(brand => res.json(brand));
});

// @route   DELETE api/brands/:id
// @desc    Delete a brand
// @access  Public
router.delete("/:id", (req, res) => {
  Brand.findById(req.params.id)
    .then(brand => brand.remove().then(() => res.json({ delete: true })))
    .catch(err => res.status(404).json({ delete: false }));
});

module.exports = router;
