import React, { useState } from 'react'
import { sectionEndPoint, subsectionEndPoint } from '../../../../Services/AllApi'
import { useEffect } from 'react'
import { apiConnector } from '../../../../Services/ApiConnector'
import { MdDelete } from "react-icons/md";
import toast from 'react-hot-toast';

const AllLibraryContent = () => {
    const { DELETE_SUBSECTION_API}= subsectionEndPoint
    const {GET_FULL_SECTION_API}= sectionEndPoint
    const [subsectionDetail, setsubsectionDetail] = useState([])
    const getDetail = async()=>{
       try {
           const response = await apiConnector("POST", GET_FULL_SECTION_API)
           setsubsectionDetail(response.data.data)
           
       } catch (error) {
           console.log(error)
       }
    }
    useEffect(() => {
     getDetail()
    }, [])

    const handledelete = async(sectionId, subsectionId)=>{
        const toastId = toast.loading("Please wait")
            try {
                await apiConnector("DELETE", DELETE_SUBSECTION_API, {sectionId, subsectionId})
                toast.success("Deleted")
     getDetail()
                
            } catch (error) {
                console.log(error)
            }
            toast.dismiss(toastId)
    }
    
  return (
    <div className=' flex flex-col items-center justify-center gap-14'>
    <h1 className=' text-3xl font-bold text-orange-500 uppercase'>All content of library</h1>
            {
                subsectionDetail.map((data)=>{
                    return <div className=' w-full flex gap-20 py-5 overflow-auto'>
                        {
                            data?.subsection?.map((datas, index)=>{
                    return <div className=' min-w-[170px] max-h-[500px] items-center flex flex-col gap-1 cursor-pointer ' key={index}>
                        <img src={datas?.image1} alt="" className=' w-[170px] object-cover min-h-[200px] rounded-xl' />
                        <p className=' font-bold  text-lg'>{datas.title1}</p>
                        <p className=' font-bold text-gray-500'>{datas.description1}</p>
                    <MdDelete className=' text-xl text-red-500 cursor-pointer' onClick={()=> handledelete(data._id, datas._id)} />
                       
                    </div>
            })
                        }
                    </div>
                })
            }



    </div>
  )
}

export default AllLibraryContent