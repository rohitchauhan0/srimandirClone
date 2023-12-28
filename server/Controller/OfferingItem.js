const { uploadImageToCloudinary } = require("../Utils/uploadImage")
const offeringItem = require('../Modals/OfferingItem') 


exports.createOfferingItem = async(req, res)=>{
    try {
        
        const {title, description, price}= req.body
        console.log(title, description, price)
        const icon = req.files.icon
        const uploadIcon = await uploadImageToCloudinary(icon, process.env.FOLDER_NAME)
        const newItem = await offeringItem.create({
            title,
            description,
            price,
            icon:uploadIcon.secure_url
        })

        return res.status(200).json({
            success:true,
            message:"Item created"
        })
    
    } catch (error) {
        console.error(error);
        return res.status(500).json({
          success: false,
          message: error.message,
        });
    }
}


exports.getItem = async(req, res)=>{
    try {
        const getItems = await offeringItem.find({})
        return res.status(200).json({
            success:true,
            data:getItems
        })
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({
          success: false,
          message: error.message,
        });
    }
}


exports.deleteItem = async(req, res)=>{
    try {
        const {itemId} = req.body
        const deletedItm = await offeringItem.findByIdAndDelete(itemId)
        return res.status(200).json({
            success:true,
            message:"Deleted item"
        })
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({
          success: false,
          message: error.message,
        });
    }
}