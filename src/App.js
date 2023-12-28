import React from 'react'
import "./App.css"
import Navbar from './component/common/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import MyProfile from './component/core/Dashboard/Profile/MyProfile'
import Dashboard from './Pages/Dashboard'
import CreatePooja from './component/core/Dashboard/Puja/CreatePooja'
import CreateBenefits from './component/core/Dashboard/Benefits/CreateBenefits'
import MyPuja from './component/core/Dashboard/MyPuja/MyPuja'
import CreatePackage from './component/core/Dashboard/Package/CreatePackage'
import MyPackage from './component/core/Dashboard/Package/MyPackage'
import CreateItem from './component/core/Dashboard/Items/CreateItem'
import MyItems from './component/core/Dashboard/Items/MyItems'
import MyBenefits from './component/core/Dashboard/Benefits/MyBenefits'

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
    <Route path='/dashboard/my-pooja' element={<MyPuja/>} />
    <Route path='/dashboard/create-package' element={<CreatePackage/>} />
    <Route path='/dashboard/my-package' element={<MyPackage/>} />
    <Route path='/dashboard/offering-items' element={<CreateItem/>} />
    <Route path='/dashboard/my-items' element={<MyItems/>} />
    <Route path='/dashboard/my-benifits' element={<MyBenefits/>} />
   </Route>



   </Routes>


    </div>
  )
}

export default App