import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { paymentEndPoint } from '../../../../Services/AllApi'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { apiConnector } from '../../../../Services/ApiConnector'

const CreatePrivateCoupon = () => {
    const {register, setValue, handleSubmit, formState:{errors}}= useForm()
    const {token} = useSelector((state)=> state.auth)
    const {CREATE_COUPNE_API}= paymentEndPoint
    const navigate = useNavigate()
    const onSubmit = async(data)=>{
        const {coupneCode, percentage,description} = data
        const toastid = toast.loading("Please wait..")
        try {
            const response = await apiConnector("POST", CREATE_COUPNE_API, {coupneCode, percentage,description})
            toast.success("Coupne created")
            navigate("/dashboard/all-Coupon")
        } catch (error) {
            console.log(error)
        }
        toast.dismiss(toastid)

    }
  return (
    <div className=' w-full flex items-center justify-center flex-col gap-4'>
        <h1 className=' text-xl lg:text-3xl font-bold uppercase'>Add coupon here</h1>
        <form className=' w-full lg:w-[40%] flex flex-col gap-3 p-3' onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-col gap-2 px-2" >
          <label className=" text-orange-500 font-semibold">
            Enter coupon code<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <input
            type="text"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter coupon here"
            {...register("coupneCode", { required: true })}
          />
          {errors.coupneCode && (
            <span className=" text-red-500">coupneCode is required</span>
          )}
          </div>
          <div className=" flex flex-col gap-2 px-2">
          <label className=" text-orange-500 font-semibold">
            Enter percentage for discount<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <input
            type="number"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter percentage here"
            {...register("percentage", { required: true })}
          />
          {errors.percentage && (
            <span className=" text-red-500">percentage is required</span>
          )}
          </div>
           <div className=" flex flex-col gap-2 px-2">
          <label className=" text-orange-500 font-semibold">
            Enter description<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <textarea
            type="text"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter description here"
            {...register("description", { required: false })}
          />
        
          </div>
          <div className=" w-full items-center flex justify-center p-2">
          <button className=" bg-orange-500 px-5 py-2 rounded-xl hover:bg-orange-600 transition-all duration-200">Submit</button>
        </div>
        </form>
    </div>
  )
}

export default CreatePrivateCoupon