import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./Bootcamp.css"
function Bootcamp() {
  return (
    <div className="container"> 
    <h1>Kodluyoruz Bootcamps</h1>
    <nav>
    <NavLink to="Bootcampb" >Backend</NavLink>
    <NavLink to="Bootcampf">Frontend</NavLink>
    </nav>
    <Outlet />
    </div>
  )
}

export default Bootcamp