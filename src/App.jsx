"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"

import About from "./pages/About"
import Portfolio from "./Components/Test"
import Contact from "./pages/Contact"
import Projects from "./pages/projects"

function App() {
  return (
    // <Router>
    //   <div className="min-h-screen bg-[#0A0A0A]">
    //     <Header />
    //     <Routes>
    //       <Route path="/" element={<Portfolio />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/projects" element={<Projects />} />
    //       <Route path="/contact" element={<Contact />} />
    //     </Routes>
    //   </div>
    // </Router>

    <Portfolio />
  )
}

export default App
