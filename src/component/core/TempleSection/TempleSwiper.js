import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const TempleSwiper = ({temple}) => {
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
        className="mySwiper  lg:max-h-[400px] flex items-center justify-center rounded-xl"
      >
        <SwiperSlide className=" h-full w-full">
          <img
            src={temple.image1}
            alt=""
            className="w-full h-full  min-h-[250px] max-h-[250px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={temple.image2}
            alt=""
            className="w-full h-full  min-h-[250px] max-h-[250px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={temple.image3}
            alt=""
            className="w-full h-full  min-h-[250px] max-h-[250px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={temple.image4}
            alt=""
            className="w-full h-full  min-h-[250px] max-h-[250px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default TempleSwiper


{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.3574628329507!2d77.3525003!3d28.649013600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfac63014609f%3A0xed2d07dacdaa242f!2sMahakaleshwar%20Mandir!5e0!3m2!1sen!2sin!4v1704350035522!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}