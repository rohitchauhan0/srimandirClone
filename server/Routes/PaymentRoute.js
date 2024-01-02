const express = require('express')
const { auth, isAdmin } = require('../Middlewares/Auth')
const { capturePayment, verifyPayment, getPaymentDetails, CreatePromoCode, getCoupon, deleteCoupon } = require('../Controller/Payment')
const router = express.Router()

router.post("/capturePayment", auth, capturePayment)
router.post("/verifyPayment", auth, verifyPayment)
router.get("/paymentDetail", auth, getPaymentDetails)

router.post("/createCoupne", CreatePromoCode)
router.get("/getCoupne", getCoupon)
router.delete("/deleteCoupne", deleteCoupon)



module.exports = router