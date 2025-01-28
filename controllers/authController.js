const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

// Models
const User = require("../models/User");
const transporter = require("../utils/nodemailer");

// register
const registerController = async (req, res, next) => {
  const { name, cnic, email, password } = req.body;
  const existUser = await User.findOne({ $or: [{ email }, { cnic }] });

  try {
    if (existUser) {
      return res.status(400).json({
        message: "user already exist",
      });
    }

    const generatedPassword = new mongoose.Types.ObjectId()
      .toString()
      .slice(18);

    const user = new User({ name, cnic, email, password: generatedPassword });

    // save to mongodb
    await user.save();

    // send email
    transporter(name, email, generatedPassword);
    return res.json({ message: "User Registered" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const LoginController = (req, res, next) => {
  res.send("Login route");
};

module.exports = { registerController, LoginController };
