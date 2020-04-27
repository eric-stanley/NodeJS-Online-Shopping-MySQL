const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');


// /admin/add-product
// get request
router.get('/add-product', adminController.getAddProduct);

// /admin/add-product
// post request
router.post('/add-product', adminController.postAddProduct);

// /admin/product-list
// get request
router.get('/product-list', adminController.getProducts);

module.exports = router;