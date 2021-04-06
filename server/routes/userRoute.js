require("dotenv").config();
const axios = require("axios");
const mongoose = require("mongoose");

const SHA1 = require("crypto-js/sha1");
const userAgent = require("useragent");

const twilio = require("../utils/twilio");
const random = require("../utils/random");
const mail = require("../utils/mail/mail");
const utilsFunction = require("../utils/utilsFunction");
const emailCheck = require("../utils/checkEmail");


const userVerify = require("../middleware/userVerify");
const updateUser = require("../middleware/updateUser");

const User = mongoose.model("users");

userAgent(true);

module.exports = (api) => {
  //register route which accept bvn, email,date of birth and password
  api.post("/api/user/register", (req, res) => {
    let { bvn, email, dob, password } = req.body;
    //the formtted date of birth shoulf be in YYYY-MM-DD
    if (
      utilsFunction.checkBody(bvn) ||
      utilsFunction.checkBody(email) ||
      utilsFunction.checkBody(dob) ||
      utilsFunction.checkBody(password)
    )
      return res.json("Invalid Parameter");
    let token = random();
    let agent = userAgent.parse(req.headers["user-agent"]);
    let device = [];
    device.push(agent.toString());
    let lastLogin = Date.now();
    axios
      .get(`https://api.paystack.co/bank/resolve_bvn/${bvn}`, {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
        },
      })
      .then((resp) => {
        if (resp.data.data.formatted_dob === dob) {
          let phone = resp.data.data.mobile.replace("0", "+234");
          const data = new User({
            email,
            password,
            firstname: resp.data.data.first_name,
            lastname: resp.data.data.last_name,
            phone,
            dob: resp.data.data.formatted_dob,
            verifyToken: token,
            device,
            lastLogin,
          });
          data.save((err, user) => {
            if (err) return res.json("Cant save user");
            try {
              twilio.twilioVerify(phone);
              mail(
                email,
                `${user.lastname} ${user.firstname}`,
                "verify",
                token
              );
              res.status(200).json({
                user: {
                  name: `${user.lastname} ${user.firstname}`,
                  email: user.email,
                  phone: user.phone,
                  _id: user._id,
                  newDevice: user.newDevice,
                  token: user.token,
                  verified: user.verified,
                  lockUntil: user.lockUntil,
                  loginAttempt: user.loginAttempt,
                },
                success: true,
              });
            } catch (error) {
              return res.json("Error sending sms");
            }
          });
        } else {
          //DOB did not match
          return res.json("Information Miss match");
        }
      })
      .catch((e) => {
        res.json(e.response.data.message);
      });
  });

  //accept user id as url  query params
  //this is the route that receive the otp verificationn from phone
  ///api/verify?id=${id}&verify=${newDevice} url format
  api.post("/api/user/verify", (req, res) => {
    if (
      utilsFunction.checkBody(req.body.code) ||
      utilsFunction.checkBody(req.body.phone) ||
      utilsFunction.checkBody(req.query.id) ||
      utilsFunction.checkBody(req.query.verify)
    )
      return res.json("Invalid Parameter");

    const code = req.body.code;
    const phone =
      req.body.phone.length === 11
        ? req.body.phone.replace("0", "+234")
        : req.body.phone;
    const id = req.query.id;
    const eapayId = SHA1(id).toString().substring(0, 6);
    let verifylogin = 10 * 60 * 1000; //expires after 10 mins
    User.findById({ _id: id }, async (err, user) => {
      if (err) return res.json({ success: false, err });
      if (code === user.verifyToken) {
        if (user.lastLogin + verifylogin >= Date.now()) {
          if (req.query.verify === "true") {
            User.findByIdAndUpdate(
              { _id: id },
              {
                $set: {
                  lastLogin: Date.now(),
                  verified: 1,
                  eapayId: eapayId,
                  verifyToken: "",
                },
                $push: { device: device },
              },
              { new: true },
              (err) => {
                if (err) return res.json(err);
                return res.status(200).json({ success: true });
              }
            );
          } else {
            User.findByIdAndUpdate(
              { _id: id },
              {
                $set: {
                  lastLogin: Date.now(),
                  verified: 1,
                  eapayId: eapayId,
                  verifyToken: "",
                },
              },
              { new: true },
              (err) => {
                if (err) return res.json(err);
                return res.status(200).json({ success: true });
              }
            );
          }
        } else {
          return res.json({ success: false, msg: "Parameter Expired" });
        }
      } else {
        let verificationResult;
        try {
          verificationResult = await twilio.twilioChecks(code, phone);
        } catch (e) {
          return res.json(e);
        }
        if (verificationResult.status === "approved") {
          if (req.query.verify === "true") {
            User.findByIdAndUpdate(
              { _id: id },
              {
                $set: { lastLogin: Date.now(), verified: 1, eapayId: eapayId },
                $push: { device: device },
              },
              { new: true },
              (err) => {
                if (err) return res.json(err);
                return res.status(200).json({ success: true });
              }
            );
          } else {
            User.findByIdAndUpdate(
              { _id: id },
              {
                $set: { lastLogin: Date.now(), verified: 1, eapayId: eapayId },
              },
              { new: true },
              (err) => {
                if (err) return res.json(err);
                return res.status(200).json({ success: true });
              }
            );
          }
        }
      }
    });
  });

  //accept same parameter as the register route
  //returns error with error msg and lock the acct after five succesive wrong password for 30 mins
  //on sucess returns the merchants data
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
              user: {
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
            });
        });
      }
      let reason = User.failedLogin;
      switch (type) {
        case reason.NOT_FOUND:
        case reason.PASSWORD_INCORRECT:
          return res.json("Email or Password incorrect");
        case reason.MAX_ATTEMPTS:
          //Email notification on account
          return res.json("Check Email  for account notification");
      }
    });
  });

  //this check the authentication and verification state of the merchant
  api.get("/api/user/auth", userVerify, updateUser, (req, res) => {
    res.status(200).json({ success: true, isUser: true });
  });

  //on success log the user outand reset token
  api.get(
    "/api/user/logout",
    userVerify,
    updateUser,
    (req, res) => {
      User.findByIdAndUpdate(
        { _id: req.user._id },
        { token: "" },
        (err) => {
          if (err) return res.json(err);
          return res.status(200).json({ success: true });
        }
      );
    }
  );


};


