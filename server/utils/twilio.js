const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

module.exports = {
  //this send otp message to the user
  twilioVerify: function (phone) {
    twilio.verify
      .services(process.env.TWILIO_VERIFICATION_SID)
      .verifications.create({ to: phone, channel: "sms" });
  },

  //this receives the otp
  twilioChecks: function (code, phone) {
    return twilio.verify
      .services(process.env.TWILIO_VERIFICATION_SID)
      .verificationChecks.create({
        code: code,
        to: phone,
      });
  },
};
