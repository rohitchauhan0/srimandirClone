const express = require('express')
const app = express()

const authRoutes = require('./Routes/AuthRoutes')
const pujaRoutes = require('./Routes/PoojaRoutes')
const packageRoutes = require('./Routes/PackageRoute')
const itemRoutes = require('./Routes/OfferingItemRoutes')
const paymentRoutes = require('./Routes/PaymentRoute')
const sectionRoutes = require('./Routes/SectionRoutes')
const SubsectionRoutes = require('./Routes/SubsectionRoutes')
const reviewRoutes = require('./Routes/ReviewRoute') 
const templeRoutes = require('./Routes/TempleRoute') 
const astrologyRoutes = require('./Routes/AstrologyRoute') 
require('dotenv').config()
 

require('./Config/Database').connectWithDb()
require('./Config/Cloudinary').cloduinaryConnect()

app.use(express.json())
const cookieParser = require('cookie-parser') 
app.use(cookieParser())
const cors = require('cors')
app.use(
    cors({
        origin:"https://srimandir-clone.vercel.app",
        // origin:"http://localhost:3000",
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
app.use("/api/v1/package", packageRoutes)
app.use("/api/v1/item", itemRoutes)
app.use("/api/v1/payment", paymentRoutes)
app.use("/api/v1/section", sectionRoutes)
app.use("/api/v1/subsection", SubsectionRoutes)
app.use("/api/v1/review", reviewRoutes)
app.use("/api/v1/temple", templeRoutes)
app.use("/api/v1/astrology", astrologyRoutes)



const PORT = process.env.PORT || 4000
app.listen(PORT, (req, res)=>{
    console.log(`APP is running at port ${PORT}`)
})