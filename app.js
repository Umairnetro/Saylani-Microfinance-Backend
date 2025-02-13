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

app.get("/email", async (req, res) => {
  try {
    const transport = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "umairjdu@gmail.com",
        pass: "zaly yuav lyvt uqtn",
      },
    });

    const mailOptions = {
      from: "umairjdu@gmail.com",
      to: "umairjdu@gmail.com",
      subject: "Hello World",
      html: "<strong>It works!</strong>",
    };

    const info = await transport.sendMail(mailOptions);
    console.log(info);

    res.json({
      message: "Email sent successfully, please check your email",
      details: info,
    });
  } catch (error) {
    console.log("Error sending email: ", error);
    res.json({ error: error.message });
  }
});

module.exports = app;
