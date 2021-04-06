//contains the user data as stored in the DB
const monogoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config;
const jwt = require("jsonwebtoken");


const twilio = require("../utils/twilio");
const random = require("../utils/random");
const mail = require("../utils/mail/mail");


const SALT = 10;
const MAX_LOGIN = 5;
const LOCK_UNTIL = 0.5 * 60 * 60 * 1000; //lock the user out after 5consecutive failed login attempt

const userSchema = monogoose.Schema({
  username: {
    type: String,
    index: {
      unique: true,
      partialFilterExpression: { username: { $type: "string" } },
    },
  },
  eapayId: String,
  email: { type: String, unique: 1 },
  password: { type: String, minLength: 8 },
  phone: { type: Number, minLength: 10, maxLength: 14, unique: 1 },
  firstname: String,
  lastname: String,
  dob: String,
  lastLogin: Number,
  device: [String],
  newDevice: Boolean,
  token: String,
  verifyToken: String,
  verified: { type: Boolean, default: 0 },
  lockUntil: { type: Number, default: 0 },
  loginAttempt: { type: Number, default: 0 },
});

userSchema.pre("save", function (next) {
  var user = this;
  if (!user.isModified("password")) return next();
  bcrypt.genSalt(SALT, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next();
      user.password = hash;
      next();
    });
  });
});


userSchema.virtual("isLocked").get(function () {
  return !!(this.lockUntil && this.lockUntil > Date.now());
});

userSchema.methods.comparePassword = function (userPassword, cb) {
  bcrypt.compare(userPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.statics.failedLogin = {
  NOT_FOUND: 0,
  PASSWORD_INCORRECT: 1,
  MAX_ATTEMPTS: 2,
  VERIFY_OTP: 3,
};

userSchema.methods.incLogin = function (cb) {
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

userSchema.statics.loginUser = function (obj, password, device, cb) {
  this.findOne(obj, function (err, user) {
    if (err) return cb(err);
    if (!user) return cb(null, null, 0); //  NOT_FOUND: 0,

    if (user.isLocked) {
      return user.incLogin(function (err) {
        if (err) return cb(err);
        return cb(null, null, 2); //  MAX_ATTEMPTS: 2,
      });
    }
    user.comparePassword(password, function (err, isMatch) {
      if (isMatch) {
        if (!user.loginAttempt || !user.lockUntil) {
          let newlogin = 7 * 24 * 60 * 60 * 1000; //after seven days
          user.newDevice =
            user.device.indexOf(device) === -1 ? true : false;
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
            if (phone !== "") {
              twilio.twilioVerify(phone);
              var updates = {
                $set: { loginAttempt: 1, newDevice: true },
                $unset: { lockUntil: 1 },
              };
              return user.update(updates, function (err) {
                if (err) return cb(err);
                return cb(null, user);
              });
            } else {
              let token = random();
              mail(user.email, user.fullname, "verify", token);
              let updates = {
                $set: {
                  loginAttempt: 1,
                  newDevice: true,
                  verifyToken: token,
                },
                $unset: { lockUntil: 1 },
              };
              return user.update(updates, function (err) {
                if (err) return cb(err);
                return cb(null, user);
              });
              // });
            }
          }
          var updates = {
            $set: { loginAttempt: 1, lastLogin: Date.now(), newDevice: false },
            $unset: { lockUntil: 1 },
          };
          return user.update(updates, function (err) {
            if (err) return cb(err);
            return cb(null, user);
          });
        }
      }
      user.incLogin(function (err) {
        if (err) return cb(err);
        return cb(null, null, 1); // PASSWORD_INCORRECT: 1,
      });
    });
  });
};

userSchema.methods.getToken = function (cb) {
  var user = this;
  var token = jwt.sign(user._id.toHexString(), process.env.SECRET_KEY);
  user.token = token;
user.save(function (err, user) {
    if (err) return cb(err);
    return cb(null, user);
  });
};

userSchema.statics.findToken = function (token, cb) {
  var user = this;
  jwt.verify(token, process.env.SECRET_KEY, function (err, decode) {
    user.findOne({ _id: decode, token }, function (err, user) {
      if (err) return cb(err);
      return cb(null, user);
    });
  });
};


monogoose.model("users", userSchema);
