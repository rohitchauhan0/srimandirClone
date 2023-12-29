import React from "react";
import { FaCheck } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const RenderStep = () => {
  const { step } = useSelector((state) => state.pooja);
  const steps = [
    {
      id: 1,
      title: "Create",
    },
    {
      id: 2,
      title: "Add benefits",
    },
    {
      id: 3,
      title: "Publish",
    },
  ];
  return (
   <div className=" flex flex-col items-center">
     <div className=" flex items-center flex-row justify-between p-2">
      {steps.map((data, index) => {
        return (
          <div className=" text-2xl flex" key={index}>
            <div className=" flex justify-center  items-center w-full ">
              <div
                className={`${
                  step === data.id
                    ? "  bg-orange-500 border-whiite border text-white"
                    : " border-black border "
                } py-2  rounded-full px-4`}
              >
                {step > data.id ? (
                  <div className=" py-[5px]">
                    <FaCheck className=" text-orange-500" />
                  </div>
                ) : (
                  data.id
                )}
              </div>
              <div
                className={`${
                  step > data.id ? " text-white" : " text-black"
                }`}
              >
                  <div className={`${step > data.id ? " text-orange-500":" text-black" } lg:block hidden`}>
                                    {
                                        data.id < 3 ? (<span>...............................</span>) : ("")
                                    }
                                </div> 
                                <div className={`${step > data.id ? " text-orange-500":" text-black" } lg:hidden block`}>
                                    {
                                        data.id < 3 ? (<span>...........</span>) : ("")
                                    }
                                </div>
              </div>
            </div>
          </div>
        );
      })}
      
    </div>
    <div className=' flex justify-between my-[5px] w-full'>
                {
                    steps.map((item, index) => {
                        return <div
                        className={`${step === item.id ? " text-orange-500":" text-black"}`} key={index}
                        >
                            <p>{item.title}</p>
                        </div>
                    })
                }
            </div>

            {step === 1 && <Step1/>}
            {step === 2 && <Step2/>}
            {step === 3 && <Step3/>}
   </div>
  );
};

export default RenderStep;
