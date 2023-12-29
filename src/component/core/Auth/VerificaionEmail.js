import React, { useState } from 'react'
import OTPInput from 'react-otp-input'
import { useDispatch, useSelector } from 'react-redux'
import { setFromType } from '../../../Slices/AuthSlice'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { sendOtp, signUp } from '../../../Services/Operations/AuthOper'

const VerificaionEmail = () => {
    const {signupData, loading} = useSelector((state)=> state.auth)

    const [otp, setotp] = useState("")
    const dispatch = useDispatch()
    const accountType = "User"
    const handleOnSubmit = (e)=>{
        e.preventDefault()
                const {fullName, email, phoneNum, password, confirmPassword}= signupData
                dispatch(signUp(fullName, email, phoneNum, password, confirmPassword, accountType, otp))
    }
  return (
    <div><form onSubmit={handleOnSubmit} className=' flex flex-col gap-4' >
    <OTPInput
  value={otp}
  onChange={setotp}
  numInputs={6}
  renderSeparator={<span style={{ margin: '0 5px', fontSize: '20px' }}> </span>}
  renderInput={(props) => (
    <input
      {...props}
      style={{
        width: '40px',
        height: '40px',
        fontSize: '18px',
        textAlign: 'center',
        border: '1px solid #ccc',
        borderRadius: '4px',
        margin: '0 5px',
      }}

    />
  )}
/>

   {
    loading? (<div className=" w-full flex items-center justify-center mt-3"><span className="loader"></span></div>):( <button type='submit' className="mt-6 rounded-[8px] bg-orange-500 py-[10px] px-[12px] font-medium text-richblack-900 w-full">
        Verify Email
    </button>)
   }
</form>
<div className=' flex justify-between mt-3'>
                            <div className=' flex gap-3 items-center cursor-pointer' onClick={()=> dispatch(setFromType("login"))}>
                                <IoMdArrowRoundBack />
                                <p>Back to login</p>
                            </div>
                        <button onClick={()=> dispatch(sendOtp(signupData.email))}>
                            Resend email
                        </button>
                    </div>
</div>
  )
}

export default VerificaionEmail