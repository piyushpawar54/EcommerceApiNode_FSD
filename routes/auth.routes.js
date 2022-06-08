const AuthController = require("../controllers/auth.controller");

const routes = (app) => {
  app.post("/ecomm/signup", AuthController.signup);
  app.post("/ecomm/signin", AuthController.signin);
  app.patch("/ecomm/api/v1/user/:userId", AuthController.updateUser);
  app.get(
    "/ecomm/api/v1/user/:userId/getRoles",
    AuthController.getRolesForUser
  );
};

module.exports = routes;
