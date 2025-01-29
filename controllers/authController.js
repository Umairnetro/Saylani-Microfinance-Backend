const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

// Models
const User = require("../models/User");
const transporter = require("../utils/nodemailer");

// Generate token
const generateToken = require("../utils/token");

// Register
const registerController = async (req, res) => {
  const { name, cnic, email } = req.body;
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

    const hashedpassword = await bcrypt.hash(generatedPassword, 10);

    const user = new User({ name, cnic, email, password: hashedpassword });

    // save to mongodb
    await user.save();

    // send email
    transporter(name, email, hashedpassword);
    return res.json({
      message: "User Registered, Please check your email to get password",
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// Login
const LoginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "invalid Credentials" });

    const isMatch = bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ message: "invalid Credentials" });

    const token = generateToken(user._id);

    return res.json({ message: "Login Successfully", token });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { registerController, LoginController };
