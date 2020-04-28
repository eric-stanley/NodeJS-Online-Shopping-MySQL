const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
 Product.fetchAll(products => {
  res.render('shop/products', {
   products: products,
   title: 'All Products',
   path: '/products'
  });
 });
}

exports.getProduct = (req, res, next) => {
 const productId = req.params.productId;
 Product.findById(productId, product => {
  res.render('shop/product-detail', {
   product: product,
   title: product.title,
   path: '/products'
  });
 });
}

exports.getIndex = (req, res, next) => {
 Product.fetchAll(products => {
  res.render('shop/index', {
   products: products,
   title: 'Shop',
   path: '/'
  });
 });
}

exports.getCart = (req, res, next) => {
 res.render('shop/cart', {
  title: 'Your cart',
  path: '/cart'
 });
}

exports.postCart = (req, res, next) => {
 const productId = req.body.productId;
 Product.findById(productId, (product) => {
  Cart.addProduct(productId, product.price);
 });
 res.redirect('/cart');
}

exports.getOrders = (req, res, next) => {
 res.render('shop/orders', {
  title: 'Your orders',
  path: '/orders'
 });
}

exports.getCheckout = (req, res, next) => {
 res.render('shop/checkout', {
  title: 'Checkout',
  path: '/checkout'
 })
}

