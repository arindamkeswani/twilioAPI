const express = require('express');
const authRouter = express.Router();
// const generatedOTP = require('./generateOTP')
const sendOTPsms = require('./sendOTP').sendOTP
// const userModel = require('../models/userModels');
//ywgdyqws

module.exports.login =function loginUser(req, res) {
    // try {
        
        const accountSid = process.env.ACCOUNT_SID;
        const authToken = process.env.AUTH_TOKEN;
        const client = require('twilio')(accountSid, authToken);
        const otp = req.body.otp
        const phone = req.body.phone
        // console.log(phone, otp);
        client.verify.services(process.env.SERVICE_SID)
            .verificationChecks
            .create({to: phone, code: otp})
            .then(verification_check => console.log(verification_check.status));
        
    // }catch (err) {
    //     res.statusCode = 500
    //     return res.json({
    //         message: err.message
    //     })
    // }

}