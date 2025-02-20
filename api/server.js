const app = require("../app");

// database
const connectDB = require("../config/db");

connectDB();

module.exports = app;
