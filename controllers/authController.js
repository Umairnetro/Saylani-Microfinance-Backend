const joi = require("joi")
const bcrypt = require("bcrypt")


// register
const registerController = (req, res, next) => {
  res.send("Register route");
};

const LoginController = (req, res, next) => {
  res.send("Login route");
};

module.exports = { registerController, LoginController };