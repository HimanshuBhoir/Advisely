import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Services from './Services';
import About from './Professional';


function Navbar() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Header} />
      <Route path="/about" component={Services} />
    </BrowserRouter>
  )
}

// make the routes in app.js

export default Navbar
