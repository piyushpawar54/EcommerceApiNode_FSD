const User = require("../models/index").User;
const Role = require("../models/index").Role;
const bcrypt = require("bcryptjs");
const { use } = require("express/lib/application");
const res = require("express/lib/response");
const jwt = require("jsonwebtoken");

const signup = async (data) => {
  const user = await User.create({
    email: data.email,
    password: data.password,
  });
  const customerRole = await Role.findOne({
    where: {
      name: "customer",
    },
  });
  user.addRole(customerRole);
  return user;
};

const addRoleToUser = async (userId, roleId) => {
  console.log("idhar aayaaaaa ");
  try {
    const user = await User.findOne({
      where: {
        id: userId,
      },
    });

    const role = await Role.findOne({
      where: {
        id: roleId,
      },
    });
    user.addRole(role);
    return user;
  } catch (error) {
    console.log("Something wend wrong");
    console.log(error);
  }
};

const removeRoleToUser = async (userId, roleId) => {
  try {
    const user = await User.findOne({
      where: {
        id: userId,
      },
    });

    const role = await Role.findOne({
      where: {
        id: roleId,
      },
    });
    user.removeRole(role);
    return user;
  } catch (error) {
    console.log("Something went wrong");
    console.log(error);
  }
};

const getRolesForUser = async (userId) => {
  try {
    const user = await User.findOne({
      where: {
        id: userId,
      },
    });
    const roles = await user.getRoles();
    console.log(roles);
    return roles;
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (userEmail) => {
  const user = await User.findOne({
    where: {
      email: userEmail,
    },
  });
  return user;
};

const getUserById = async (userId) => {
  const user = await User.findOne({
    where: {
      id: userId,
    },
  });
  return user;
};

const checkPassword = (userPassword, encryptedPassword) => {
  return bcrypt.compareSync(userPassword, encryptedPassword);
};

const createToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, "relevel", {
    expiresIn: 60 * 60,
  });
};

const verifyToken = (token) => {
  try {
    const response = jwt.verify(token, "relevel");
    return response;
  } catch (error) {
    console.log("Token not verified");
    console.log(error);
  }
};

module.exports = {
  signup,
  getUser,
  getRolesForUser,
  checkPassword,
  createToken,
  verifyToken,
  getUserById,
  addRoleToUser,
  removeRoleToUser,
};
