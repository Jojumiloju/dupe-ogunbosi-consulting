import React from 'react'
import './NavBar.css'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/DP logo.png'


const NavBar = () => {
  const location = useLocation();

  return (
    <nav>
          <div><a href="/"><img style={{width: '5rem'}} src={logo} alt="Dupe Ogunbosi Consulting logo" /></a></div>
          <div className='links'>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
            <Link to="/properties" className={location.pathname === "/properties" ? "active" : ""}>Properties</Link>
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
            <Link to='/listings' className={location.pathname === "/listings" ? "active" : ""}>Search</Link>
            <Link to='/contact' className={location.pathname === "/contact" ? "active_icon" : ""}><FontAwesomeIcon icon={faCircleUser} /></Link>            
        </div>
    </nav>
  )
}

export default NavBar