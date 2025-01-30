const app = require("../app");
const PORT = process.env.PORT || 3000;

// database
const connectDB = require("../config/db");

connectDB();

module.exports = app