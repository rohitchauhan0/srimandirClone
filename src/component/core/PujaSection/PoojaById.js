import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { pujaEndPoints } from "../../../Services/AllApi";
import { apiConnector } from "../../../Services/ApiConnector";
import PoojaSwiper from "./PoojaSwiper";
import { GiByzantinTemple } from "react-icons/gi";

import Timer from "./Timer";
import { FaArrowRight } from "react-icons/fa6";

import PoojaProcess from "./PoojaProcess";
import PaymentCard from "./PaymentCard";
import PoojaNavbar from "./PoojaNavbar";
import TabSection from "./TabSection";
import GetRating from "../../common/GetRating";

const PoojaById = () => {


  const { poojaId } = useParams();
  const { GET_PUJA_BY_ID_API } = pujaEndPoints;
  const [poojadetail, setpoojadetail] = useState("");
  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await apiConnector("POST", GET_PUJA_BY_ID_API, {
          poojaId,
        });
        setpoojadetail(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetails();
  }, [poojaId]);
  const targetDate = new Date(poojadetail.date).getTime();
  const targetDiv = useRef(null);



  const handleScrolltoDiv = () => {
    if (targetDiv.current) {
      targetDiv.current.scrollIntoView({ behavior: "smooth" });
    }
  };



  const [textColor1, settextColor1] = useState("")
  const [textColor2, settextColor2] = useState("")
  const [textColor3, settextColor3] = useState("")
  const [textColor4, settextColor4] = useState("")
  const [textColor5, settextColor5] = useState("")
  const [textColor6, settextColor6] = useState("")


  useEffect(() => {
    const handleScroll = () => {
      const aboutPooja = document.getElementById("aboutPooja");
      const poojaBenefits = document.getElementById("poojaBenefits");
      const aboutPujaProcess = document.getElementById("aboutPujaProcess");
      const aboutTemple = document.getElementById("aboutTemple");
      const aboutPayment = document.getElementById("aboutPayment");
      const aboutReviews = document.getElementById("reviews");

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

      if (isInView(aboutPooja, scrollPosition)) {
        settextColor1("text-orange-500")
      } else {
        settextColor1("text-gray-500 ")
      }

      if (isInView(poojaBenefits, scrollPosition)) {
        settextColor2("text-orange-500")
      } else {
        settextColor2("text-gray-500 ")

      }

      if (isInView(aboutPujaProcess, scrollPosition)) {
        settextColor3("text-orange-500")
      } else {
        settextColor3("text-gray-500 ")
      } 
      if (isInView(aboutTemple, scrollPosition)) {
        settextColor4("text-orange-500")
      } else {
        settextColor4("text-gray-500 ")
      }
if (isInView(aboutPayment, scrollPosition)) {
        settextColor5("text-orange-500")
      } else {
        settextColor5("text-gray-500 ")
      }
      if (isInView(aboutReviews, scrollPosition)) {
        settextColor6("text-orange-500")
      } else {
        settextColor6("text-gray-500 ")
      }

      // Repeat the above process for other sections...

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  


  return (
    <div className=" w-full min-h-screen max-w-screen-xl mx-auto lg:px-0 px-5 ">
      <PoojaNavbar poojaTitle={poojadetail.title}  />
      <div className=" flex flex-col gap-32 lg:mt-40  ">
        <div className=" flex items-center lg:flex-row flex-col justify-center lg:justify-between  lg:px-0 px-2">
          <div className=" w-full lg:w-[45%] ">
            <PoojaSwiper poojaDetails={poojadetail} />
          </div>
          <div className=" lg:w-[45%] h-full flex flex-col gap-10 ">
            <h2 className=" text-2xl lg:text-4xl font-bold">
              {poojadetail.title}.....
            </h2>
            <div className=" flex flex-col items-center gap-4">
              <div className=" flex gap-4 text-[22px] items-center justify-center text-gray-500">
                <GiByzantinTemple className=" text-orange-500" />
                {poojadetail.address}
              </div>
              <Timer targetDate={targetDate} />

              <p className=" text-lg">
                Till now{" "}
                <span className=" text-orange-500">1,00,000+Devotees</span> have
                participated in Pujas conducted by Sri Mandir Puja Seva.
              </p>
              <button
                className=" w-full p-2 rounded-xl bg-green-500 text-white font-bold cursor-pointer flex items-center justify-center "
                onClick={() => handleScrolltoDiv()}
              >
                <p className=" flex items-center gap-2">
                  Participate <FaArrowRight />
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <TabSection textColor1={textColor1} textColor2={textColor2} textColor3={textColor3} textColor4={textColor4} textColor5={textColor5} textColor6={textColor6}  />
      <div
        className=" w-full min-h-screen flex lg:mt-0 mt-3 flex-col gap-8"
      >
        <div className="flex flex-col gap-3"  id="aboutPooja">
          <h2 className="text-2xl lg:text-4xl font-bold">
            {poojadetail.title}
          </h2>
          <p className=" text-gray-500 text-lg">{poojadetail.description}</p>
        </div>
        <div className=" w-full h-4 bg-gray-300 bg-opacity-60"></div>
        <div className=" flex flex-col gap-10" >

          <h2 className=" text-4xl font-bold" >Pooja Benefits</h2>
          <div className=" w-full flex flex-wrap justify-between" id="poojaBenefits">
            {poojadetail?.poojaBenefits?.map((data, index) => {
              return (
                <div
                  key={index}
                  className=" w-[300px] max-h-[200px] flex  gap-3 rounded-xl p-3"
                >
                  <img
                    src={data.icons}
                    alt=""
                    className=" w-[70px] h-[70px] object-cover rounded-full "
                  />
                  <div className=" flex items-center gap-3 flex-col">
                    <h2 className=" text-xxl font-bold">{data.title}</h2>
                    <p className=" text-sm text-gray-500">
                      {data.description?.slice(0, 100)}...
                    </p>
                  </div>
                </div>
              );
            })}
          </div>


          <div className=" w-full h-4 bg-gray-300 bg-opacity-60"></div>
          <div id="aboutPujaProcess">
            <PoojaProcess />
          </div>{" "}

          <div className=" w-full h-4 bg-gray-300 bg-opacity-60"></div>
          <div className=" flex flex-col gap-4 py-7" id="aboutTemple">
            <h2 className=" text-4xl font-bold">{poojadetail.templeName}</h2>
            <div className=" flex items-center lg:flex-row flex-col justify-between w-full">
              <img
                src={poojadetail.image2}
                alt=""
                className=" w-full lg:w-[45%] h-[70%] object-cover rounded-xl"
              />
              <div className=" w-full flex flex-col items-center  gap-4 px-10">
                <pre
                  className=" w-full text-gray-500 text-sm leading-5"
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  {poojadetail.templeDetail}
                </pre>
                <div className=" flex flex-col gap-2 bg-slate-200 p-2 rounded-xl">
                  <p>{poojadetail.personName}</p>
                  <p>with {poojadetail.personExperience} of experience</p>
                </div>
              </div>
            </div>
          </div>

          <div ref={targetDiv} id="aboutPayment">
            <PaymentCard poojaId={poojaId} />
          </div>


          <div className=' w-full mt-20 max-w-screen-xl' id="reviews">
            <div className=' w-full   flex items-start gap-5 flex-col'>
              <h2 className=' text-4xl font-bold'>What devotees Say about Sri Mandir Puja ?</h2>
              <p className=' text-2xl  text-gray-500'>Reviews and Ratings from our customers who performed online Puja with us.</p>
            </div>
            <div className=' w-full'>
              <GetRating/>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default PoojaById;
