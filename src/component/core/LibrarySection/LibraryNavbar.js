import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const LibraryNavbar = ({sectionTitle, subsectionName}) => {
  return (
    <div
    className=' fixed top-16 z-[200] bg-pink-100 border-t border-gray-500 w-full left-0 lg:block hidden'
    >
    <div className=' max-w-screen-xl mx-auto p-2 flex flex-row gap-3 items-center'>
        <Link to={"/"} className=' text-lg hover:text-orange-500'>Home</Link>
        <IoIosArrowForward className=' text-orange-500 font-bold' />
        <Link to={"/articles"} className=' text-lg hover:text-orange-500'>Articles</Link>
        <IoIosArrowForward className=' text-orange-500 font-bold' />
        <p  className=' text-lg'>{sectionTitle}</p>
        <IoIosArrowForward className=' text-orange-500 font-bold' />
        <p  className=' text-lg'>{subsectionName}</p>
    </div>

    </div>
  )
}

export default LibraryNavbar