const mongoose = require('mongoose')

const poojaBenefitsModal = new mongoose.Schema({
    icons:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("poojaBenefits", poojaBenefitsModal)