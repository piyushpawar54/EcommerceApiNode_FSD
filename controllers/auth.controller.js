const Auth = require("../services/auth.service");

const signup = async (req, res) => {
  const response = await Auth.signup(req.body);
  return res.json({
    message: "Successfully created user",
    sucess: true,
    code: 200,
    data: response,
  });
};

module.exports = {
  signup,
};
