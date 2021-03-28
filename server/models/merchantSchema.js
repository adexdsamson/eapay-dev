const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config;

const twilio = require("../utils/twilio");

const MAX_LOGIN = 5;
const LOCK_UNTIL = 0.5 * 60 * 60 * 1000; //lock the user out after 5consecutive failed login attempt
const SALT = 10;

const merchantSchema = mongoose.Schema({
  email: {
    type: String,
    trim: true,
    validate: async (value, isValid) => {
      try {
        await merchantModel.findOne({ email: value }).exec((err, user) => {
          if (err) return Promise.reject(new Error("Address already taken!"));
          if (user) return true;
        });
      } catch (error) {
        return Promise.reject(new Error("Address already taken!"));
      }
    },
  },
  phone: {
    type: Number,
    trim: true,
    validate: async (value) => {
      try {
        await merchantModel.findOne({ phone: value }).exec((err, user) => {
          if (err) return Promise.reject(new Error("Phone number in use!"));
          if (user) return true;
        });
      } catch (error) {
        return Promise.reject(new Error("Phone number in use!"));
      }
    },
  },
  businessName: {
    type: String,
    trim: true,
    validate: async (value) => {
      try {
        await merchantModel
          .findOne({ businessName: value })
          .exec((err, user) => {
            if (res)
              return Promise.reject(
                new Error("CAC won't issue two business name!")
              );
            if (user) return true;
          });
      } catch (error) {
        return Promise.reject(new Error("CAC won't issue two business name!"));
      }
    },
  },
  accNumber: {
    type: Number,
    trim: true,
    validate: async (value) => {
      try {
        await merchantModel.findOne({ accNumber: value }).exec((err, user) => {
          if (res)
            return Promise.reject(
              new Error("This account number is already in use!")
            );
          if (user) return true;
        });
      } catch (error) {
        return Promise.reject(
          new Error("This account number is already in use!")
        );
      }
    },
  },
  businessDesc: String,
  password: { type: String, minLength: 8, required: true },
  industry: String,
  category: String,
  fullname: String,
  location: String,
  position: String,
  bank: Number,
  document: String,
  docUpload: String,
  token: String,
  lastLogin: Number,
  device: [String],
  newDevice: { type: Boolean, default: 1 },
  qrcodeUrl: String,
  qrcodeUrl: String,
  verified: { type: Boolean, default: 0 },
  lockUntil: { type: Number, default: 0 },
  loginAttempt: { type: Number, default: 0 },
});

merchantSchema.pre("save", function (next) {
  var merchant = this;
  if (!merchant.isModified("password")) return next();
  bcrypt.genSalt(SALT, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(merchant.password, salt, function (err, hash) {
      if (err) return next();
      merchant.password = hash;
      next();
    });
  });
});

merchantSchema.virtual("isLocked").get(function () {
  return !!(this.lockUntil && this.lockUntil > Date.now());
});

merchantSchema.methods.comparePassword = function (merchantPassword, cb) {
  bcrypt.compare(merchantPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

merchantSchema.statics.failedLogin = {
  NOT_FOUND: 0,
  PASSWORD_INCORRECT: 1,
  MAX_ATTEMPTS: 2,
  VERIFY_OTP: 3,
};

merchantSchema.methods.incLogin = function (cb) {
  if (this.lockUntil && this.lockUntil < Date.now())
    return this.update(
      { $set: { loginAttempt: 1 }, $unset: { lockUntil: 1 } },
      cb
    );
  var updates = { $inc: { loginAttempt: 1 } };
  if (this.loginAttempt + 1 >= MAX_LOGIN && !this.isLocked) {
    updates.$set = { lockUntil: Date.now() + LOCK_UNTIL };
  }
  return this.update(updates, cb);
};

merchantSchema.statics.loginMerchant = function (obj, password, device, cb) {
  this.findOne(obj, function (err, merchant) {
    if (err) return cb(err);
    if (!merchant) return cb(null, null, 0); //  NOT_FOUND: 0,

    if (merchant.isLocked) {
      return merchant.incLogin(function (err) {
        if (err) return cb(err);
        return cb(null, null, 2); //  MAX_ATTEMPTS: 2,
      });
    }
    merchant.comparePassword(password, function (err, isMatch) {
      if (isMatch) {
        if (!merchant.loginAttempt || !merchant.lockUntil) {
          let newlogin = 7 * 24 * 60 * 60 * 1000; //after seven days
          merchant.newDevice =
            merchant.device.indexOf(device) === -1 ? true : false;
          let phone = merchant.phone
            ? merchant.phone.toString().length === 13
              ? merchant.phone.toString().replace("2", "+2")
              : merchant.phone
            : merchant.email;
          if (
            !merchant.verified ||
            merchant.newDevice ||
            Date.now() > merchant.lastLogin + newlogin
          ) {
            //will verify with emial in case the user do not have a phone number
            //check if its email before sending
            twilio.twilioVerify(phone);
            var updates = {
              $set: { loginAttempt: 1, newDevice: true },
              $unset: { lockUntil: 1 },
            };
            return merchant.update(updates, function (err) {
              if (err) return cb(err);
              return cb(null, merchant);
            });
          }
          var updates = {
            $set: { loginAttempt: 1, lastLogin: Date.now(), newDevice: false },
            $unset: { lockUntil: 1 },
          };
          return merchant.update(updates, function (err) {
            if (err) return cb(err);
            return cb(null, merchant);
          });
        }
      }
      merchant.incLogin(function (err) {
        if (err) return cb(err);
        return cb(null, null, 1); // PASSWORD_INCORRECT: 1,
      });
    });
  });
};

merchantSchema.methods.getToken = function (cb) {
  var merchant = this;
  var token = jwt.sign(merchant._id.toHexString(), process.env.SECRET_KEY);
  merchant.token = token;
  merchant.save(function (err, merchant) {
    if (err) return cb(err);
    return cb(null, merchant);
  });
};

merchantSchema.statics.findToken = function (token, cb) {
  var merchant = this;
  jwt.verify(token, process.env.SECRET_KEY, function (err, decode) {
    merchant.findOne({ _id: decode, token }, function (err, merchant) {
      if (err) return cb(err);
      return cb(null, merchant);
    });
  });
};

const merchantModel = mongoose.model("merchants", merchantSchema);
