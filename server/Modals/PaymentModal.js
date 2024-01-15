const mongoose = require('mongoose')

const paymentModal = new mongoose.Schema({
    fullname:{
        type:String
    },
    phoneNum:{
        type:String
    },
    gotra:{
        type:String
    },
    address:{
        type:String
    },
    dob:{
        type:String
    },
    poojaId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"pooja"
    },
    packageId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"package"
    },
    offeringItem:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"offeringitem"
    }],
    totalPrice:{
        type:Number,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
}, {timestamps:true})

module.exports = mongoose.model("payment", paymentModal)