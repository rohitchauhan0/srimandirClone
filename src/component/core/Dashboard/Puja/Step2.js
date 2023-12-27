import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiConnector } from "../../../../Services/ApiConnector";
import { benifitEndPoints } from "../../../../Services/AllApi";
import { FaPlus } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { setPooja, setSteps } from "../../../../Slices/PoojaSlice";

const Step2 = () => {
  const { pooja } = useSelector((state) => state.pooja);
  const { GET_ALL_BENEFITS_API } = benifitEndPoints;
  const [benefits, setbenefits] = useState([]);
  const [poojaBenefits, setPoojaBenefits] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getBenefits = async () => {
      try {
        const response = await apiConnector("GET", GET_ALL_BENEFITS_API);
        setbenefits(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBenefits();
  }, []);

  const removeIdFromArray = (array, idToRemove) => {
    // Use the filter method to create a new array excluding the specified ID
    const newArray = array.filter((item) => item !== idToRemove);

    return newArray;
  };

  const arr = [];
  const handleRemove = (idToRemove) => {
    const updatedArr = arr.filter((id) => id !== idToRemove);
    // Update the state or perform any necessary actions with updatedArr
    setPoojaBenefits(updatedArr)

  };
  
  const handleAdd = (idToAdd) => {
    const updatedArr = [...arr, idToAdd];
    // Update the state or perform any necessary actions with updatedArr
    setPoojaBenefits(updatedArr)
  };
  

  const goBackHandler = () => {
    dispatch(setPooja(null));
    dispatch(setSteps(1));
  };

  const goNextHandler = () => {
    dispatch(setPooja({ ...pooja, poojaBenefits }));
    dispatch(setSteps(3));
  };

  return (
    <div className=" flex flex-col gap-10">
      <div className=" mt-10 border border-gray-500 p-3 rounded-xl flex flex-col gap-4 flex-wrap">
        {benefits.map((data, index) => {
          return (
            <div className=" w-[300px] h-fit flex gap-2 border border-gray-500 p-3 rounded-xl">
              <img
                src={data.icons}
                alt=""
                className=" w-[50px] h-[50px] rounded-full object-cover"
              />
              <div className=" flex flex-col gap-2 items-center">
                <p className=" text-xl font-bold">{data.title}</p>
                <p className=" text-md text-gray-500 leading-5">
                  {data.description}
                </p>
                {poojaBenefits.includes(data._id) ? (
                  <button
                    className="px-3 p-1 rounded-xl bg-orange-500 flex items-center justify-center w-fit"
                    onClick={() => handleRemove(data._id)}
                    type="button"
                  >
                    Remove
                    <RxCross1 />
                  </button>
                ) : (
                  <button
                    className="px-3 p-1 rounded-xl bg-orange-500 flex items-center justify-center w-fit"
                    onClick={() => handleAdd(data._id)}
                    type="button"
                  >
                    Add
                    <FaPlus />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className=" w-full flex items-center justify-between">
        <button
          type="button"
          className=" px-3 p-1 rounded-xl bg-orange-500"
          onClick={() => goBackHandler()}
        >
          Go back
        </button>
        {poojaBenefits.length > 0 && (
          <button
            type="button"
            className=" px-3 p-1 rounded-xl bg-orange-500"
            onClick={() => goNextHandler()}
          >
            Go next
          </button>
        )}
      </div>
    </div>
  );
};

export default Step2;
