const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// admin/add-product
// get request
router.get('/add-product', (req, res, next) => {
 res.render('add-product', {
  title: 'Add Product',
  path: 'admin/add-product'
 })
});

// admin/add-product
// post request
router.post('/add-product', (req, res, next) => {
 products.push({
  title: req.body.title,
  path: 'shop'
 });
 res.redirect('/');
});

exports.routes = router;
exports.products = products;