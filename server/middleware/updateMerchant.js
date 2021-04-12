const mongoose = require("mongoose");

const Merchant = mongoose.model("merchants");

const twilio = require("../utils/twilio");
const mail = require("../utils/mail/mail");
const random = require("../utils/random");

module.exports = (req, res, next) => {
  let newlogin = 7 * 24 * 60 * 60 * 1000; //after seven days
  let updatelogin = 10 * 60 * 1000; //after 10 mins
  Merchant.findOne({ _id: req.merchant.id }, (err, merchant) => {
    if (err) return res.json(err);
    let phone = merchant.phone
      ? merchant.phone.toString().length === 13
        ? merchant.phone.toString().replace("2", "+2")
        : merchant.phone
      : "";
    if (
      !merchant.verified ||
      merchant.newDevice ||
      Date.now() > merchant.lastLogin + newlogin
    ) {
      if (Date.now() > merchant.lastLogin + updatelogin) {
        if (phone !== "") {
          twilio.twilioVerify(phone);
          return res.json({
            isverify: false,
            verify:
              "Please Verify your account with the OTP sent to your phone",
          });
        } else {
          let token = random();
          Merchant.findByIdAndUpdate(
            { _id: req.merchant._id },
            { $set: { verifyToken: token } },
            { new: true },
            (err, merchant) => {
              if (err) return res.json({ success: false, err });
              mail(merchant.email, merchant.fullname, "verify", token);
            }
          );
          return res.json({
            isverify: false,
            verify:
              "Please Verify your account with the OTP sent to your inbox",
          });
        }
      } else {
        return res.json({
          isverify: false,
          verify: "Please Verify your account with the OTP sent to you",
        });
      }
    }
    next();
  });
};
