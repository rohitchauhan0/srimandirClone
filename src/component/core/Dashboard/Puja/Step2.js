import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { apiConnector } from '../../../../Services/ApiConnector'
import { benifitEndPoints } from '../../../../Services/AllApi'
import { FaPlus } from 'react-icons/fa6'
import { RxCross1 } from "react-icons/rx";

const Step2 = () => {
  const {pooja} = useSelector((state)=> state.pooja)
  const {GET_ALL_BENEFITS_API} = benifitEndPoints
  const [benefits, setbenefits] = useState([])
  const [poojaBenefits, setPoojaBenefits] = useState([])

  useEffect(() => {
   const getBenefits = async()=>{
    try {
      const response = await apiConnector("GET", GET_ALL_BENEFITS_API)
      setbenefits(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  getBenefits()
  }, [])

  const removeBenefit = (index)=>{
    const updatedbenefits = [...poojaBenefits]
    updatedbenefits.splice(index, 0)
    setPoojaBenefits(updatedbenefits)
  }
  
  return (
    <div>
       <div className=' mt-10'>
       {
          benefits.map((data)=> {
            return <div className=' w-[300px] h-fit flex gap-2 border border-gray-500 p-3 rounded-xl'>
              <img src={data.icons} alt="" className=' w-[50px] h-[50px] rounded-full object-cover' />
              <div className=' flex flex-col gap-2 items-center'>
                <p className=' text-xl font-bold'>{data.title}</p>
                <p className=' text-md text-gray-500 leading-5'>{data.description}</p>
              {
                poojaBenefits.includes(data._id) ? (<button className=' px-3 p-1 rounded-xl bg-orange-500 flex items-center justify-center w-fit'
                  onClick={()=> removeBenefit(data._id)}
                  type='button'
                >Remove<RxCross1 />
                  </button>):<button className=' px-3 p-1 rounded-xl bg-orange-500 flex items-center justify-center w-fit'
                  onClick={()=> setPoojaBenefits(data._id)}
                  type='button'
                >Add<FaPlus /></button>
              }
              </div>
            </div>
          })
        }
       </div>
       <div>
          <button
          type='button'
          >

          </button>
       </div>
    </div>
  )
}

export default Step2