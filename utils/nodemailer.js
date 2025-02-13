const nodemailer = require("nodemailer");

const transporter = async (
  name = "unknown",
  password = "XXXXXXXXXXXX"
) => {
  try {
    const transport = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: "Acme <umairjdu@gmail.com>",
      to: email,
      subject: "Saylani Microfinance",
      text: `Thanks for registering ${name}, this is your password: ${password}.\n Please don't share this password with anyone.`,
    };

    const info = await transport.sendMail(mailOptions);

    console.log({ user: "email sended, please check your email", info });
    return info
  } catch (error) {
    console.log({ error });
  }
};

module.exports = { transporter };
