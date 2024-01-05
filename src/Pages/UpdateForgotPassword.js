import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { resetPassword } from '../Services/Operations/AuthOper'

const UpdateForgotPassword = () => {
    const {token} = useParams()
    console.log(token)
    const [password, setnewPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(resetPassword(password, confirmPassword, token, navigate))
    }

  return (
    <div className=' w-screen h-screen flex items-center justify-center'>

   <div className=' flex flex-col gap-5 lg:w-[37%] px-2 lg:px-0 mx-auto items-center '>
            <h1 className=' text-3xl font-bold'>
               Choose new password
            </h1>
            <p className=' text-xl text-gray-500 leading-[1.6rem]'>
            Almost done. Please enter your new password
                        </p>
                        <form className=' w-full flex flex-col gap-3 p-3 items-center' onSubmit={handleSubmit}>
                        <div className=" flex flex-col gap-2 px-2 w-full lg:w-[50%]">
          <label className=" text-orange-500 font-semibold">
            Enter new password<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <input
            type="password"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter password here"
            value={password}
            onChange={(e) => {
                setnewPassword(e.target.value);
            }}
          />
        </div>
        <div className=" flex flex-col gap-2 px-2 w-full lg:w-[50%]">
          <label className=" text-orange-500 font-semibold">
            Enter confirm password<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <input
            type="password"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter password here"
            value={confirmPassword}
            onChange={(e) => {
              setconfirmPassword(e.target.value);
            }}
          />
        </div>
      
          <div className=" w-full items-center flex justify-center p-2">
          <button className=" bg-orange-500 px-5 py-2 rounded-xl hover:bg-orange-600 transition-all duration-200">Reset password</button>
        </div>
        </form>
               
            </div>
    </div>
  )
}

export default UpdateForgotPassword