const mongoose = require('mongoose')
const locationModal = new mongoose.Schema({
    location:{
        type:String,
        required:true,
    },
    image:{
        type:String,
         required:true
    },
    templeDetails:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"templeDetails"
    }],
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("templeLoc", locationModal)