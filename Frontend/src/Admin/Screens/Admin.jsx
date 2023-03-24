// Consider these as a new App.jsx

import React from 'react'
import { Outlet, Routes, Route } from 'react-router-dom';
import Sidenav from '../Components/Sidenav';
import Unverified from '../Components/Unverified';
import Verified from '../Components/Verified';
import Profile from '../Components/Profile';
import '../Styles/Admin.css'

function Admin() {

  const user = localStorage.getItem("jwt");

  return (
    <div style={{display:'flex'}}>
        <Sidenav />
        <Routes>
          <Route path="/" element={<Unverified />} />
          <Route path="/verified" element={<Verified />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
    </div>
  )
}

export default Admin
