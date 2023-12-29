const mongoose = require('mongoose')

const AuthModal = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    phoneNum:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    accountType:{
        type:String,
        required:true
    },
    token:{
        type:String
    },
    resetPasswordExpires: {
        type: Date,
    },
    pooja:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"payment"
        }
    ],
    image:{
        type:String,
        
    }
})

module.exports = mongoose.model("user", AuthModal)