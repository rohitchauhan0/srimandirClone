import React, { useEffect, useRef, useState } from 'react'
import templeImage from "../Assets/pujaSection.webp"
import { FcOk } from 'react-icons/fc'
import { apiConnector } from '../Services/ApiConnector'
import { templeEndPoint } from '../Services/AllApi'
import indiaImage from "../Assets/india image.jpg"
import TempleSwiper from '../component/core/TempleSection/TempleSwiper'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Footer from '../component/common/Footer'

const TemplePage = () => {
  const [templeLocDetails, settempleLocDetails] = useState([])
  const {GET_ALL_TEMPLE_API, GET_TEMPLE_BY_LOC_API}= templeEndPoint
  const [templeDetail, settempleDetails] = useState([])
  const navigate = useNavigate()

  const getTempleLoc = async () => {
    try {
      const response = await apiConnector("POST", GET_ALL_TEMPLE_API);
      if (response && response.data && response.data.data) {
        settempleLocDetails(response.data.data);
        const allTempleDetails = response.data.data.map((data) => data.templeDetails);
        settempleDetails(allTempleDetails.flat());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
  getTempleLoc()
  }, [])
 
  const handleTempleLocDetails = async (locId) => {
    const toastId = toast.loading("Please wait....");
    try {
      const response = await apiConnector("POST", GET_TEMPLE_BY_LOC_API, { locId });
      if (response && response.data && response.data.data && response.data.data.templeDetails) {
        settempleDetails(response.data.data.templeDetails);
      }
    } catch (error) {
      console.log(error);
    }
    toast.dismiss(toastId);
  };

  const targetDiv = useRef(null);



  const handleScrolltoDiv = () => {
    if (targetDiv.current) {
      targetDiv.current.scrollIntoView({ behavior: "smooth" });
    }
  };



  

  return (
   <>
     <div className=" flex  flex-col w-full ">
    <div className=' flex w-full lg:flex-row flex-col items-center justify-between max-w-screen-2xl bg-pink-50 mx-auto  '>
      <div className=' w-full lg:w-[50%] h-full lg:mt-10 mt-20 flex items-center gap-10 flex-col lg:px-10 px-2'>
      <h1 className=' lg:text-4xl text-3xl text-black font-bold leading-[50px]'>Connect with holy pilgrimages and divine temples of India</h1>
                <ul className=' flex flex-col gap-3 text-gray-500 items-start w-full px-5'>
                    <li className=' flex gap-2 items-center text-lg lg:text-xl'><FcOk /> Learn about the culture and religious history of temples</li>
                    <li className=' flex gap-2 items-center text-lg lg:text-xl'><FcOk />Connect with temples of your favourite deities</li>
                    <li className=' flex gap-2 items-center text-lg lg:text-xl'><FcOk />Offer charity work and donate in your favourite temples</li>
                </ul>
                <div className=' flex gap-3 w-full mt-3'>
                    <button className=' p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white' onClick={()=> handleScrolltoDiv()} >Explore temples of india</button>
                </div>
      </div>
      <div className='w-full lg:w-[50%] h-full lg:mt-10 mt-20 flex items-center gap-3 flex-col px-10'>
        <img src={templeImage} alt="" />
      </div>
      </div>

      <div className=' max-w-screen-xl mx-auto mt-5 w-full  px-5 lg:px-0'>
      <div className=' w-full flex gap-12 items-start overflow-x-auto ' ref={targetDiv}>
      <div className=' flex flex-col gap-2 items-center cursor-pointer '
      onClick={()=>{
        getTempleLoc()
      }}
      >
        <img src={indiaImage} alt="" className=' w-[70px] h-[70px] rounded-xl object-cover shadow-sm shadow-black'  />
        <p className=' text-gray-400'>All</p>
      </div>
        {
          templeLocDetails?.map((data, index)=>{
            return <div className=' flex flex-col gap-2 items-center cursor-pointer' key={index}
            onClick={()=> handleTempleLocDetails(data?._id)}
            >
              <img src={data?.image} alt="" className=' w-[70px] h-[70px] rounded-xl object-cover shadow-sm shadow-black' />
              <p className=' text-gray-400'>{data?.location}</p>
            </div>
          })
        }

      </div>
        <hr className=' w-full h-[1px] bg-gray-500 mt-2' />
      <div className=' w-full mt-5' >
        <div className=' flex gap-20  flex-wrap '>
        {
          templeDetail.map((temple, index)=>{
                return <div className=' w-[300px] flex flex-col gap-1 justify-start h-full cursor-pointer hover:scale-105 transition-all duration-200 ' key={index}
                onClick={()=> navigate(`/temples/${temple._id}`)}
                >
                  <TempleSwiper temple={temple}/>
                  <p className=' text-xl font-bold'>{temple?.templeName}</p>
                  <p className=' text-lg font-semibold'>{temple?.address}</p>
                  <p className=' text-lg  text-gray-400'>{temple?.overView?.slice(0, 80)}....</p>
                </div>
              })
            }
        </div>
      </div>

      </div>
      </div>
<Footer/>
   </>
  )
}

export default TemplePage