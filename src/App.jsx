"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/projects"
import Portfolio from "./pages/Portfolio"
import Jika from "./Components/Mainport"
import Luka from "./Components/Projects"
import Test3 from "./Components/Contact"
import Simba from "./Components/About"


function App() {
  return (
    
    <Router>
      <div className="h-screen">
        <Routes>
          <Route path="/" element={<Jika />} />
          <Route path="/projects" element={<Luka />} />
          <Route path="/about" element={<Simba />} />
          <Route path="/contact" element={<Test3 />} />
        </Routes>
      </div>
    </Router>

    // <Jika />
  )
}

export default App
