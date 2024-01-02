import React, { useEffect, useState } from 'react'
import { paymentEndPoint } from '../../../../Services/AllApi'
import { apiConnector } from '../../../../Services/ApiConnector'
import { MdDelete } from 'react-icons/md'
import toast from 'react-hot-toast'

const AllCoupon = () => {
    const {GET_COUPNE_API, DELETE_COUPNE_API}= paymentEndPoint
    const [couponDetail, setcouponDetail] = useState([])
    const getCoupne = async()=>{
        try {
            const response = await apiConnector("GET", GET_COUPNE_API)
            setcouponDetail(response.data.data)
            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getCoupne()
    }, [])

    const handleDelete= async(coupneId)=>{
        try {
            await apiConnector("DELETE",DELETE_COUPNE_API, {coupneId})
            toast.success("Coupne deleted successfully")
            getCoupne()
            
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className=' w-full flex items-center justify-center flex-col gap-4'>
    <h1 className=' text-3xl font-bold uppercase'>Booked pooja</h1>
    <div className=' w-full'>
        {
            couponDetail.length > 0 ? (<div className=' w-full flex items-start'>
                {
                    couponDetail.map((data, index)=>{
                        return <div className=' flex flex-col gap-2 items-center border border-gray-500 rounded-xl p-3'>
                            <p><span className=' text-orange-500'>Coupne code:</span> {data.coupneCode}</p>
                            <p><span className=' text-orange-500'>Discount percentage:</span> {data.percentage}</p>
                            <MdDelete className=' text-red-500 text-2xl cursor-pointer' onClick={()=> handleDelete(data._id)} />
                        </div>
                    })
                }
            </div>):<p>No coupne created</p>
        }
    </div>
    </div>
  )
}

export default AllCoupon