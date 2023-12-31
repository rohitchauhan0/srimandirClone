const express = require('express')
const { createSection, getSectionOnlyName, getFullSection, getSectionByName } = require('../Controller/Section')
const router = express.Router()

router.post("/createSection", createSection)
router.get("/getSectionName", getSectionOnlyName)
router.post("/getFullSection", getFullSection)
router.post("/getSectionByName", getSectionByName)

module.exports = router