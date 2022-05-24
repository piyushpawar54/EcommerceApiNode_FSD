const CategoryController = require("../controllers/category.controller");

const routes = (app) => {
  //the app parameter is express app only
  //route -> controller fun
  app.get("/ecomm/api/v1/categories", CategoryController.getCategory);
  app.post("/ecomm/api/v1/categories", CategoryController.createCategory);
};

module.exports = routes;
