const express = require('express')
const app = express()

const authRoutes = require('./Routes/AuthRoutes')
const pujaRoutes = require('./Routes/PoojaRoutes')
require('dotenv').config()
 

require('./Config/Database').connectWithDb()
require('./Config/Cloudinary').cloduinaryConnect()

app.use(express.json())
const cookieParser = require('cookie-parser')
app.use(cookieParser())
const cors = require('cors')
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true
    })
)
const fileUpload = require('express-fileupload')
app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp/"
    })
)

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/puja", pujaRoutes)



const PORT = process.env.PORT || 4000
app.listen(PORT, (req, res)=>{
    console.log(`APP is running at port ${PORT}`)
})