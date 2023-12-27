import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../../Services/Operations/AuthOper";

const Login = ({cancelHandler}) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch()

  const onSubmit = (data)=>{
    const {email, password}= data
    dispatch(login(email, password, navigate))
    cancelHandler()
  }
 
  const [showPassword, setshowPassword] = useState(false);

  return (
    <div className=" lg:w-[380px]  flex flex-col justify-between mt-6 lg:px-5 ">
      <form className=" flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className=" relative">
          <input
            type="Email"
            placeholder="Email"
            className=" border-[1px] border-[#D9D9DB] text-black bg-[#F7F8FA] p-2 w-full font-semibold"
            {...register("email", {required:true})}
          />
          <input
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Password"
            className=" border-[1px] border-[#D9D9DB] textblack bg-[#F7F8FA] p-2 w-full font-semibold "
            {...register("password", {required:true})}

          />
          <button
            type="button"
            onClick={() => setshowPassword(!showPassword)}
            className=" absolute right-3 top-14 text-[#8A8A8A]"
          >
            {showPassword ? <GoEyeClosed /> : <GoEye />}
          </button>
        </div>
        <button className=" w-full bg-[#2F6CE5] text-white font-semibold rounded-full p-2 lg:block hidden">
          Sign In
        </button>
        <div className=" lg:hidden block">
          <div className=" flex justify-between items-center">
            <button className=" w-fit bg-[#2F6CE5] text-white font-semibold rounded-full p-2 px-10">
              Sign In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
