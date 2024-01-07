import React from "react";
import photo1 from "../../../Assets/photo1.webp";
import { GiByzantinTemple } from "react-icons/gi";
import { IoMdCalendar } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Card = ({ image, title, text1, text2, poojaId }) => {
  const navigate = useNavigate()

  return (
    <div className=" p-3 rounded-xl border-[1px] border-gray-400 flex flex-col justify-between min-h-[450px] cursor-pointer"
    onClick={()=> navigate(`/puja/${poojaId}`)}
    >
      <img src={image} alt="" className=" w-full rounded-xl max-h-[168px] object-cover" />
      <h2 className=" text-2xl font-bold ">
       {title}
      </h2>
      <div className=" flex flex-col gap-2">
        <div className=" flex gap-4 text-[17px] text-gray-500">
          <GiByzantinTemple className=" text-orange-500" />
          {text1}
        </div>
        <div className=" text-gray-500 flex  gap-4 text-[17px]">
          <IoMdCalendar className=" text-orange-500" />
         {text2}
        </div>
      </div>
      <button className=" w-full p-2 rounded-xl text-white font-bold cursor-pointer gradientButton relative overflow-hidden">
      <div className=" w-[80px] h-[150px] bg-white -top-2 -left-2 rotate-45 absolute -skew-x-[45deg] opacity-40 animateButton"></div>
      Participate</button>
    </div>
  );
};

export default Card;
