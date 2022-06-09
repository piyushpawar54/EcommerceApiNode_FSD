const AuthService = require("../services/auth.service");

const isAuthenticated = async (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.json({
      code: 401,
      message: "No token provided",
    });
  }
  const response = AuthService.verifyToken(token);
  if (!response) {
    return res.json({
      code: 401,
      message: "token not verified",
    });
  }
  try {
    const user = await AuthService.getUserById(response.id);
    req.user = user.id; //to determine the user which have authenticated session
    next();
  } catch (error) {
    return res.json({
      code: 401,
      message: "User not found",
    });
  }
};

module.exports = {
  isAuthenticated,
};
