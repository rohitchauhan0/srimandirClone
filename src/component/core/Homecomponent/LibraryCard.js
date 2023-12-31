import React from 'react'
import { Link } from 'react-router-dom'

const LibraryCard = ({image, title, description, path}) => {
  return (
    <div className=' flex flex-col'>
        <img src={image} alt="" className=' h-[192px] w-full' />
        <div className='flex flex-col h-full justify-between pt-7 gap-5 md:pl-0'>
        <p className=' text-xl font-bold'>{title}</p>
        <p className=' text-lg text-gray-500 '>{description}</p>
        <Link className=' text-orange-500 underline' to={path}>
            Read all
        </Link>

        </div>
    </div>
  )
}

export default LibraryCard