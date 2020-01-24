const express = require("express");
const router = express.Router();

const Category = require("../../models/Category");

// @route   GET api/categories
// @desc    Get all categories
// @access  Public
router.get("/", (req, res) => {
  Category.find()
    .sort({ date: -1 })
    .then(categories => res.json(categories));
});

// @route   POST api/categories
// @desc    Create a category
// @access  Public
router.post("/", (req, res) => {
  const newCategory = new Category({
    cat_name: req.body.cat_name,
    cat_icon: req.body.cat_icon,
    cat_status: req.body.cat_status
  });

  newCategory.save().then(category => res.json(category));
});

// @route   DELETE api/categories/:id
// @desc    Delete a category
// @access  Public
router.delete("/:id", (req, res) => {
  Category.findById(req.params.id)
    .then(category => category.remove().then(() => res.json({ delete: true })))
    .catch(err => res.status(404).json({ delete: false }));
});

module.exports = router;
