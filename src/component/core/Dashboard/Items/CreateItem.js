import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { itemEndPoints } from '../../../../Services/AllApi'
import toast from 'react-hot-toast'
import { apiConnector } from '../../../../Services/ApiConnector'
import ImageUpload from '../Puja/ImageUpload'
import { useNavigate } from 'react-router-dom'

const CreateItem = () => {
    const {register, setValue, handleSubmit, formState:{errors}}= useForm()
    const {token} = useSelector((state)=> state.auth)
    const {CREATE_ITEM_API}= itemEndPoints
    const navigate = useNavigate()
    const onSubmit = async(data)=>{
        const {icon, title, description, price} = data
        const toastid = toast.loading("Please wait..")
        try {
            const response = await apiConnector("POST", CREATE_ITEM_API, { title, description, price, icon}, {
          "Content-Type": "multipart/form-data",
                Authorization:`Bearer ${token}`
            })
            toast.success("Item created")
            setValue("icon", "")
            setValue("description", "")
            setValue("title", "")
            setValue("price", "")
            navigate("/dashboard/my-items")
        } catch (error) {
            console.log(error)
        }
        toast.dismiss(toastid)

    }
  return (
    <div className=' w-full flex items-center justify-center flex-col gap-4'>
        <h1 className=' text-lg lg:text-3xl font-bold uppercase'>Add Offering Items here</h1>
        <form className=' w-[98%] lg:w-[40%] flex flex-col gap-3 p-3' onSubmit={handleSubmit(onSubmit)}>
        <div>
            <ImageUpload setValue={setValue} register={register} errors={errors} name={"icon"} label={"Add image"} />
        </div>
        <div className=" flex flex-col gap-2 px-2" >
          <label className=" text-orange-500 font-semibold">
            Enter title<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <input
            type="text"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter title here"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className=" text-red-500">Title is required</span>
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
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className=" text-red-500">Description is required</span>
          )}
          </div>
          <div className=" flex flex-col gap-2 px-2">
          <label className=" text-orange-500 font-semibold">
            Enter price<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <input
            type="number"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter price here"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className=" text-red-500">Price is required</span>
          )}
        </div>   
          <div className=" w-full items-center flex justify-center p-2">
          <button className=" bg-orange-500 px-5 py-2 rounded-xl hover:bg-orange-600 transition-all duration-200">Next</button>
        </div>
        </form>
    </div>
  )
}

export default CreateItem