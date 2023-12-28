import React, { useState } from 'react'
import { DASHBOARD_LINK } from '../../../Data/DashboardLinks'
import { useSelector } from 'react-redux'
import { Link, NavLink, matchPath, useLocation } from 'react-router-dom';


const Sidebar = () => {
    const {user} = useSelector((state)=> state.profile)
    const [CheckIndex, setCheckIndex] = useState(0)
    const location = useLocation()
    const matchRoute = (path)=>{
        return matchPath({path:path}, location.pathname)
    }
    
  return (
    <div className=' py-20 min-w-[220px] flex border-r border-gray-500 flex-col gap-2  px-4  '>
    <div className=' flex flex-col gap-2 text-md '>
        {
            DASHBOARD_LINK?.map((data, index)=>{
                matchRoute(data.path)
                if(data?.accountType && user?.accountType !== data?.accountType) return null
                return <Link to={data.path}  key={index}
                onClick={()=> setCheckIndex(index)}
                className={`${matchRoute(data.path ) ? " text-orange-500":" text-black"} flex items-center gap-3`}
                ><div className={`${matchRoute(data.path )?" bg-orange-500":" bg-white"} w-[2px] h-full `}></div><p>{data.title}</p></Link>
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