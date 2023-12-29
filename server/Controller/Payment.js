const Payment = require("../Modals/PaymentModal");
const Benefits = require("../Modals/PoojaBenefits");
const User = require("../Modals/Auth");
const Item = require("../Modals/OfferingItem");
const Pooja = require("../Modals/PoojaModal");

const crypto = require("crypto");
const { instance } = require("../Config/Razorpay");
const { mailSender } = require("../Utils/Mailsender");

require("dotenv").config();

exports.capturePayment = async (req, res) => {
  const { totalPrice } = req.body;

  const currency = "INR";
  const options = {
    amount: totalPrice * 100,
    currency,
    receipt: Math.random(Date.now()).toString(),
  };

  try {
    const paymentResponse = await instance.orders.create(options);
    res.json({
      success: true,
      message: paymentResponse,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, mesage: "Could not Initiate Order" });
  }
}; 

exports.verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const { poojaId, packageId, offeringItems, totalPrice } = req.body;
    const userId = req.user.id;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res
        .status(200)
        .json({ success: false, message: "Payment Failed" });
    }


    let body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      await enrolledUser(
        poojaId,
        packageId,
        offeringItems,
        userId,
        totalPrice,
        res
      );

      return res.status(200).json({
        success: true,
        message: "Payment verified",
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(200)
      .json({ success: "false", message: "Payment Failed" });
  }
};

const enrolledUser = async (
  poojaId,
  packageId,
  offeringItems,
  userId,
  totalPrice,
  res
) => {
  try {
    const createPayment = await Payment.create({
      poojaId: poojaId,
      packageId: packageId,
      offeringItem: offeringItems,
      userId: userId,
      totalPrice,
    });

    const user = await User.findByIdAndUpdate({_id:userId}, {$push:{
      pooja:createPayment._id
    }}, {new:true});


    mailSender(user.email, "Payment received", "Thank you");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};




exports.getPaymentDetails = async (req, res) => {
  try {
    const allDetails = await Payment.find({})
      .populate("userId")
      .populate("poojaId") 
      .populate("packageId")
      .populate("offeringItem")
      .sort({ createAt: -1 })
      .exec();
    return res.status(200).json({
      success: true,
      data: allDetails,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
