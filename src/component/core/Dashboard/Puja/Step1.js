import React from "react";
import { useForm } from "react-hook-form";
import ImageUpload from "./ImageUpload";
import { useDispatch } from "react-redux";
import { setPooja, setSteps } from "../../../../Slices/PoojaSlice";

const Step1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const dispatch = useDispatch()

  const onSubmit = async(data)=>{
        dispatch(setPooja(data))
        dispatch(setSteps(2))
  }

  return (
    <div className=" w-full h-full border border-black mt-10 p-4 rounded-xl text-black">
      <form className=" flex flex-col gap-3 " onSubmit={handleSubmit(onSubmit)}>
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
            Enter about pooja<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <textarea
            type="text"
            className=" w-full border-2 border-orange-500  rounded-xl p-2 min-h-40"
            placeholder="Enter about pooja here"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className=" text-red-500">Description is required</span>
          )}
        </div>
        <div className=" flex flex-col gap-2 px-2">
          <label className=" text-orange-500 font-semibold">
            Enter address<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <textarea
            type="text"
            className=" w-full border-2 border-orange-500  rounded-xl p-2 min-h-24"
            placeholder="Enter address here"
            {...register("address", { required: true })}
          />
          {errors.address && (
            <span className=" text-red-500">Address is required</span>
          )}
        </div>
        <div className=" flex flex-col gap-2 px-2">
          <label className=" text-orange-500 font-semibold">
            Enter temple name<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <input
            type="text"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter temple name here"
            {...register("templeName", { required: true })}
          />
          {errors.templeName && (
            <span className=" text-red-500">Temple Name is required</span>
          )}
        </div>
        <div className=" flex flex-col gap-2 px-2">
          <label className=" text-orange-500 font-semibold">
            Enter temple details<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <textarea
            type="text"
            className=" w-full border-2 border-orange-500  rounded-xl p-2 min-h-40"
            placeholder="Enter temple details here"
            {...register("templeDetail", { required: true })}
          />
          {errors.templeDetail && (
            <span className=" text-red-500">Temple detail is required</span>
          )}
        </div>

        <div className=" flex flex-col gap-2 px-2">
          <label className=" text-orange-500 font-semibold">
            Enter person name<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <input
            type="text"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter person name here"
            {...register("personName", { required: true })}
          />
          {errors.personName && (
            <span className=" text-red-500">Person name is required</span>
          )}
        </div>
        <div className=" flex flex-col gap-2 px-2">
          <label className=" text-orange-500 font-semibold">
            Enter person experience name
            <sup className=" text-red-500 text-sm">*</sup>
          </label>
          <input
            type="number"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter person experience here"
            {...register("personExperience", { required: true })}
          />
          {errors.personExperience && (
            <span className=" text-red-500">Person experience is required</span>
          )}
        </div>
        <div className=" flex flex-col gap-2 px-2">
          <label className=" text-orange-500 font-semibold">
            Enter date<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <input
            type="date"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter date of pooja start "
            {...register("date", { required: true })}
          />
          {errors.date && (
            <span className=" text-red-500">Date is required</span>
          )}
        </div>
        <div>
          <ImageUpload
            setValue={setValue}
            register={register}
            errors={errors}
            label={"Upload thumbnail"}
            name={"image1"}
          />
          <ImageUpload
            setValue={setValue}
            register={register}
            errors={errors}
            label={"Upload temple image"}
            name={"image2"}
          />
          <ImageUpload
            setValue={setValue}
            register={register}
            errors={errors}
            label={"Upload extra iamge"}
            name={"image3"}
          />
          <ImageUpload
            setValue={setValue}
            register={register}
            errors={errors}
            label={"Upload extra image"}
            name={"image4"}
          />
        </div>
        <div className=" w-full items-center flex justify-center p-2">
          <button className=" bg-orange-500 px-5 py-2 rounded-xl hover:bg-orange-600 transition-all duration-200">Next</button>
        </div>
      </form>
    </div>
  );
};

export default Step1;
