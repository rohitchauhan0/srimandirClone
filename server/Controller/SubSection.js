const Subsection = require("../Modals/SubSection");
const Section = require("../Modals/Section");
const { uploadImageToCloudinary } = require("../Utils/uploadImage");

exports.createArti = async (req, res) => {
  try {
    const {
      title,
      description,
      heading1,
      about,
      titleOfArti,
      descriptionOfArti,
      sectionId,
    } = req.body;
    const image1 = req.files.image1;
    const image2 = req.files.image2;
    if (!req.files.image2) {
      const thumbnail1 = await uploadImageToCloudinary(
        image1,
        process.env.FOLDER_NAME
      );
      const newArti = await Subsection.create({
        title1: title,
        description1: description,
        heading1,
        description2: about,
        title2: titleOfArti,
        description3: descriptionOfArti,
        image1: thumbnail1.secure_url,
      });
      await Section.findByIdAndUpdate(
        { _id: sectionId },
        {
          $push: {
            subsection: newArti._id,
          },
        },
        { new: true }
      );

      return res.status(200).json({
        success: true,
        message: "Arti created",
      });
    } else {
      const image1 = req.files.image1;
      const image2 = req.files.image2;
      const thumbnail1 = await uploadImageToCloudinary(
        image1,
        process.env.FOLDER_NAME
      );
      const thumbnail2 = await uploadImageToCloudinary(
        image2,
        process.env.FOLDER_NAME
      );
      const newArti = await Subsection.create({
        title1: title,
        description1: description,
        heading1,
        description2: about,
        title2: titleOfArti,
        description3: descriptionOfArti,
        image1: thumbnail1.secure_url,
        image2: thumbnail2.secure_url,
      });
      await Section.findByIdAndUpdate(
        { _id: sectionId },
        {
          $push: {
            subsection: newArti._id,
          },
        },
        { new: true }
      );
      return res.status(200).json({
        success: true,
        message: "Arti created",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteSubSection = async (req, res) => {
  try {
    const { sectionId, subsectionId } = req.body;
    await Subsection.findByIdAndDelete(subsectionId);
    await Section.findByIdAndUpdate(
      { _id: sectionId },
      {
        $pull: {
          subsection: subsectionId,
        },
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Subsection deleted",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.createChalisa = async (req, res) => {
  try {
    const {
      title,
      description,
      heading1,
      about,
      dohaChopai,
      dohaChopai2,
      descriptionOfChalisa,
      sectionId,
    } = req.body;
    const image1 = req.files.image1;
    const image2 = req.files.image2;
    if (!req.files.image2) {
      const thumbnail1 = await uploadImageToCloudinary(
        image1,
        process.env.FOLDER_NAME
      );
      const newChalisa = await Subsection.create({
        title1: title,
        description1: description,
        heading1,
        description2: about,
        description3: descriptionOfChalisa,
        image1: thumbnail1.secure_url,
        description4: dohaChopai,
        description5: dohaChopai2,
      });
      await Section.findByIdAndUpdate(
        { _id: sectionId },
        {
          $push: {
            subsection: newChalisa._id,
          },
        },
        { new: true }
      );

      return res.status(200).json({
        success: true,
        message: "Chalisa created",
      });
    } else {
      const image1 = req.files.image1;
      const image2 = req.files.image2;
      const thumbnail1 = await uploadImageToCloudinary(
        image1,
        process.env.FOLDER_NAME
      );
      const thumbnail2 = await uploadImageToCloudinary(
        image2,
        process.env.FOLDER_NAME
      );
      const newChalisa = await Subsection.create({
        title1: title,
        description1: description,
        heading1,
        description2: about,
        description3: descriptionOfChalisa,
        image1: thumbnail1.secure_url,
        description4: dohaChopai,
        description5: dohaChopai2,
        image2: thumbnail2.secure_url,
      });
      await Section.findByIdAndUpdate(
        { _id: sectionId },
        {
          $push: {
            subsection: newChalisa._id,
          },
        },
        { new: true }
      );

      return res.status(200).json({
        success: true,
        message: "Chalisa created",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getSubsectionById = async (req, res) => {
  try {
    const { subsectionId } = req.body;
    const getDetail = await Subsection.findById(subsectionId);

    return res.status(200).json({
      success: true,
      data: getDetail,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getFullSubSection = async (req, res) => {
  try {
    const getSubSection = await Subsection.find({}).sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      data: getSubSection,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.createMantra = async (req, res) => {
  try {
     const {
      title,
      description,
      heading1,
      about,
      lekh,
      blogDescription,
      sectionId,
    } = req.body;

    const image1 = req.files.image1;
    const image2 = req.files.image2;

    if (!image2) {
      const thumbnail1 = await uploadImageToCloudinary(image1, process.env.FOLDER_NAME);
      const newChalisa = await Subsection.create({
        title1: title,
        description1: description,
        heading1,
        description2: about,
        image1: thumbnail1.secure_url,
        blogDescription
      });
      // Update Section with the newly created mantra's ID
      await Section.findByIdAndUpdate(
        { _id: sectionId },
        {
          $push: {
            subsection: newChalisa._id,
          },
        },
        { new: true }
      );

        return res.status(200).json({
            success:true,
            message:"Subsection created"
        })

     } else {
      const image1 = req.files.image1;
      const image2 = req.files.image2;
      const thumbnail1 = await uploadImageToCloudinary(
        image1,
        process.env.FOLDER_NAME
      );
      const thumbnail2 = await uploadImageToCloudinary(
        image2,
        process.env.FOLDER_NAME
      );
      const newMantra = await Subsection.create({
        title1: title,
        description1: description,
        heading1,
        description2: about,
        image1: thumbnail1.secure_url,
        description6: lekh,
        blogDescription,
        image2: thumbnail2.secure_url,
      });
      await Section.findByIdAndUpdate(
        { _id: sectionId },
        {
          $push: {
            subsection: newMantra._id,
          },
        },
        { new: true }
      );

      return res.status(200).json({
        success: true,
        message: "Mantra created",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



exports.createBlog = async(req, res)=>{
    try {
        const {
            title,
            description,
            heading1,
            about,
            title2,
            description2,
            blogDescription,
            sectionId,
          } = req.body;
      
          const image1 = req.files.image1;
          const image2 = req.files.image2;
      
          if (!image2) {
            const thumbnail1 = await uploadImageToCloudinary(image1, process.env.FOLDER_NAME);
            const newChalisa = await Subsection.create({
              title1: title,
              description1: description,
              heading1,
              description2: about,
              title2,
              description6:description2,
              blogDescription,
              image1: thumbnail1.secure_url,
            });
            // Update Section with the newly created mantra's ID
            await Section.findByIdAndUpdate(
              { _id: sectionId },
              {
                $push: {
                  subsection: newChalisa._id,
                },
              },
              { new: true }
            );
            return res.status(200).json({
                success:true,
                message:"Subsection created"
            })
    
           } else {
            const image1 = req.files.image1;
            const image2 = req.files.image2;
            const thumbnail1 = await uploadImageToCloudinary(
              image1,
              process.env.FOLDER_NAME
            );
            const thumbnail2 = await uploadImageToCloudinary(
              image2,
              process.env.FOLDER_NAME
            );
            const newMantra = await Subsection.create({
              title1: title,
              title1: title,
              description1: description,
              heading1,
              description2: about,
              title2,
              description6:description2,
              blogDescription,
              image1: thumbnail1.secure_url,
              image2: thumbnail2.secure_url,
            });
            await Section.findByIdAndUpdate(
              { _id: sectionId },
              {
                $push: {
                  subsection: newMantra._id,
                },
              },
              { new: true }
            );
      
            return res.status(200).json({
              success: true,
              message: "Blog created",
            });
          }
        
    } catch (error) {
        
    }
}