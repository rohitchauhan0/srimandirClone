import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { apiConnector } from '../Services/ApiConnector';
import { authEndPoints } from '../Services/AllApi';

const ContactUs = () => {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const { CONTACT_US_API } = authEndPoints;
      const onSubmit = async (data) => {
        const { fullName, email, phoneNum, message } =
          data;
        const toastid = toast.loading("Please wait..");
        try {
          await apiConnector("POST", CONTACT_US_API, {
            fullName, email, phoneNum, message
          });
          toast.success("Thank you!");
        } catch (error) {
          console.log(error);
        }
        toast.dismiss(toastid);
      };
  return (
    <div className=" w-full flex flex-col items-center justify-center mt-32">
    <form
      className=" w-full lg:w-[40%] flex flex-col gap-3 p-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className=" flex flex-col gap-2 px-2">
        <label className=" text-orange-500 font-semibold">
          Enter Full name<sup className=" text-red-500 text-sm">*</sup>
        </label>
        <input
          type="text"
          className=" w-full border-2 border-orange-500  rounded-xl p-2"
          placeholder="Enter full name here"
          {...register("fullName", { required: true })}
        />
        {errors.fullName && (
          <span className=" text-red-500">fullName is required</span>
        )}
      </div> 
      <div className=" flex flex-col gap-2 px-2">
        <label className=" text-orange-500 font-semibold">
          Enter email<sup className=" text-red-500 text-sm">*</sup>
        </label>
        <input
          type="email"
          className=" w-full border-2 border-orange-500  rounded-xl p-2"
          placeholder="Enter full name here"
          {...register("fullName", { required: false })}
        />
        
      </div>
      <div className=" flex flex-col gap-2 px-2">
        <label className=" text-orange-500 font-semibold">
          Enter phone number
          <sup className=" text-red-500 text-sm">*</sup>
        </label>
        <input
          type="number"
          placeholder="Whatsapp Number"
          className=" w-full border-2 border-orange-500  rounded-xl p-2"
          {...register("phoneNum", {
            required: {
              value: true,
              message: "Please enter Phone Number",
            },
            maxLength: { value: 10, message: "Invalid Phone Number" },
            minLength: { value: 8, message: "Invalid Phone Number" },
          })}
        />
        {errors.phoneNum && (
          <span className=" text-red-500">phoneNum is required</span>
        )}
      </div>
      <div className=" flex flex-col gap-2 px-2">
        <label className=" text-orange-500 font-semibold">
          Enter message
          <sup className=" text-red-500 text-sm">*</sup>
        </label>
        <textarea
          type="text"
          className=" w-full border-2 border-orange-500  rounded-xl p-2"
          placeholder="Enter address here"
          {...register("message", { required: false })}
        />
      </div>
      
      <div className=" w-full items-center flex justify-center p-2">
        <button className=" bg-orange-500 px-5 py-2 rounded-xl hover:scale-105  bg-gradient-to-r from-orange-500 to-red-500 text-white transition-all duration-200">
          Submit
        </button>
      </div>
    </form>
  </div>
  )
}

export default ContactUs