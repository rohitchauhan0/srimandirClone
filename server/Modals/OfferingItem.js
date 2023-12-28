const mongoose = require('mongoose')

const offeringItemModal = new mongoose.Schema({
    price:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }, 
    icon:{
        type:String,
        required:true
    }, 
})

module.exports = mongoose.model("offeringitem", offeringItemModal)