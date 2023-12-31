const express = require('express')
const { createArti, createChalisa, getSubsectionById, getFullSubSection, deleteSubSection, createMantra, createBlog } = require('../Controller/SubSection')
const router = express.Router()

router.post("/createArti", createArti)
router.post("/createChalisa", createChalisa)
router.post("/createMantra", createMantra)
router.post("/getSubsectionById", getSubsectionById)
router.get("/getFullSubSection", getFullSubSection )
router.delete("/deleteSubSection", deleteSubSection )
router.post("/createBlogSection", createBlog )


module.exports = router