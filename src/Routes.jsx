import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import App from './App'
import Navbar from './components/Navbar'
const Routers = () => {
  return (<>
    {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<App/>} />
      
         </Routes>
         </>
    
  )
}

export default Routers
