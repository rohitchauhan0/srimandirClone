import toast from "react-hot-toast";
import { paymentEndPoint } from "../AllApi";
import { apiConnector } from "../ApiConnector";
const {CREATE_PAYMENT_API, VERIFY_PAYMENT_API}= paymentEndPoint


const loadscript = (src)=>{
    return new Promise((resolve)=>{
        const script = document.createElement('script')
        script.src = src
        script.onload = ()=>{
            resolve(true)
        }
        script.onerror = ()=>{
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

export async function bookPuja(token, poojaId, packageId, offeringItems, navigate, dispatch, totalPrice, fullname, phoneNum, address, gotra, dob){
    const toastId = toast.loading("Please wait")
    try {
        const res = await loadscript(`https://checkout.razorpay.com/v1/checkout.js`)
        if(!res){
            toast.error("Razorpay SDk failed to load")
            return
        }

        const paymentResponse = await apiConnector("POST", CREATE_PAYMENT_API, {totalPrice}, {
            Authorization:`Bearer ${token}`
        })
        if(!paymentResponse.data.success){
            throw new Error(paymentResponse.data.message)
        }

        const options = {
            key : process.env.REACT_APP_RAZORPAY_KEY,
            currency: paymentResponse.data.message.currency,
            amount: `${paymentResponse.data.message.amount}`,
            order_id: paymentResponse.data.message.id,
            name:"Rohit",
            description:"Thank you for booking",
            prefill:{
                    name:`${fullname}`,            },
            handler: function(response){
                verifyPayment({...response, poojaId, packageId, offeringItems, totalPrice, fullname, phoneNum, address, gotra, dob}, token, navigate, dispatch)
            }
        }


        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
        paymentObject.on("Payment Failed", function(response){
            toast.error("Oops, Payment failed")
        })

        
    } catch (error) {
        console.log("PAYMENT API ERROR.....", error)
        toast.error("Could not make payment")
    }
    toast.dismiss(toastId)
}

async function verifyPayment(bodydata, token){


    const toastId = toast.loading("Verify payment")
    try {
        const response = await apiConnector("POST", VERIFY_PAYMENT_API, bodydata, {
            Authorization:`Bearer ${token}`
        })

        if(!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("payment Successfull, Your pooja has been booked");
        
    } catch (error) {
        console.log("PAYMENT VERIFY ERROR....", error);
        toast.error("Could not verify Payment");
    }
    toast.dismiss(toastId)
}