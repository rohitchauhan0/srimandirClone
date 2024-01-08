import React, { useEffect, useState } from 'react'
import { paymentEndPoint } from '../../../../Services/AllApi'
import { apiConnector } from '../../../../Services/ApiConnector'
import { useSelector } from 'react-redux'
import { GiByzantinTemple } from 'react-icons/gi'
import Timer from '../../PujaSection/Timer'
import { RiWhatsappLine } from 'react-icons/ri'
import { IoMdCalendar } from 'react-icons/io'
import { formattedDate } from '../../../../Utils/DateFormatter'

const EnrolledUser = () => {
    const {GET_ALL_PAYMENT_API} = paymentEndPoint
    const {token} = useSelector((state)=> state.auth)
    const [paymentDetails, setpaymentDetails] = useState([])
    useEffect(() => {
     const getDetail = async()=>{
        try {
            const response = await apiConnector("GET", GET_ALL_PAYMENT_API, null, {
                Authorization:`Bearer ${token}`
            })
            setpaymentDetails(response?.data?.data)
            
        } catch (error) {
            console.log(error)
        }
     }
     getDetail()
    }, [])

    console.log(paymentDetails)
    
  return (
    <div className=' w-full flex items-center justify-center flex-col gap-4'>
    <h1 className=' text-3xl font-bold uppercase text-orange-500'>Booked pooja</h1>
   {
    paymentDetails.length > 0 ? ( <div className=' w-full flex p-3 gap-5 flex-wrap border border-gray-500 rounded-xl'>
    <div className=" flex flex-col gap-10">
        {paymentDetails?.map((data, index) => {
            const newtargetDate = new Date(data.poojaId?.date).getTime()
          return (
          <div className=' flex items-center lg:flex-row flex-col gap-5 w-full justify-between' key={index}>
          <div className=" p-3 rounded-xl border-[1px] border-gray-400 flex flex-col gap-6 min-h-[300px] cursor-pointer"
            >
              <img
                src={data.poojaId?.image1}
                alt=""
                className=" w-full rounded-xl max-h-[168px] object-cover"
              />
              <h2 className=" text-2xl font-bold ">{data?.poojaId?.title}</h2>
              <div className=" flex flex-col gap-2 items-start">
                <div className=" flex gap-4 text-[17px] text-gray-500">
                  <GiByzantinTemple className=" text-orange-500" />
                  {data.poojaId?.address}
                </div>
                <div className=" flex gap-4 text-[20px] items-center text-gray-500">
                  <IoMdCalendar className=" text-orange-500" />
                  {/* {data.poojaId?.date} */}
                  {formattedDate(data.poojaId?.date)}
              </div>
                <div className=" text-gray-500 flex  gap-4 text-[17px] justify-between">
                <p>{data.packageId?.title}</p>
                   <p className=' text-green-500'>₹ {data.packageId?.price}</p>
                </div>
                <div className=" text-gray-500 flex  gap-4 text-[17px] justify-between">
                <p>{data.userId.fullName}</p>
                   <p className=' flex items-center gap-2'> <RiWhatsappLine className=' text-green-500' />{data.userId?.phoneNum}</p>
                </div> 
                
                <hr className=' w-full h-[2px] bg-gray-500' />
                <div className=" text-gray-500 flex  gap-4 flex-col text-[17px] justify-between">
                <h2>Offering items</h2>
               {
                data.offeringItem.map((datas, index)=>{
                    return <div className=' flex justify-between flex-col items-center'>
                        <p className=' text-green-500'>₹{datas?.price}</p>
                        <p>{datas.title}</p>
                    </div>
                })
               }
                </div>
                <hr className=' w-full h-[2px] bg-gray-500' />

                <div className=" text-gray-500 flex  gap-4 text-[17px] justify-between">
                <p>TotalPay: <span className=' text-green-600'>₹{data.totalPrice}</span></p>
                   <p>{data.packageId.title}</p>
                </div>
              </div>
            </div>
             {/* <div className=' lg:block hidden'> */}
             <Timer targetDate={newtargetDate}/>
             {/* </div> */}
          </div>
          );
        })}
    </div>
    </div>) : (<p>No pooja boooked</p>)
   }

    </div>
  )
}

export default EnrolledUser