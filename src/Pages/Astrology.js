import React from 'react'
import { useForm } from 'react-hook-form'
import { astrologyEndPoint } from '../Services/AllApi'
import toast from 'react-hot-toast'
import { apiConnector } from '../Services/ApiConnector'
import astrologyImage from "../Assets/astrologyFront.jpg"
import Footer from '../component/common/Footer'

const Astrology = () => {
    const {register, setValue, handleSubmit, formState:{errors}}= useForm()
    const {CREATE_FORM_API}= astrologyEndPoint
    const onSubmit = async(data)=>{
        const {fullName, address, phoneNum, dob} = data
        const toastid = toast.loading("Please wait..")
        try {
            const response = await apiConnector("POST", CREATE_FORM_API, {fullName, address, phoneNum, dob})
            toast.success("Thank you!")
            setValue("fullName", " ")
            setValue("address", " ")
            setValue("phoneNum", " ")
            setValue("dob", " ")
        } catch (error) {
            console.log(error)
        }
        toast.dismiss(toastid)

    }
  return (
  <>
      <div className=" flex items-center justify-between flex-col min-h-screen mt-20 lg:px-0 px-3">
        <div className=' max-w-screen-xl mx-auto flex flex-col h-full  '>
        <div className=' flex justify-between w-full items-center h-full lg:flex-row flex-col'>
           
            <p className=' text-2xl font-bold px-5'>
        Astrology is the study of the movements and relative positions of celestial objects as a means of divining information about human affairs and terrestrial events.
        Please fill out the form below to get personalized astrology insights.
        </p>

            <img src={astrologyImage} alt="" className=' rounded-full w-full h-full object-cover animate-spin' />
        </div>

        <div className=' w-full flex flex-col items-center justify-center mt-14'>
        <form className=' w-full lg:w-[40%] flex flex-col gap-3 p-3' onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-col gap-2 px-2" >
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
            Enter phone number<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <input
            type="number"
            placeholder="Whatsapp Number"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            {...register("phoneNum",  {
                                    required: { value: true, message: "Please enter Phone Number" },
                                    maxLength: { value: 10, message: "Invalid Phone Number" },
                                    minLength: { value: 8, message: "Invalid Phone Number" }
                                })}
            />
          {errors.phoneNum && (
            <span className=" text-red-500">phoneNum is required</span>
          )}
          </div>
          <div className=" flex flex-col gap-2 px-2" >
          <label className=" text-orange-500 font-semibold">
            Enter address <sup className=" text-red-500 text-sm">(optional)</sup>
          </label>
          <input
            type="text"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter address here"
            {...register("address", { required: false })}
          />
          
          </div>
         <div className=" flex flex-col gap-2 px-2" >
          <label className=" text-orange-500 font-semibold">
            Enter Date of birth <sup className=" text-red-500 text-sm">(optional)</sup>
          </label>
          <input
            type="date"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            {...register("dob", { required: false })}
          />
          
          </div>
          <div className=" w-full items-center flex justify-center p-2">
          <button className=" bg-orange-500 px-5 py-2 rounded-xl hover:bg-orange-600 transition-all duration-200">Submit</button>
        </div>
        </form>
        </div>
             
        </div>
    </div>
    <Footer/>
  </>
  )
}

export default Astrology