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

const updateUser = async (req, res) => {
  let user;
  console.log(req.query);
  if (req.query.addRoles == "false") {
    console.log("Ikde ala.......");
    user = Auth.removeRoleToUser(req.params.userId, req.body.roleId);
  } else {
    user = Auth.addRoleToUser(req.params.userId, req.body.roleId);
  }
  if (!user) {
    return res.json({
      code: 500,
      message: "internal server error, something went wrong",
      success: false,
    });
  }
  return res.json({
    code: 200,
    message: "updated the user",
    success: true,
  });
};

const getRolesForUser = async (req, res) => {
  const response = await Auth.getRolesForUser(req.params.userId);
  return res.json({
    code: 200,
    message: "Successfully fetched the roles",
    success: true,
    data: response,
  });
};

module.exports = {
  signup,
  signin,
  updateUser,
  getRolesForUser,
};
