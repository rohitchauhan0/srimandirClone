const express = require('express')
const { auth, isAdmin } = require('../Middlewares/Auth')
const { createPooja, createBenefits, getAllBenifit } = require('../Controller/Pooja')
const router = express.Router()

router.post("/createPuja", auth, isAdmin, createPooja)
router.post("/createBenefits", auth, isAdmin, createBenefits)
router.get("/getAllBenefits", getAllBenifit)

module.exports = router