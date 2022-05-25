const ProductController = require("../controllers/product.controller");

const routes = (app) => {
  app.get("/ecomm/api/v1/products", ProductController.getProducts);
  app.post("/ecomm/api/v1/products", ProductController.createProducts);
};

module.exports = routes;
