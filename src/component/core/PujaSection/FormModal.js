import React from 'react'
import { setFormData, setShowFrom } from '../../../Slices/PaymentSlice'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const FormModal = ({form}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register, handleSubmit, formState:{errors}}= useForm()

    const onSubmit = (data)=>{
      dispatch(setFormData(data))
      navigate(`/puja/${form.poojaId}/${form.paymentId}`)
    }

  return (
    <div className=" w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-[1000] bg-black bg-opacity-30 backdrop-blur-sm">
            <div className=' flex bg-white rounded-xl p-3 flex-col items-center w-[500px]'>
                    <p onClick={()=> dispatch(setShowFrom(false))} className=' underline hover:scale-105 cursor-pointer'>Cancel</p>
                    <form className=' w-full flex flex-col gap-3 p-3' onSubmit={handleSubmit(onSubmit)}>
                    <div className=" flex flex-col gap-2 px-2">
                <label className=" text-orange-500 font-semibold">
                  Enter Full name<sup className=" text-red-500 text-sm">*</sup>
                </label>
                <input
                  type="text"
                  className=" w-full border-2 border-orange-500  rounded-xl p-2"
                  placeholder="Enter full name here"
                  {...register("fullname", { required: true })}
                />
                {errors.fullName && (
                  <span className=" text-red-500">fullName is required</span>
                )}
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
                  Enter address{" "}
                  <sup className=" text-red-500 text-sm">*</sup>
                </label>
                <input
                  type="text"
                  className=" w-full border-2 border-orange-500  rounded-xl p-2"
                  placeholder="Enter address here"
                  {...register("address", { required: false })}
                />
              </div>

              <div className=" flex flex-col gap-2 px-2">
                <label className=" text-orange-500 font-semibold">
                  Enter gotra{" "}
                  <sup className=" text-red-500 text-sm">(optional)</sup>
                </label>
                <input
                  type="text"
                  className=" w-full border-2 border-orange-500  rounded-xl p-2"
                  placeholder="Enter gotra here"
                  {...register("gotra", { required: false })}
                />
              </div>
              <div className=" flex flex-col gap-2 px-2">
                <label className=" text-orange-500 font-semibold">
                  Enter Date of birth{" "}
                  <sup className=" text-red-500 text-sm">*</sup>
                </label>
                <input
                  type="date"
                  className=" w-full border-2 border-orange-500  rounded-xl p-2"
                  {...register("dob", { required: true })}
                />
              </div>
          <div className=" w-full items-center flex justify-center p-2">
          <button className=" bg-orange-500 px-5 py-2 rounded-xl hover:bg-orange-600 transition-all duration-200">Next</button>
        </div>
        </form>
            </div>
    </div>
  )
}

export default FormModal