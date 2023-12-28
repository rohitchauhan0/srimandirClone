const mongoose = require('mongoose')

const packageModal = new mongoose.Schema({
    price:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    addPeople:{
        type:Number,
        required:true
    },
    benefit1:{
        type:String,
        required:true
    }, 
    benefit2:{
        type:String,
        required:true
    }, 
    benefit3:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model("package", packageModal)