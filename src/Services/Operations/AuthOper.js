import toast from "react-hot-toast";
import { authEndPoints } from "../AllApi";
import { apiConnector } from "../ApiConnector";
import { setFromType, setLoading, setToken } from "../../Slices/AuthSlice";
import { setUser } from "../../Slices/ProfileSlice";

const {SIGNUP_API, LOGIN_API, SEND_OTP_API}= authEndPoints

export function sendOtp(email){
    return async(dispatch)=>{
        const toastId = toast.loading("Please wait...")
        dispatch(setLoading(true))
        try {
            const response = await apiConnector("POST", SEND_OTP_API, {email})
            if(!response.data.success){
                toast.error(response.data.message)
            }
            toast.success("OTP Sent successfully")
            dispatch(setFromType("verify-email"))
            
        } catch (error) {
            console.log("Otp error....", error)
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}


export function signUp(fullName, email,phoneNum, password, confirmPassword, accountType, otp){
    return async(dispatch)=>{
        const toastId = toast.loading("Please wait...")
        dispatch(setLoading(true))
        try {
            const response = await apiConnector("POST", SIGNUP_API, {fullName, email,phoneNum, password, confirmPassword, accountType, otp})
            if(!response.data.success){
                toast.error(response.data.message)
            }
            toast.success("Signup Successfull")
            dispatch(setFromType("login"))
        } catch (error) {
            console.log("signup error....", error)
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}


export function login(email, password, navigate){
    return async(dispatch)=>{
        try {
            const toastId = toast.loading("Please wait...")
        dispatch(setLoading(true))
        try {
            const response = await apiConnector("POST", LOGIN_API, {email, password})
            if(!response.data.success){
                toast.error(response.data.message)
                return
            }
            toast.success("Login Successfull")
            dispatch(setToken(response.data.token))
            dispatch(setUser({...response.data.user}))
            localStorage.setItem("token", JSON.stringify(response.data.token))
            localStorage.setItem("user", JSON.stringify(response.data.user))
            navigate("/dashboard/my-profile")
            dispatch(setFromType("login"))
            
        } catch (error) {
            console.log("login error....", error)
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
            
        } catch (error) {
      console.log("LOGIN API ERROR............", error)
        }
    }
}

export function logout(navigate) {
    return (dispatch) => {
      dispatch(setToken(null))
      dispatch(setUser(null))
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      toast.success("Logged Out")
      navigate("/")
    }
  }