const express = require('express')
const { signUp, sendOtp, login, updateProfileImage, updateProfile, getuserDetailById } = require('../Controller/Auth')
const { auth } = require('../Middlewares/Auth')
const router = express.Router()

router.post("/signup", signUp)
router.post("/sendotp", sendOtp)
router.post("/login", login)
router.post("/updateImage", auth, updateProfileImage)
router.post("/updateProfile", auth, updateProfile)
router.post("/getUserById", auth, getuserDetailById)

module.exports = router