const CartController = require("../controllers/cart.controller");

const routes = (app) => {
  app.post("/ecomm/api/v1/addProduct", CartController.addProductToCart);
};

module.exports = routes;
