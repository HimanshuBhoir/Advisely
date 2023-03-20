import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <h1 className='logo'>Advisely</h1>
      <ul className='nav' type='none'>
        <li><Link to = "/" className='link'>Home</Link></li>
        <li><Link to = "/services" className='link'>Services</Link></li>
        <li><Link to = "/about" className='link'>Pricing</Link></li>
        <li><Link to = "/about" className='link'>About</Link></li>
        <li><button className='btn'>Signin</button></li>
      </ul>
    </nav>
  )
}

// make the routes in app.js

export default Navbar
