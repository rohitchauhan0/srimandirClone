const User = require('../Modals/Auth')
const crypto = require('crypto')
const bcrypt = require('bcrypt')
const { mailSender } = require('../Utils/Mailsender')

exports.resetPasswordToken = async(req, res)=>{
    try {
        const {email}= req.body
        const user = await User.findOne({email:email})
        if(!user){
            return res.status(401).json({
                success:false,
                message:"User not found by this email"
            })
        }
        const token = crypto.randomBytes(20).toString("hex")
        const updateDetails = await User.findOneAndUpdate({email:email},{
            token:token,
            resetPasswordExpires:Date.now() + 3600000
        },{new:true})

        const url = `http://localhost:3000/update-password/${token}`;

        await mailSender(email, "Password reset", `Your Link for email verification is ${url}. Please click this url to reset your password.`)
        res.json({
			success: true,
			message:
				"Email Sent Successfully, Please Check Your Email to Continue Further",
		});
	} catch (error) {
		return res.json({
			error: error.message,
			success: false,
			message: `Some Error in Sending the Reset Message`,
		});
	}
}


exports.resetPassword = async (req, res) => {
	try {
		const { password, confirmPassword, token } = req.body;
        console.log(password, confirmPassword, token)

		if (confirmPassword !== password) {
			return res.json({
				success: false,
				message: "Password and Confirm Password Does not Match",
			});
		}
		const userDetails = await User.findOne({ token: token });
		if (!userDetails) {
			return res.json({
				success: false,
				message: "Token is Invalid",
			});
		}
		if (!(userDetails.resetPasswordExpires > Date.now())) {
			return res.status(403).json({
				success: false,
				message: `Token is Expired, Please Regenerate Your Token`,
			});
		}
		const encryptedPassword = await bcrypt.hash(password, 10);
		await User.findOneAndUpdate(
			{ token: token },
			{ password: encryptedPassword },
			{ new: true }
		);
		res.json({
			success: true,
			message: `Password Reset Successful`,
		});
	} catch (error) {
		return res.json({
			error: error.message,
			success: false,
			message: `Some Error in Updating the Password`,
		});
	}
};