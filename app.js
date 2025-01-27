const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

app.use(express.json());

const routes = require("./routes");

app.use("/api", routes);

module.exports = app;