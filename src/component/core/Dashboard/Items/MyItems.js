import React, { useEffect, useState } from 'react'
import { itemEndPoints } from '../../../../Services/AllApi'
import { apiConnector } from '../../../../Services/ApiConnector'
import { RiDeleteBin7Line } from 'react-icons/ri'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'

const MyItems = () => {

    const {GET_ALL_ITEM_API, DELTE_ITEM_API} = itemEndPoints
    const [itemDetails, setitemDetails] = useState([])
    const {token} = useSelector((state)=> state.auth)
    const getItem = async()=>{
       try {
           const response = await apiConnector("GET", GET_ALL_ITEM_API)
           setitemDetails(response.data.data)
           
       } catch (error) {
           console.log(error)
       }
    }
    useEffect(() => {
     getItem()
    }, [])

    const handleDelete = async(itemId)=>{
        try {
            await apiConnector("DELETE", DELTE_ITEM_API, {itemId}, {
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
            itemDetails.map((data, index)=>{
                return <div key={ index} className=' flex items-center gap-3 bg-orange-300 rounded-xl p-3'>
                    <img src={data.icon} alt="" className=' w-[200px] h-full object-cover' />
                    <div className=' flex items-center justify-between flex-col h-full'>
                        <h2 className=' text-2xl font-bold'>{data.title}</h2>
                        <p className=' text-sm text-gray-500'>{data.description}</p>
                        <p className=' text-green-500'>₹{data.price}</p>
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

export default MyItems