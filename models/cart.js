const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path');

const p = path.join(
 rootDir,
 'data',
 'cart.json'
);

module.exports = class Cart {
 static addProduct(id, price) {
  // fetch the previous cart
  fs.readFile(p, (err, fileContent) => {
   let cart = {
    products: [],
    totalPrice: 0
   }
   if (!err) {
    cart = JSON.parse(fileContent);
   }
   // analyse the cart => find existing product
   const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
   const existingProduct = cart.products[existingProductIndex];

   let updatedProduct;
   if (existingProduct) {
    // increase quantity
    updatedProduct = { ...existingProduct };
    updatedProduct.quantity = updatedProduct.quantity + 1;
    cart.products = [...cart.products];
    cart.products[existingProductIndex] = updatedProduct;
   } else {
    // add new product
    updatedProduct = { id: id, quantity: 1 }
    cart.products = [...cart.products, updatedProduct]
   }
   cart.totalPrice = cart.totalPrice + +price;
   fs.writeFile(p, JSON.stringify(cart), err => {
    console.log(err);
   });
  });
 }

 static deleteProduct(id, productPrice) {
  fs.readFile(p, (err, fileContent) => {
   if (err) {
    return;
   }
   const updatedCart = { ...JSON.parse(fileContent) };
   const product = updatedCart.products.find(prod => prod.id === id);
   if (!product) {
    return;
   }
   const productQuantity = product.quantity;

   updatedCart.products = updatedCart.products.filter(prod => prod.id !== id);

   updatedCart.totalPrice = updatedCart.totalPrice - (productPrice * productQuantity);
   fs.writeFile(p, JSON.stringify(updatedCart), err => {
    console.log(err);
   });

  });
 }

 static getCart(cb) {
  fs.readFile(p, (err, fileContent) => {
   const cart = JSON.parse(fileContent);
   if (err) {
    cb(null);
   } else {
    cb(cart);
   }

  });
 }

}