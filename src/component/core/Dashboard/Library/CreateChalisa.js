import React from 'react'
import { useForm } from 'react-hook-form'
import ImageUpload from '../Puja/ImageUpload'
import LibraryImageUpload from './LibraryImage'
import { subsectionEndPoint } from '../../../../Services/AllApi'
import { apiConnector } from '../../../../Services/ApiConnector'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'

const CreateChalisa = ({sectionId}) => {
    const {CREATE_CHALIS_API}= subsectionEndPoint
    const {register, setValue, handleSubmit, formState:{errors}}= useForm()
    const {token} = useSelector((state)=> state.auth)

    const onSubmit= async(data)=>{

        console.log(data)
        const {title, description, heading1, about, dohaChopai,dohaChopai2, descriptionOfChalisa,image1, image2} = data
        const toastId = toast.loading("Please wait")
        try {
            const response = await apiConnector("POST", CREATE_CHALIS_API, {title, description, heading1, about, dohaChopai,dohaChopai2,descriptionOfChalisa, sectionId,image1, image2}, {
                "Content-Type": "multipart/form-data",
                Authorization:`Bearer ${token}`
            })
            toast.success("Chalisa created")
            
        } catch (error) {
            console.log(error)
        }
        toast.dismiss(toastId)
    }
  return (
    <div className=' w-full flex items-center justify-center flex-col gap-4 mt-10'>
    <h1 className=' text-xl lg:text-3xl font-bold uppercase'>Create chalisa</h1>
    <form className=' w-full lg:w-[40%] flex flex-col gap-3 p-3' onSubmit={handleSubmit(onSubmit)}>
    <div className=" flex flex-col gap-2 px-2" >
          <label className=" text-orange-500 font-semibold">
            Enter Chalisa title<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <input
            type="text"
            className="w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter arti title here"
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
            placeholder="Enter arti description here"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className=" text-red-500">Description is required</span>
          )}
          </div>
          
          
           <div className=" flex flex-col gap-2 px-2" >
          <label className=" text-orange-500 font-semibold">
            Enter Heading of chalisa<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <input
            type="text"
            className="w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter Heading of Arti here"
            {...register("heading1", { required: true })}
          />
          {errors.heading1 && (
            <span className=" text-red-500">Heading of arti is required</span>
          )}
          </div>
          <div className=" flex flex-col gap-2 px-2">
          <label className=" text-orange-500 font-semibold">
            Enter About chalisa<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <textarea
            type="text"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter about of arti here"
            {...register("about", { required: true })}
          />
          {errors.about && (
            <span className=" text-red-500">About is required</span>
          )}
          </div> 
          {/* dohaTitle, dohaChopai, */}
          
           
          <div className=" flex flex-col gap-2 px-2">
          <label className=" text-orange-500 font-semibold">
            Enter Doha<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <textarea
            type="text"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter about of arti here"
            {...register("dohaChopai", { required: true })}
          />
          {errors.dohaChopai && (
            <span className=" text-red-500">Doha is required</span>
          )}
          </div> 
          
          
         
          <div className=" flex flex-col gap-2 px-2">
          <label className=" text-orange-500 font-semibold">
            Write  chalisa <sup className=" text-red-500 text-sm">*</sup>
          </label>
          <textarea
            type="text"
            className=" w-full border-2 border-orange-500  rounded-xl p-2 min-h-[900px]"
            placeholder="Enter arti here"
            {...register("descriptionOfChalisa", { required: true })}
          />
          {errors.descriptionOfChalisa && (
            <span className=" text-red-500">Chalisa description is required</span>
          )}
          <div>
            
          <div className=" flex flex-col gap-2 px-2">
          <label className=" text-orange-500 font-semibold">
            Enter Doha 2<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <textarea
            type="text"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter about of arti here"
            {...register("dohaChopai2", { required: true })}
          />
          {errors.dohaChopai2 && (
            <span className=" text-red-500">Doha is required</span>
          )}
          </div> 
            <ImageUpload setValue={setValue} register={register} errors={errors} name={"image1"} label={"Add thumbnail"} />
            <LibraryImageUpload setValue={setValue} register={register} errors={errors} name={"image2"} label={"Add Chalisa image"}/>
        </div>
          </div>
          <button className=" bg-orange-500 px-5 py-2 rounded-xl hover:bg-orange-600 transition-all duration-200">Submit</button>
    </form>
    </div>
  )
}

export default CreateChalisa