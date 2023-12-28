const express = require('express')
const { signUp, sendOtp, login, updateProfileImage, getuserDetailById, updatePhoneNum, changePassword } = require('../Controller/Auth')
const { auth } = require('../Middlewares/Auth')
const router = express.Router()

router.post("/signup", signUp) 
router.post("/sendotp", sendOtp)
router.post("/login", login)
router.post("/updateImage", auth, updateProfileImage)
router.post("/updatePhoneNum", auth, updatePhoneNum)
router.post("/getUserById", auth, getuserDetailById)
router.post("/changePassword", auth, changePassword)

module.exports = router