const verifyTemplate = require("./template/verifyTemplate");

module.exports = (to, name, template, data) => {
  let email = null;
  let from = "Eapay <verify@eapay.com>";
  switch (template) {
    case "verify":
      email = {
        from,
        to,
        subject: `Hi ${
          name === "" || name === undefined
            ? "Welcome, we're glad you joined us"
            : name
        }, please verify your account`,
        html: verifyTemplate(data),
      };
      break;
    default:
      email;
  }
  return email;
};
