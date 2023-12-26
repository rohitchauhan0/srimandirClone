import React, { useState } from 'react'
import logo from "../../Assets/img_sm_logo_en_dark.svg"
import { Link } from 'react-router-dom'
import { NavLinks } from '../../Data/NavbarLink'
import { FaAngleDown } from "react-icons/fa6";
import { libraryLinks } from '../../Data/LibraryText';

const Navbar = () => {
    const [showLibrary, setshowLibrary] = useState(false)
  return (
    <div className='fixed top-0  z-[1000] w-full bg-white border-b-[1px] border-gray-200'>
        <div className=' bg-white  py-3 flex items-center justify-between  max-w-screen-xl mx-auto'>
                    <Link>
                    <img src={logo} alt="" />
                    </Link>

                <div className=' flex items-center flex-row space-x-8 text-[17px]  font-semibold  '>
                    {
                        NavLinks.map((data)=>{
                            return <Link className=' hover:text-orange-700 transition-all duration-200' to={data.path}>
                                {
                                    data.title === "Library" ? (<div className=' flex items-center gap-2 relative' onClick={()=> setshowLibrary(!showLibrary)}><p>Library</p>
                                    <FaAngleDown  />
                                    <div className={`${showLibrary ? "hidden":"visible"} absolute bg-white rounded-xl p-3 translate-y-[53%] -translate-x-[30%] border-[1px] border-gray-400 min-w-[500px] h-[500px] z-[2000] transition-all duration-200 flex flex-col gap-5`}>
                                    {
                                        libraryLinks.map((data)=>{
                                            return <div className=' flex flex-col gap-2 text-gray-400'>
                                                <h2 className=' text-black'>{data.title}</h2>
                                                <p>{data.text}</p>
                                            </div>
                                        })
                                    }

                                    </div>
                                    </div>) : (data.title)
                                }
                            </Link>
                        })
                    }
            </div>
                <div className=' flex flex-row items-center gap-2'>
                        <button className=' flex gap-2 text-[16px] rounded-lg border-[1px] border-gray-300 px-4 py-2 items-center focus:border-gray-400 focus:border-2'>
                            <p>English</p>
                            <FaAngleDown />
                        </button>
                        <button
                        className=' text-[15px] rounded-lg  px-5 py-2 bg-orange-400 text-white'>
                            Login
                        </button>
                </div>

        </div>

    </div>
  )
}

export default Navbar