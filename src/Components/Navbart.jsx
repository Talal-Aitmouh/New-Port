"use client"
import { Link } from "react-router-dom" // or "next/link" if using Next.js

export default function Navbar() {
  return (
    <div className="flex gap-12 text-sm tracking-wider justify-center items-center w-full">
            <Link to={"/"} className="hover:text-gray-300 transition-colors">HOME</Link>
            <Link to={"/projects"} className="hover:text-gray-300 transition-colors">PROJECTS</Link>
            <Link to={"/about"} className="hover:text-gray-300 transition-colors">ABOUT</Link>
            <Link to={"/contact"} className="hover:text-gray-300 transition-colors">CONTACT</Link>
          </div>
  )
}
