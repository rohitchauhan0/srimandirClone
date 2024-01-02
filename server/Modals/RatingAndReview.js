const mongoose = require('mongoose')

const ratingModal = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    personPic:{
        type:String
    },
    review:{
        type:String
    }
})

module.exports = mongoose.model("rating", ratingModal)