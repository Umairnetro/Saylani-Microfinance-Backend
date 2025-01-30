const { Resend } = require("resend");

const resend = new Resend("re_9AFNZabt_6npR1cx13qQ1qarRoVBpnUQg");

resend.domains.verify();

const resendmailer = async () => {
  const { data, error } = await resend.emails.send({
    from: "Acme <umairjdu@gmail.com>",
    to: ["umairjdu@gmail.com"],
    subject: "Hello World",
    html: "<strong>It works!</strong>",
  });

  if (error) {
    console.log(error);
  }

  console.log(data);
};

module.exports = resendmailer;
