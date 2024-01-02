import React from 'react'
import templeImage from "../Assets/nepal-kaal-bhairav-shrine-mg51krf9md7dnf56.jpg"
import templeImage1 from "../Assets/pahala-basuki-z3NhWL4O39Q-unsplash.jpg"
import templeImage2 from "../Assets/sanjan-malakala-P9JAVSExxh0-unsplash.jpg"
import frontImage from "../Assets/puja_L1_hero.svg"
import Poojacard from '../component/core/PujaSection/Poojacard'
import PoojaGradientCard from '../component/core/PujaSection/PoojaGradientCard'
import GetRating from '../component/common/GetRating'

const PujaPage = () => {
  return (
    <div className=" flex items-center justify-between flex-col min-h-screen">
          <div className=' flex w-full lg:flex-row flex-col items-center justify-between max-w-screen-2xl '>
            <div className=' w-full lg:w-[50%] h-full lg:mt-0 mt-20 flex items-center gap-3 flex-col px-10'>
                <img src={frontImage} alt="" />
                <h1 className=' text-4xl text-black font-bold'>Perform your puja as per Vedic rituals at Hindu pilgrimages and famous temples in India with Sri Mandir</h1>
                <ul className=' flex list-disc flex-col gap-3 text-gray-500 items-start w-full px-5'>
                    <li>Puja for good health, wealth & family</li>
                    <li>Dosha & Astrology Remedy Pujas</li>
                    <li>Yagya, Havan, and Mantra Jaap</li>
                </ul>
            </div>
            <div className=' flex gap-5 overflow-hidden items-center justify-center max-h-screen w-full lg:w-[50%] relative'>
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
            <div className=' absolute w-full h-[150px] top-0  lg:top-10 left-0 fadeColor'>
            </div>
            <div className=' absolute w-full h-[150px]  bottom-0 left-0 fadeColor1'>
            </div>
           </div>
          </div>
          <div className=' max-w-screen-xl mx-auto min-h-screen pt-20'>
               <div className=' w-full lg:w-[70%] flex gap-4 flex-col'>
               <h2 className=' text-4xl font-bold'>Upcoming Pujas on Sri Mandir.</h2>
                <p className=' text-lg text-gray-500'>Book online puja with Sri Mandir in more than 500+ temples across India. Receive video of the puja along with the Prasad and receive blessings from the divine for prosperity and well-being of you and your family</p>
               </div>

        
          <Poojacard/>
          </div>

          <div className=' w-full mt-20 max-w-screen-xl'>
            <div className=' w-full   flex items-start gap-5 flex-col'>
              <h2 className=' text-4xl font-bold'>Start your Sacred Journey with Sri Mandir Puja Service</h2>
              <p className=' text-2xl  text-gray-500'>Why book Sri Mandir Online Puja?</p>
            </div>
            <div className='space-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 xl:gap-8 sm:space-y-0 py-6 px-4'>
              <PoojaGradientCard number={"10,00,000 +"} title={"Puja's Done"} gradientColor={"bg-gradient-to-tl from-[#DFEDFD] via-[#DFEDFD] to-[#DFEDFD] from-opacity-100 to-opacity-0"} textColor={"text-[#025AC0]"} /> 
              
              <PoojaGradientCard number={"300,000 +"} title={"Happy Devotees"} gradientColor={"bg-gradient-to-tl from-[#DED3F8] to-[#FFFFFF]"} textColor={"text-[#390AAD]"} /> 
              <PoojaGradientCard number={"100 +"} title={"Famous Temples in India"} gradientColor={"bg-gradient-to-tl from-pink-300 to-[#FFFFFF]"} textColor={"text-[#A80D53]"} />


              <PoojaGradientCard number={"1 Sankalp"} title={"Spreading Sanatan Dharma"} gradientColor={"bg-gradient-to-tl from-[#FDEEDD] to-[#FFDCB5]"} textColor={"text-[#F18912]"} />
            </div>

          </div>

          <div className=' w-full mt-20 max-w-screen-xl'>
            <div className=' w-full   flex items-start gap-5 flex-col'>
              <h2 className=' text-4xl font-bold'>What devotees Say about Sri Mandir Puja ?</h2>
              <p className=' text-2xl  text-gray-500'>Reviews and Ratings from our customers who performed online Puja with us.</p>
            </div>
            <div className=' w-full'>
              <GetRating/>
            </div>

          </div>
    </div>
  )
}

export default PujaPage