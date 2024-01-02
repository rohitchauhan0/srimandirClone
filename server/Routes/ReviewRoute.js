const express = require('express')
const { rating, getRating } = require('../Controller/Rating')
const router = express.Router()

router.post("/createReview", rating)
router.get("/getReview", getRating)

module.exports = router