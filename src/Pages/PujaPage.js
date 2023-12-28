import React from 'react'
import templeImage from "../Assets/nepal-kaal-bhairav-shrine-mg51krf9md7dnf56.jpg"
import templeImage1 from "../Assets/pahala-basuki-z3NhWL4O39Q-unsplash.jpg"
import templeImage2 from "../Assets/sanjan-malakala-P9JAVSExxh0-unsplash.jpg"
import frontImage from "../Assets/puja_L1_hero.svg"

const PujaPage = () => {
  return (
    <div className=" flex items-center justify-between flex-col min-h-screen">
          <div className=' flex w-full items-center justify-between '>
            <div className=' w-[50%] h-full flex items-center gap-3 flex-col px-10'>
                <img src={frontImage} alt="" />
                <h1 className=' text-4xl text-black font-bold'>Perform your puja as per Vedic rituals at Hindu pilgrimages and famous temples in India with Sri Mandir</h1>
                <ul className=' flex list-disc flex-col gap-3 text-gray-500 items-start w-full px-5'>
                    <li>Puja for good health, wealth & family</li>
                    <li>Dosha & Astrology Remedy Pujas</li>
                    <li>Yagya, Havan, and Mantra Jaap</li>
                </ul>
            </div>
            <div className=' flex gap-5 overflow-hidden items-center justify-center max-h-screen w-[50%] relative'>
           <div className=' flex flex-col gap-6 items-center justify-center mt-20 upDownAnimation'>
                <img src={templeImage} alt="" className=' w-[300px] h-[200px] object-cover rounded-xl' />
                <img src={templeImage1} alt="" className=' w-[300px] h-[200px] object-cover rounded-xl'/>
                <img src={templeImage2} alt="" className=' w-[300px] h-[200px] object-cover rounded-xl'/>
            </div>
            <div className=' flex flex-col gap-6 items-center justify-center mt-20 upDownAnimation1'>
                <img src={templeImage} alt="" className=' w-[300px] h-[200px] object-cover rounded-xl' />
                <img src={templeImage1} alt="" className=' w-[300px] h-[200px] object-cover rounded-xl'/>
                <img src={templeImage2} alt="" className=' w-[300px] h-[200px] object-cover rounded-xl'/>
                <img src={templeImage2} alt="" className=' w-[300px] h-[200px] object-cover rounded-xl'/>
            </div>
            <div className=' absolute w-full h-[150px]  top-10 left-0 fadeColor'>
            </div>
            <div className=' absolute w-full h-[150px]  bottom-0 left-0 fadeColor1'>
            </div>
           </div>
          </div>
          <div>
            
          </div>
    </div>
  )
}

export default PujaPage