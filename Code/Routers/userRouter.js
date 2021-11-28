const express = require('express');

const userRouter = express.Router();

const {sendOTP} = require("../Controller/sendOTP");
const {sendOTPSMS, sendOTPCall} = require("../Controller/sendOTP");
const {login} = require("../Controller/loginScript");

userRouter
    .route("/login")
    .post(login)

userRouter
    .route("/verify/otp")
    .post(sendOTP)

userRouter
    .route("/verify/sms")
    .post(sendOTPSMS)

userRouter
    .route("/verify/call")
    .post(sendOTPCall)

module.exports = userRouter;