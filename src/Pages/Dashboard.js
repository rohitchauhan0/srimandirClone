import React from 'react'
import Sidebar from '../component/core/Dashboard/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className=' relative flex h-screen'>
        <Sidebar/>
        <div className=' min-h-screen flex-1 overflow-auto'>
        <div className=' mx-auto max-w-[1000px] py-20'>
            <Outlet/>
        </div>

        </div>

    </div>
  )
}

export default Dashboard