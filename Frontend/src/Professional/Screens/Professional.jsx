// Consider these as a new App.jsx

import React,{useEffect} from 'react'
import {Routes, Route, useNavigate } from 'react-router-dom';
import Sidenav from '../Components/Sidenav';
import Confirmed from '../Components/Confirmed';
import Appointments from '../Components/Appointments';
import Myprofession from '../Components/Myprofession';
import Profile from '../Components/Profile';
import Earning from '../Components/Earning';
import Addprof from '../Components/Addprof';

function Admin() {

  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem('profjwt')
    if(!user){
      navigate('/professionalsignin')
    }
  },[])
  return (
    <div style={{display:'flex'}}>
        <Sidenav />
        <Routes>
          <Route path="/" element={<Myprofession />} />
          <Route path="/confirmed" element={<Confirmed />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/earning" element={<Earning />} />
          <Route path="/addprof" element={<Addprof />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
    </div>
  )
}

export default Admin
