const User = require("../Modals/Auth");
const Otp = require("../Modals/OtpModal");
const bcyrpt = require("bcrypt");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const { uploadImageToCloudinary } = require("../Utils/uploadImage");

exports.signUp = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phoneNum,
      password,
      confirmPassword,
      otp,
      accountType,
    } = req.body;
    console.log(password, confirmPassword)

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(200).json({
        success: false,
        message: "User already exist",
      });
    }

    if (password !== confirmPassword) {
      return res.status(200).json({
        success: false,
        message: "Password do not match",
      });
    }

    const findOtp = await Otp.find({ email })
      .sort({ createdAt: -1 })
      .limit(1)
      .exec();

    if (findOtp.length === 0) {
      return res.status(400).json({
        success: false,
        message: "The otp is not valid, Please try again!",
      });
    } else if (otp !== findOtp[0].otp) {
      return res.status(400).json({
        success: false,
        message: "The otp is not valid, Please try again!",
      });
    }

    const hashpassword = await bcyrpt.hash(password, 10);

    const user = await User.create({
      fullName,
      email,
      phoneNum,
      password: hashpassword,
      accountType,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${fullName}`,
    });

    return res.status(200).json({
      success: true,
      message: "Sign up successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    console.log(email)
    const checkUser = await Otp.findOne({ email });
    if (checkUser) {
      return res.status(400).json({
        success: false,
        message: "User already present",
      });
    }

    let otpGenerate = otpGenerator.generate(6, {
      lowerCaseAlphabets: false,
      specialChars: false,
      upperCaseAlphabets: false,
    });

    const result = await Otp.findOne({ otp: otpGenerate });

    while (result) {
      otpGenerate = otpGenerator.generate(6, {
        lowerCaseAlphabets: false,
        specialChars: false,
        upperCaseAlphabets: false,
      });
    }

    const otpPayload = await Otp.create({
      email,
      otp: otpGenerate,
    });
    res.status(200).json({
      success: true,
      message: "Otp has been send successfully",
      otpGenerate,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      res.json({
        success: false,
        message: "User not found",
      });
    }

    if (await bcyrpt.compare(password, user.password)) {
      const payload = {
        email: user.email,
        id: user._id,
        accountType: user.accountType,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });

      user = user.toObject();
      user.token = token;
      user.password = undefined;
      const options = {
        httpOnly: true,
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      };
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "User logged in successfully",
      });
    } else {
      res.status(401).json({
        success: false,
        message: "Password do not matched",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: `Login Failure Please Try Again`,
    });
  }
};

exports.updateProfileImage = async(req, res)=>{
    try {
        const profileImage = req.files.image 
        const userId = req.user.id
        const uploadImage = await uploadImageToCloudinary(profileImage, process.env.FOLDER_NAME)
        const updateprofile = await User.findByIdAndUpdate({_id:userId},{
            image:uploadImage.secure_url
        }, {new:true})
        return res.status(200).json({
            success:true,
            message:"Profile photo update successfully"
        })
        
    } catch (error) {
        console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
    }
}

exports.updatePhoneNum = async(req, res)=>{
    try {
        const {phoneNum} = req.body
        const userId = req.user.id 
        const updateProfile = await User.findByIdAndUpdate({_id:userId}, {
            phoneNum:phoneNum
        },{new:true})

        return res.status(200).json({
            success:true,
            message:"Profile number successfully"
        })
        
    } catch (error) {
        console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
    }
}


exports.getuserDetailById = async(req, res)=>{
    try {
        const userId = req.user.id
        const userDetails = await User.findById({_id:userId})
        return res.status(200).json({
            success:true,
            data:userDetails
        })
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({
          success: false,
          message: error.message,
        });
    }
}

exports.changePassword = async(req, res)=>{
  try {
    const {oldPassword, newPassword} = req.body
    const userId = req.user.id
    const user = await User.findById(userId)
    const checkPassword = await bcyrpt.compare(oldPassword, user.password)
    if(!checkPassword){
      return res.status(400).json({
        success:false,
        message:"Old Password do not match"
      })
    }
    const encryptedPassword = await bcyrpt.hash(newPassword, 10)
    const updateNewPass = await User.findByIdAndUpdate({_id:userId}, {
      password:encryptedPassword
    }, {new:true})

    return res.status(200).json({
      success:true, message:"Password changed"
    })
    
  } catch (error) {
    console.error(error);
        return res.status(500).json({
          success: false,
          message: error.message,
        });
  }
}