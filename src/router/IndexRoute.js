import React from 'react'
import { HashRouter, Route,Routes } from 'react-router-dom'
import Login from '../views/login/Login'
import Register from '../views/register/Register'
import Home from '../views/home/Home'
export default function IndexRoute() {
  return(
    <Routes>
      <Route path='/login' element={<Login />}/>
      {/* <Route path='/login' 
      render={()=>
        localStorage.getItem("token")?<Login></Login>:<Redirect to="/register"/>
      }
      /> */}
      <Route path='/register' element={<Register />}/>
      <Route path='/home' element={<Home />}/>
    </Routes>
  )
}
