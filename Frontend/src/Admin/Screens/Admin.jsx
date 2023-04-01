// Consider these as a new App.jsx

import React, {useEffect} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Sidenav from '../Components/Sidenav';
import Unverified from '../Components/Unverified';
import Verified from '../Components/Verified';
import Profile from '../Components/Profile';
import '../Styles/Admin.css'

function Admin() {

  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem('admjwt')
    if(!user){
      navigate('/adminsignin')
    }
  },[])

  return (
    <div className="admin">
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
