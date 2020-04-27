const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

// /
// get request
router.get('/', shopController.getIndex);

// /product-list
// get request
router.get('/product-list', shopController.getProducts);

// /cart
// get request
router.get('/cart', shopController.getCart);

// /checkout
// get request
router.get('/checkout', shopController.getCheckout);

// /orders
// get request
router.get('/orders', shopController.getOrders)

module.exports = router;