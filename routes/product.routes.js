const ProductController = require("../controllers/product.controller");
const AuthVallidator = require("../middleware/authValidator");
const RequestVallidator = require("../middleware/requestValidator");

const routes = (app) => {
  app.get(
    "/ecomm/api/v1/products",
    AuthVallidator.isAuthenticated,
    ProductController.getProducts
  );
  app.post(
    "/ecomm/api/v1/products",
    RequestVallidator.validateProductCreationRequest,
    ProductController.createProducts
  );
};

module.exports = routes;
