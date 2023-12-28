import React, { useEffect, useState } from 'react'
import { packageEnPoints } from '../../../../Services/AllApi'
import { apiConnector } from '../../../../Services/ApiConnector'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { RiDeleteBin7Line } from 'react-icons/ri'

const MyPackage = () => {
    const {GET_ALL_PACKAGE_API, DELTE_PACKAGE_API} = packageEnPoints
    const [packageDetails, setpackageDetails] = useState([])
    const {token} = useSelector((state)=> state.auth)
    const getPackageDetails = async()=>{
       try {
           const response = await apiConnector("GET", GET_ALL_PACKAGE_API)
           setpackageDetails(response.data.data)
           
       } catch (error) {
           console.log(error)
       }
    }
    useEffect(() => {
     getPackageDetails()
    }, [])

    const handleDelete = async(packageId)=>{
        try {
            await apiConnector("DELETE", DELTE_PACKAGE_API, {packageId}, {
                Authorization : `Bearer ${token}`
            })
            toast.success("Deleted")
     getPackageDetails()

            
        } catch (error) {
            console.log(error)
        }
    }
    
  return (
    <div className=' flex flex-col items-center justify-center gap-10'>
        <h1 className=' text-3xl font-bold text-orange-500'>My package</h1>
        <div className=' w-full flex p-3 gap-5 flex-wrap border border-gray-500 rounded-xl'>
            {
                packageDetails.map((data, index)=>{
                    return <div className=' w-fit p-3 border border-orange-400 flex items-center flex-col gap-3 rounded-xl' key={index}>
                        <h2 className=' text-2xl font-bold text-orange-500'>₹{data.price}</h2>
                        <h2>{data.title}</h2>
                        <h2>Maha puja for {data.addPeople} <span>{data.addPeople > 2 ? "people" :"Person"}</span></h2>
                        <h3 className=' w-full h-[1px] bg-gray-500'></h3>
                        <ul className=' flex flex-col list-disc'>
                            <li>{data.benefit1}</li>
                            <li>{data.benefit1}</li>
                            <li>{data.benefit1}</li>
                        </ul>
                        <button className=' flex items-center gap-2 bg-red-500 p-2'
                onClick={()=> handleDelete(data._id)}
                >Delete<RiDeleteBin7Line /></button>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default MyPackage