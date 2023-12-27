import React from 'react'
import "./App.css"
import Navbar from './component/common/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import MyProfile from './component/core/Dashboard/Profile/MyProfile'
import Dashboard from './Pages/Dashboard'
import CreatePooja from './component/core/Dashboard/Puja/CreatePooja'
import CreateBenefits from './component/core/Dashboard/Benefits/CreateBenefits'

const App = () => {
  return (
    <div >
    <Navbar/>
   <Routes>
    <Route path='/' element={<Homepage/>}/>


   <Route path='/dashboard' element={<Dashboard/>}>
    <Route path='/dashboard/my-profile' element={<MyProfile/>} />
    <Route path='/dashboard/create-puja' element={<CreatePooja/>} />
    <Route path='/dashboard/create-benifits' element={<CreateBenefits/>} />
   </Route>



   </Routes>


    </div>
  )
}

export default App