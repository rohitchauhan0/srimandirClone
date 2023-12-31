import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { sectionEndPoint } from '../../../Services/AllApi'
import { apiConnector } from '../../../Services/ApiConnector'
import LibraryNavbar from './LibraryNavbar'

const LibraryDetailsByName = () => {
    const {sectionName} = useParams()
    const {GET_SECTION_BY_NAME_API} = sectionEndPoint
    const [loading, setloading] = useState(false)
    const [sectionDetail, setsectionDetail] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
      const sectionDetail = async()=>{
        setloading(true)
        try {
            const response = await apiConnector("POST", GET_SECTION_BY_NAME_API, {sectionName})
            setsectionDetail(response.data.data)
            
        } catch (error) {
            console.log(error)
        }
        setloading(false)
      }

      sectionDetail()
    }, [sectionName])
    
  return (
    <div className=' mt-32'>
        <LibraryNavbar sectionTitle={sectionName}/>
      {
        loading ?(<div className=' w-full h-full flex items-center justify-center'><span className='loader'></span></div>):(  <div  className=" flex flex-col gap-20 lg:mt-32 max-w-screen-xl mx-auto pb-20 lg:px-0 px-3  ">
           <div className=' relative'>
           <img src={sectionDetail.image} alt="" className=' w-full rounded-xl object-cover max-h-[430px]' />
           <p className=' absolute left-3 text-2xl lg:text-6xl font-bold text-white bottom-3'>{sectionDetail?.mainHindiTitle}</p>
           </div>
           <div className=' flex gap-20 items-center justify-center flex-wrap '>
           {
            sectionDetail?.subsection?.map((data, index)=>{
                    return <div className=' w-[170px] max-h-[250px] flex flex-col gap-1 cursor-pointer ' key={index} onClick={()=> navigate(`/articles/${sectionName}/${data._id}`)}>
                        <img src={data.image1} alt="" className=' w-[170px] object-cover min-h-[200px] rounded-xl' />
                        <p className=' font-bold  text-lg'>{data.title1}</p>
                        <p className=' font-bold text-gray-500'>{data.description1}</p>
                    </div>
            })
           }
           </div>
        </div>)
      }
    </div>
  )
}

export default LibraryDetailsByName