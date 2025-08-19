"use client"
import { Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { FaSquareBehance } from "react-icons/fa6"
import Navbar from "./Navbart"
import { useState } from "react"

export default function Projects() {
  const projects = [
    {
      id: 1,
      image: "/mvmt.png",
      title: "Chronos",
      description: "A single-page responsive website for MVMT watches featuring a clean minimalist design and a product carousel.",
      technologies: ["React.js", "Tailwind CSS"],
      github: "https://github.com/yourusername/mvmt",
      demo: "https://mvmt-demo.com",
      tirbo: "/cap.png"
    },
    {
      id: 2,
      image: "/porsche.png",
      title: "911 Carrera",
      description: "A 3D car showcase for Porsche 911 Carrera with smooth animations and interactive controls.",
      technologies: ["Three.js", "React", "Vite"],
      github: "https://github.com/yourusername/porsche",
      demo: "https://porsche-demo.com",
      tirbo: "/cap2.png"
    },
    {
      id: 3,
      image: "/task.png",
      title: "Task Manager",
      description: "A full-stack task management app with CRUD operations and drag-and-drop task organization.",
      technologies: ["React", "Redux Toolkit", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://task-manager-demo.com",
      tirbo: "/cap3.png"
    },
    {
      id: 4,
      image: "/sun.png",
      title: "Weather App",
      description: "A weather application that provides real-time weather updates and forecasts using a third-party API.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/yourusername/nature-portfolio",
      demo: "https://nature-portfolio.com",
      tirbo: "/cap4.png"
    },
    {
      id: 5,
      image: "/exam.png",
      title: "Exam Craft",
      description: "a comprehensive exam management system that allows users to create, manage, and take exams online.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/yourusername/nature-portfolio",
      demo: "https://nature-portfolio.com",
      tirbo: "/cap5.png"
    },
  ]

  // track the selected project
  const [selectedProject, setSelectedProject] = useState(projects[0])

  return (
    <div className="h-screen bg-[#0A0A0A] text-white relative overflow-hidden">
      <div className="grid grid-cols-[repeat(9,1fr)] grid-rows-[repeat(8,1fr)] gap-y-[10px] gap-x-[10px] h-full p-4">
        
        {/* 1. Header */}
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="col-start-1 col-end-10 row-start-1 row-end-2 flex justify-center items-center bg-[#0D1215] rounded-2xl"
        >
          <Navbar />
        </motion.nav>

        {/* 2. Hero text */}
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

        {/* 3. Project details */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="col-start-7 col-end-10 row-start-2 row-end-8 bg-[#0D1215] rounded-2xl p-2 overflow-y-auto custom-scrollbar"
        >
          {selectedProject && (
            <div className="space-y-6">
              {/* Project showcase image */}
              <div className="rounded-lg p-4">
                <img
                  src={selectedProject.tirbo}
                  alt={selectedProject.title}
                  className="w-full max-h-64 object-cover rounded"
                />
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2">{selectedProject.title}</h2>
                <p className="text-gray-300 text-sm mb-4">{selectedProject.description}</p>

                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Technologies Used</h3>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {selectedProject.technologies.map((tech, index) => (
                      <li key={index}>• {tech}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  {selectedProject.github && (
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full px-4 py-2 text-sm transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Github
                    </motion.a>
                  )}
                  {selectedProject.demo && (
                    <motion.a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full px-4 py-2 text-sm transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* 4. Images section */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="col-start-1 col-end-7 row-start-3 row-end-8 bg-[#0D1215] rounded-2xl p-6"
        >
          <div className="grid grid-cols-3 gap-4 h-full">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedProject(project)} // 👈 update details on click
                className="relative group cursor-pointer rounded-lg overflow-hidden"
              >
                <img
                  src={project.image}
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

        {/* 5. Call to action */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="col-start-1 col-end-10 row-start-8 row-end-9 flex items-center justify-between bg-[#0D1215] rounded-2xl p-6"
        >
          <h2 className="text-2xl font-light">Like my work? See more on</h2>

          <div className="flex gap-4">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full px-6 py-3 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              Github
            </motion.a>
            <motion.a
              href="https://www.behance.net/yourusername"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full px-6 py-3 transition-all duration-300"
            >
              <FaSquareBehance className="w-5 h-5" />
              Behance
            </motion.a>
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #374151 #1f2937;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #374151;
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #4b5563;
        }
      `}</style>
    </div>
  )
}
