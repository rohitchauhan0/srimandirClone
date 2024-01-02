const mongoose = require('mongoose')

const promoModal = new mongoose.Schema({
    coupneCode:{
        type:String,
        required:true
    },
    percentage:{
        type:String,
        required:true
    },

    description:{
        type:String
    }, 
})

module.exports = mongoose.model("promoCode", promoModal)