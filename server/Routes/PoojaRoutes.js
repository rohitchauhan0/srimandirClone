const express = require('express')
const { auth, isAdmin } = require('../Middlewares/Auth')
const { createPooja, createBenefits, getAllBenifit, getAllPooja, getPoojaByid, deletePooja, editDate, deleteBenefit } = require('../Controller/Pooja')
const router = express.Router()

router.post("/createPuja", auth, isAdmin, createPooja)
router.post("/createBenefits", auth, isAdmin, createBenefits)
router.get("/getAllBenefits", getAllBenifit)
router.delete("/deleteBenefits", auth, isAdmin, deleteBenefit)
router.get("/getAllPooja", getAllPooja)
router.post("/getPoojaByid", getPoojaByid)
router.delete("/deletePooja", deletePooja)
router.put("/editDate", editDate)

module.exports = router