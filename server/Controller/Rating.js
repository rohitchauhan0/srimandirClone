const Rating = require('../Modals/RatingAndReview')
const { uploadImageToCloudinary } = require('../Utils/uploadImage')
require('dotenv').config()

exports.rating = async(req, res)=>{
    try {
        const {name, address}= req.body
        const personPic = req.files.personPic
        const review = req.files.review
        console.log(name, address, personPic, review)
        const updatePic = await uploadImageToCloudinary(personPic, process.env.FOLDER_NAME)
        const updateReview = await uploadImageToCloudinary(review, process.env.FOLDER_NAME)
      const createRating=  await Rating.create({
            name, address, personPic:updatePic.secure_url, review:updateReview.secure_url
        })

        return res.status(200).json({
            success:true, 
            message:"Review created"
        })
        
    } catch (error) {
        console.error(error); 
        return res.status(500).json({
          success: false,
          message: error.message,
        });
    }
}

exports.getRating = async(req, res)=>{
    try {
        const allReview = await Rating.find({})
        return res.status(200).json({
            success:true,
            data:allReview
        })
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({
          success: false,
          message: error.message,
        });
    }
}