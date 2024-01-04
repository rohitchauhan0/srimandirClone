import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { sectionEndPoint, subsectionEndPoint } from '../../../Services/AllApi'
import { apiConnector } from '../../../Services/ApiConnector'
import LibraryNavbar from './LibraryNavbar'
import MantraDetails from './MantraDetails'
import Footer from '../../common/Footer'

const LibraryDetailById = () => {
    const {subsectionId, sectionName} = useParams()
    const {GET_SUBSECTION_BY_ID_API}= subsectionEndPoint
    const {GET_SECTION_BY_NAME_API} = sectionEndPoint
    const [subsectionDetail, setsubsectionDetail] = useState("")
    const [loading, setloading] = useState(false)
    useEffect(() => {
        const subsectionDetail = async()=>{
            try {
                const response = await apiConnector("POST", GET_SUBSECTION_BY_ID_API, {subsectionId})
                console.log(response.data.data)
                setsubsectionDetail(response.data.data)
                
            } catch (error) {
               console.log(error) 
            }
        }
        subsectionDetail()

    }, [subsectionId])

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

    const convertHtmlToText = (htmlString) => {
        const doc = new DOMParser().parseFromString(htmlString, 'text/html');
        return doc.documentElement.textContent;
      };
    
    
  return (
   <>
     <div className=' mt-32'>
        <LibraryNavbar sectionTitle={sectionName} subsectionName={subsectionDetail.title1}/>
      {
        loading ?(<div className=' w-full h-full flex items-center justify-center'><span className='loader'></span></div>):(  <div  className=" flex flex-col gap-10 lg:mt-32 max-w-screen-xl mx-auto pb-20 lg:px-0 px-3  ">
        <img src={subsectionDetail?.image1} alt="" className=' w-full rounded-xl object-cover max-h-[400px]' />
        <div className=' flex justify-between h-full lg:flex-row flex-col '>
            <div className=' flex flex-col gap-3 w-full lg:w-[55%] '>
                <h2 className=' text-5xl font-bold'>{subsectionDetail?.title1}</h2>
                <p className=' font-semibold text-gray-500 text-lg'>{subsectionDetail?.description1}</p>
                <hr  className=' w-full h-[1px] bg-gray-400'/>
                <p className=' text-xl font-semibold'>{subsectionDetail?.heading1}</p>
                <p className=' text-lg text-gray-500 font-semibold'>{subsectionDetail?.description2}</p>
                {
                    sectionName === "Mantra" && <p className=' text-xl font-semibold'>लेख में-</p>
                }
                <pre className=' text-lg text-gray-500 font-semibold' style={{whiteSpace:"pre-wrap"}}>{subsectionDetail?.description6}</pre>
                <img src={subsectionDetail?.image2} alt="" className=' w-full rounded-xl object-cover' />
                {
                    sectionName === "Chalisa" && <p className=' text-xl font-semibold'>॥दोहा॥</p>
                }
                <pre className=' text-lg text-gray-500 font-semibold' style={{whiteSpace:"pre-wrap"}}>{subsectionDetail?.description4}</pre>
                {
                    sectionName === "Chalisa" && <p className=' text-xl font-semibold'>॥चौपाई॥</p>
                }
                <p className=' text-xl font-semibold'>{subsectionDetail?.title3}</p>
                <pre className=' text-lg text-gray-500 font-semibold' style={{whiteSpace:"pre-wrap"}}>{subsectionDetail?.description3}</pre>
                {
                    sectionName === "Chalisa" && <p className=' text-xl font-semibold'>॥दोहा॥</p>
                }
                <pre className=' text-lg text-gray-500 font-semibold' style={{whiteSpace:"pre-wrap"}}>{subsectionDetail?.description5}</pre>
                <div dangerouslySetInnerHTML={{__html:subsectionDetail?.blogDescription}} className=' flex flex-col text-gray-500 gap-3 text-lg'></div>
            </div>

            <div className=' flex flex-col gap-7'>
            <h1 className=' text-2xl font-bold'>समान लेख</h1>
            <div className='grid gap-9 sm:grid-cols-2 lg:grid-cols-2 place-items-center '>
           {
            sectionDetail?.subsection?.slice(0, 4).map((data, index)=>{
                    return <div className=' w-[170px] max-h-[250px] flex flex-col gap-1 cursor-pointer ' key={index} onClick={()=> navigate(`/articles/${sectionName}/${data._id}`)}>
                        <img src={data.image1} alt="" className=' w-[170px] object-cover min-h-[200px] rounded-xl' />
                        <p className=' font-bold  text-lg'>{data.title1}</p>
                        <p className=' font-bold text-gray-500'>{data.description1}</p>
                    </div>
            })
           }
           </div>
            </div>
        <div>
        

        </div>
        </div>
        
        </div>)}
           </div>
           <Footer/>
   </>
  )
}

export default LibraryDetailById