import React, { useState } from "react";
import ImageUpload from "../Puja/ImageUpload";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../../../Services/ApiConnector";
import { authEndPoints } from "../../../../Services/AllApi";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../Services/Operations/AuthOper";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { UPDATE_IMAGE_ID_API, UPDATE_PHONE_NUM_ID_API, CHANGE_PASSWORD_API } = authEndPoints;
  const { token } = useSelector((state) => state.auth);
  const [phoneNum, setphoneNum] = useState("");
  const [oldPassword, setoldPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    const { image } = data;
    const toastId = toast.loading("Please wait...");
    try {
      const response = await apiConnector(
        "POST",
        UPDATE_IMAGE_ID_API,
        { image },
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      );
      toast.success("Profile image update");
    } catch (error) {
      console.log(error);
    }
    toast.dismiss(toastId);
  };

  const updateNumberHandler = async () => {
    try {
      await apiConnector(
        "POST",
        UPDATE_PHONE_NUM_ID_API,
        { phoneNum },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      toast.success("Updated sucsessfully");
    } catch (error) {
      console.log(error);
    }
  };

  const updatePassworHandler = async()=>{
    const toastId = toast.loading("Please wait")
        try {
           const response =  await apiConnector("POST", CHANGE_PASSWORD_API, {oldPassword, newPassword}, {
                Authorization:`Bearer ${token}`
            })
            if(!response.data.success){
                toast.error(response.data.message)
                throw new Error(response.data.message)
            }
            toast.success("Password changed")
            dispatch(logout(navigate))
            
        } catch (error) {
            console.log(error)
        }
        toast.dismiss(toastId)
  }

  return (
    <div className=" flex flex-col items-center justify-center gap-10">
      <h1 className=" text-3xl font-bold text-orange-500">
        Update your profile
      </h1>
      <div className=" w-full flex p-3 gap-5 flex-wrap border border-gray-500 rounded-xl flex-col items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col items-center gap-4"
        >
          <ImageUpload
            setValue={setValue}
            register={register}
            errors={errors}
            name={"image"}
            label={"Upload your image"}
          />
          <button className=" p-2 bg-orange-500 ">Update Image</button>
        </form>

        <div className=" w-full flex items-center justify-center flex-col gap-5">
          <div className=" flex flex-col gap-2 px-2 w-full lg:w-[50%]">
            <label className=" text-orange-500 font-semibold">
              Enter Whatsapp number
              <sup className=" text-red-500 text-sm">*</sup>
            </label>
            <input
              type="number"
              className=" w-full border-2 border-orange-500  rounded-xl p-2"
              placeholder="Enter number here"
              value={phoneNum}
              onChange={(e) => {
                setphoneNum(e.target.value);
              }}
            />
          </div>
          <button
            className=" p-2 bg-orange-500 w-fit "
            onClick={() => updateNumberHandler()}
            type="button"
          >
            Update number
          </button>
        </div>
        <div className=" flex justify-between items-center lg:gap-0 gap-3 lg:flex-row flex-col w-full">
        <div className=" flex flex-col gap-2 px-2 w-full lg:w-[50%]">
          <label className=" text-orange-500 font-semibold">
            Enter old password<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <input
            type="password"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter password here"
            value={oldPassword}
            onChange={(e) => {
              setoldPassword(e.target.value);
            }}
          />
        </div>
        <div className=" flex flex-col gap-2 px-2 w-full lg:w-[50%]">
          <label className=" text-orange-500 font-semibold">
            Enter new password<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <input
            type="password"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter password here"
            value={newPassword}
            onChange={(e) => {
              setnewPassword(e.target.value);
            }}
          />
        </div>
        <button
          className=" p-2 bg-orange-500 w-fit "
          onClick={() => updatePassworHandler()}
          type="button"
        >
          Update password
        </button>
      </div>
      </div>
     
    </div>
  );
};

export default Setting;
