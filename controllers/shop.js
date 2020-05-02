const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
 Product.fetchAll()
  .then(([rows, fieldData]) => {
   res.render('shop/products', {
    products: rows,
    title: 'All Products',
    path: '/products'
   });
  })
  .catch(err => console.log(err));
}

exports.getProduct = (req, res, next) => {
 const productId = req.params.productId;
 Product.findById(productId)
  .then(([product]) => {
   res.render('shop/product-detail', {
    product: product[0],
    title: product[0].title,
    path: '/products'
   });
  })
  .catch(err => console.log(err));
}

exports.getIndex = (req, res, next) => {
 Product.fetchAll()
  .then(([rows, fieldData]) => {
   res.render('shop/index', {
    products: rows,
    title: 'Shop',
    path: '/'
   });
  })
  .catch(err => console.log(err));
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

