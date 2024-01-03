import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import process1 from "../../../Assets/onlinePoojaWorks/process1.webp"
import process2 from "../../../Assets/onlinePoojaWorks/process2.webp"
import process3 from "../../../Assets/onlinePoojaWorks/process3.webp"
import process4 from "../../../Assets/onlinePoojaWorks/process4.webp"

const OnlinePoojaSwiper = () => {
  return (
    <div className="h-full flex items-center justify-center lg:mt-0 mt-20">
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      centeredSlides={true}
      loopedSlides={true}
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        stopOnLastSlide: false,
      }}
      pagination={{ clickable: true }}
      className="mySwiper  lg:max-h-[700px] flex items-center justify-center rounded-xl"
    >
      <SwiperSlide className=" h-full w-full">
        <img
          src={process1}
          alt=""
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={process2}
          alt=""
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={process3}
          alt=""
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={process4}
          alt=""
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    </Swiper>
  </div>
  )
}

export default OnlinePoojaSwiper