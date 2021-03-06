const mongoose = require("mongoose");
const axios = require("axios");
const userAgent = require("useragent");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const formidable = require("express-formidable");
const QRCode = require("qrcode");

userAgent(true);

const Merchant = mongoose.model("merchants");

const emailCheck = require("../utils/checkEmail");
const twilio = require("../utils/twilio");
const utilsFunction = require("../utils/utilsFunction");
const random = require("../utils/random");
const mail = require("../utils/mail/mail");

const merchantVerify = require("../middleware/merchantVerify");
const updateMerchant = require("../middleware/updateMerchant");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = (api) => {
  //the merchant register route accept email and password
  //the route will  process if user phone number is entered
  //it returns the error with the error msg as json and success with the merchant data
  // on postman, pass the data through body under raw JSON
  api.post("/api/merchant/register", (req, res) => {
    const { email, password } = req.body;
    if (utilsFunction.checkBody(email) || utilsFunction.checkBody(password))
      return res.json("Invalid Parameter");
    let agent = userAgent.parse(req.headers["user-agent"]);
    let device = [];
    let lastLogin = Date.now();
    device.push(agent.toString());
    const isEmail = emailCheck(email);
    let obj = {};
    if (isEmail) {
      obj = { email, password, device, verifyToken: random(), lastLogin };
    } else {
      const phone = email.length === 11 ? email.replace("0", "+234") : email;
      obj = { phone, password, device, lastLogin };
    }
    const merchant = new Merchant(obj);
    merchant.save((err, merchants) => {
      if (err) return res.json({ success: false, err });
      if (merchant.email === undefined) {
        twilio.twilioVerify(obj.phone);
      } else {
        mail(merchant.email, "", "verify", merchant.verifyToken);
      }
      res.status(200).json({
        success: true,
        merchant: {
          name: merchants.fullname,
          email: merchants.email,
          phone: merchants.phone,
          newDevice: merchants.newDevice,
          token: merchants.token,
          _id: merchants._id,
          verified: merchants.verified,
          lockUntil: merchants.lockUntil,
          loginAttempt: merchants.loginAttempt,
        },
      });
    });
  });

  //accept merchant id as url  query params
  //this is the route that receive the otp verificationn from phone
  ///api/merchant/verify?id=${id}&verify=${newDevice}&type={phone||email} url format
  //$id=object id of the user and
  //$newDevice=device state of the user either true or false
  //it returns the updated verification, logn date and new device state of the user

  api.post("/api/merchant/verify", async (req, res) => {
    const code = req.body.code;
    if (
      utilsFunction.checkBody(code) ||
      utilsFunction.checkBody(req.query.type) ||
      utilsFunction.checkBody(req.query.id) ||
      utilsFunction.checkBody(req.query.verify)
    )
      return res.json("Invalid Parameter");
    let agent = userAgent.parse(req.headers["user-agent"]);
    let device = agent.toString();
    if (req.query.type === "email") {
      Merchant.findById(req.query.id, (err, merchant) => {
        if (err) return res.json("Invalid verification code");
        let verifylogin = 10 * 60 * 1000; //after 10 mins
        if (merchant.lastLogin + verifylogin >= Date.now()) {
          if (code === merchant.verifyToken) {
            if (req.query.verify === "false") {
              Merchant.findByIdAndUpdate(
                merchant._id,
                {
                  $set: { verified: 1, lastLogin: Date.now(), verifyToken: "" },
                },
                { new: true },
                (err) => {
                  if (err) return res.json(err);
                  return res.status(200).json({ success: true });
                }
              );
            } else {
              Merchant.findByIdAndUpdate(
                merchant._id,
                {
                  $set: { verified: 1, lastLogin: Date.now(), verifyToken: "" },
                  $push: { device: device },
                },
                { new: true },
                (err) => {
                  if (err) return res.json(err);
                  return res.status(200).json({ success: true });
                }
              );
            }
          } else {
            return res.json({ success: false, msg: "Parameters mismatch" });
          }
        } else {
          return res.json({ success: false, msg: "Parameter Expired" });
        }
      });
    } else {
      const phone =
        req.body.phone.length === 11
          ? req.body.phone.replace("0", "+234")
          : req.body.phone;
      const id = req.query.id;
      let verificationResult;
      try {
        verificationResult = await twilio.twilioChecks(code, phone);
      } catch (e) {
        return res.json(e);
      }
      if (verificationResult.status === "approved") {
        if (req.query.verify === "false") {
          Merchant.findByIdAndUpdate(
            { _id: id },
            {
              $set: { verified: 1, lastLogin: Date.now() },
            },
            { new: true },
            (err) => {
              if (err) return res.json(err);
              return res.status(200).json({ success: true });
            }
          );
        } else {
          Merchant.findByIdAndUpdate(
            { _id: id },
            {
              $set: { verified: 1, lastLogin: Date.now() },
              $push: { device: device },
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

  //accept same parameter as the register route
  //returns error with error msg and lock the acct after five succesive wrong password for 30 mins
  //on sucess returns the merchants data
  api.post("/api/merchant/login", (req, res) => {
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
    Merchant.loginMerchant(obj, password, device, (err, merchants, type) => {
      if (err) return res.json(err);
      if (merchants) {
        merchants.getToken((err, merchants) => {
          if (err) return res.json(err);
          return res
            .cookie("eapay", merchants.token)
            .status(200)
            .json({
              success: true,
              merchant: {
                name: merchants.fullname,
                email: merchants.email,
                phone: merchants.phone,
                newDevice: merchants.newDevice,
                token: merchants.token,
                _id: merchants._id,
                verified: merchants.verified,
                lockUntil: merchants.lockUntil,
                loginAttempt: merchants.loginAttempt,
              },
            });
        });
      }
      let reason = Merchant.failedLogin;
      switch (type) {
        case reason.NOT_FOUND:
        case reason.PASSWORD_INCORRECT:
          return res.json("Email or Password incorrect");
        case reason.MAX_ATTEMPTS:
          return res.json("Check Email  for account notification");
      }
    });
  });

  //this check the authentication and verification state of the merchant
  api.get("/api/merchant/auth", merchantVerify, updateMerchant, (req, res) => {
    res.status(200).json({ success: true, isMerchant: true });
  });

  api.get("/api/merchant/resend_verify", merchantVerify, (req, res) => {
    Merchant.findById({ _id: req.merchant._id }, (err, merchant) => {
      if (!merchant) return res.json({ success: false, err });
      if (merchant.phone !== "") {
        let phone =
          merchant.phone.toString().length === 13
            ? merchant.phone.toString().replace("2", "+2")
            : merchant.phone;
        twilio.twilioVerify(phone);
        res.status(200).json({ success: true });
      } else {
        let token = random();
        mail(merchant.email, merchant.fullname, "verify", token);
        res.status(200).json({ success: true });
      }
    });
  });

  //this send reset password for the merchant after after the merchant enters the email or phone and a reset password is sent to their email
  api.post("/api/merchant/reset", (req, res) => {
    const { email } = req.body;
    if (utilsFunction.checkBody(email)) return res.json("Invalid Parameter");
    const isEmail = emailCheck(email);
    let obj = {};
    if (isEmail) {
      obj = { email };
    } else {
      const phone = email.length === 11 ? email.replace("0", "+234") : email;
      obj = { phone };resend_verify
    }
    Merchant.findOne(obj, (err, merchant) => {
      if (!merchant) return res.json({ success: false, err });
      if (merchant.email !== undefined) {
        merchant.generatePasswordToken((err, merchant) => {
          if (err) return res.json({ success: false, err });
          mail(
            merchant.email,
            merchant.fullname,
            "reset",
            merchant.resetPasswordToken
          );
          return res.json({ success: true });
        });
      } else {
        return res.json({
          success: false,
          msg: "You can't reset your password without an email",
        });
      }
    });
  });

  //this route updates the merchant password with the token collected from the merchant email
  //which is sent from the client as body
  api.post("/api/merchant/reset_password", (req, res) => {
    const { resetPasswordToken, password } = req.body;
    if (
      utilsFunction.checkBody(resetPasswordToken) ||
      utilsFunction.checkBody(password)
    )
      return res.json("Invalid Parameter");
    const timeNow = Date.now().toString();
    Merchant.findOne({ resetPasswordToken }, (err, merchant) => {
      if (!merchant) return res.json({ success: false, err: "Invalid token" });
      if (timeNow <= merchant.resetPasswordTokenExp) {
        merchant.password = password;
        merchant.resetPasswordToken = "";
        merchant.resetPasswordTokenExp = "";
        merchant.save((err) => {
          if (err) return res.json({ success: false, err });
          return res.status(200).json({ success: true });
        });
      } else {
        return res.json({ success: false, err: "Token expired" });
      }
    });
  });

  //route to upload the doc using cloudinary
  //the upload image must be named FILE
  //the url gotten from cloudinary is updated in the db
  api.post(
    "/api/merchant/doc_upload",
    merchantVerify,
    updateMerchant,
    formidable(),
    (req, res) => {
      if (utilsFunction.checkFile(req.files.file))
        return res.json("Upload a valid document");
      cloudinary.uploader.upload(req.files.file.path, (err, result) => {
        if (err) return res.json(err);
        Merchant.findByIdAndUpdate(
          { _id: req.merchant._id },
          { docUpload: result.url },
          { new: true },
          (err, doc) => {
            if (err) return res.json(err);
            res
              .status(200)
              .json({ success: true, msg: "File uploaded successfully" });
          }
        );
      });
    }
  );

  //this upsate the profile of the merchant,
  //it checks the account number befire perfoming the update
  api.post(
    "/api/merchant/profile",
    merchantVerify,
    updateMerchant,
    (req, res) => {
      const { accNumber, bank } = req.body;
      const body = req.body;
      if (
        utilsFunction.checkBody(body) ||
        utilsFunction.checkBody(accNumber) ||
        utilsFunction.checkBody(bank)
      )
        return res.json("Invalid Parameter");
      axios
        .get(
          `https://api.paystack.co/bank/resolve?account_number=${accNumber}&bank_code=${bank}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
            },
          }
        )
        .then((resp) => {
          const qrImg = [{ body }];
          QRCode.toDataURL(qrImg, function (err, url) {
            //access the qrcode with <img src=qrcodeurl />
            Merchant.findByIdAndUpdate(
              { _id: req.merchant._id },
              { $set: req.body, qrcodeUrl: url },
              { new: true },
              (err, merchants) => {
                if (err) return res.json(err);
                return res.status(200).json({
                  success: true,
                  merchant: {
                    name: merchants.fullname,
                    email: merchants.email,
                    phone: merchants.phone,
                    newDevice: merchants.newDevice,
                    token: merchants.token,
                    _id: merchants._id,
                    verified: merchants.verified,
                    lockUntil: merchants.lockUntil,
                    loginAttempt: merchants.loginAttempt,
                  },
                });
              }
            );
          });
        })
        .catch((e) => {
          res.json(e.response.data.message);
        });
    }
  );

  //on success log the user outand reset token
  api.get("/api/merchant/logout", merchantVerify, (req, res) => {
    Merchant.findByIdAndUpdate(
      { _id: req.merchant._id },
      { token: "" },
      (err) => {
        if (err) return res.json(err);
        return res.status(200).json({ success: true });
      }
    );
  });
};
