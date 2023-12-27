import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPooja, setSteps } from '../../../../Slices/PoojaSlice'
import { apiConnector } from '../../../../Services/ApiConnector'
import { pujaEndPoints } from '../../../../Services/AllApi'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


const Step3 = () => {
  const {pooja} = useSelector((state)=> state.pooja)
  const [Publish, setPublish] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {CREATE_PUJA_API} = pujaEndPoints
  const {token} = useSelector((state)=> state.auth)

  const goBackHandler = ()=>{
    dispatch(setPooja(null))
    dispatch(setSteps(1))
}

const {
  title, description, address,date, templeDetail, personName, personExperience, poojaBenefits, image1, image2, image3, image4
} = pooja



const handleSubmit = async()=>{
  const toastId = toast.loading("Please wait")
  try {
    const response = await apiConnector("POST", CREATE_PUJA_API, { title, description, address,date, templeDetail, personName, personExperience, poojaBenefits, image1, image2, image3, image4},{
      "Content-Type": "multipart/form-data",
      Authorization:`Bearer ${token}`
    })

    toast.success("Created successfull")
    dispatch(setPooja(null))
    navigate("/dashboard/my-pooja")
    dispatch(setSteps(1))
  } catch (error) {
    console.log(error)
  }
  toast.dismiss(toastId)
}

  return (
    <div className=' flex w-full items-center justify-center flex-col gap-20 mt-20'>
      <div className=' flex items-center gap-3 flex-col border border-gray-400 p-3 rounded-xl'>
        <div className=' flex items-center gap-3'>
        <input type="checkbox" className=' w-[20px] h-[20px]' onClick={()=> setPublish(!Publish)} />
        <p>Do you want to publish?</p>
        </div>
        <p>Please check carefully all details before publish!</p>
      </div>

      <div className=' w-full flex items-center justify-between'>
          <button
          type='button'
          className=' px-3 p-1 rounded-xl bg-orange-500'
          onClick={()=> goBackHandler()}
          >
          Go back
          </button> 
         {
          Publish === true &&  <button
          type='button'
          className=' px-3 p-1 rounded-xl bg-orange-500'
            onClick={()=> handleSubmit()}
          >
          Submit
          </button>
         }
       </div>
    </div>
  )
}

export default Step3