// Consider these as a new App.jsx

import React,{useEffect} from 'react'
import {Routes, Route, useNavigate } from 'react-router-dom';
import Sidenav from '../Components/Sidenav';
import Services from '../Components/Services';
import Bookings from '../Components/Bookings';
import Pricing from '../Components/Pricing';
import Profile from '../Components/Profile';
import Single from '../Components/Single';

function Admin() {

  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem('conjwt')
    if(!user){
      navigate('/consumersignin')
    }
  },[])

  return (
    <div style={{display:'flex'}}>
        <Sidenav />
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/service/:id" element={<Single />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
    </div>
  )
}

export default Admin
