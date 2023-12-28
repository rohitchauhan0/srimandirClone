const PoojaPackage = require('../Modals/PoojaPackage')


exports.createPackage = async(req, res)=>{
    try {
        const {price, title, addPeople,benefit1,benefit2, benefit3} = req.body

        const newPackage = await PoojaPackage.create({
            price, title, addPeople, benefit1, benefit2, benefit3
        })
        return res.status(200).json({
            success:true,
            message:"Created successfully"
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
          success: false,
          message: error.message,
        });
    }
}


exports.getAllPackage = async(req, res)=>{
    try {
        const allPackage = await PoojaPackage.find({})
        return res.status(200).json({
            success:true,
            data:allPackage
        })
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({
          success: false,
          message: error.message,
        });
    }
}


exports.deletePackage = async(req, res)=>{
    try {
        const {packageId} = req.body
        const deletedPackage = await PoojaPackage.findByIdAndDelete({_id:packageId})
        return res.status(200).json({
            success:true,
            message:"Deleted"
        })
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({
          success: false,
          message: error.message,
        });
    }
}