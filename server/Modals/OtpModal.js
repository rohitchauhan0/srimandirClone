const mongoose  = require('mongoose')
const { mailSender } = require('../Utils/Mailsender')

const otpModal = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:60*5
    }
})

async function sendVerificationMail(email, otp){
    try {
        await mailSender(email, "Verification email", `Otp -> ${otp}`)
        
    } catch (error) {
        console.log(error)
    }
}

otpModal.pre("save", async function(next){
        if(this.isNew){
            await sendVerificationMail(this.email, this.otp)
        }
        next()
})



module.exports = mongoose.model("otp", otpModal)