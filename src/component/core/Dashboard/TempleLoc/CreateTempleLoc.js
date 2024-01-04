import React from 'react'
import toast from 'react-hot-toast'
import { apiConnector } from '../../../../Services/ApiConnector'
import { useNavigate } from 'react-router-dom'
import { templeEndPoint } from '../../../../Services/AllApi'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import ImageUpload from '../Puja/ImageUpload'

const CreateTempleLoc = () => {
    const {register, setValue, handleSubmit, formState:{errors}}= useForm()
    const {token} = useSelector((state)=> state.auth)
    const {CREATE_TEMPLE_LOCATION_API}= templeEndPoint
    const navigate = useNavigate()
    const onSubmit = async(data)=>{
        const {location, image} = data
        const toastid = toast.loading("Please wait..")
        try {
            const response = await apiConnector("POST", CREATE_TEMPLE_LOCATION_API, {location, image}, {
          "Content-Type": "multipart/form-data",
                Authorization:`Bearer ${token}`
            })
            toast.success("Location created")
        } catch (error) {
            console.log(error)
        }
        toast.dismiss(toastid)

    }
  return (
    <div className=' w-full flex items-center justify-center flex-col gap-4'>
    <h1 className=' text-xl lg:text-3xl font-bold uppercase'>Add temple location here</h1>
    <form className=' w-full lg:w-[40%] flex flex-col gap-3 p-3' onSubmit={handleSubmit(onSubmit)}>
    <div>
        <ImageUpload setValue={setValue} register={register} errors={errors} name={"image"} label={"Add temple image"} />
    </div>
    <div className=" flex flex-col gap-2 px-2" >
      <label className=" text-orange-500 font-semibold">
        Enter location<sup className=" text-red-500 text-sm">*</sup>
      </label>
      <input
        type="text"
        className=" w-full border-2 border-orange-500  rounded-xl p-2"
        placeholder="Enter location here"
        {...register("location", { required: true })}
      />
      {errors.location && (
        <span className=" text-red-500">location is required</span>
      )}
      </div>
      <div className=" w-full items-center flex justify-center p-2">
          <button className=" bg-orange-500 px-5 py-2 rounded-xl hover:bg-orange-600 transition-all duration-200">Next</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTempleLoc