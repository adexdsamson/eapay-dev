require("dotenv").config();
const mailer = require("nodemailer");

const emailData = require("./emailData");

module.exports = (to, name, template, data) => {
  const transport = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      accessToken: process.env.GOOGLE_ACCESS_TOKEN,
    },
  };
  const transporter = mailer.createTransport(transport);

  transporter.sendMail(emailData(to, name, template, data), (err) => {
    transporter.close();
  });
};
