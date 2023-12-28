import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { benifitEndPoints, packageEnPoints } from "../../../../Services/AllApi";
import toast from "react-hot-toast";
import { apiConnector } from "../../../../Services/ApiConnector";
import { useNavigate } from "react-router-dom";

const CreatePackage = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.auth);
  const { CREATE_PACKAGE_API } = packageEnPoints;
  const onSubmit = async (data) => {
    const { price, title, addPeople,benefit1,benefit2,benefit3 } = data;
    const toastid = toast.loading("Please wait..");
    try {
      const response = await apiConnector(
        "POST",
        CREATE_PACKAGE_API,
        { price, title, addPeople, benefit1, benefit2, benefit3 },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      toast.success("Package created");
    navigate("/dashboard/my-package")
    } catch (error) {
      console.log(error);
    }
    toast.dismiss(toastid);
  };
  return (
    <div className=" w-full flex items-center justify-center flex-col gap-4">
      <h1 className=" text-3xl font-bold uppercase">
        Create your package here
      </h1>
      <form
        className=" w-[40%] flex flex-col gap-3 p-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" flex flex-col gap-2 px-2">
          <label className=" text-orange-500 font-semibold">
            Enter title<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <input
            type="text"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter title here"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className=" text-red-500">Title is required</span>
          )}
        </div>
        <div className=" flex flex-col gap-2 px-2">
          <label className=" text-orange-500 font-semibold">
            How many people<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <input
            type="number"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter people here"
            {...register("addPeople", { required: true })}
          />
          {errors.addPeople && (
            <span className=" text-red-500">Add People is required</span>
          )}
        </div>
        <div className=" flex flex-col gap-2 px-2">
          <label className=" text-orange-500 font-semibold">
            Enter price<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <input
            type="number"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter price here"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className=" text-red-500">Price is required</span>
          )}
        </div>   
        <div className=" flex flex-col gap-2 px-2">
          <label className=" text-orange-500 font-semibold">
            Enter benefit1<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <textarea
            type="text"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter benefit1 here"
            {...register("benefit1", { required: true })}
          />
          {errors.benefit1 && (
            <span className=" text-red-500">Benefit1 is required</span>
          )}
        </div> 
        <div className=" flex flex-col gap-2 px-2">
          <label className=" text-orange-500 font-semibold">
            Enter benefit2<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <textarea
            type="text"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter benefit2 here"
            {...register("benefit2", { required: true })}
          />
          {errors.benefit2 && (
            <span className=" text-red-500">benefit2 is required</span>
          )}
        </div> 
        <div className=" flex flex-col gap-2 px-2">
          <label className=" text-orange-500 font-semibold">
            Enter benefit3<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <textarea
            type="text"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter benefit3 here"
            {...register("benefit3", { required: true })}
          />
          {errors.benefit3 && (
            <span className=" text-red-500">benefit3 is required</span>
          )}
        </div>
        <div className=" w-full items-center flex justify-center p-2">
          <button className=" bg-orange-500 px-5 py-2 rounded-xl hover:bg-orange-600 transition-all duration-200">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePackage;
