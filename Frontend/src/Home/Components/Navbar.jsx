import React from 'react'
// import { Link } from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'
import { useNavigate } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {

  const navigate = useNavigate()

  return (
    <nav className='card navbar' >
      <h1 style={{fontSize:'2rem', color:'white', padding:'5px 10px'}}>Advisely</h1>
      <ul className='nav' type='none'>
        <li><Link to = "#header" className='link'>Home</Link></li>
        <li><Link to = "#logs" className='link'>Logs</Link></li>
        <li><Link to = "#services" className='link'>Services</Link></li>
        <li><Link to = "#professional" className='link'>Professional</Link></li>
        <li><Link to = "#footer" className='link'>About</Link></li>
        <li><button className='navbtn' onClick={()=>navigate('/consumersignin')}>Signin</button></li>
      </ul>
    </nav>
  )
}

// make the routes in app.js

export default Navbar
