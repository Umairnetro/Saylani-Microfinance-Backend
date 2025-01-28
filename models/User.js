const mongoose = require("mongoose");

const User = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  cnic: {
    type: String,
    require: true,
    unique: true,
  },
});

module.exports = mongoose.model("User", User);
