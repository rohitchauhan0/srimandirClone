import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { reviewEndPoint } from "../../../../Services/AllApi";
import toast from "react-hot-toast";
import { apiConnector } from "../../../../Services/ApiConnector";
import ImageUpload from "../Puja/ImageUpload";

const CreateReview = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { token } = useSelector((state) => state.auth);
  const { CREATE_REVIEW_API } = reviewEndPoint;
  const onSubmit = async (data) => {
    const { name, address, personPic, review } = data;
    console.log(data)
    const toastid = toast.loading("Please wait..");
    try {
      const response = await apiConnector(
        "POST",
        CREATE_REVIEW_API,
        { name, address, personPic, review },
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      );
      toast.success("Review created");
    } catch (error) {
      console.log(error);
    }
    toast.dismiss(toastid);
  };
  return (
    <div className=" w-full flex items-center justify-center flex-col gap-4">
      <h1 className=" text-xl lg:text-3xl font-bold uppercase">
        Add Benefits here
      </h1>
      <form
        className=" w-full lg:w-[40%] flex flex-col gap-3 p-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <ImageUpload
            setValue={setValue}
            register={register}
            errors={errors}
            name={"personPic"}
            label={"Add person Image"}
          />
        </div>
        <div>
          <ImageUpload
            setValue={setValue}
            register={register}
            errors={errors}
            name={"review"}
            label={"Add review Image"}
          />
        </div>
        <div className=" flex flex-col gap-2 px-2">
          <label className=" text-orange-500 font-semibold">
            Enter person name<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <input
            type="text"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter title here"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className=" text-red-500">name is required</span>
          )}
        </div>
        <div className=" flex flex-col gap-2 px-2">
          <label className=" text-orange-500 font-semibold">
            Enter address<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <textarea
            type="text"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter description here"
            {...register("address", { required: true })}
          />
          {errors.address && (
            <span className=" text-red-500">address is required</span>
          )}
        </div>
        <div className=" w-full items-center flex justify-center p-2">
          <button className=" bg-orange-500 px-5 py-2 rounded-xl hover:bg-orange-600 transition-all duration-200">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateReview;
