const AuthController = require("../controllers/auth.controller");

const routes = (app) => {
  app.post("/ecomm/signup", AuthController.signup);
};

module.exports = routes;
