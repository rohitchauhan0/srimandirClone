import React, { useEffect, useState } from 'react'
import { reviewEndPoint } from '../../Services/AllApi'
import { apiConnector } from '../../Services/ApiConnector'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const GetRating = () => {
    const {GET_ALL_REVIEW_API}= reviewEndPoint
    const [rating, setrating] = useState([])
    useEffect(() => {
        const getAllReview = async()=>{
            try {
                const rating = await apiConnector("GET", GET_ALL_REVIEW_API)
                setrating(rating.data.data)
                
            } catch (error) {
                console.log(error)
            }
        }
        getAllReview()
    }, [])
    
  return (
    <div className="h-full w-full flex items-center justify-center">
  <Swiper
    slidesPerView={3}
    spaceBetween={50}
    loop={true}
    loopedSlides={true}
    modules={[Autoplay, Pagination]}
    centeredSlides={true}
    autoplay={{
      delay: 3500,
      disableOnInteraction: false,
      stopOnLastSlide: false,
    }}
    pagination={{ clickable: true }}
    className="mySwiper rounded-xl flex w-full items-center justify-center"
    breakpoints={{
    0: {
      slidesPerView: 1,
    },
    400:{
      slidesPerView:2,
    },
    639: {
      slidesPerView: 3,
    },
    865:{
      slidesPerView:3
    },
    1000:{
      slidesPerView:3
    },
    1500:{
      slidesPerView:3
    },
    1700:{
      slidesPerView:3
    }
  }}
  >
    {rating.map((data, index) => (
      <SwiperSlide key={index} className='flex flex-col items-center p-2 gap-3 rounded-xl'>
        <img src={data.review} alt="" className='rounded-xl object-cover' />
        <div className='flex gap-2 mt-3'>
          <img src={data.personPic} alt="" className='w-12 h-12 rounded-full object-cover' title='User-review' /> {/* Adjust image size */}
          <div>
            <p className='font-bold text-xl'>{data.name}</p>
            <p className='font-semibold text-gray-500'>{data.address}</p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

  
  
  )
}

export default GetRating