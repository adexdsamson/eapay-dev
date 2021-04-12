const mongoose = require("mongoose");
const Merchant = mongoose.model("merchants");

module.exports = (req, res, next) => {
  let token = req.cookies.eapay;
  Merchant.findToken(token, (err, merchant) => {
    if (err) return res.json(err);
    if (!merchant) {
      return res.json({
        isAuth: false,
        error: true,
        msg: "You are not logged in",
      });
    }
    req.token = token;
    req.merchant = merchant;

    next();
  });
};
