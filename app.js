const express = require("express");
const app = express();
const dotenv = require("dotenv");

// helper
const nodemailer = require("nodemailer");

dotenv.config();

app.use(express.json());

const routes = require("./routes");
const transporter = require("./utils/nodemailer");

app.use("/api", routes);
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to the Saylani Microfinance API!",
    routes: {
      register: "/api/auth/register",
      login: "/api/auth/login",
      user: "/api/auth/user",
    },
  });
});

module.exports = app;
