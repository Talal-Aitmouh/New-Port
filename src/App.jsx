import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Mainport from './Components/Mainport'
import Projectsport from './Components/projects'
import Portfolio from './Components/LayoutPortfolio'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} >
        <Route path="ABOUT" element={<About />} />
        <Route path="CONTACT" element={<Contact />} />
        <Route path="/" element={<Mainport />} />
        <Route path="PROJECTS" element={<Projectsport />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
