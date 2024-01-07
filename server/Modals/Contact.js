const mongoose = require('mongoose')

const contactModal = new mongoose.Schema({
    fullName:{
        type:String,
    },
    email:{
        type:String,
    },
    phoneNum:{
        type:String,
    },
    message:{
        type:String,
    },
})

module.exports = mongoose.model("Contact", contactModal)