const TempleLoc = require("../Modals/TempleLocation");
const TempleDetails = require("../Modals/TempleDetails");
const { uploadImageToCloudinary } = require("../Utils/uploadImage");

exports.createLoc = async (req, res) => {
  try {
    const { location } = req.body;
    const image = req.files.image;
    const uploadImg = await uploadImageToCloudinary(
      image,
      process.env.FOLDER_NAME
    );
    await TempleLoc.create({
      location,
      image: uploadImg.secure_url,
      templeDetails: [],
    });
    return res.status(200).json({
      success: true,
      message: "Location created",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getTemple = async (req, res) => {
  try {
    const response = await TempleLoc.find({}).populate({
        path:"templeDetails",
        sort:{
            createAt:-1
        }
    }).exec();
    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getTempleByLoc = async (req, res) => {
  try {
    const { locId } = req.body;
    const response = await TempleLoc.findById({ _id: locId })
      .populate({
        path:"templeDetails",
        sort:{
            createdAt:-1
        }
      })
      .exec();
    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.createTempleDetails = async (req, res) => {
  try {
    const {
      templeName,
      about,
      address,
      overView,
      history,
      significance,
      architecture,
      offeringDetails,
      mapLink,
      byAir,
      byTrain,
      byRoad,
      instagramLink,
      youTubeLink,
      facebookLink,
      templeLocId,
    } = req.body;
    const { image1, image2, image3, image4, image5 } = req.files;
    const uploadImage1 = await uploadImageToCloudinary(
      image1, 
      process.env.FOLDER_NAME
    );
    const uploadImage2 = await uploadImageToCloudinary(
      image2,
      process.env.FOLDER_NAME
    );
    const uploadImage3 = await uploadImageToCloudinary(
      image3,
      process.env.FOLDER_NAME
    );
    const uploadImage4 = await uploadImageToCloudinary(
      image4,
      process.env.FOLDER_NAME
    );
     const uploadImage5 = await uploadImageToCloudinary(
      image5,
      process.env.FOLDER_NAME
    );

    const newTemple = await TempleDetails.create({
      templeName,
      about,
      address,
      overView,
      history,
      significance,
      architecture, 
   
      offeringDetails,
      mapLink,
      byAir,
      byTrain,
      byRoad,
      instagramLink,
      youTubeLink,
      facebookLink,
      image1: uploadImage1.secure_url,
      image2: uploadImage2.secure_url,
      image3: uploadImage3.secure_url,
      image4: uploadImage4.secure_url,
      image5: uploadImage5.secure_url
    });

    const updateTempleLoc = await TempleLoc.findByIdAndUpdate({_id:templeLocId}, {
        $push:{
            templeDetails:newTemple._id
        }
    },{new:true})

    return res.status(200).json({
      success: true,
      message: "Temple created",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getTempleById = async (req, res) => {
  try {
    const { templeId } = req.body;
    const response = await TempleDetails.findById(templeId);
    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
