import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../styles/Header.css';

const images = [
  'url(https://images.pexels.com/photos/4050336/pexels-photo-4050336.jpeg?auto=compress&cs=tinysrgb&w=400)',
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
    <header style={backgroundStyle} className="header">
      <Navbar />
      <h1>Welcome to my website!</h1>
    </header>
  );
}

export default Header;
