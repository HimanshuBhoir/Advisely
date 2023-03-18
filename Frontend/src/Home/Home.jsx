import React from 'react'
import Header from './Components/Header'
import Logs from './Components/Logs'
import Services from './Components/Services'
import Profdesc from './Components/Profdesc'
import Professional from './Components/Professional'
import Footer from './Components/Footer'

function Home() {
  return (
    <div>
      <Header />
      <Logs />
      <Services />
      <Profdesc />
      <Professional />
      <Footer />
    </div>
  )
}

export default Home
