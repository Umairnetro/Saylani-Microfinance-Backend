const nodemailer = require("nodemailer");

const transporter = (name = "unknown", email, password) => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "Nodemailer",
    to: email,
    subject: "Your login password for Saylani Microfinance",
    text: `Thanks for registering ${name}, this is your password: ${password}`,
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error: ", error);
    } else {
      console.log("Email send", info);
    }
  });
};

module.exports = transporter;
