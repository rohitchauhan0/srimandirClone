const mongoose = require('mongoose')

const paymentModal = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
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