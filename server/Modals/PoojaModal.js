const mongoose = require('mongoose')

const  poojaModal = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    descripton:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true
    },
    benfits:[
        {
            type:String
        }
    ],
    templeDetails:{
        type:String,
        required:true
    },
    image1:{
        type:String,
    }, 
    image2:{
        type:String,
    }, 
    image3:{
        type:String,
    },
    image4:{
        type:String,
    },
     personImage4:{
        type:String,
    },
    personName:{
        type:String
    },
    personExperience:{
        type:String
    }
})

module.exports = mongoose.model("pooja", poojaModal)