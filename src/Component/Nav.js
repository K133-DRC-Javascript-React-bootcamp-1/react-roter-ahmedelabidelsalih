import React from 'react';
import './Nav.css';
import logo from "./logo.png";
import { NavLink , Link } from 'react-router-dom';
const Nav =() =>{

  return (
    <div className='nav'>
   <Link to="/Home"  className='logo' ><img src={logo} alt=""/></Link>
    <ul>
    <NavLink to="/Home" >Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/Bootcamp">Bootcamps</NavLink>
    </ul>

    </div>
  )
}

export default Nav