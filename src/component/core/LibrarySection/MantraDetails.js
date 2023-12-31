import React from 'react'

const MantraDetails = ({mantra, mantraKaNaam, mantraKaArth,mantraKaLaabh}) => {
  return (
   <>
    <p className=' text-xl font-semibold'>{mantraKaNaam}</p>
    <pre className=' text-lg text-gray-500 font-semibold' style={{whiteSpace:"pre-wrap"}}>{mantra}</pre>
    <p className=' font-bold text-gray-50'>मंत्र का अर्थ:</p>
    <pre className='  text-gray-500 font-semibold' style={{whiteSpace:"pre-wrap"}}>{mantraKaArth}</pre>
     <p className=' font-bold text-gray-50'>मंत्र का लाभ:</p>
    <pre className='  text-gray-500 font-semibold' style={{whiteSpace:"pre-wrap"}}>{mantraKaLaabh}</pre>

   </>
  )
}

export default MantraDetails