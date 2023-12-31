import React, { useEffect, useState } from "react";
import { pujaEndPoints } from "../../../Services/AllApi";
import { apiConnector } from "../../../Services/ApiConnector";
import { GiByzantinTemple } from "react-icons/gi";
import { IoMdCalendar } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

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
    <div className=" grid gap-9 sm:grid-cols-2 lg:grid-cols-3 mt-5 bg-white">
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
                  {data.date}
                </div>
              </div>
              <button className=" w-full p-2 rounded-xl bg-green-500 text-white font-bold cursor-pointer flex items-center justify-center "
             
              >
                <p className=" flex items-center gap-2">Participate <FaArrowRight /></p>
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Poojacard;
