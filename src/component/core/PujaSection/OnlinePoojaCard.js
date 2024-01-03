import React from 'react'

const OnlinePoojaCard = ({image, title, desc}) => {
  return (
    <div className=' flex gap-3 items-start'>
        <img src={image} alt="" />
        <div className=' flex flex-col gap-4'>
            <p className=' text-xl font-bold'>{title}</p>
            <p className=' text-lg  text-gray-500'>{desc}</p>
        </div>
    </div>
  )
}

export default OnlinePoojaCard