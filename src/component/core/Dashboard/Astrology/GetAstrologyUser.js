import React, { useEffect, useState } from 'react'
import { astrologyEndPoint } from '../../../../Services/AllApi'
import { apiConnector } from '../../../../Services/ApiConnector'
import toast from 'react-hot-toast'
import { RiDeleteBin7Line } from 'react-icons/ri'

const GetAstrologyUser = () => {
    const {GET_FORM_API, DELETE_FORM_API} = astrologyEndPoint
    const [details, setdetails] = useState([])
    const getData = async()=>{
      try {
          const response= await apiConnector("GET", GET_FORM_API)
          setdetails(response.data.data)

          
      } catch (error) {
          console.log(error)
      }
    }
    useEffect(() => {
      getData()
    }, [])
    console.log(details)

    const handleDelete = async(formId)=>{
        try {
            await apiConnector("DELETE", DELETE_FORM_API, {formId})
            toast.success("Deleted successfully")
      getData()

            
        } catch (error) {
            console.log(error)
        }

    }
    
  return (
    <div className=' flex flex-col items-center justify-center gap-10 lg:px-0 px-2'>
    <h1 className=' text-3xl font-bold text-orange-500'>Astrology users</h1>
    <div className=' w-full flex p-3 gap-5 flex-wrap border border-gray-500 rounded-xl '>
        {
            details.map((data, index)=>{
                return <div key={ index} className=' w-full h-fit  flex flex-col  gap-3  rounded-xl p-3'>
                        <p className=' text-lg'><span className=' text-orange-500'>Full name:</span> {data?.fullName}</p>
                        <p className=' text-lg'><span className=' text-orange-500'>Address:</span> {data?.address}</p>
                        <p className=' text-lg'><span className=' text-orange-500'>Phone number:</span> {data?.phoneNum}</p>
                        <p className=' text-lg'><span className=' text-orange-500'>Date of birth:</span> {data?.dob?.split("T")[0]}</p>
                        <button className=' flex items-center gap-2 bg-red-500 p-2 w-fit'
                onClick={()=> handleDelete(data._id)}
                >Delete<RiDeleteBin7Line /></button>
                    </div>
            })
        }

    </div>

    </div>
  )
}

export default GetAstrologyUser