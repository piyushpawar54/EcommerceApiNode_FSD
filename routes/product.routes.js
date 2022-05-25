const ProductController = require("../controllers/product.controller");

const routes = (app) => {
  app.get("/ecomm/api/v1/products", ProductController.getProducts);
};

module.exports = routes;
