const { Router } = require("express");

const router = new Router();

const CATEGORY = require("./category/category");
const RESTAURANT = require("./restaurant/restaurant");
const PRODUCT = require("./product/product");
const AUTH = require("./auth/auth");
const CART = require("./cart/cart");
const ORDERS = require("./orders/orders");

router
  .get("/category", CATEGORY.CATEGORY)
  .get(`/restaurant/:categoryID`, RESTAURANT.RESTAURANTS)
  .post("/newRestaurant", RESTAURANT.NEW_RESTAURANT)
  .get("/product/:restaurantID", PRODUCT.PRODUCTS)
  .post("/newProduct", PRODUCT.NEW_PRODUCT)
  .get("/users", AUTH.USERS)
  .post("/register", AUTH.REGISTER)
  .post("/login", AUTH.LOGIN)
  .get("/carts", CART.CARTS)
  .post("/admin", AUTH.ADMIN_LOGIN)
  .get("/allrestaurants", RESTAURANT.ALL_RESTAURANTS)
  .delete("/deleteRestaurant", RESTAURANT.DELETE_RESTAURANT)
  .get("/allProducts", PRODUCT.ALL_PRODUCTS)
  .delete("/deleteProduct", PRODUCT.DELETE_PRODUCT)
  .get("/orders", ORDERS.ORDERS)
  .post("/newOrder", ORDERS.NEW_ORDER);

module.exports = router;
