import React, { useEffect, useState } from 'react'
import { apiConnector } from '../../../Services/ApiConnector'
import { paymentEndPoint } from '../../../Services/AllApi'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { setDiscountMoney } from '../../../Slices/CoupneSlice'

const CouponModal = ({cancelHandler, totalMoney}) => {
    const {GET_COUPNE_API}= paymentEndPoint
    const [couponDetail, setcouponDetail] = useState("")
    const [codeValue, setcodeValue] = useState("")
    useEffect(() => {
        const getCoupne = async()=>{
            try {
                const response = await apiConnector("GET", GET_COUPNE_API)
                setcouponDetail(response?.data?.data[0])
                
            } catch (error) {
                console.log(error)
            }
        }
        getCoupne()
    }, [])
    const dispatch = useDispatch()

    const handleSubmitCoupne = ()=>{
        if(couponDetail?.coupneCode === codeValue){
            const coupneMoney = totalMoney*couponDetail?.percentage/100
            dispatch(setDiscountMoney(coupneMoney))
            cancelHandler()
        }
        else{
            toast.error("Invalid code")
        }
    }
    
  return (
    <div className=' fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm lg:px-0 px-3'>
        <div className=' w-[500px] h-[300px] bg-white rounded-xl flex flex-col items-center gap-5  text-black'>
            <p onClick={()=>{
                cancelHandler()
            }} className=' w-full text-center cursor-pointer mt-5 text-red-500'>cancel</p>
            <div className=' flex justify-between items-center gap-10 lg:gap-20 lg:flex-row flex-col'>
              <input type="text" className=' border border-black p-2 rounded-xl w-full' placeholder='Enter coupne code' value={codeValue} onChange={(e)=> setcodeValue(e.target.value)} />
              <button type='button' className=' bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-xl' onClick={()=> handleSubmitCoupne()}>Apply</button>
            </div>
            <div className=' text-orange-500 font-semibold lg:text-3xl text-xl'>
                <p>{couponDetail?.description}</p>
              
            </div>
        <div>
         
        </div>
        </div>
    </div>
  )
}

export default CouponModal