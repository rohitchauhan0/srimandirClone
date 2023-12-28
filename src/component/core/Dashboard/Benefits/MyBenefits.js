import React, { useEffect, useState } from 'react'
import { benifitEndPoints } from '../../../../Services/AllApi'
import { apiConnector } from '../../../../Services/ApiConnector'
import { useSelector } from 'react-redux'
import { RiDeleteBin7Line } from 'react-icons/ri'
import toast from 'react-hot-toast'

const MyBenefits = () => {
    const {DELETE_BENEFITS_API, GET_ALL_BENEFITS_API} = benifitEndPoints
    const [benefitDetails, setbenefitDetails] = useState([])
    const {token} = useSelector((state)=> state.auth)
    const getItem = async()=>{
       try {
           const response = await apiConnector("GET", GET_ALL_BENEFITS_API)
           setbenefitDetails(response.data.data)
           
       } catch (error) {
           console.log(error)
       }
    }
    useEffect(() => {
     getItem()
    }, [])

    const handleDelete = async(benefitId)=>{
        try {
            await apiConnector("DELETE", DELETE_BENEFITS_API, {benefitId}, {
                Authorization:`Bearer ${token}`
            })
            toast.success("Deleted")
     getItem()
            
            
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className=' flex flex-col items-center justify-center gap-10'>
    <h1 className=' text-3xl font-bold text-orange-500'>My package</h1>
    <div className=' w-full flex p-3 gap-5 flex-wrap border border-gray-500 rounded-xl'>
        {
            benefitDetails.map((data, index)=>{
                return <div key={ index} className=' w-[300px] h-[350px] flex  gap-3 bg-orange-300 rounded-xl p-3'>
                    <img src={data.icons} alt="" className=' w-[90px] h-[90px] object-cover rounded-full ' />
                    <div className=' flex items-center gap-3 flex-col'>
                        <h2 className=' text-xxl font-bold'>{data.title}</h2>
                        <p className=' text-sm text-gray-500'>{data.description}</p>
                        <button className=' flex items-center gap-2 bg-red-500 p-2'
                onClick={()=> handleDelete(data._id)}
                >Delete<RiDeleteBin7Line /></button>
                    </div>
                </div>
            })
        }

    </div>

    </div>
  )
}

export default MyBenefits