import React, { useEffect, useState } from "react";
import banner from "../Assets/img_hero_artwork_en.webp";
import Apple from "../component/core/Homecomponent/Apple";
import PlayStore from "../component/core/Homecomponent/PlayStore";
import { FaArrowRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Card from "../component/core/Homecomponent/Card";
import photo1 from "../Assets/photo1.webp";
import photo2 from "../Assets/photo2.webp";
import photo3 from "../Assets/photo3.webp";
import GradientCard from "../component/core/Homecomponent/GradientCard";
import icon1 from "../Assets/icon1.svg";
import icon2 from "../Assets/icon2.svg";
import icon3 from "../Assets/icon3.svg";
import icon4 from "../Assets/icon4.svg";
import blueIcon1 from "../Assets/blueicon1.svg"
import blueIcon2 from "../Assets/blueicon2.svg"
import blueIcon3 from "../Assets/blueicon3.svg"
import blueIcon4 from "../Assets/blueicon4.svg"
import { apiConnector } from "../Services/ApiConnector";
import { pujaEndPoints } from "../Services/AllApi";

const Homepage = () => {
  const { GET_ALL_PUJA_API } = pujaEndPoints;
  const [poojaDetails, setpoojaDetails] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await apiConnector("GET", GET_ALL_PUJA_API);
        setpoojaDetails(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetails();
  }, []);
  return (
    <div className=" flex items-center justify-between flex-col min-h-screen">
      <div className=" w-full bg-orange-50">
        <div className=" max-w-screen-xl px-8 lg:px-3 py-14 flex lg:flex-row flex-col-reverse items-center mt-12 justify-between pt-32 mx-auto gap-3 ">
          <div className=" w-full lg:w-[60%] flex flex-col gap-6">
            <p className=" text-2xl lg:text-4xl font-bold w-full lg:w-[60%]  leading-snug">
              Pray daily with
              <span className=" text-orange-500"> Sri Mandir</span> One App for
              all your devotional needs.
            </p>
            <p className=" w-full lg:w-[70%] text-xl text-gray-600 leading-snug">
              Set up Temples. Listen to Devotional music. Get free Panchang and
              Kundali. Updates on every Fasts and Festivals. Trusted by 10
              million+ people.
            </p>

          </div>
          <div className=" w-full lg:w-[40%]">
            <img src={banner} alt="" className=" w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className=" py-8 px-4 md:px-0 mx-auto max-w-screen-xl lg:py-12 lg:px-0 flex flex-col gap-4">
        <div className="mx-auto max-w-screen-md text-left md:text-center lg:mb-0 flex items-center justify-center flex-col">
          <h2 className=" text-4xl font-bold leading-32 md:text-36 md:font-bold md:leading-49 mb-4 tracking-tight text-gray-900">
            Puja Seva for you and your loved ones
          </h2>
          <p className="text-16 font-normal leading-21 md:text-20 md:font-normal md:leading-27 text-gray-600 sm:text-xl dark:text-gray-400 block mb-3">
            Book Pujas in your and your family's name at 1000+ renowned temples
            in India. You will also receive a video of the Puja and Prasad along
            with divine blessings.
          </p>
          <Link className=" flex items-center gap-3 text-orange-600 font-bold">
            <p className=" hover:underline cursor-pointer" onClick={()=> navigate("/puja")}>View All Puja</p>
            <FaArrowRight />
          </Link>
        </div>
        <div className=" grid gap-9 sm:grid-cols-2 lg:grid-cols-3">
        {
                poojaDetails.slice(0,3).map((data, index)=>{
                  return  <Card key={index}
            image={data.image1}
            title={
              data.title
            }
            text1={data.address}
            text2={data.date}
            poojaId={data._id}
          />
                })
              }


        </div>
      </div>

      <div className=" w-full  bg-gray-50">
        <div className="py-8 px-4 md:px-0 mx-auto max-w-screen-xl lg:py-12 lg:px-0 flex flex-col gap-10">
          <div className="mx-auto max-w-screen-sm text-left md:text-center lg:mb-0 flex items-center justify-center flex-col ">
            <h2 className=" text-4xl font-bold leading-32 md:text-36 md:font-bold md:leading-49 mb-4 tracking-tight text-gray-900">
              Complete Panchang
            </h2>
            <p className="text-16 font-normal leading-21 md:text-20 md:font-normal md:leading-27 text-gray-600 sm:text-xl dark:text-gray-400 block mb-3">
              Sri Mandir Panchang offers you all the important information about
              Tithi, Auspicious-Inauspicious timings, and upcoming fasts and
              festivals.
            </p>
            <Link className=" flex items-center gap-3 text-orange-600 font-bold">
              <p className=" hover:underline cursor-pointer">
                View Detailed Panchang
              </p>
              <FaArrowRight />
            </Link>
          </div>

          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 xl:gap-8 md:space-y-0 ">

           
                  <GradientCard
              gradient={"bg-gradient-to-r from-[#fbc69c] to-[#fde8d7]"}
              icon={icon1}
              title={"Auspicious-Inauspicious timings"}
              text={
                "Check out Auspicious and Inauspicious Timings for your city."
              }
            />


            
            <GradientCard
              gradient={"bg-gradient-to-r from-[#b4ddff] to-[#e1f1ff]"}
              icon={icon2}
              title={"Rahukal and Gulik Kaal"}
              text={"Check out Rahukal and Gulik Kaal for your city."}
            />
            <GradientCard
              gradient={"bg-gradient-to-r from-[#fbbab3] to-[#ffdeda]"}
              icon={icon3}
              title={"Sunrise-Sunset"}
              text={"Know the Sunrise and Sunset timings for your city."}
            />
            <GradientCard
              gradient={"bg-gradient-to-r from-[#e0b3fe] to-[#ebcdff]"}
              icon={icon4}
              title={"Upcoming Festivals"}
              text={
                "Check out the upcoming festivals, their Puja Vidhi and Vrat Katha."
              }
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-r  from-[#121f36] to-[#162e59] ">
        <div className="items-center flex lg:flex-row flex-col justify-between py-8 px-4 md:px-0 mx-auto max-w-screen-xl   lg:py-12 lg:px-0">
          <div className=" flex flex-col gap-6 lg:w-[50%] h-full w-full  justify-center">
            <p className=" text-[#72A0F1] font-bold leading-25 text-18">
              Trusted by Over 10 Million Devotees in India and 100,000+ NRIs.
            </p>
            <h2 className="text-24 font-extrabold leading-32  mt-3 mb-4 tracking-tight text-white md:text-4xl ">
              India's Most Loved Devotional App
            </h2>
            <p className="block text-white text-xl font-normal leading-21 ">
              We are on a mission to assist a billion Indians in their spiritual
              and devotional journey and guide them on the path towards feeling
              happy, peaceful, and content.
            </p>
          </div>

          <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0  w-full lg:w-[50%]  ">
              <GradientCard icon={blueIcon1} title={"1 Crore+ Devotees"}  textcolor={"text-white"} text={"have trusted us in their devotional journey"}/>  
               <GradientCard icon={blueIcon2} title={"4.6 star rating"}  textcolor={"text-white"} text={"Over 1 Lakh devotees express their love for us on playstore"}/>  
                <GradientCard icon={blueIcon3} title={"5000+ Music Collection"}  textcolor={"text-white"} text={"Listen to your favourite Bhajans, Chalisa, Mantra and Aarti AD-Free"}/>
                <GradientCard icon={blueIcon4} title={"250K+ Successful Pooja Services"}  textcolor={"text-white"} text={"Millions of devotees have commenced Pooja at famous temples of India with us to seek God's grace."}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
