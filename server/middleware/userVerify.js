const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = (req, res, next) => {
    let token = req.cookies.eapay;
    User.findToken(token, (err, user) => {
        if (err) throw err;
        if (!user) {
            //   req.cookies.prevUrl = req.url;
            //   res.redirect("/api/merchant/login");
            return res.json({
                isAuth: false,
                error: true,
            });
        }
        req.token = token;
        req.user = user;

        next();
    });
};
