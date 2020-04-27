const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products');


// admin/add-product
// get request
router.get('/add-product', productsController.getAddProduct);

// admin/add-product
// post request
router.post('/add-product', productsController.postAddProduct);

module.exports = router;