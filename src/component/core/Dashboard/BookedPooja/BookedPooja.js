import React, { useEffect, useState } from 'react'
import { authEndPoints } from '../../../../Services/AllApi'
import { apiConnector } from '../../../../Services/ApiConnector'
import { useSelector } from 'react-redux'
import { GiByzantinTemple } from 'react-icons/gi'
import Timer from '../../PujaSection/Timer'

const BookedPooja = () => {
    const {GET_USER_BY_ID_API} = authEndPoints
    const{token}= useSelector((state)=> state.auth)
    const [userDetails, setuserDetails] = useState("")
    useEffect(() => {
     const getUser = async()=>{
        try {
            const response = await apiConnector("POST", GET_USER_BY_ID_API, null, {
                Authorization:`Bearer ${token}`
            })
            setuserDetails(response.data.data.pooja)
            
        } catch (error) {
            console.log(error)
        }
     }

     getUser()
    }, [])
    
  return (
    <div className=' w-full flex items-center justify-center flex-col gap-4'>
    <h1 className=' text-3xl font-bold uppercase'>Booked pooja</h1>
   {
    userDetails.length > 0 ? ( <div className=' w-full flex p-3 gap-5 flex-wrap border border-gray-500 rounded-xl'>
    <div className=" flex flex-col gap-10">
        {userDetails.map((data, index) => {
            const newtargetDate = new Date(data.poojaId.date).getTime()
          return (
          <div className=' flex items-center lg:flex-row flex-col gap-5 w-full justify-between' key={index}>
          <div className=" p-3 rounded-xl border-[1px] border-gray-400 flex flex-col gap-6 min-h-[300px] cursor-pointer"
            >
              <img
                src={data.poojaId.image1}
                alt=""
                className=" w-full rounded-xl max-h-[168px] object-cover"
              />
              <h2 className=" text-2xl font-bold ">{data.poojaId.title}</h2>
              <div className=" flex flex-col gap-2">
                <div className=" flex gap-4 text-[17px] text-gray-500">
                  <GiByzantinTemple className=" text-orange-500" />
                  {data.poojaId.address}
                </div>
                <div className=" text-gray-500 flex  gap-4 text-[17px]">
                <p>{data.packageId.title}</p>
                   <p>₹ {data.packageId.price}</p>
                </div>
              </div>
            </div>
              <Timer targetDate={newtargetDate}/>
          </div>
          );
        })}
    </div>
    </div>) : (<p>No pooja boooked</p>)
   }

    </div>
  )
}

export default BookedPooja