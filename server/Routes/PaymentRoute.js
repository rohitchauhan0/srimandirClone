const express = require('express')
const { auth, isAdmin } = require('../Middlewares/Auth')
const { capturePayment, verifyPayment, getPaymentDetails, CreatePromoCode, getCoupon, deleteCoupon } = require('../Controller/Payment')
const router = express.Router()

router.post("/capturePayment",  capturePayment)
router.post("/verifyPayment", verifyPayment)
router.get("/paymentDetail", getPaymentDetails)

router.post("/createCoupne", CreatePromoCode)
router.get("/getCoupne", getCoupon)
router.delete("/deleteCoupne", deleteCoupon)



module.exports = router