import React, { useEffect, useState } from 'react'
import logo from "../../Assets/img_sm_logo_en_dark.svg"
import { Link, matchPath, useLocation, useNavigate } from 'react-router-dom'
import { NavLinks } from '../../Data/NavbarLink'
import { FaAngleDown } from "react-icons/fa6";
import { libraryLinks } from '../../Data/LibraryText';
import Template from '../core/Auth/Template';
import { useDispatch, useSelector } from 'react-redux';
import { apiConnector } from '../../Services/ApiConnector';
import { authEndPoints } from '../../Services/AllApi';
import { MdDashboard } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { logout } from '../../Services/Operations/AuthOper';
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
    const [showLibrary, setshowLibrary] = useState(true)
    const [modal, setmodal] = useState(false)
    const {token} = useSelector((state)=> state.auth)
    const {GET_USER_BY_ID_API}= authEndPoints
    const [userData, setuserData] = useState("")
    const naviagte = useNavigate()
    const [showModal, setshowModal] = useState(false)
    const dispatch = useDispatch()
    const [showNavbar, setshowNavbar] = useState(false)
    useEffect(() => {
        const getUserDetail = async()=>{
            try {
                const response = await apiConnector("POST", GET_USER_BY_ID_API, null, {Authorization:`Bearer ${token}`})
                setuserData(response.data.data)
            } catch (error) {
             console.log(error)   
            }
        }
        getUserDetail()
    }, [])

    const location = useLocation()

    const matchRoute = (route)=>{
        return matchPath({path:route}, location.pathname)
    }
    
  return (
   <>
     <div className={`${ showNavbar ? " w-full h-screen flex items-center justify-center" :""} fixed top-0  z-[1000] w-full  bg-white border-b-[1px] border-gray-200`}>
        <div className={`${showNavbar ? "flex-col gap-6" :""}  flex items-center  flex-row  justify-between py-3  max-w-screen-xl mx-auto lg:px-0 px-5`}>
                    <Link>
                    <img src={logo} alt="" />
                    </Link>

               <div className={`${showNavbar ? " block" : " hidden"} lg:block`}>
               <div className={`${showNavbar ? " flex-col space-y-6 " : "space-x-8 "} flex items-center  text-[17px]  font-semibold`}>
                    {
                        NavLinks.map((data)=>{
                            return <Link className={` ${matchRoute(`${data.path}`) ? " text-orange-500":" text-black"} hover:text-orange-700 transition-all duration-200`} to={data.path} key={data.id}
                            onClick={()=> setshowNavbar(false)}
                            >
                                {
                                    data.title === "Library" ? (<div className=' flex items-center gap-2 relative' onClick={()=> setshowLibrary(!showLibrary)}><p>Library</p>
                                    <FaAngleDown  />
                                    <div className={`${showLibrary ? "hidden":"visible"} absolute bg-white rounded-xl p-3 translate-y-[53%] -translate-x-[30%] border-[1px] border-gray-400 min-w-[500px] h-[500px] z-[2000] transition-all duration-200 flex flex-col gap-5`}>
                                    {
                                        libraryLinks.map((data, index)=>{
                                            return <div className=' flex flex-col gap-2 text-gray-400' key={index}>
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
               </div>
                <div className=' flex flex-row items-center gap-2'>
                       {
                        token === null ?  (<button
                        className=' text-[15px] rounded-lg  px-5 py-2 bg-orange-400 text-white'
                            onClick={()=>{
                                setmodal(true)
                            }}
                        >
                            Login
                        </button> ): (<div className=' relative'>
                            <img src={userData.image} alt="" className=' w-[40px] h-[40px] rounded-full object-cover cursor-pointer border border-gray-400' onClick={()=> setshowModal(!showModal)}  />
                            <div className={` ${showModal ? "block":"hidden"} absolute  p-2 border border-gray-400 rounded-lg bg-white -translate-x-8 translate-y-3 flex items-center justify-between flex-col cursor-pointer`}
                            onClick={()=> setshowModal(false)} 
                            >
                                <div className=' flex items-center justify-between w-full gap-3'
                                onClick={()=> naviagte("/dashboard/my-profile")}
                                >
                                <MdDashboard />
                                <p>Dashboard</p>
                                </div>
                                <hr className=' w-full h-[1px] bg-gray-500' />
                                <div className=' flex items-center justify-between w-full gap-3'
                                onClick={()=> dispatch(logout(naviagte, dispatch))}
                                >
                                <RiLogoutBoxRLine />
                                <p>Logout</p>
                                </div>
                            </div>
                        </div>)
                       }
                <div className=' lg:hidden block'>
                {
                
                    showNavbar ? <RxCross2 className=' cursor-pointer text-lg'
                    onClick={()=> setshowNavbar(false)}
                     /> : <IoMenuOutline className=' cursor-pointer text-lg' onClick={()=> setshowNavbar(true)} />
                }
                </div>
                </div>

        </div>

    </div>
    {
        modal && <Template cancelHandler={()=> setmodal(null)} />
    }
   </>
  )
}

export default Navbar