import React from 'react'
import "./App.css"
import Navbar from './component/common/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'

const App = () => {
  return (
    <div >
    <Navbar/>
   <Routes>
    <Route path='/' element={<Homepage/>}/>
   </Routes>

    </div>
  )
}

export default App