const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
 Product.fetchAll(products => {
  res.render('shop/product-list', {
   products: products,
   title: 'All Products',
   path: '/product-list'
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

