// Consider these as a new App.jsx

import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Sidenav from '../Components/Sidenav';
import Services from '../Components/Services';
import Bookings from '../Components/Bookings';
import Pricing from '../Components/Pricing';
import Profile from '../Components/Profile';

function Admin() {

  const user = localStorage.getItem("jwt");

  return (
    <div style={{display:'flex'}}>
        <Sidenav />
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
    </div>
  )
}

export default Admin
