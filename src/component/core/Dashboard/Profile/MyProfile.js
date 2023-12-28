import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { apiConnector } from '../../../../Services/ApiConnector'
import { authEndPoints } from '../../../../Services/AllApi'
import { CiEdit } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const MyProfile = () => {
  const {GET_USER_BY_ID_API} = authEndPoints

  const {token} = useSelector((state)=> state.auth)
  const [userDetails, setuserDetails] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
      const getUserDetails = async()=>{
        try {
          const response = await apiConnector("POST", GET_USER_BY_ID_API, null, {
            Authorization:`Bearer ${token}`
          })
          setuserDetails(response.data.data)
          
        } catch (error) {
          console.log(error)
        }
      }
      getUserDetails()
  }, [])
  

  return (
    <div className=' flex flex-col items-center justify-center gap-10'>
        <h1 className=' text-3xl font-bold text-orange-500'>My profile</h1>
        <div className=' w-full flex p-3 gap-5 flex-wrap border border-gray-500 rounded-xl flex-col items-center'>
           <div className=' flex flex-col gap-3 items-center'>
           <img src={userDetails.image} alt="" className=' w-[100px] h-[100px] object-cover rounded-full' />
           <button className=' flex items-center gap-3 p-2 bg-yellow-500'
           onClick={()=> navigate("/dashboard/settings")}
           >Edit <CiEdit /></button>
           </div>
           <div className=' w-full flex flex-col gap-4'>
              <div className=' flex justify-between items-center p-2'>
                <div className=' flex flex-col gap-2'>
                  <p className=' text-orange-500 font-bold'>Full name:</p>
                  <p>{userDetails.fullName}</p>
                </div>
              </div>
              <div className=' flex justify-between items-center p-2'>
                <div className=' flex flex-col gap-2'>
                  <p className=' text-orange-500 font-bold'>Email address:</p>
                  <p>{userDetails.email}</p>
                </div>
              </div> 
              <div className=' flex justify-between items-center p-2'>
                <div className=' flex flex-col gap-2'>
                  <p className=' text-orange-500 font-bold'>Whatsapp number:</p>
                  <p>{userDetails.phoneNum}</p>
                </div>
                <button className=' flex items-center gap-3 p-2 bg-yellow-500'
           onClick={()=> navigate("/dashboard/settings")}
           >Edit <CiEdit /></button>
              </div>
           </div>
        </div>

    </div>
  )
}

export default MyProfile