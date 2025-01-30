const nodemailer = require("nodemailer");

const transporter = (name = "unknown", email= "umairjdu@gmail.com", password = "XXXXXXXXXXXX") => {
  try {
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com", //smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: "Nodemailer",
      to: email,
      subject: "Saylani Microfinance",
      text: `Thanks for registering ${name}, this is your password: ${password}.\n Please don't share this password with anyone.`,
    };

    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error: ", error);
      } else {
        console.log("Email send", info);
      }
    });
  } catch (error) {
    console.log({ error });
  }
};

module.exports = transporter;
