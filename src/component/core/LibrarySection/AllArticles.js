import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { sectionEndPoint } from '../../../Services/AllApi'
import { apiConnector } from '../../../Services/ApiConnector'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import starImage from "../../../Assets/stars.png"

const AllArticles = () => {
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

    const navigate = useNavigate()

    
  return (
    <div className=' flex flex-col items-center justify-center gap-14 mt-28 max-w-screen-xl lg:px-0 px-3 mx-auto'>

          <div className=' w-full flex flex-col gap-2 items-start'>
          <div className=' flex gap-3 h-fit'>
            <div className=' h-[30px] w-1 bg-orange-600'></div>
          <h2  className=' text-2xl font-bold'>आज श्री मंदिर पर लोकप्रिय</h2>
          </div>
         <div className=' w-full flex gap-7 flex-wrap px-20'>
         {
                subsectionDetail.map((data, index)=>{
                    return <div className=' p-2 border border-gray-300 rounded-xl text-cyan-500 font-bold cursor-pointer' key={index} onClick={()=> navigate(`/articles/${data?.title}`)}>
                        {data.mainHindiTitle}
                    </div>
                })
            }

         </div>
          </div>
            {
                subsectionDetail.map((data)=>{
                    
                    return <div className=' w-full flex flex-col  items-start '>
                    <div className=' flex gap-3 h-fit'>
            <div className=' h-[30px] w-1 bg-orange-600'></div>
          <h2  className=' text-2xl font-bold'>{data?.mainHindiTitle}</h2>
          </div>
                    <div className=' w-full flex gap-10 py-5 overflow-auto '>
                        {
                            data?.subsection?.map((datas, index)=>{
                    return <div className=' min-w-[170px] max-h-[500px] items-center flex flex-col gap-1 cursor-pointer ' key={index} onClick={()=> navigate(`/articles/${data.title}/${datas._id}`)}>
                        <img src={datas?.image1} alt="" className=' w-[170px] object-cover min-h-[200px] rounded-xl' />
                        <p className=' font-bold  text-lg'>{datas.title1}</p>
                        <p className=' font-bold text-gray-500'>{datas.description1}</p>
                        <img src={starImage} alt="" className=' w-[90px] -mt-4' />
                       
                    </div>
            })
                        }
                    </div>

                    <button className=' p-3 flex items-center gap-3 bg-orange-500 rounded-xl font-bold text-white'
                    onClick={()=> navigate(`/articles/${data?.title}`)}>और देखें <FaArrowRight /></button>
                    </div>
                })
            }



    </div>
  )

}

export default AllArticles