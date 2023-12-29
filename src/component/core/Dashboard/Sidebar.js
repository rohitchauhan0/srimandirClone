import React, { useState } from 'react'
import { DASHBOARD_LINK } from '../../../Data/DashboardLinks'
import { useSelector } from 'react-redux'
import { Link, matchPath, useLocation } from 'react-router-dom';
import { MdOutlineMenu } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';


const Sidebar = () => {
    const {user} = useSelector((state)=> state.profile)
    const location = useLocation()
    const matchRoute = (path)=>{
        return matchPath({path:path}, location.pathname)
    }
    const [showDas, setshowDas] = useState(false)
  return (
    <div className={`${showDas ? " -translate-x-[100%] lg:translate-x-0" : ""} py-20   min-w-[220px] bg-white flex border-r border-gray-500 flex-col gap-2  px-4 lg:static  absolute left-0 h-full`}>
    <div className=' flex flex-col gap-2 text-md relative  '>
   <div className=' absolute -right-12 lg:hidden block'>
   {
        showDas ? <MdOutlineMenu   className=' text-2xl cursor-pointer' onClick={()=> setshowDas(false)} /> :  <RxCross2 onClick={()=> setshowDas(true)} className=' text-2xl cursor-pointer' />
   
    }

   </div>
        {
            DASHBOARD_LINK?.map((data, index)=>{
                matchRoute(data.path)
                if(data?.accountType && user?.accountType !== data?.accountType) return null
                return <Link to={data.path}  key={index}
                className={`${matchRoute(data.path ) ? " text-orange-500":" text-black"} flex items-center gap-3`}
                ><div className={`${matchRoute(data.path )?" bg-orange-500":" bg-white"} w-[2px] h-full `}></div><p
                onClick={()=> setshowDas(true)}
                >{data.title}</p></Link>
            })
        }
    </div>
    <hr className='w-full h-[2px] bg-gray-600' />
        <Link className={`${matchRoute("/dashboard/settings" ) ? " text-orange-500":" text-black"} flex items-center gap-3`} to={"/dashboard/settings"}>
        <div className={`${matchRoute("/dashboard/settings" )?" bg-orange-500":" bg-white"} w-[2px] h-full `}></div>
            Settings
        </Link>
    </div>
  )
}

export default Sidebar