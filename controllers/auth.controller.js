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

const signin = async (req, res) => {
  const user = await Auth.getUser(req.body.email);
  if (!user) {
    console.log("user not found");
    res.json({
      code: 404,
      message: "Email not found",
      success: false,
    });
  }
  if (!Auth.checkPassword(req.body.password, user.password)) {
    console.log("password incorrect");
    res.json({
      code: 401,
      message: "password incorrect",
      success: false,
    });
  }

  const token = Auth.createToken(user);
  return res.json({
    code: 200,
    message: "SignIn Successful",
    data: token,
    success: true,
  });
};

module.exports = {
  signup,
  signin,
};
