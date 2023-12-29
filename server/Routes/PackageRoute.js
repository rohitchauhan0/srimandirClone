const express = require('express')
const { auth, isAdmin } = require('../Middlewares/Auth')
const { createPackage, getAllPackage, deletePackage, getPackageDetailById } = require('../Controller/Package')
const router = express.Router()

router.post("/createPackage", auth, isAdmin, createPackage)
router.get("/getAllPackage", getAllPackage)
router.post("/getPackageById", getPackageDetailById)
router.delete("/deletePackage", auth, isAdmin, deletePackage)

module.exports = router