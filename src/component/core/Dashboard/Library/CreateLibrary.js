import React, { useEffect, useState } from 'react'
import { apiConnector } from '../../../../Services/ApiConnector'
import { sectionEndPoint } from '../../../../Services/AllApi'
import { FaPlus } from 'react-icons/fa6'
import toast from 'react-hot-toast'
import CreateArti from './CreateArti'
import CreateChalisa from './CreateChalisa'
import CreateMantra from './CreateMantra'
import CreateBlog from './CreateBlog'

const CreateLibrary = () => {
    const {GET_SECTION_NAME_API} = sectionEndPoint
    const [sectionDetail, setsectionDetail] = useState([])
    const [index, setindex] = useState(0)
    const [sectionId, setsectionId] = useState(null)
    useEffect(() => {
        const GetSubsection = async()=>{
            try {
                const response = await apiConnector("GET",GET_SECTION_NAME_API )
                setsectionDetail(response.data.data)
                
            } catch (error) {
                console.log(error)
            }
        }
        GetSubsection()
    }, [])
    
  return (
    <div className=' w-full flex items-center justify-center flex-col gap-4'>
    <h1 className=' text-xl lg:text-3xl font-bold uppercase'>Create Library here</h1>
        <div>
            {
                sectionDetail.map((data, index)=>{
                    return <div className=' flex  justify-between items-center text-xl gap-20' key={index}
                   
                    >
                        <p>{data.title}</p>
                        <FaPlus className=' text-green-500 cursor-pointer'  onClick={()=>{
                        setindex(index+1)
                        setsectionId(data._id)
                        toast.success("Added")
                    }} />
                    </div>
                })
            }
        </div>

        <div className=' w-full'>
            {
                index === 1 ? (<CreateArti sectionId={sectionId}/>): index === 2 ? (<CreateChalisa sectionId={sectionId} />):  index === 3? (<CreateMantra sectionId={sectionId} />): <CreateBlog sectionId={sectionId}/>
            }
        </div>
    
    </div>
  )
}

export default CreateLibrary