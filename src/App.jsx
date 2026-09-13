import React from 'react'
import layout from './Components/Layout/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
                  <Routes>
                         <Route>
                               <Route/>
                               <Route/>
                               <Route/>
                         </Route>
                  </Routes>
    </BrowserRouter>
    </>
  )
}

export default App