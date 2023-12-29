import toast from "react-hot-toast";
import { authEndPoints } from "../AllApi";
import { apiConnector } from "../ApiConnector";
import { setFromType, setLoading, setToken } from "../../Slices/AuthSlice";
import { setUser } from "../../Slices/ProfileSlice";
import  EmailValidator from 'email-validator';

const {SIGNUP_API, LOGIN_API, SEND_OTP_API}= authEndPoints

export function sendOtp(email){
    return async(dispatch)=>{
        if(!EmailValidator.validate(email)){
            toast.error("Please enter valid email")
            return
        }
        
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
        if(!EmailValidator.validate(email)){
            toast.error("Please enter valid email")
            return
        }
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


// function setTokenWithExpiration(token) {
//     const now = new Date();
//     const expirationDate = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
//     localStorage.setItem('token', JSON.stringify({ token, expirationDate: expirationDate.getTime() }));
//   }
  
//   function removeExpiredToken() {
//     const storedToken = localStorage.getItem('token');
//     if (storedToken) {
//       const { token, expirationDate } = JSON.parse(storedToken);
//       const now = new Date().getTime();
//       if (now > expirationDate) {
//         localStorage.removeItem('token');
//       }
//     }
//   }
  

//   removeExpiredToken();



export function login(email, password, navigate){
    return async(dispatch)=>{
        try {
            const toastId = toast.loading("Please wait...")
        dispatch(setLoading(true))
        try {
            const response = await apiConnector("POST", LOGIN_API, {email, password})
            if(!response.data.success){
                toast.error(response.data.message)
                console.log(response.data.message)
                throw new Error(response.data.message)
                // return
            }
            toast.success("Login Successfull")
            dispatch(setToken(response.data.token))
            dispatch(setUser({...response.data.user}))
            localStorage.setItem("token", JSON.stringify(response.data.token))
            // setTokenWithExpiration(response.data.token)
    
            localStorage.setItem("user", JSON.stringify(response.data.user))
            navigate("/dashboard/my-profile")
            dispatch(setFromType("login"))
            
        } catch (error) {
            console.log("login error....", error)
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
            
        } catch (error) {
      console.log("LOGIN API ERROR............", error.data.message)
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