const Astrology = require('../Modals/Autrology')
const { mailSender } = require('../Utils/Mailsender')
const User = require('../Modals/Auth')

exports.createForm = async(req, res)=>{
    try {
        const {fullName, phoneNum, dob, address, timeOfBirth, placeOfBirth}= req.body
        await Astrology.create({
            fullName, phoneNum, dob, address, timeOfBirth, placeOfBirth
        })
        const Admin = "Admin"
        const adminDetail = await User.findOne({accountType:Admin})

        mailSender(adminDetail.email, "Astrology form", "A new user filled the astrology form")

        return res.status(200).json({
            success:true,
            message:"Form created"
        })
        
    } catch (error) {
        console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
    }
}

exports.getAstrologyForm = async(req, res)=>{
    try {
        const response = await Astrology.find({}).sort({createdAt:-1}).exec()
        return res.status(200).json({
            success:true,
            data:response
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: error.message,
        });
    }
}


exports.deleteForm = async(req, res)=>{
    try {
        const {formId} = req.body
        await Astrology.findByIdAndDelete(formId)
        return res.status(200).json({
            success:true,
            message:"Delted"
        })
        
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: error.message,
        });
    }
}