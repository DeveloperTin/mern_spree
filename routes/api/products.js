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
    eng_name: req.body.eng_name,
    brand: req.body.brand,
    sku: req.body.sku,
    pic_upload: req.body.pic_upload,
    specification: req.body.specification,
    description: req.body.description,
    warranty_type: req.body.warranty_type,
    selling_price: req.body.selling_price,
    msrp_price: req.body.msrp_price,
    original_price: req.body.original_price,
    qty: req.body.qty,
    weight: req.body.weight,
    product_status: req.body.product_status
  });

  newProduct.save().then(product => res.json(product));
});

// @route   DELETE api/products/:id
// @desc    Delete a product
// @access  Public
router.delete("/:id", (req, res) => {
  Product.findById(req.params.id)
    .then(product => product.remove().then(() => res.json({ delete: true })))
    .catch(err => res.status(404).json({ delete: false }));
});

module.exports = router;
