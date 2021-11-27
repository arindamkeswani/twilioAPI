const express = require('express');
const app = express();
const authRouter = express.Router();
const generatedOTP = require('./generateOTP')
const sendOTPsms = require('./sendOTP').sendOTP
// const userModel = require('../models/userModels');
//ywgdyqws

module.exports.login = async function loginUser(req, res) {

    //MANUAL 
    const otp = req.body.otp
    console.log(req.body.otp, generatedOTP);
    if (otp == generatedOTP) {
        // res.send("true");
        // console.log('hi loginscript');
        return await res.redirect('/homePage');
            // //console.log(req, res);
            // return res.sendFile('Practice\\SMS\\minimalist-login\\src\\view\\home.html', 
            // {root:"E:\\Snippets\\Backend\\Twilio"});
        
    }
    else {
        console.log("Wrong");
    }
    //VERIFY API
    // try {
    // //----------------------------------------------------------------------
    // const accountSid = process.env.ACCOUNT_SID;
    // const authToken = process.env.AUTH_TOKEN;
    // const client = require('twilio')(accountSid, authToken);
    // const otp = req.body.otp
    // const phone = req.body.phone
    // // console.log(phone, otp);
    // client.verify.services(process.env.SERVICE_SID)
    //     .verificationChecks
    //     .create({to: phone, code: otp})
    //     .then(verification_check => console.log(verification_check.status))
    //     .then(res.redirect('/home'));
    //-----------------------------------------------------------------------
    // }catch (err) {
    //     res.statusCode = 500
    //     return res.json({
    //         message: err.message
    //     })
    // }

}