import React from 'react'
import { POOJA_PROCESS_DETAILS } from '../../../Data/PoojaProcess'

const PoojaProcess = () => {
  return (
         <div className=" flex flex-col gap-10 py-7">
            <h2 className=" text-4xl font-bold">Pooja Process</h2>
            <div className=" grid gap-9 sm:grid-cols-2 lg:grid-cols-3 mt-5">
                {
                    POOJA_PROCESS_DETAILS.map((data, index)=>{
                       return <div key={ index} className=' w-[300px] max-h-[200px] flex  gap-3 p-3'>
                        <div className=' p-2 px-4 bg-orange-500 w-fit h-fit rounded-full'>
                            {data.id}
                        </div>
                    <div className=' flex  gap-3 flex-col'>
                        <h2 className=' text-xl font-bold'>{data.title}</h2>
                        <p className=' text-lg text-gray-500'>{data.description}</p>
                    </div>
                </div>
                    })
                }
            </div>
            </div>

  )
}

export default PoojaProcess