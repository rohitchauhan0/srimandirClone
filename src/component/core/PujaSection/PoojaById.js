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
  const targetDiv = useRef(null)

  const handleScrolltoDiv = ()=>{
    if(targetDiv.current){
        targetDiv.current.scrollIntoView({behavior:'smooth'})
    }
  }

  return (
    <div className=" w-full min-h-screen max-w-screen-xl mx-auto ">
      <div className=" flex items-center justify-between h-full">
        <div className=" w-[45%]">
          <PoojaSwiper poojaDetails={poojadetail} />
        </div>
        <div className=" w-[45%] h-full flex flex-col gap-10 ">
          <h2 className=" text-4xl font-bold">{poojadetail.title}.....</h2>
          <div className=" flex flex-col gap-4">
            <div className=" flex gap-4 text-[22px] items-center text-gray-500">
              <GiByzantinTemple className=" text-orange-500" />
              {poojadetail.address}
            </div>
            <div className=" text-gray-500 flex  gap-4 text-[17px]">
              <Timer targetDate={targetDate} />
            </div>
            <p className=" text-lg">
              Till now{" "}
              <span className=" text-orange-500">1,00,000+Devotees</span> have
              participated in Pujas conducted by Sri Mandir Puja Seva.
            </p>
            <button className=" w-full p-2 rounded-xl bg-green-500 text-white font-bold cursor-pointer flex items-center justify-center "
            onClick={()=> handleScrolltoDiv()}
            >
              <p className=" flex items-center gap-2">
                Participate <FaArrowRight />
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className=" w-full min-h-screen flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h2 className=" text-4xl font-bold">{poojadetail.title}</h2>
          <p className=" text-gray-500 text-lg">{poojadetail.description}</p>
        </div>
        <div className=" w-full h-4 bg-gray-300 bg-opacity-60">
        </div>
        <div className=" flex flex-col gap-10">
            <h2 className=" text-4xl font-bold">Pooja Benefits</h2>
            <div className=" w-full flex flex-wrap justify-between">
                {
                    poojadetail?.poojaBenefits?.map((data, index)=>{
                       return <div key={ index} className=' w-[300px] max-h-[200px] flex  gap-3 bg-orange-300 rounded-xl p-3'>
                    <img src={data.icons} alt="" className=' w-[70px] h-[70px] object-cover rounded-full ' />
                    <div className=' flex items-center gap-3 flex-col'>
                        <h2 className=' text-xxl font-bold'>{data.title}</h2>
                        <p className=' text-sm text-gray-500'>{data.description?.slice(0, 100)}...</p>
                    </div>
                </div>
                    })
                }
            </div>
        <div className=" w-full h-4 bg-gray-300 bg-opacity-60"></div>

            <PoojaProcess/>
        <div className=" w-full h-4 bg-gray-300 bg-opacity-60"></div>
        <div className=" flex flex-col gap-4 py-7">
            <h2 className=" text-4xl font-bold">{poojadetail.templeName}</h2>
            <div className=" flex items-center justify-between w-full" >
                <img src={poojadetail.image2} alt="" className=" w-[45%] h-[70%] object-cover rounded-xl" />
                <div className=" w-full flex flex-col items-center  gap-4 px-10">
                <pre className=" w-full text-gray-500" style={{whiteSpace:"pre-wrap"}}>{poojadetail.templeDetail}</pre>
               <div className=" flex flex-col gap-2 bg-slate-200 p-2 rounded-xl">
               <p>{poojadetail.personName}</p>
               <p>with {poojadetail.personExperience} of experience</p>
               </div>
                </div>
            </div>
            </div>
        
        <div ref={targetDiv}>
        <PaymentCard poojaId={poojaId} />
        </div>
           </div>

        
      </div>
    </div>
  );
};

export default PoojaById;
