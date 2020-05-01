const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');


// /admin/add-product
// get request
router.get('/add-product', adminController.getAddProduct);

// /admin/add-product
// post request
router.post('/add-product', adminController.postAddProduct);

// /admin/products
// get request
router.get('/products', adminController.getProducts);

// /admin/edit-product
// get request
router.get('/edit-product/:productId', adminController.getEditProduct);

// /admin/edit-product
// post request
router.post('/edit-product', adminController.postEditProduct);

// /admin/delete-product
// post request
router.post('/delete-product', adminController.postDeleteProduct);


module.exports = router;