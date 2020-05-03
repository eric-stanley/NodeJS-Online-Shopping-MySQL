const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

// /
// get request
router.get('/', shopController.getIndex);

// /products
// get request
router.get('/products', shopController.getProducts);

// /products/:id
// get request
router.get('/products/:productId', shopController.getProduct);

// /cart
// get request
router.get('/cart', shopController.getCart);

// /cart
// post request
router.post('/cart', shopController.postCart);

// /cart-delete-item
// post request
router.post('/cart-delete-item', shopController.postCartDeleteProduct);

// /create-order
// post request
router.post('/create-order', shopController.postOrder);

// /checkout
// get request
router.get('/checkout', shopController.getCheckout);

// /orders
// get request
router.get('/orders', shopController.getOrders)

module.exports = router;