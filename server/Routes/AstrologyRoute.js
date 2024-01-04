const express = require('express')
const { createForm, getAstrologyForm, deleteForm } = require('../Controller/Astrology')
const router = express.Router()

router.post("/createForm", createForm)
router.get("/getForm", getAstrologyForm)
router.delete("/deleteForm", deleteForm)

module.exports = router