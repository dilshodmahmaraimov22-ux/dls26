import React from 'react'
import Layout from './Components/Layout/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/HomePages/Home'
import Service from './Pages/Servicepages/Service'
import Akk from './Pages/AkkPages/Akk'

const App = () => {
  return (
    <>
    <BrowserRouter>
                  <Routes>
                         <Route element={<Layout/>}>
                               <Route path='/' element={<Home/>}/>
                               <Route path='/service' element={<Service/>}/>
                               <Route path='/akk' element={<Akk/>}/>
                         </Route>
                  </Routes>
    </BrowserRouter>
    </>
  )
}

export default App