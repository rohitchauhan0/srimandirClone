const express = require('express')
const { signUp, sendOtp, login, updateProfileImage, getuserDetailById, updatePhoneNum, changePassword } = require('../Controller/Auth')
const { auth } = require('../Middlewares/Auth')
const { resetPasswordToken, resetPassword } = require('../Controller/ResetPassword')
const { createContact } = require('../Controller/ContactUs')
const router = express.Router()

router.post("/signup", signUp) 
router.post("/sendotp", sendOtp)
router.post("/login", login)
router.post("/updateImage", auth, updateProfileImage)
router.post("/updatePhoneNum", auth, updatePhoneNum)
router.post("/getUserById", auth, getuserDetailById)
router.post("/changePassword", auth, changePassword)

router.post("/resetPasswordToken", resetPasswordToken)
router.post("/resetPassword", resetPassword)

router.post("/contactUs", createContact)

module.exports = router