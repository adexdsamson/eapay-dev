//user routes comes here
require("dotenv").config();
const request = require("request");
const mongoose = require("mongoose");
const userAgent = require("useragent");

const twilio = require("../utils/twilio");
const emailCheck = require("../utils/checkEmail");
const utilsFunction = require("../utils/utilsFunction");

const userVerify = require("../middleware/userVerify");
const updateUser = require("../middleware/updateUser");

const User = mongoose.model("users");

module.exports = (api) => {
  //register route which accept bvn, email,date of birth and password
  api.post("/api/user/register", (req, res) => {
    let { bvn, email, dob, password } = req.body;
    //the formtted date of birth shoulf be in YYYY-MM-DD

    let options = {
      method: "GET",
      url: `https://api.paystack.co/bank/resolve_bvn/${bvn}`,
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
      },
    };
    request(options, (error, response) => {
      const resp = JSON.parse(response.body);
      if (resp.status) {
        if (resp.data.formatted_dob === dob) {
          let phone = resp.data.mobile.replace("0", "+234");
          const data = new User({
            email,
            password,
            firstname: resp.data.first_name,
            lastname: resp.data.last_name,
            phone,
            dob: resp.data.formatted_dob,
          });
          try {
            twilio.twilioVerify(phone);
            data.save((err, user) => {
              if (err)
                return res
                  .status(401)
                  .json({ message: "Cant save user", payload: {} });
              //user data has been successfully stored in db, the user should be expecting OTP
              res.status(200).json({
                payload: {
                  user: {
                    name: user.fullname,
                    email: user.email,
                    phone: user.phone,
                    _id: user._id,
                    newDevice: user.newDevice,
                    token: user.token,
                    verified: user.verified,
                    lockUntil: user.lockUntil,
                    loginAttempt: user.loginAttempt,
                  },
                },
                success: true,
              });
            });
          } catch (error) {
            return res.json({ message: "Error sending sms", payload: {} });
          }
        } else {
          //DOB did not match
          return res.json({ message: "Information Miss match", payload: {} });
        }
      } else {
        return res.json({ message: "Invalid BVN", payload: {} });
      }
    });
  });

  //accept user id as url  query params
  //this is the route that receive the otp verificationn from phone
  ///api/verify?id=${id} url format
  api.post("/api/user/verify", async (req, res) => {
    const code = req.body.code;
    const phone =
      req.body.phone.length === 11
        ? req.body.phone.replace("0", "+234")
        : req.body.phone;
    const id = req.query.id;
    let verificationResult;
    try {
      verificationResult = await twilio.twilioChecks(code, phone);
    } catch (e) {
      return res.status(500).send(e);
    }
    if (verificationResult.status === "approved") {
      User.findByIdAndUpdate(
        { _id: id },
        { verified: 1 },
        { new: true },
        (err) => {
          if (err) return res.status(401).send(err);
          return res.status(200).json({ success: true });
        }
      );
    }
  });

  api.post("/api/user/login", (req, res) => {
    const { email, password } = req.body;
    if (utilsFunction.checkBody(email) || utilsFunction.checkBody(password))
      return res.json("Invalid Parameter");
    const isEmail = emailCheck(email);
    let obj = {};
    if (isEmail) {
      obj = { email };
    } else {
      const phone = email.length === 11 ? email.replace("0", "+234") : email;
      obj = { phone };
    }
    let agent = userAgent.parse(req.headers["user-agent"]);
    let device = agent.toString();
    User.loginUser(obj, password, device, (err, users, type) => {
      if (err) return res.json(err);
      if (users) {
        users.getToken((err, users) => {
          if (err) return res.json(err);
          return res
            .cookie("eapay", users.token)
            .status(200)
            .json({
              success: true,
              payload: {
                users: {
                  name: users.fullname,
                  email: users.email,
                  phone: users.phone,
                  newDevice: users.newDevice,
                  token: users.token,
                  _id: users._id,
                  verified: users.verified,
                  lockUntil: users.lockUntil,
                  loginAttempt: users.loginAttempt,
                },
              },
            });
        });
      }
      let reason = User.failedLogin;
      switch (type) {
        case reason.NOT_FOUND:
        case reason.PASSWORD_INCORRECT:
          return res.json({ message: "Email or Password incorrect", payload: {} });
        case reason.MAX_ATTEMPTS:
          //Email notification on account
          return res.json({ message: "Check Email for account notification", payload: {} });
      }
    });
  });

  //this check the authentication and verification state of the merchant
  api.get("/api/user/auth", userVerify, updateUser, (req, res) => {
    res.status(200).json({ success: true, isUser: true });
  });

  //on success log the user outand reset token
  api.get("/api/user/logout", userVerify, updateUser, (req, res) => {
    User.findByIdAndUpdate(
      { _id: req.user._id },
      { token: "" },
      (err, user) => {
        if (err) return res.json(err);
        return res.status(200).json({ success: true });
      }
    );
  });
};
