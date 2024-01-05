import React, { useEffect, useState } from 'react'

const TabSection = ({textColor1, textColor2, textColor3, textColor4, textColor5, textColor6, textColor7}) => {

   
    
  return (
    <div className=' sticky mt-28 top-[109px] z-[1000] min-w-screen border-t border-b bg-white border-gray-300  mb-7 lg:block hidden  '>
        <div className=' max-w-screen-xl mx-auto p-3 text-gray-500 flex items-center justify-between text-lg font-bold '>
          <p className={`${textColor1}`}>About Puja</p>
          <p className={`${textColor2}`}>Benefits</p>
          <p className={`${textColor3}`}>Process</p>
          <p className={`${textColor4}`}>Temple Details</p>
          <p className={`${textColor5}`}>Packages</p>
          <p className={`${textColor6}`} >Reviews</p>
          <p className={`${textColor7}`}>FAQs</p>
        </div>
    </div>
  )
}

export default TabSection