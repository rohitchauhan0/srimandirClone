const express = require('express')
const { auth, isAdmin } = require('../Middlewares/Auth')
const { createPackage, getAllPackage, deletePackage } = require('../Controller/Package')
const router = express.Router()

router.post("/createPackage", auth, isAdmin, createPackage)
router.get("/getAllPackage", getAllPackage)
router.delete("/deletePackage", auth, isAdmin, deletePackage)

module.exports = router