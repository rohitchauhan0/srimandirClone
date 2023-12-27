const mongoose = require('mongoose')
require('dotenv').config()

exports.connectWithDb = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    }).then(console.log("Connect with database")).catch((error)=>{
        console.log("Error in db", error)
        process.exit(1)
    })
}