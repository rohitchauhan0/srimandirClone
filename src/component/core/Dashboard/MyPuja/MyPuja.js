import React, { useEffect, useState } from 'react'
import { pujaEndPoints } from '../../../../Services/AllApi'
import { apiConnector } from '../../../../Services/ApiConnector'
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin7Line } from "react-icons/ri";
import toast from 'react-hot-toast';
import EditDateModal from './EditDateModal';
import { useSelector } from 'react-redux';

const MyPuja = () => {
  const {GET_ALL_PUJA_API, EDIT_DATE_API, DELETE_POOJA_API} = pujaEndPoints
  const [pujaDetails, setpujaDetails] = useState([])
  const [dateModal, setdateModal] = useState(null)
  const {token} = useSelector((state)=> state.auth)
  const getAllPujaDetails = async(req, res)=>{
   try {
     const response = await apiConnector("GET", GET_ALL_PUJA_API)
     setpujaDetails(response.data.data)
   } catch (error) {
     console.log(error)
   }
  }
  useEffect(() => {
   getAllPujaDetails()
  }, [])

  const handleDelete = async(poojaId)=>{
    try {
      await apiConnector("DELETE", DELETE_POOJA_API, {poojaId})
      toast.success("Deleted")
      getAllPujaDetails()
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
  <>
      <div className=' mt-20 flex gap-10 flex-col justify-center'>
      <div className=' flex gap-5'>
        {
            pujaDetails.map((data, index)=>{
              return <div key={index} className=' flex flex-col gap-3 w-[250px] h-fit rounded-xl p-2 border border-gray-500'>
                <img src={data.image1} alt="" className=' w-full h-full rounded-xl max-h-[250px] object-cover' />
                <p>{data.title}</p>
                <p><span className=' text-orange-500 font-bold'>Created at:</span> {data.createdAt.split("T")[0]}</p>
                <p><span className=' text-orange-500 font-bold'>Puja data:</span> {data.date}</p>
                <div className=' w-full flex items-center justify-center flex-col gap-3'>
                <button className=' flex items-center gap-2  bg-yellow-500 p-2'
                  onClick={()=>{
                    setdateModal({
                      poojaId:data._id,
                      cancelHandler:()=>{
                        setdateModal(null)
                      }
                    })
                  }}
                >Edit date<MdOutlineModeEdit /></button>
                <button className=' flex items-center gap-2 bg-red-500 p-2'
                onClick={()=> handleDelete(data._id)}
                >Delete<RiDeleteBin7Line /></button>
                </div>
              </div>
            })
        }
      </div>
    </div>
    {
      dateModal && <EditDateModal cancelHandler={dateModal.cancelHandler} token={token} poojaId={dateModal.poojaId}  />
    }
  </>
  )
}

export default MyPuja