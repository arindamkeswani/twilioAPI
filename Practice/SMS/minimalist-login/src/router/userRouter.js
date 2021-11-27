const express = require('express');

const userRouter = express.Router();

const { login } = require('../controller/loginScript');
const { sendOTP } = require('../controller/sendOTP');
userRouter
    .route("/login")
    .post(login)


userRouter
    .route("/verify/sms")
    .post(sendOTP)

userRouter
    .route("/verify/call")
    .post(sendOTP)
module.exports = userRouter