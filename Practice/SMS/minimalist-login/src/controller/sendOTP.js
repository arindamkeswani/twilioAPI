require('dotenv').config();
let generatedOTP = require("./generateOTP")

var OTPtoBeSent = generatedOTP

// module.exports.OTPtoBeSent = OTPtoBeSent


// module.exports.sendOTP = function sendOTP(req, res) {
//       console.log(req.body);

//       const accountSid = process.env.ACCOUNT_SID;
//       const authToken = process.env.AUTH_TOKEN;
//       const client = require('twilio')(accountSid, authToken);

//       const channel = req.body.channel
//       const phone = req.body.phone
//       client.verify.services.create({ friendlyName: 'OTP' })
//             .then(service => console.log(service.sid));

//       client.verify.services(process.env.SERVICE_SID)
//             .verifications
//             .create({ to: phone, channel: channel })
//             .then(verification => console.log(verification.status));
      
      
// }

//MANUAL OTP

module.exports.sendOTP = function sendOTP(req,res) {

      // console.log(OTPtoBeSent, phone);
      // console.log(req.body.phone);
      console.log(OTPtoBeSent);
      const phone = req.body.phone
      const accountSid = process.env.ACCOUNT_SID;
      const authToken = process.env.AUTH_TOKEN;
      const client = require('twilio')(accountSid, authToken);

      // client.messages
      //       .create({ body: `Your OTP is: ${OTPtoBeSent}`, from: process.env.SENDER_NUMBER, to: `${phone}` })
      //       .then(message => console.log(message.sid));
}