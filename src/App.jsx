"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"

import About from "./pages/About"

import Contact from "./pages/Contact"
import Projects from "./pages/projects"
import Portfolio from "./pages/Portfolio"

function App() {
  return (
    <Router>
      <div className="h-screen p-4 bg-[#0A0A0A]">
        <Header />
        <div className="container mx-auto  pt-4">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
      </div>
    </Router>

    // <Portfolio />
  )
}

export default App
