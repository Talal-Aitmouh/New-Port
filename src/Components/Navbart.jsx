"use client"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `transition-colors ${
      isActive ? "text-[#fff] font-semibold" : "text-gray-300 hover:text-white"
    }`

  return (
    <div className="flex gap-12 text-sm tracking-wider justify-center items-center w-full">
      <NavLink to="/" className={linkClass}>HOME</NavLink>
      <NavLink to="/projects" className={linkClass}>PROJECTS</NavLink>
      <NavLink to="/about" className={linkClass}>ABOUT</NavLink>
      <NavLink to="/contact" className={linkClass}>CONTACT</NavLink>
    </div>
  )
}
