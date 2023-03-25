import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../styles/Header.css';

const images = [
  'url(https://plus.unsplash.com/premium_photo-1667511047126-59a532a27747?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGxhcHRvcCUyMGFuZCUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)',
  'url(https://images.pexels.com/photos/7245921/pexels-photo-7245921.jpeg?auto=compress&cs=tinysrgb&w=600)',
  'url(https://images.pexels.com/photos/4173363/pexels-photo-4173363.jpeg?auto=compress&cs=tinysrgb&w=400)'
];

function Header() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  const backgroundStyle = {
    backgroundImage: images[currentImageIndex]
  };

  return (
    <header style={backgroundStyle} className="card header" id='header'>
    <Navbar/>
    </header>
  );
}

export default Header;
