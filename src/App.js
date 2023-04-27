import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signin from './Signin/Signin'
import Signup from './Signup/Signup'
import Home from "./pages/Home/Home"
export default function App(){
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Signin/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/Home" element={<Home/>}/>



    </Routes>
    </BrowserRouter>
    </div>

  )
}
