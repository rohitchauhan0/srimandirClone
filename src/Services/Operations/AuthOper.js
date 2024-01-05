import toast from "react-hot-toast";
import { authEndPoints } from "../AllApi";
import { apiConnector } from "../ApiConnector";
import { setFromType, setLoading, setToken } from "../../Slices/AuthSlice";
import { setUser } from "../../Slices/ProfileSlice";
import EmailValidator from "email-validator";

const { SIGNUP_API, LOGIN_API, SEND_OTP_API, RESET_PASSWORD_TOKEN_API, RESET_PASSWORD_API } = authEndPoints;

export function sendOtp(email) {
  return async (dispatch) => {
    if (!EmailValidator.validate(email)) {
      toast.error("Please enter valid email");
      return;
    }

    const toastId = toast.loading("Please wait...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SEND_OTP_API, { email });
      if (!response.data.success) {
        toast.error(response.data.message);
        throw new Error(response.data.message)
      }
      toast.success("OTP Sent successfully");
      dispatch(setFromType("verify-email"));
    } catch (error) {
      toast.error(error.response.data.message)
      console.log("Otp error....", error.response.data.message);
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function signUp(
  fullName,
  email,
  phoneNum,
  password,
  confirmPassword,
  accountType,
  otp
) {
  return async (dispatch) => {
    if (!EmailValidator.validate(email)) {
      toast.error("Please enter valid email");
      return;
    }
    const toastId = toast.loading("Please wait...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        fullName,
        email,
        phoneNum,
        password,
        confirmPassword,
        accountType,
        otp,
      });
      if (!response.data.success) {
        toast.error(response.data.message);
      }
      toast.success("Signup Successfull");
      dispatch(setFromType("login"));
    } catch (error) {
      console.log("signup error....", error);
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function login(email, password, navigate) {
  return async (dispatch) => {
    try {
      const toastId = toast.loading("Please wait...");
      dispatch(setLoading(true));
      try {
        const response = await apiConnector("POST", LOGIN_API, {
          email,
          password,
        });
        if (!response.data.success) {
          toast.error(response.data.message);
          throw new Error(response.data.message);
          // return
        }
        dispatch(setToken(response.data.token));
        dispatch(setUser({ ...response.data.user }));
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("user", JSON.stringify(response.data.user));

        setTimeout(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          toast.error("Session expired, please login again");
          dispatch(logout(navigate));
        }, 3 * 24 * 60 * 60 * 1000);

        navigate("/dashboard/my-profile");
        dispatch(setFromType("login"));
        toast.success("Login Successfull");
      } catch (error) {
        toast.error(error.response.data.message)
        console.log("Otp error....", error.response.data.message);
      }
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    } catch (error) {
      console.log("LOGIN API ERROR............", error.data.message);
    }
  };
}

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged Out");
    navigate("/");
  };
}


export function getPasswordToken(email, setEmailSent){
  return async (dispatch)=>{
    const toastId = toast.loading("Please wait...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", RESET_PASSWORD_TOKEN_API, {email})
      if(!response.data.success){
        throw new Error(response.data.message)
      }
      toast.success("Reset email sent")
      setEmailSent(true)
      
    } catch (error) {
      console.log("RESETPASSTOKEN ERROR............", error)
      toast.error("Failed To Send Reset Email")
    }
    toast.dismiss(toastId)
    dispatch(setLoading(false))
  }
}


export function resetPassword(password, confirmPassword, token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", RESET_PASSWORD_API, {
        password,
        confirmPassword,
        token,
      })



      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Password Reset Successfully")
      navigate("/")
    } catch (error) {
      toast.error("Failed To Reset Password")
    }
    toast.dismiss(toastId)
    dispatch(setLoading(false))
  }
}
