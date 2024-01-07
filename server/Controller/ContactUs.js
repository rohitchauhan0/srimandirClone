const Contact = require('../Modals/Contact')
const { mailSender } = require('../Utils/Mailsender')
const User = require('../Modals/Auth')

exports.createContact = async(req, res)=>{
    try {
        const {fullName, email, phoneNum, message} = req.body
        await Contact.create({
            fullName, email, phoneNum, message
        })
        const adminDetail = await User.findOne({accountType:"Admin"})
        await mailSender(adminDetail.email, "New contact" , `${fullName} ${email} ${phoneNum} ${message} `)
        return res.status(200).json({
            success:true,
            message:"Submitted"
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
          success: false,
          message: error.message,
        });
    }
}