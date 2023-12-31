import React from 'react'
import { useForm } from 'react-hook-form'
import { subsectionEndPoint } from '../../../../Services/AllApi'
import toast from 'react-hot-toast'
import { apiConnector } from '../../../../Services/ApiConnector'
import ImageUpload from '../Puja/ImageUpload'
import LibraryImageUpload from './LibraryImage'
import { useSelector } from 'react-redux'

const CreateBlog = ({name, sectionId}) => {
    const {register, setValue, handleSubmit, formState:{errors}}= useForm()
    const {token} = useSelector((state)=> state.auth)
    const {CREATE_BLOG_API} = subsectionEndPoint

    const onSubmit= async(data)=>{

        const { title,
            description,
            heading1,about,title2,description2,
            blogDescription,image2, image1} = data
        const toastId = toast.loading("Please wait")
        try {
            const response = await apiConnector("POST", CREATE_BLOG_API, { title,
                description,
                heading1,
                about,
                title2,
                description2,
                blogDescription, sectionId,image1, image2}, {
                "Content-Type": "multipart/form-data",
                Authorization:`Bearer ${token}`
            })
            toast.success("Created")
            
        } catch (error) {
            console.log(error)
        }
        toast.dismiss(toastId)
    }
  return (
    <div className=' w-full flex items-center justify-center flex-col gap-4 mt-10'>
    <h1 className=' text-xl lg:text-3xl font-bold uppercase'>Create {name}</h1>
    <form className=' w-full lg:w-[40%] flex flex-col gap-3 p-3' onSubmit={handleSubmit(onSubmit)}>
    <div className=" flex flex-col gap-2 px-2" >
          <label className=" text-orange-500 font-semibold">
            Enter {name} title<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <input
            type="text"
            className="w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter title here"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className=" text-red-500">Title is required</span>
          )}
          </div>
          <div className=" flex flex-col gap-2 px-2">
          <label className=" text-orange-500 font-semibold">
            Enter sub title<sup className=" text-red-500 text-sm">*</sup>
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
            Enter Heading of {name}<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <input
            type="text"
            className="w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter Heading  here"
            {...register("heading1")}
          />
          {errors.heading1 && (
            <span className=" text-red-500">Heading  is required</span>
          )}
          </div>
          <div className=" flex flex-col gap-2 px-2">
          <label className=" text-orange-500 font-semibold">
            Enter About {name}<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <textarea
            type="text"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter about  here"
            {...register("about")}
          />
          {errors.about && (
            <span className=" text-red-500">About is required</span>
          )}
          </div>
          
          
          
          <div className=" flex flex-col gap-2 px-2" >
          <label className=" text-orange-500 font-semibold">
            Enter Heading2 of {name}<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <input
            type="text"
            className="w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter Heading  here"
            {...register("title2")}
          />
          {errors.title2 && (
            <span className=" text-red-500">Heading  is required</span>
          )}
          </div>
          <div className=" flex flex-col gap-2 px-2">
          <label className=" text-orange-500 font-semibold">
            Enter About {name}2<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <textarea
            type="text"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter about  here"
            {...register("description2")}
          />
          {errors.description2 && (
            <span className=" text-red-500">About is required</span>
          )}
          </div> 
          
          
           <div className=" flex flex-col gap-2 px-2">
          <label className=" text-orange-500 font-semibold">
            Enter blog<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <textarea
            type="text"
            className=" w-full border-2 border-orange-500  rounded-xl p-2 min-h-[500px]"
            placeholder="Enter about of arti here"
            {...register("blogDescription")}
          />
         
          </div> 
          <ImageUpload setValue={setValue} register={register} errors={errors} name={"image1"} label={"Add thumbnail"} />
            <LibraryImageUpload setValue={setValue} register={register} errors={errors} name={"image2"} label={"Add arti image"}/>



          <button className=" bg-orange-500 px-5 py-2 rounded-xl hover:bg-orange-600 transition-all duration-200">Submit</button>



          </form>
    </div>
  )
}

export default CreateBlog