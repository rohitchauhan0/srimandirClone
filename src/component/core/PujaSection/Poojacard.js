import React, { useEffect, useState } from "react";
import { pujaEndPoints } from "../../../Services/AllApi";
import { apiConnector } from "../../../Services/ApiConnector";
import { GiByzantinTemple } from "react-icons/gi";
import { IoMdCalendar } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { formattedDate } from "../../../Utils/DateFormatter";

const Poojacard = () => {
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
    <div className=" grid gap-9 sm:grid-cols-2 lg:grid-cols-3 bg-white">
        {poojaDetails.map((data, index) => {
          return (
            <div className=" p-3 rounded-xl border-[1px] border-gray-400 flex flex-col justify-between min-h-[500px] cursor-pointer"
             onClick={()=> navigate(`/puja/${data._id}`)}
             key={index}
            >
              <img
                src={data.image1}
                alt=""
                className=" w-full rounded-xl max-h-[168px] object-cover"
              />
              <h2 className=" text-2xl font-bold ">{data.title}</h2>
              <div className=" flex flex-col gap-2">
                <div className=" flex gap-4 text-[17px] text-gray-500">
                  <GiByzantinTemple className=" text-orange-500" />
                  {data.address}
                </div>
                <div className=" text-gray-500 flex  gap-4 text-[17px]">
                  <IoMdCalendar className=" text-orange-500" />
                  {/* {data.date} */}
                  {formattedDate(data?.date)}
                </div>
              </div>
              <button className=" w-full p-2 rounded-xl text-white font-bold cursor-pointer gradientButton relative overflow-hidden flex items-center gap-3 justify-center
              ">
      <div className=" w-[80px] h-[150px] bg-white -top-2 -left-2 rotate-45 absolute -skew-x-[45deg] opacity-40 animateButton"></div>
      Participate  <FaArrowRight /></button>
            
            </div>
          );
        })}
    </div>
  );
};

export default Poojacard;
