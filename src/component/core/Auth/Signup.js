import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { setSignUpData } from "../../../Slices/AuthSlice";
import { sendOtp } from "../../../Services/Operations/AuthOper";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
    const [showPassword, setshowPassword] = useState(false)
    const [showConfirmaPassword, setshowConfirmaPassword] = useState(false)
    const {register, handleSubmit, formState:{errors}} = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {loading} = useSelector((state)=> state.auth)
    const onsubmit = async(data)=>{
        dispatch(setSignUpData(data))
        dispatch(sendOtp(data.email, navigate))
    }
  return (
    <div className="lg:w-[380px]  flex flex-col justify-between mt-6 lg:px-5 ">
      <form className=" flex flex-col gap-4" onSubmit={handleSubmit(onsubmit)}>
        <div>
          <div className=" flex justify-between">
            <input
              type="text"
              placeholder="Full name"
              className={` border-[1px] border-[#D9D9DB] text-black bg-[#F7F8FA] p-2 w-full font-semibold `}
              {...register("fullName", {required:true})}
            />
           
          </div>
          <input
            type="Email"
            placeholder="Email"
            className=" border-[1px] border-[#D9D9DB] text-black bg-[#F7F8FA] p-2 w-full font-semibold"
            {...register("email", {required:true})}
            />
           
            <input
            type="number"
            placeholder="Whatsapp Number"
            className=" border-[1px] border-[#D9D9DB] text-black bg-[#F7F8FA] p-2 w-full font-semibold"
            {...register("phoneNum",  {
                                    required: { value: true, message: "Please enter Phone Number" },
                                    maxLength: { value: 10, message: "Invalid Phone Number" },
                                    minLength: { value: 8, message: "Invalid Phone Number" }
                                })}
            />
           
          <div className=" relative">
            <input
              type={`${showPassword? "text":"password"}`}
              placeholder="Password"
              className=" border-[1px] border-[#D9D9DB] text-black bg-[#F7F8FA] p-2 w-full font-semibold"
              {...register("password", {required:true})}
            />
           
            <button
  type="button"
  onClick={() => setshowPassword(!showPassword)}
  className=" absolute right-3 top-3 text-black"
>
  {showPassword ? <GoEyeClosed /> : <GoEye />}
</button>
          </div>
          <div className=" relative">

          <input
            type={`${showConfirmaPassword? "text":"password"}`}
            placeholder="Confirm Password"
            className=" border-[1px] border-[#D9D9DB] text-black bg-[#F7F8FA] p-2 w-full font-semibold"
            {...register("confirmPassword", {required:true})}
            />
             
            <button
  type="button"
  onClick={() => setshowConfirmaPassword(!showConfirmaPassword)}
  className=" absolute right-3 top-3 text-black"
>
  {showConfirmaPassword ? <GoEyeClosed /> : <GoEye />}
</button>
          </div>
          
        </div>
      <div className="lg:block hidden">

     
       {
        loading? (<div className=" w-full flex items-center justify-center mt-3  "><span className="loader " ></span></div>):( <button className=" w-full bg-[#2F6CE5] text-white font-semibold rounded-full p-2 lg:block hidden">
          Create Account
        </button>)
       }
       </div>
        <div className=" lg:hidden block">
          <div className=" flex justify-between items-center">
          {
            loading ? (<span className="loader"></span>) : (<button className=" w-fit bg-[#2F6CE5] text-white font-semibold rounded-full p-2 px-10">
              Create Account
            </button>
        )
          }
          </div>
        </div>
      </form>
    </div>
  );
};



export default Signup;
