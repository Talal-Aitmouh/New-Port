"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Portfolio from "./Components/Mainport"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import About from "./Components/About"


function App() {
  return (
    
    <Router>
      <div className="h-screen">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>

    // <Jika />
  )
}

export default App
