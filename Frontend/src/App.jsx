import Home from './Home/Home'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from './Home/Components/Services'
import Admin from './Admin/Screens/Admin'
import ASignin from './Admin/Screens/Asignin'
import Professional from './Professional/Screens/Professional'
import Consumer from './Consumer/Screens/Consumer'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/services" element={<Services />} />
          <Route path = "/about" element={<Home />} />
          <Route path="/adminsignin" element={<ASignin />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path = "/consumer/*" element={<Consumer />} />
          <Route path = "/professional/*" element={<Professional />} />
          <Route path = "*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App