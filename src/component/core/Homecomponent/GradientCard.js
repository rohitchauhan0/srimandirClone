import React from 'react'
import icon1 from "../../../Assets/icon1.svg"

const GradientCard = ({gradient, icon, title, text, textcolor}) => {
  return (
    <div className={` ${gradient } p-6 rounded  block  space-y-3`}>
            <img src={icon} alt="" className=' rounded-full' />
            <p className={`${textcolor} mb-2 text-xl font-bold text-18 leading-19`}>{title}</p>
            <p className=' text-gray-500  text-lg font-medium leading-21'>{text}</p>
    </div>
  )
}

export default GradientCard