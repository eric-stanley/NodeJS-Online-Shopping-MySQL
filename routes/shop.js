const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// /
// get request
router.get('/', productsController.getProducts);

module.exports = router;