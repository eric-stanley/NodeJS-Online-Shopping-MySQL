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
 Cart.getCart(cart => {
  Product.fetchAll(products => {
   const cartProducts = [];
   for (product of products) {
    const cartProductData = cart.products.find(prod => prod.id === product.id);
    if (cartProductData) {
     cartProducts.push({
      productData: product,
      quantity: cartProductData.quantity
     });
    }
   }
   res.render('shop/cart', {
    title: 'Your cart',
    path: '/cart',
    products: cartProducts
   });
  });
 });
}

exports.postCart = (req, res, next) => {
 const productId = req.body.productId;
 Product.findById(productId, (product) => {
  Cart.addProduct(productId, product.price);
 });
 res.redirect('/cart');
}

exports.postCartDeleteProduct = (req, res, next) => {
 const prodId = req.body.productId;
 Product.findById(prodId, product => {
  Cart.deleteProduct(prodId, product.price);
  res.redirect('/cart');
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

