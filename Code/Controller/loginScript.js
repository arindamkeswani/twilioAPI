const express = require("express");
// const generatedOTP = require("./generateOTP");

module.exports.login = function login(req, res) {

    const accountSid = process.env.ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);
    const phone = req.body.phone;
    const otp = req.body.otp;
    client.verify.services('VAde67b3005a739fa3b35e2132336113f8')
        .verificationChecks
        .create({ to: phone, code: otp })
        .then(verification_check => console.log(verification_check.status));

    // const otp = req.body.otp;
    // if(otp == generatedOTP){
    //     console.log("Login successful");
    // }
    // else{
    //     console.log("Login failed");
    // }
}