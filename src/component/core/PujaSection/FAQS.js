import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

const FAQS = ({title, text}) => {
    const [show, setshow] = useState(false)
  return (
    <details className=' w-full flex flex-col justify-between text-gray-500'>
   
   <summary className={`${show?" text-black":" text-gray-500"} w-full flex flex-col items-center cursor-pointer  gap-5 text-xl py-3`} onClick={()=> setshow(!show)}>
   <div className=' w-full flex items-center justify-between'>
   <p>{title}</p>

{
             show? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />
         }
   </div>
   <div className=' w-full h-[1px] bg-gray-300'></div>
   </summary>
            
    <p>{text}</p>
            
       
    </details>
  )
}

export default FAQS