import React from 'react'

const PoojaGradientCard = ({number, title, gradientColor, textColor}) => {
  return (
    <div className={`${gradientColor} h-[93px] w-[270] items-center justify-center flex flex-col gap-2 rounded-lg px-8 text-center`}>
        <p className={`${textColor} text-3xl font-bold`}>{number}</p>
        <p className={`${textColor}`}>{title}</p>
    </div>
  )
}

export default PoojaGradientCard