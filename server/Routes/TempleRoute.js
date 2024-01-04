const express = require('express')
const { createLoc, createTempleDetails, getTemple, getTempleById, getTempleByLoc } = require('../Controller/Temple')

const router = express.Router()
router.post("/createLoc", createLoc)
router.post("/createTempleDetail", createTempleDetails)
router.post("/getTemple", getTemple)
router.post("/getTempleById", getTempleById)
router.post("/getTempleByLocId", getTempleByLoc)

module.exports = router