// Consider these as a new App.jsx

import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Sidenav from '../Components/Sidenav';
import Confirmed from '../Components/Confirmed';
import Appointments from '../Components/Appointments';
import Myprofession from '../Components/Myprofession';
import Profile from '../Components/Profile';

function Admin() {

  const user = localStorage.getItem("jwt");

  return (
    <div style={{display:'flex'}}>
        <Sidenav />
        <Routes>
          <Route path="/" element={<Myprofession />} />
          <Route path="/confirmed" element={<Confirmed />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
    </div>
  )
}

export default Admin
