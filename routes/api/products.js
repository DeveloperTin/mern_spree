const express = require("express");
const router = express.Router();

const Product = require("../../models/Product");

// @route   GET api/products
// @desc    Get all products
// @access  Public
router.get("/", (req, res) => {
  Product.find()
    .sort({ date: -1 })
    .then(products => res.json(products));
});

// @route   POST api/products
// @desc    Create a product
// @access  Public
router.post("/", (req, res) => {
  const newProduct = new Product({
    name: req.body.name
  });

  newProduct.save().then(product => res.json(product));
});

// @route   DELETE api/products/:id
// @desc    Delete a item
// @access  Public
router.delete("/:id", (req, res) => {
  Product.findById(req.params.id)
    .then(product => product.remove().then(() => res.json({ delete: true })))
    .catch(err => res.status(404).json({ delete: false }));
});

module.exports = router;
