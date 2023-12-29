import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const PoojaSwiper = ({ poojaDetails }) => {
  return (
    <div className="h-full flex items-center justify-center lg:min-h-screen lg:mt-0 mt-20">
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
        className="mySwiper lg:max-h-[400px] flex items-center justify-center rounded-xl"
      >
        <SwiperSlide className=" h-full w-full">
          <img
            src={poojaDetails.image1}
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={poojaDetails.image2}
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={poojaDetails.image3}
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={poojaDetails.image4}
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PoojaSwiper;
