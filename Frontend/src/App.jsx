import Home from './Home/Home'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from './Home/Components/Services'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Home />} />,
          <Route path = "/services" element={<Services />} />,
          <Route path = "/about" element={<Home />} />,
          <Route path = "/consumer" element={<Home />} />,
          <Route path = "/professional" element={<Home />} />,
          <Route path = "*" element={<h1>Page Not Found</h1>} />,
        </Routes>
      </BrowserRouter>
  )
}

export default App
