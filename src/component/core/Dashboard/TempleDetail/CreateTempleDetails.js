import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { apiConnector } from '../../../../Services/ApiConnector'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { templeEndPoint } from '../../../../Services/AllApi'
import { useNavigate } from 'react-router-dom'
import ImageUpload from '../Puja/ImageUpload'

const CreateTempleDetails = () => {
    const {register, setValue, handleSubmit, formState:{errors}}= useForm()
    const {token} = useSelector((state)=> state.auth)
    const {CREATE_TEMPLE_DETAILS_API, GET_ALL_TEMPLE_API}= templeEndPoint
    const navigate = useNavigate()

    const [templeLocDetails, settempleLocDetails] = useState([])

    useEffect(() => {
      const getTempleLoc = async()=>{
        try {
            const response = await apiConnector("POST",GET_ALL_TEMPLE_API )
            settempleLocDetails(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    getTempleLoc()
    
      
    }, [])
    
    const onSubmit = async(data)=>{
        const {templeName,
            about,
            address,
            overView,
            history,
            significance,
            architecture,
            mornignOpen,
            morningClose,
            morningArti,
            eveningOpen,
            eveningClose,
            eveningArti,
            offeringDetails,
            mapLink,
            byAir,
            byTrain,
            byRoad,
            instagramLink,
            youTubeLink,
            facebookLink,
            image1,
            image2,
            image3,
            image4,
            image5,
            templeLocId
        
        } = data
        console.log(data)

        const toastid = toast.loading("Please wait..")
        try {
            const response = await apiConnector("POST", CREATE_TEMPLE_DETAILS_API, {templeName,
                templeName,
      about,
      address,
      overView,
      history,
      significance,
      architecture,
      mornignOpen,
      morningClose,
      morningArti,
      eveningOpen,
      eveningClose,
      eveningArti,
      offeringDetails,
      mapLink,
      byAir,
      byTrain,
      byRoad,
      instagramLink,
      youTubeLink,
      facebookLink,
      templeLocId,
                image1,
                image2,
                image3,
                image4,
                image5
            }, {
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
    <h1 className=' text-xl lg:text-3xl font-bold uppercase'>Add temple details here</h1>
    <form className=' w-full lg:w-[40%] flex flex-col gap-3 p-3' onSubmit={handleSubmit(onSubmit)}>
    <div className=" flex flex-col gap-2 px-2">
    <label className=" text-orange-500 font-semibold">
        Select location<sup className=" text-red-500 text-sm ">*</sup>
      </label>
    <select name="" id="" className=' w-full p-2 rounded-xl border border-orange-500 cursor-pointer' {...register("templeLocId", {required:true})}>
        {
            templeLocDetails.map((data, index)=>{
                return <option  value={data._id} key={index}>
                    {data.location}
                </option>
            })
        }
    </select>
    </div>
    <div className=" flex flex-col gap-2 px-2" >
      <label className=" text-orange-500 font-semibold">
        Enter temple name<sup className=" text-red-500 text-sm">*</sup>
      </label>
      <input
        type="text"
        className=" w-full border-2 border-orange-500  rounded-xl p-2"
        placeholder="Enter temple name here"
        {...register("templeName", { required: true })}
      />
      {errors.templeName && (
        <span className=" text-red-500">templeName is required</span>
      )}
      </div>
      
     <div className=" flex flex-col gap-2 px-2" >
      <label className=" text-orange-500 font-semibold">
        Enter about temple <sup className=" text-red-500 text-sm">*</sup>
      </label>
      <input
        type="text"
        className=" w-full border-2 border-orange-500  rounded-xl p-2"
        placeholder="Enter about temple  here"
        {...register("about", { required: true })}
      />
      {errors.about && (
        <span className=" text-red-500">about is required</span>
      )}
      </div>

 <div className=" flex flex-col gap-2 px-2" >
      <label className=" text-orange-500 font-semibold">
        Enter full address of temple <sup className=" text-red-500 text-sm">*</sup>
      </label>
      <input
        type="text"
        className=" w-full border-2 border-orange-500  rounded-xl p-2"
        placeholder="Enter address of temple  here"
        {...register("address", { required: true })}
      />
      {errors.address && (
        <span className=" text-red-500">address is required</span>
      )}
      </div>

<div className=" flex flex-col gap-2 px-2" >
      <label className=" text-orange-500 font-semibold">
        Enter description of temple <sup className=" text-red-500 text-sm">*</sup>
      </label>
      <textarea
        type="text"
        className=" w-full border-2 border-orange-500  rounded-xl p-2"
        placeholder="Enter description of temple  here"
        {...register("overView", { required: true })}
      />
      {errors.overView && (
        <span className=" text-red-500">overView is required</span>
      )}
      </div>

<div className=" flex flex-col gap-2 px-2" >
      <label className=" text-orange-500 font-semibold">
        Enter history of temple <sup className=" text-red-500 text-sm">*</sup>
      </label>
      <textarea
        type="text"
        className=" w-full border-2 border-orange-500  rounded-xl p-2"
        placeholder="Enter history of temple  here"
        {...register("history", { required: true })}
      />
      {errors.history && (
        <span className=" text-red-500">history is required</span>
      )}
      </div>

<div className=" flex flex-col gap-2 px-2" >
      <label className=" text-orange-500 font-semibold">
        Enter significance of temple <sup className=" text-red-500 text-sm">*</sup>
      </label>
      <textarea
        type="text"
        className=" w-full border-2 border-orange-500  rounded-xl p-2"
        placeholder="Enter significance of temple  here"
        {...register("significance", { required: true })}
      />
      {errors.significance && (
        <span className=" text-red-500">significance is required</span>
      )}
      </div>

<div className=" flex flex-col gap-2 px-2" >
      <label className=" text-orange-500 font-semibold">
        Enter architecture of temple <sup className=" text-red-500 text-sm">*</sup>
      </label>
      <textarea
        type="text"
        className=" w-full border-2 border-orange-500  rounded-xl p-2"
        placeholder="Enter architecture of temple  here"
        {...register("architecture", { required: true })}
      />
      {errors.architecture && (
        <span className=" text-red-500">architecture is required</span>
      )}
      </div>




<div className=" flex flex-col gap-2 px-2" >
      <label className=" text-orange-500 font-semibold">
        Enter offering details of temple <sup className=" text-red-500 text-sm">*</sup>
      </label>
      <input
        type="text"
        className=" w-full border-2 border-orange-500  rounded-xl p-2"
        placeholder="Enter offering details of temple  here"
        {...register("offeringDetails", { required: true })}
      />
      {errors.offeringDetails && (
        <span className=" text-red-500">offeringDetails is required</span>
      )}
      </div>

 <div className=" flex flex-col gap-2 px-2" >
      <label className=" text-orange-500 font-semibold">
        Enter map link of temple <sup className=" text-red-500 text-sm">*</sup>
      </label>
      <input
        type="text"
        className=" w-full border-2 border-orange-500  rounded-xl p-2"
        placeholder="Enter map link of temple  here"
        {...register("mapLink", { required: true })}
      />
      {errors.mapLink && (
        <span className=" text-red-500">mapLink is required</span>
      )}
      </div>


      
<div className=" flex flex-col gap-2 px-2" >
      <label className=" text-orange-500 font-semibold">
        Enter address by air of temple <sup className=" text-red-500 text-sm">*</sup>
      </label>
      <textarea
        type="text"
        className=" w-full border-2 border-orange-500  rounded-xl p-2"
        placeholder="Enter address by air of temple  here"
        {...register("byAir", { required: true })}
      />
      {errors.byAir && (
        <span className=" text-red-500">byAir is required</span>
      )}
      </div>

      <div className=" flex flex-col gap-2 px-2" >
      <label className=" text-orange-500 font-semibold">
        Enter address by train of temple <sup className=" text-red-500 text-sm">*</sup>
      </label>
      <textarea
        type="text"
        className=" w-full border-2 border-orange-500  rounded-xl p-2"
        placeholder="Enter address by train of temple  here"
        {...register("byTrain", { required: true })}
      />
      {errors.byTrain && (
        <span className=" text-red-500">byTrain is required</span>
      )}
      </div>
      
  <div className=" flex flex-col gap-2 px-2" >
      <label className=" text-orange-500 font-semibold">
        Enter address by road of temple <sup className=" text-red-500 text-sm">*</sup>
      </label>
      <textarea
        type="text"
        className=" w-full border-2 border-orange-500  rounded-xl p-2"
        placeholder="Enter address by road of temple  here"
        {...register("byRoad", { required: true })}
      />
      {errors.byRoad && (
        <span className=" text-red-500">byRoad is required</span>
      )}
      </div>

      <div className=" flex flex-col gap-2 px-2" >
      <label className=" text-orange-500 font-semibold">
        Enter instagram link of temple <sup className=" text-red-500 text-sm">*</sup>
      </label>
      <textarea
        type="text"
        className=" w-full border-2 border-orange-500  rounded-xl p-2"
        placeholder="Enter instagram link of temple  here"
        {...register("instagramLink", { required: true })}
      />
      {errors.instagramLink && (
        <span className=" text-red-500">instagramLink is required</span>
      )}
      </div>

       <div className=" flex flex-col gap-2 px-2" >
      <label className=" text-orange-500 font-semibold">
        Enter facebook link of temple <sup className=" text-red-500 text-sm">*</sup>
      </label>
      <textarea
        type="text"
        className=" w-full border-2 border-orange-500  rounded-xl p-2"
        placeholder="Enter facebook link of temple  here"
        {...register("facebookLink", { required: true })}
      />
      {errors.facebookLink && (
        <span className=" text-red-500">facebookLink is required</span>
      )}
      </div>

        <div className=" flex flex-col gap-2 px-2" >
      <label className=" text-orange-500 font-semibold">
        Enter youtube link of temple <sup className=" text-red-500 text-sm">*</sup>
      </label>
      <textarea
        type="text"
        className=" w-full border-2 border-orange-500  rounded-xl p-2"
        placeholder="Enter youtube link of temple  here"
        {...register("youTubeLink", { required: true })}
      />
      {errors.youTubeLink && (
        <span className=" text-red-500">youTubeLink is required</span>
      )}
      </div>

      <div>
      <ImageUpload setValue={setValue} register={register} errors={errors} name={"image1"} label={"Add image1"} />
      </div>
      <div>
      <ImageUpload setValue={setValue} register={register} errors={errors} name={"image2"} label={"Add image2"} />
      </div>

       <div>
      <ImageUpload setValue={setValue} register={register} errors={errors} name={"image3"} label={"Add image3"} />
      </div> 
       <div>
      <ImageUpload setValue={setValue} register={register} errors={errors} name={"image4"} label={"Add image4"} />
      </div> 
      <div>
      <ImageUpload setValue={setValue} register={register} errors={errors} name={"image5"} label={"Add image5"} />
      </div>
      


      <div className=" w-full items-center flex justify-center p-2">
          <button className=" bg-orange-500 px-5 py-2 rounded-xl hover:bg-orange-600 transition-all duration-200">Next</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTempleDetails


{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.436553505343!2d81.8843481!3d25.457094400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ab5413b990cf9%3A0x784b8544788a324c!2sNagvasuki%20Mandir!5e0!3m2!1sen!2sin!4v1704299595305!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}