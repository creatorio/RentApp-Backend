const nodemailer = require("nodemailer");
const send = (mailOptions) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rdjunior018@gmail.com",
      pass: "xrod kzpi jfzp vksx",
    },
  });
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = { send };
