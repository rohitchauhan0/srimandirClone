import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import Signup from "./Signup";
import Login from "./Login";
import logo from "../../../Assets/srimandir_logo.svg"
import VerificaionEmail from "./VerificaionEmail";
import { useDispatch, useSelector } from "react-redux";
import { setFromType } from "../../../Slices/AuthSlice";
import { Link } from "react-router-dom";

const Template = ({ cancelHandler }) => {
    const {formType} = useSelector((state)=> state.auth)
    const dispatch = useDispatch()
  return (
    <div className=" w-full h-full inset-0 fixed bg-black flex lg:items-center items-end justify-center bg-opacity-75 z-[10000] overflow-auto ">
      <div className=" w-[360px] lg:w-[750px] h-[540px] lg:h-[553px] bg-white relative rounded-lg">
        <div>
          <ImCancelCircle
            className=" text-xl  rounded-full bg-white cursor-pointer absolute right-[48%] lg:right-0 -top-8"
            onClick={cancelHandler}
          />
        </div>
        <div className=" lg:block hidden">
          <div className=" w-full h-[50px]  bg-orange-500 rounded-lg flex items-center justify-center text-white font-semibold leading-[16px] ">
             Get access to all Sri Mandir services, 1000+ devotional music
            and other items
          </div>
        </div>
        <div className=" flex justify-between px-5 ">
        
          <div className=" flex flex-col gap-8 pt-10 w-[380px]  ">
          
            {formType === "signup" ? (
              <p className=" text-black text-[24px] font-bold px-5">
                Create Account
              </p>
            ) : (
              formType === "login" ? <p className=" text-black text-[24px] font-bold px-5">Log In</p> : (<div>
                <p>Verification code has been sent to your email.</p>
              </div>)
            )}

            {formType === "signup" ? (
              <Signup  />
            ) : (
              formType === "login" ? <Login  cancelHandler={cancelHandler} /> :<VerificaionEmail/>
            )}
            <div className=" flex flex-col gap-4 w-full items-center ">
              <div>
                {formType === "signup" ? (
                  <p className=" text-[#000000] text-[10px] lg:hidden block">
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </p>
                ) : (
                  formType === "login" && <Link to={"/update-password"} onClick={cancelHandler} className=" text-[14px] hover:text-cyan-500 transition-all duration-200">Forgot password</Link>
                )}
              </div>
              {formType === "signup" ? (
                <p className=" text-[14px]">
                  Already have an account?{" "}
                  <span
                    className=" cursor-pointer text-[#2F6CE5] font-semibold"
                    onClick={() => dispatch(setFromType("login"))}
                  >
                    Log In
                  </span>
                </p>
              ) : (
                formType === "login" && <p className=" text-[14px]">
                  Don't have an account yet?{" "}
                  <span
                    className=" cursor-pointer text-[#2F6CE5] font-semibold"
                    onClick={() => dispatch(setFromType("signup"))}
                  >
                    create new for free!
                  </span>
                </p>
              )}
            </div>
          </div>

          <div className=" lg:block hidden">
            <div className="w-[320px]  flex flex-col justify-center h-[445px] mt-6 items-center ">
                <img src={logo} alt="" className=" w-full h-full" />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
