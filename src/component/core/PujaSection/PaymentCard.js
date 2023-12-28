import React, { useEffect, useState } from 'react'
import { packageEnPoints } from '../../../Services/AllApi'
import { apiConnector } from '../../../Services/ApiConnector'
import { FaDotCircle } from "react-icons/fa";
import { FaArrowRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const PaymentCard = ({poojaId}) => {
    const {GET_ALL_PACKAGE_API} = packageEnPoints
    const [packageDetails, setpackageDetails] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
     const getPackgeDetails = async()=>{
        try {
            const response = await apiConnector("GET", GET_ALL_PACKAGE_API)
            console.log(response.data.data)
            setpackageDetails(response.data.data)

        } catch (error) {
            console.log(error)
        }
     }
     getPackgeDetails()
    }, [])

    const containerStyles = {
        background: 'linear-gradient(to bottom, #FFEEDE, white)',
      };
       const containerStyles2 = {
        background:'linear-gradient(to bottom, #ECF1FE, white)'
      };
      const containerStyles3 = {
        background:'linear-gradient(to bottom, #FFE6DE, white)'
      };
      const containerStyles4 = {
        background:'linear-gradient(to bottom, #F7F3FE, white)'
      };
    
  return (
    <div className=" flex flex-col gap-10 py-7">
         <h2 className=" text-4xl font-bold">Select pooja package</h2>
            <div className=" grid gap-9 sm:grid-cols-2 lg:grid-cols-4 mt-5">
                {
                    packageDetails.map((data, index)=>{
                        console.log(index)
                       return <div key={ index} className={`${index === 0 ? " border-orange-500 text-orange-500" : index === 1? " border-blue-500 text-blue-600" : index===2 ? " border-red-500 text-red-600" : " border-purple-500 text-purple-600"} flex flex-col  gap-3 border rounded-xl`}>
                       <div className=' flex flex-col items-center p-3 clear-start gap-3 rounded-xl' style={index === 0 ? containerStyles : index === 1? containerStyles2 : index===2 ? containerStyles3 : containerStyles4}>
                        <p className=' text-3xl font-bold'>₹ {data.price}</p>
                        <p className=' text-xl font-semibold'>{data.title}</p>
                        <p className=' text-gray-500 font-semibold'>Puja for {data.addPeople} {data.addPeople  > 1 ? "Person":"People"}</p>
                        <hr className=' w-full h-[2px] bg-gray-500' />
                        <ul className=' flex flex-col gap-3 text-gray-600 w-full items-start px-6'>
                            <li className=' flex items-center gap-2'><FaDotCircle className=' text-blue-600' />{data.benefit1}</li>
                            <li className=' flex items-center gap-2'><FaDotCircle className=' text-blue-600' />{data.benefit2}</li>
                            <li className=' flex items-center gap-2'><FaDotCircle className=' text-blue-600' />{data.benefit3}</li>
                        </ul>
                        <button className=" w-full p-2 rounded-xl bg-green-500 text-white font-bold cursor-pointer flex items-center justify-center ">
               <p className=" flex items-center gap-2"
               onClick={()=> navigate(`/puja/${poojaId}/${data._id}`)}
               >Participate <FaArrowRight /></p>
             </button>
                       </div>
                </div>
                    })
                }
            </div>
    </div>
  )
}

export default PaymentCard