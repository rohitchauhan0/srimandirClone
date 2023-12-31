const Section = require('../Modals/Section')
const SubSection = require('../Modals/SubSection')
const { uploadImageToCloudinary } = require('../Utils/uploadImage')


exports.createSection = async(req, res)=>{
    try {
        const {title, description,mainHindiTitle} = req.body
        const sectionImage = req.files.image
        const url = await uploadImageToCloudinary(sectionImage, process.env.FOLDER_NAME)
        const newSection = await Section.create({
            title, description, subsection:[], image:url.secure_url, mainHindiTitle
        })

        return res.status(200).json({
            success:true, message:"Section created"
        })
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({
          success: false,
          message: error.message,
        });
    }
}

exports.getSectionOnlyName = async(req, res)=>{
    try {
        const getSection  = await Section.find({},{title:true, description:true, icon:true})
        return res.status(200).json({
            success:true,
            data:getSection
        })
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({
          success: false,
          message: error.message,
        });
    }
}

 
exports.getFullSection = async(req, res)=>{
    try {
        const getSection  = await Section.find({}).populate("subsection").exec()
        return res.status(200).json({
            success:true,
            data:getSection
        })
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({
          success: false,
          message: error.message,
        });
    }
}

exports.getSectionByName = async(req, res)=>{ 
    try {
        const {sectionName}= req.body
        const getSection = await Section.findOne({title:sectionName}).populate({
            path:"subsection",
            sort:{
                createdAt:-1
            }
        }).exec()
        return res.status(200).json({
            success:true,
            data:getSection
        })
        
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({
          success: false,
          message: error.message,
        });
    }
}