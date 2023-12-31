const mongoose = require('mongoose')

const sectionModal = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    mainHindiTitle:{
type:String
    },
    subsection:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"subsection"
        }
    ],
   
})

module.exports = mongoose.model("section", sectionModal)