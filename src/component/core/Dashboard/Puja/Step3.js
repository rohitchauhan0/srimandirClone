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




const handleSubmit = async()=>{
  const toastId = toast.loading("Please wait")
  const { title, description, address, date, templeDetail, personName, personExperience, image1, image2, image3, image4, poojaBenefits,templeName } = pooja;

  const formData = new FormData();
formData.append('title', title);
formData.append('description', description);
formData.append('address', address);
formData.append('date', date);
formData.append('templeDetail', templeDetail);
formData.append('personName', personName);
formData.append('personExperience', personExperience);
formData.append('poojaBenefits', poojaBenefits);
formData.append('templeName', templeName);
formData.append('image1', image1);
formData.append('image2', image2);
formData.append('image3', image3);
formData.append('image4', image4);


  try {
    const response = await apiConnector("POST", CREATE_PUJA_API, formData,{
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