const checkTemplate = require("./template/checkTemplate");
const resetTemplate = require("./template/resetTemplate");
const verifyTemplate = require("./template/verifyTemplate");

module.exports = (to, name, template, data) => {
  let email = null;
  switch (template) {
    case "verify":
      email = {
        from: "Eapay <verify@eapay.com>",
        to,
        subject: `Hi ${
          name === "" || name === undefined
            ? "Welcome, we're glad you joined us"
            : name
        }, please verify your account`,
        html: verifyTemplate(data),
      };
      break;
    case "reset":
      email = {
        from: "Eapay <reset@eapay.com>",
        to,
        subject: `Hi ${
          name === "" || name === undefined ? "" : name
        } reset your account`,
        html: resetTemplate(data),
      };
      break;
    case "check":
      email = {
        from: "Eapay <account_information@eapay.com>", //this should accept reply
        to,
        subject: `Hi ${
          name === "" || name === undefined ? "" : name
        }Check for account details`,
        html: checkTemplate(),
      };
      break;
    default:
      email;
  }
  return email;
};
