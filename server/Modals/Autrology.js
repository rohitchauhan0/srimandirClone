const mongoose = require('mongoose')

const AstrologyModal = new mongoose.Schema({
    fullName:{
        type:String
    },
    phoneNum:{
        type:String,
    },
    address:{
        type:String
    },
    dob:{
        type:Date
    },
    timeOfBirth:{
        type:Date
    },
    placeOfBirth:{
        type:Date
    },
    createdAt:{
        type:Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Astrology", AstrologyModal)