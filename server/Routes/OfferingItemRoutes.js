const express = require('express')
const { auth, isAdmin } = require('../Middlewares/Auth')
const { getItem, deleteItem, createOfferingItem } = require('../Controller/OfferingItem')

const router = express.Router()

router.post("/createItem", auth, isAdmin, createOfferingItem)
router.get("/getItem", getItem)
router.delete("/deleteItem", auth, isAdmin, deleteItem)

module.exports = router