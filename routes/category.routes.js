const CategoryController = require("../controllers/category.controller");

const routes = (app) => {
  //the app parameter is express app only
  //route -> controller fun
  app.get("/ecomm/api/v1/categories", CategoryController.getAllCategories);
  app.post("/ecomm/api/v1/categories", CategoryController.createCategory);
  app.delete("/ecomm/api/v1/categories/:id", CategoryController.deleteCategory);
  app.get("/ecomm/api/v1/categories/:id", CategoryController.getCategory);
  app.get(
    "/ecomm/api/v1/categoriesByName",
    CategoryController.getCategoryByName
  );
};

module.exports = routes;
