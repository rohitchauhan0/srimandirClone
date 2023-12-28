import React from 'react'
import { useForm } from 'react-hook-form'
import { pujaEndPoints } from '../../../../Services/AllApi'
import { apiConnector } from '../../../../Services/ApiConnector'
import toast from 'react-hot-toast'

const EditDateModal = ({poojaId, token, cancelHandler}) => {

    const { register, handleSubmit, formState:{errors}} = useForm()
    const {EDIT_DATE_API}= pujaEndPoints

    const onSubmit = async(data)=>{
        const {date} = data
        try {
            await apiConnector("PUT", EDIT_DATE_API, {date, poojaId}, {
                Authorization:`Bearer ${token}`
            })
            toast.success("Updated successfully")
            cancelHandler()
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className=' fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex items-center justify-center'>
        <form className=' p-3 flex flex-col items-center justify-center bg-white gap-5 rounded-xl' onSubmit={handleSubmit(onSubmit)}>
        <h2 className=' text-2xl font-bold'>Please enter new date</h2>
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
      <div className=' flex flex-col gap-3 items-center' >
      <button className=' p-3 bg-orange-500'>Submit</button>
        <button className=' underline'
        onClick={()=> cancelHandler()}
        >cancel</button>
      </div>
        </form>
    </div>
  )
}

export default EditDateModal