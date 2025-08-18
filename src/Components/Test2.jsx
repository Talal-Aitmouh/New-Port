"use client"
import { Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { FaSquareBehance } from "react-icons/fa6"

export default function Projects() {
  const projects = [
    {
      id: 1,
      image: "/mvmt.png",
      title: "Chronos",
    },
    {
      id: 2,
      image: "/porsche.png",
      title: "911 Carrera",
    },
    {
      id: 3,
      image: "/task.png",
      title: "Task Manager",
    },
    {
      id: 4,
      image: "/sun.png",
      title: "Nature Portfolio",
    },
  ]

  return (
    <div className="h-screen bg-[#0A0A0A] text-white relative overflow-hidden px-8">
      <div className="grid grid-cols-[repeat(9,1fr)] grid-rows-[repeat(8,1fr)] gap-y-[10px] gap-x-[10px] h-full py-8">
        {/* 1. Header - row 1, col 1-10 */}
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="col-start-1 col-end-10 row-start-1 row-end-2 flex justify-center items-center bg-[#0D1215] rounded-2xl"
        >
          <div className="flex gap-12 text-sm tracking-wider">
            <a href="#" className="hover:text-gray-300 transition-colors">
              PROJECTS
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              ABOUT
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              CONTACT
            </a>
          </div>
        </motion.nav>

        {/* 2. Hero text - col 1-7, row 2-4 */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="col-start-1 col-end-7 row-start-2 row-end-3 flex flex-col justify-center bg-[#0D1215] rounded-2xl p-8"
        >
          <h1 className="text-3xl lg:text-4xl font-light leading-tight">
            Where design meets development to craft
            <br />
            <span className="text-gray-400">seamless digital experiences.</span>
          </h1>
        </motion.div>

        {/* 3. Project details - col 7-10, row 2-8 */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="col-start-7 col-end-10 row-start-2 row-end-8 bg-[#0D1215] rounded-2xl p-2 overflow-y-auto"
        >
          <div className="space-y-6">
            {/* Project showcase image */}
            <div className=" rounded-lg p-4">
              <img
                src="/cap.png"
                alt="MVMT Watch Website"
                className="w-full h-48 object-cover rounded"
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">MVMT Watch Website</h2>
              <p className="text-gray-300 text-sm mb-4">
                A single-page responsive website for MVMT watches featuring a clean minimalist design and a product
                carousel.
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Technologies Used</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• React.js</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full px-4 py-2 text-sm transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  Github
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full px-4 py-2 text-sm transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. Images section - col 1-7, row 4-8 */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="col-start-1 col-end-7 row-start-3 row-end-8 bg-[#0D1215] rounded-2xl p-6"
        >
          <div className="grid grid-cols-2 gap-4 h-full">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer rounded-lg overflow-hidden"
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">{project.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 5. Call to action - col 1-10, row 8-9 */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="col-start-1 col-end-10 row-start-8 row-end-9 flex items-center justify-between bg-[#0D1215] rounded-2xl p-6"
        >
          <h2 className="text-2xl font-light">Like my work? See more on</h2>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full px-6 py-3 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              Github
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full px-6 py-3 transition-all duration-300"
            >
              <FaSquareBehance className="w-5 h-5" />
              Behance
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
