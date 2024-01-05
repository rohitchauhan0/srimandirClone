import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPasswordToken } from '../Services/Operations/AuthOper'

const ForgotPassword = () => {
    const [emailSend, setEmailSent] = useState(false)
    const [email, setemail] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(getPasswordToken(email, setEmailSent))
    }

  return (
    <div className=' w-screen h-screen flex items-center justify-center'>
            <div className=' flex flex-col gap-5 lg:w-[37%] w-full lg:px-0 px-2 mx-auto items-center '>
            <h1 className=' text-3xl font-bold'>
                {
                    !emailSend ? "Reset your password" : "Check your email"
                }
            </h1>
            <p className=' lg:text-xl text-gray-500 leading-[1.6rem]'>
                            {
                                !emailSend ? "Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery" : `We have sent the reset email to ${email}`
                            }
                        </p>
                        <form className=' w-full flex flex-col gap-3 p-3' onSubmit={handleSubmit}>
        <div className=" flex flex-col gap-2 px-2" >
          <label className=" text-orange-500 font-semibold">
            Enter email<sup className=" text-red-500 text-sm">*</sup>
          </label>
          <input
            type="email"
            className=" w-full border-2 border-orange-500  rounded-xl p-2"
            placeholder="Enter email here"
            onChange={(e)=> setemail(e.target.value)}
            value={email}
          />
          </div>
      
          <div className=" w-full items-center flex justify-center p-2">
          <button className=" bg-orange-500 px-5 py-2 rounded-xl hover:bg-orange-600 transition-all duration-200">
            {
                !emailSend ? "Send mail": "Resend email"
            }
          </button>
        </div>
        </form>
               
            </div>
    </div>
  )
}

export default ForgotPassword