import React from 'react'
import { sectionEndPoint } from '../../../../Services/AllApi'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { apiConnector } from '../../../../Services/ApiConnector'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import ImageUpload from '../Puja/ImageUpload'

const CreateSection = () => {
    const {register, setValue, handleSubmit, formState:{errors}}= useForm()
    const {token} = useSelector((state)=> state.auth)
    const {CREATE_SECTION_API}= sectionEndPoint
    const navigate = useNavigate()
    const onSubmit = async(data)=>{
        const {title, description,mainHindiTitle, image} = data
        const toastid = toast.loading("Please wait..")
        try {
            const response = await apiConnector("POST", CREATE_SECTION_API, {title, description,mainHindiTitle, image}, {
          "Content-Type": "multipart/form-data",
                Authorization:`Bearer ${token}`
            })
            toast.success("Section created")
        } catch (error) {
            console.log(error)
        }
        toast.dismiss(toastid)

    }
  return (
    <div className=' w-full flex items-center justify-center flex-col gap-4'>
    <h1 className=' text-xl lg:text-3xl font-bold uppercase'>Add section here</h1>
    <form className=' w-full lg:w-[40%] flex flex-col gap-3 p-3' onSubmit={handleSubmit(onSubmit)}>
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
      <div className=" flex flex-col gap-2 px-2" >
      <label className=" text-orange-500 font-semibold">
        Enter title in hindi<sup className=" text-red-500 text-sm">*</sup>
      </label>
      <input
        type="text"
        className=" w-full border-2 border-orange-500  rounded-xl p-2"
        placeholder="Enter title in hindi here"
        {...register("mainHindiTitle", { required: true })}
      />
      {errors.mainHindiTitle && (
        <span className=" text-red-500">Hindi Title is required</span>
      )}
      </div>
      <div>
            <ImageUpload setValue={setValue} register={register} errors={errors} name={"image"} label={"Add image"} />
        </div>
      <div className=" w-full items-center flex justify-center p-2">
      <button className=" bg-orange-500 px-5 py-2 rounded-xl hover:bg-orange-600 transition-all duration-200">Create</button>
    </div>
    </form>
</div>
  )
}

export default CreateSection