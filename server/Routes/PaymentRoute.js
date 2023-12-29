const express = require('express')
const { auth, isAdmin } = require('../Middlewares/Auth')
const { capturePayment, verifyPayment, getPaymentDetails } = require('../Controller/Payment')
const router = express.Router()

router.post("/capturePayment", auth, capturePayment)
router.post("/verifyPayment", auth, verifyPayment)
router.get("/paymentDetail", auth, getPaymentDetails)



module.exports = router