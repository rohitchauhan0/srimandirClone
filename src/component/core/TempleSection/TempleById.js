import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { templeEndPoint } from '../../../Services/AllApi'
import { apiConnector } from '../../../Services/ApiConnector'
import toast from 'react-hot-toast'
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { IoIosArrowUp, IoIosTrain } from 'react-icons/io'
import { GiRoad } from "react-icons/gi";
import instagram from "../../../Assets/instagramIcon.svg"
import facebook from "../../../Assets/faceBookIcon.svg"
import youtube from "../../../Assets/youtubeicon.svg"
import Footer from '../../common/Footer'

const TempleById = () => {
    const {templeId} = useParams()
    const {GET_TEMPLE_BY_ID_API} = templeEndPoint
    const [templeDetail, settempleDetail] = useState("")
    useEffect(() => {
     const getTemple = async()=>{
        const toastId = toast.loading("Please wait...")
        try {
            const response = await apiConnector("POST", GET_TEMPLE_BY_ID_API, {templeId})
            settempleDetail(response.data.data)
            console.log(response.data.data)
        } catch (error) {
            console.log(error)
        }
        toast.dismiss(toastId)
     }
     getTemple()
    }, [templeId])

    const [textColor1, settextColor1] = useState("")
    const [textColor2, settextColor2] = useState("")
    const [textColor3, settextColor3] = useState("")

    useEffect(() => {
      const handleScroll = () => {
        const overView = document.getElementById("overView");
        const location = document.getElementById("location");
      
        const isInView = (element, scrollPos) => {
          if (!element) return false;
  
          const rect = element.getBoundingClientRect();
          const buffer = -300; // Adjust this value as needed
  
          return (
            rect.top - buffer <= window.innerHeight && rect.bottom + buffer >= 0
          );
        };
        const scrollPosition =
          window.pageYOffset || document.documentElement.scrollTop;
  
        if (isInView(overView, scrollPosition)) {
          settextColor1("text-orange-500");
        } else {
          settextColor1("text-gray-500 ");
        }
  
        if (isInView(location, scrollPosition)) {
          settextColor2("text-orange-500");
        } else {
          settextColor2("text-gray-500 ");
        }
  
       
        // Repeat the above process for other sections...
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
  return (
  <>
     <div className=' max-w-screen-xl mx-auto px-3 lg:px-0'>
     <div className='relative w-full mx-auto max-w-screen-xl mt-20 px-2 grid grid-rows-2 gap-2 grid-flow-col grid-cols-4 '>

<div className=' row-span-2 col-span-2'>
 <img src={templeDetail?.image1} alt="" className=' h-full object-cover' />
 </div>

   <img src={templeDetail.image2} alt="" className=' min-h-[250px]  object-cover col-span-1 row-span-1' />
   <img src={templeDetail.image3} alt="" className='  min-h-[250px]  object-cover col-span-1 row-span-1' />
   <img src={templeDetail.image4} alt="" className='  min-h-[250px]  object-cover col-span-1 row-span-1' />
   <img src={templeDetail.image5} alt="" className='  min-h-[250px]  object-cover col-span-1 row-span-1' />
  </div>
  <div className=' w-full flex items-center justify-center gap-4 flex-col py-5'>
    <p className=' text-4xl font-bold'>{templeDetail?.templeName}</p>
    <div className=' flex gap-5 text-xl text-gray-500 font-semibold'>
    <p>{templeDetail?.about}</p>
    <p>{templeDetail?.address}</p>
    </div>
  </div>
  <div className=' w-full flex items-center justify-center mt-10 flex-col gap-3 sticky top-[68px] bg-white '>
    <div className=' flex gap-6 lg:gap-32 text-xl font-semibold bg-white '>
      <p className={`${textColor1}`}>Overview</p>
      <p className={`${textColor2}`}>Location</p>
    </div>
    <hr className=' w-full h-[1px] bg-gray-500' />
  </div>
  <div className=' max-w-screen-md mx-auto py-5 flex flex-col gap-6'  >
   <div className='flex flex-col gap-6' id='overView'>
   <p className=' text-lg text-gray-500' >{templeDetail.overView}</p>
    <div className=' w-full h-[5px] bg-gray-200'></div>
    <p className=' text-3xl font-bold '>History of the temple</p>
    <p className=' text-lg text-gray-500'>{templeDetail.history}</p>
    <div className=' w-full h-[5px] bg-gray-200'></div>
    <p className=' text-3xl font-bold '>Significance of the temple</p>
    <p className=' text-lg text-gray-500'>{templeDetail.significance}</p>
    <div className=' w-full h-[5px] bg-gray-200'></div>
    <p className=' text-3xl font-bold '>Architecture of the temple</p>
    <p className=' text-lg text-gray-500'>{templeDetail.architecture}</p>
    <div className=' w-full h-[5px] bg-gray-200'></div>
    <p className=' text-3xl font-bold '>Offerings of the temple</p>
    <p className=' text-lg text-gray-500'>{templeDetail.offeringDetails}</p>
    <div className=' w-full h-[5px] bg-gray-200'></div>
   </div>
   <div className=' flex flex-col gap-6' id='location'>
    <p className=' text-3xl font-bold ' >Travel Details</p>
    <p className=' text-lg '>The below are the travel details for the temple</p>
    <iframe src={templeDetail.mapLink}   style={{border:0}} allowfullscreen="" loading="lazy" className=' w-full h-[450px]' referrerpolicy="no-referrer-when-downgrade"></iframe>
   <details className=' p-5 cursor-pointer border border-gray-300 rounded-xl'>
      <summary className=' flex justify-between items-center'>
        <div className=' flex gap-6 items-center text-xl text-gray-500'>
          
        <MdOutlineAirplanemodeActive className=' text-orange-500' />
        Airplane
        </div>
        <IoIosArrowUp />
      </summary>
      <p className=' text-lg text-gray-500 p-2'>{templeDetail.byAir}</p>

    </details>

 <details className=' p-5 cursor-pointer border border-gray-300 rounded-xl'>
      <summary className=' flex justify-between items-center'>
        <div className=' flex gap-6 items-center text-xl text-gray-500'>
          
        <IoIosTrain  className=' text-orange-500' />
        Train
        </div>
        <IoIosArrowUp />
      </summary>
      <p className=' text-lg text-gray-500 p-2'>{templeDetail.byTrain}</p>

    </details>

<details className=' p-5 cursor-pointer border border-gray-300 rounded-xl'>
      <summary className=' flex justify-between items-center'>
        <div className=' flex gap-6 items-center text-xl text-gray-500'>
          
        <GiRoad   className=' text-orange-500' />
        Road
        </div>
        <IoIosArrowUp />
      </summary>
      <p className=' text-lg text-gray-500 p-2'>{templeDetail.byRoad}</p>

    </details>
   </div>
    <div className=' w-full h-[5px] bg-gray-200'></div>
    <p className=' text-3xl font-bold '>Social Media</p>
    <p className=' text-lg text-gray-500'>Social media associated with the temple</p>
    <div className=' flex  w-full justify-between'>
    <Link to={templeDetail.youTubeLink} target='_blank'>
      <img src={youtube} alt="" />
    </Link>
     <Link to={templeDetail.instagramLink} target='_blank'>
      <img src={instagram} alt="" />
    </Link>
     <Link to={templeDetail.facebookLink} target='_blank'>
      <img src={facebook} alt="" />
    </Link>
    </div>

  </div>
   </div>
   <Footer/>
  </>
  
  )
}

export default TempleById