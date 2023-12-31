import React from "react";
import { subsectionEndPoint } from "../../../../Services/AllApi";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { apiConnector } from "../../../../Services/ApiConnector";
import LibraryImageUpload from "./LibraryImage";
import ImageUpload from "../Puja/ImageUpload";

const CreateMantra = ({ sectionId, title }) => {
  const { CREATE_MANTRA_API } = subsectionEndPoint;
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { token } = useSelector((state) => state.auth);

  const onSubmit = async (data) => {
    console.log(data);

    const {
        title,
        description,
        heading1,
        about,
        lekh,
        blogDescription,
        image1,
      image2,
    } = data;
    const toastId = toast.loading("Please wait");
    try {
      const response = await apiConnector(
        "POST",
        CREATE_MANTRA_API,
        {
        title,
        description,
        heading1,
        about,
        image1,
        lekh,
        blogDescription,
       image2,
          sectionId,
        },
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      );
      toast.success("Mantra created");
    } catch (error) {
      console.log(error);
    }
    toast.dismiss(toastId);
  };
  return (
    <div>
      <div className=" w-full flex items-center justify-center flex-col gap-4 mt-10">
        <h1 className=" text-xl lg:text-3xl font-bold uppercase">
          Create Mantra
        </h1>
        <form
          className=" w-full lg:w-[40%] flex flex-col gap-3 p-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className=" flex flex-col gap-2 px-2">
            <label className=" text-orange-500 font-semibold">
              Enter mantra title<sup className=" text-red-500 text-sm">*</sup>
            </label>
            <input
              type="text"
              className="w-full border-2 border-orange-500  rounded-xl p-2"
              placeholder="Enter arti title here"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className=" text-red-500">Title is required</span>
            )}
          </div>
          <div className=" flex flex-col gap-2 px-2">
            <label className=" text-orange-500 font-semibold">
              Enter sub title<sup className=" text-red-500 text-sm">*</sup>
            </label>
            <textarea
              type="text"
              className=" w-full border-2 border-orange-500  rounded-xl p-2"
              placeholder="Enter arti description here"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className=" text-red-500">Description is required</span>
            )}
          </div>

          <div className=" flex flex-col gap-2 px-2">
            <label className=" text-orange-500 font-semibold">
              Enter Heading of mantra
              <sup className=" text-red-500 text-sm">*</sup>
            </label>
            <input
              type="text"
              className="w-full border-2 border-orange-500  rounded-xl p-2"
              placeholder="Enter Heading of Arti here"  
              {...register("heading1", { required: true })}
            />
            {errors.heading1 && (
              <span className=" text-red-500">Heading of arti is required</span>
            )}
          </div>
          <div className=" flex flex-col gap-2 px-2">
            <label className=" text-orange-500 font-semibold">
              Enter About mantra<sup className=" text-red-500 text-sm">*</sup>
            </label>
            <textarea
              type="text"
              className=" w-full border-2 border-orange-500  rounded-xl p-2"
              placeholder="Enter about of arti here"
              {...register("about", { required: true })}
            />
            {errors.about && (
              <span className=" text-red-500">About is required</span>
            )}
          </div>

          <div className=" flex flex-col gap-2 px-2">
            <label className=" text-orange-500 font-semibold">
              Write lekh <sup className=" text-red-500 text-sm">*</sup>
            </label>
            <textarea
              type="text"
              className=" w-full border-2 border-orange-500  rounded-xl p-2"
              placeholder="Enter lekh here"
              {...register("lekh", { required: true })}
            />
            {errors.lekh && (
              <span className=" text-red-500">lekh is required</span>
            )}
            </div>
            
            <div className=" flex flex-col gap-2 px-2">
            <label className=" text-orange-500 font-semibold">
              Write mantra here<sup className=" text-red-500 text-sm">*</sup>
            </label>
            <textarea
              type="text"
              className=" w-full border-2 border-orange-500  rounded-xl p-2 max-h-[900px]"
              placeholder="Enter mantra here"
              {...register("blogDescription", { required: true })}
            />
            {errors.blogDescription && (
              <span className=" text-red-500">mantra is required</span>
            )}
            </div>
            <div>
              <ImageUpload
                setValue={setValue}
                register={register}
                errors={errors}
                name={"image1"}
                label={"Add thumbnail"}
              />
              <LibraryImageUpload
                setValue={setValue}
                register={register}
                errors={errors}
                name={"image2"}
                label={"Add Chalisa image"}
              />
          </div>
          <button className=" bg-orange-500 px-5 py-2 rounded-xl hover:bg-orange-600 transition-all duration-200">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateMantra;

// title1:title, description1:description, heading1, description2:about,image1:thumbnail1.secure_url,description6:lekh,
// mantra1, mantra2, mantra3,mantraKaNaam1, mantraKaNaam2, mantraKaNaam3, mantraKaArth1, mantraKaArth2, mantraKaArth3, mantraKaLaabh1, mantraKaLaabh2, mantraKaLaabh3, image2:thumbnail2.secure_url
