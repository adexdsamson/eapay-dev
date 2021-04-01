const mongoose = require("mongoose");

const Merchant = mongoose.model("merchants");

const twilio = require("../utils/twilio");
const mail = require("../utils/mail/mail");
const random = require("../utils/random");

module.exports = (req, res, next) => {
  let newlogin = 7 * 24 * 60 * 60 * 1000; //after seven days
  let updatelogin = 10 * 60 * 1000;
  Merchant.findOne({ _id: req.user.id }, (err, user) => {
    if (err) throw err;
    let phone = user.phone
      ? user.phone.toString().length === 13
        ? user.phone.toString().replace("2", "+2")
        : user.phone
      : "";
    if (
      !user.verified ||
      user.newDevice ||
      Date.now() > user.lastLogin + newlogin
    ) {
      if (Date.now() > user.lastLogin + updatelogin) {
        console.log("greater");
        if (phone !== "") {
          twilio.twilioVerify(phone);
          return res.json({
            isverify: false,
            verify:
              "Please Verify your account with the OTP sent to your phone",
          });
        } else {
          //verify mail
          let token = random();
          Merchant.findByIdAndUpdate(
            { _id: req.user._id },
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
        console.log("less");
        return res.json({
          isverify: false,
          verify: "Please Verify your account with the OTP sent to you",
        });
      }
    }
    next();
  });
};
