const app = require("../app");

// database
const connectDB = require("../config/db");

connectDB();

/* Server */

module.exports = app;
