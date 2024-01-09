import React, { useEffect, useState } from "react";
import banner from "../Assets/img_hero_artwork_en.webp";
import { FaArrowRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Card from "../component/core/Homecomponent/Card";
import GradientCard from "../component/core/Homecomponent/GradientCard";
import icon1 from "../Assets/homepageIcons/panchang/tyming.png";
import icon2 from "../Assets/homepageIcons/panchang/rahukal.png";
import icon3 from "../Assets/homepageIcons/panchang/sunset sunrise.png";
import icon4 from "../Assets/homepageIcons/panchang/upcoming festivals.png";
import blueIcon1 from "../Assets/homepageIcons/bluePart/devotees.png";
import blueIcon2 from "../Assets/homepageIcons/bluePart/star rating.png";
import blueIcon3 from "../Assets/homepageIcons/bluePart/music collection.png";
import blueIcon4 from "../Assets/homepageIcons/bluePart/pooja services.png";
import { apiConnector } from "../Services/ApiConnector";
import { pujaEndPoints } from "../Services/AllApi";
import downIcon1 from "../Assets/homepageIcons/devotional/divine temple.png";
import downIcon2 from "../Assets/homepageIcons/devotional/hindu literature.png";
import downIcon3 from "../Assets/homepageIcons/devotional/devotional music.png";
import downIcon4 from "../Assets/homepageIcons/devotional/horoscope.png";
import downIcon5 from "../Assets/homepageIcons/devotional/puja & chadhava seva.png";
import downIcon6 from "../Assets/homepageIcons/devotional/sanatani community.png";
import LibraryCard from "../component/core/Homecomponent/LibraryCard";
import libraryImage1 from "../Assets/homepageIcons/articles/arti-01.png";
import libraryImage2 from "../Assets/homepageIcons/articles/chalisa.png";
import libraryImage3 from "../Assets/homepageIcons/articles/om.png";
import libraryImage4 from "../Assets/homepageIcons/articles/ayurved 1-01.png";
import GetRating from "../component/common/GetRating";
import Footer from "../component/common/Footer";
import { motion } from "framer-motion"
import sunPng from "../Assets/homepageIcons/sunPng.png"
import hanumang from "../Assets/homepageIcons/homepageHanumang.png"
import matag from "../Assets/mataji.png"

const Homepage = () => {
  const { GET_ALL_PUJA_API } = pujaEndPoints;
  const [poojaDetails, setpoojaDetails] = useState([]);
  const navigate = useNavigate();
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
   <>
     <div className=" flex items-center justify-between flex-col min-h-screen overflow-x-hidden">
      <div className=" w-full bg-orange-100">
      <div className=" w-full h-fit  flex items-center justify-center">
      <img src={sunPng} alt="" className=" w-[150px] h-[120px] animate-spin" />
      </div>
        <div className=" max-w-screen-xl mx-auto lg:px-0 lg:py-14 py-0  flex lg:flex-row flex-col-reverse items-center lg:mt-0 -mt-20 justify-between pt-32 mx-auto gap-3 ">
          <motion.div
          initial={{y:100, opacity:0}}
          animate={{y:0, opacity:100}}
          transition={{duration:1}}
           className=" w-full lg:w-[80%] flex flex-col gap-6 lg:pl-32 lg:px-0 px-4">
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
          </motion.div>
          <div className=" w-full lg:w-[60%]" >
            <img src={matag} alt="image" className=" w-full h-full object-cover scale-x-[-1] " title="Image" />
            
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
          <Link
            className=" flex items-center gap-3 text-orange-600 font-bold"
            to={"/puja"}
          >
            <p className=" hover:underline cursor-pointer">View All Puja</p>
            <FaArrowRight />
          </Link>
        </div>
        <div className=" grid gap-9 sm:grid-cols-2 lg:grid-cols-3">
          {poojaDetails.slice(0, 3).map((data, index) => {
            return (
              <Card
                key={index}
                image={data.image1}
                title={data.title}
                text1={data.address}
                text2={data.date}
                poojaId={data._id}
              />
            );
          })}
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
            <GradientCard
              icon={blueIcon1}
              title={"1 Crore+ Devotees"}
              textcolor={"text-white"}
              text={"have trusted us in their devotional journey"}
            />
            <GradientCard
              icon={blueIcon2}
              title={"4.6 star rating"}
              textcolor={"text-white"}
              text={
                "Over 1 Lakh devotees express their love for us on playstore"
              }
            />
            <GradientCard
              icon={blueIcon3}
              title={"5000+ Music Collection"}
              textcolor={"text-white"}
              text={
                "Listen to your favourite Bhajans, Chalisa, Mantra and Aarti AD-Free"
              }
            />
            <GradientCard
              icon={blueIcon4}
              title={"250K+ Successful Pooja Services"}
              textcolor={"text-white"}
              text={
                "Millions of devotees have commenced Pooja at famous temples of India with us to seek God's grace."
              }
            />
          </div>
        </div>
      </div>

      <div className="py-8 px-4 md:px-0 mx-auto w-full max-w-screen-xl lg:px-0 flex flex-col gap-10 ">
        <div className=" text-left md:text-center lg:mb-0 flex items-center justify-center flex-col ">
          <h2 className=" text-4xl font-bold leading-32 md:text-36 md:font-bold md:leading-49 mb-4 tracking-tight text-gray-900">
          Reviews & Ratings 
          </h2>
          <p className="text-16 font-normal leading-21 md:text-20 md:font-normal md:leading-27 text-gray-600 sm:text-xl dark:text-gray-400 block mb-3">
          Read to what our beloved devotees have to say about Sri Mandir.
          </p>
        </div>
        <div className=" w-full  ">
        <GetRating/>
        </div>
        </div>

      <div className="py-8 px-4 md:px-0 mx-auto max-w-screen-xl lg:py-12 lg:px-0 flex flex-col gap-10">
        <div className=" text-left md:text-center lg:mb-0 flex items-center justify-center flex-col ">
          <h2 className=" text-4xl font-bold leading-32 md:text-36 md:font-bold md:leading-49 mb-4 tracking-tight text-gray-900">
            One App for all your devotional needs
          </h2>
          <p className="text-16 font-normal leading-21 md:text-20 md:font-normal md:leading-27 text-gray-600 sm:text-xl dark:text-gray-400 block mb-3">
            Sri Mandir brings these amazing features for you, get these features
            for free and start your devotional journey now.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-8 xl:gap-8 md:space-y-0 ">
          <GradientCard
            icon={downIcon1}
            title={"Divine Temple"}
            text={
              "Set up your temple on your phone, dedicated to your beloved deities and seek their blessings, anytime, anywhere."
            }
            gradient={"white"}
            textcolor={"text-black"}
          />
          <GradientCard
            icon={downIcon2}
            title={"Hindu Literature"}
            text={
              "Get specially curated books, articles and videos based on Sanatan Dharma"
            }
            gradient={"white"}
            textcolor={"text-black"}
          />
          <GradientCard
            icon={downIcon3}
            title={"Devotional Music"}
            text={
              "Get access to 5000+ Ad-Free Devotional Music. Listen to Aarti, Mantra, Bhajan, and Chalisa, and emerge yourself into the divinity."
            }
            gradient={"white"}
            textcolor={"text-black"}
          />
          <GradientCard
            icon={downIcon4}
            title={"Panchang, Horoscope & Festivals"}
            text={
              "Get regular updates on Daily Horoscope, Panchang, and upcoming Fasts- Festivals."
            }
            gradient={"white"}
            textcolor={"text-black"}
          />
          <GradientCard
            icon={downIcon5}
            title={"Puja and Chadhava Seva"}
            text={
              "Book personalized Puja and Chadhava Seva in your and your family‚s name at 1000+ renowned temples across India."
            }
            gradient={"white"}
            textcolor={"text-black"}
          />
          <GradientCard
            icon={downIcon6}
            title={"Sanatani Community"}
            text={
              "Be a part of India‚s largest devotional community and connect with Sanatanis worldwide."
            }
            gradient={"white"}
            textcolor={"text-black"}
          />
        </div>
      </div>


      <div className="py-8 px-4 md:px-0 mx-auto max-w-screen-xl lg:py-12 lg:px-0 flex flex-col gap-10">
        <div className=" text-left md:text-center lg:mb-0 flex items-center justify-center flex-col ">
          <h2 className=" text-4xl font-bold leading-32 md:text-36 md:font-bold md:leading-49 mb-4 tracking-tight text-gray-900">
            Read interesting articles about upcoming fasts, festivals, and
            everything around Sanatan Dharma.
          </h2>
          <p className="text-16 font-normal leading-21 md:text-20 md:font-normal md:leading-27 text-gray-600 sm:text-xl dark:text-gray-400 block mb-3">
            Read interesting articles about upcoming fasts, festivals, and
            everything around Sanatan Dharma.
          </p>
          <Link
            className=" flex items-center gap-3 text-orange-600 font-bold"
            to={"/articles"}
          >
            <p className=" hover:underline cursor-pointer">Read all</p>
            <FaArrowRight />
          </Link>
        </div>
        <div className="grid gap-6 lg:gap-12 md:grid-cols-4 ">
          <LibraryCard
            image={libraryImage1}
            title={"Aarti"}
            description={
              "Find complete lyrics of all the famous Aartis and easily worship your beloved God."
            }
            path={"/articles/Arti"}
          />
          <LibraryCard
            image={libraryImage2}
            title={"Chalisa"}
            description={
              "You will get complete Chalisa of all the deities. Read Chalisa during the Pooja of your beloved deities and seek their grace."
            }
            path={"/articles/Chalisa"}
          />
          <LibraryCard
            image={libraryImage3}
            title={"Mantra"}
            description={
              "Here you will find all the powerful mantras for peace of mind. Chant these mantras and remove all the obstacles from life."
            }
            path={"/articles/Mantra"}
          />
          <LibraryCard
            image={libraryImage4}
            title={"Ayurvedic & Home Remedies"}
            description={
              "We have brought the precious knowledge of Ayurveda for you, these remedies will help you lead a healthy life."
            }
           
          />
        </div>
      </div>
    </div>
    <Footer/>
   </>
  );
};

export default Homepage;
