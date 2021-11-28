require('dotenv').config();
let OTPtoBeSent = require("./generateOTP")




module.exports.sendOTP = function sendOTP(req, res) {
  const accountSid = process.env.ACCOUNT_SID;
  const authToken = process.env.AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);
  const phone = req.body.phone;
  const channel = req.body.channel;
  //CREATE TOKEN
  client.verify.services.create({ friendlyName: 'OTP2' })
    .then(service => console.log(service.sid));

    //SEND TOKEN
  client.verify.services('VAde67b3005a739fa3b35e2132336113f8')
    .verifications
    .create({ to: phone, channel: channel })
    .then(verification => console.log(verification.status));
}




module.exports.sendOTPSMS = function sendOTP(req, res) {
  const accountSid = process.env.ACCOUNT_SID;
  const authToken = process.env.AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);
  const phone = req.body.phone;

  client.messages
    .create({
      body: `Your OTP is: ${OTPtoBeSent}`,
      from: process.env.SENDER_NUMBER,
      to: `${phone}`
    })
    .then(message => console.log(message.sid));
}

module.exports.sendOTPCall = function sendOTP(req, res) {
  const accountSid = process.env.ACCOUNT_SID;
  const authToken = process.env.AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);
  const phone = req.body.phone;
  console.log(phone);
  client.calls
    .create({
      twiml: `<Response> <Say> Your OTP is ${OTPtoBeSent} </Say> </Response>`,
      to: `${phone}`,
      from: process.env.SENDER_NUMBER
    })
    .then(call => console.log(call.sid));
}