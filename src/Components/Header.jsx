"use client"

import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"

export default function Header() {
  const location = useLocation()

const isActive = (path) => {
  if (path === "/" && location.pathname === "/") return true
  if (path !== "/" && location.pathname.startsWith(path)) return true
  return false
}

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full flex justify-center items-center bg-[#0D1215] px-8 py-8 shadow-lg rounded-b-3xl "
    >
      <div className="flex gap-12 text-sm tracking-wider">
        <Link
          to="/projects"
          className={`transition-colors ${isActive("/projects") ? "text-white" : "text-gray-400 hover:text-gray-300"}`}
        >
          PROJECTS
        </Link>
        <Link
          to="/about"
          className={`transition-colors ${isActive("/about") ? "text-white" : "text-gray-400 hover:text-gray-300"}`}
        >
          ABOUT
        </Link>
        <Link
          to="/contact"
          className={`transition-colors ${isActive("/contact") ? "text-white" : "text-gray-400 hover:text-gray-300"}`}
        >
          CONTACT
        </Link>
      </div>
    </motion.nav>
  )
}
