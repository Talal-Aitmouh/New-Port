"use client"
import { ArrowUpRight, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"


export default function Portfolio() {
  const projects = [
  { name: "Hero", image: "../../public/hero.png", hasImage: false },
  { name: "FleckNest", image: "../../public/flecknest.png", hasImage: true, demo: "https://flecknest.netlify.app/" },
  { name: "SuniFy", image: "/sun.png", hasImage: true, demo: "https://sunify.netlify.app/" },
  { name: "Sane", image: "../../public/medusa.png", hasImage: true, demo: "https://sanemedusa.netlify.app/" },
]

  const [visibleImages, setVisibleImages] = useState(projects.map(() => false))

  const toggleImageVisibility = (index) => {
    setVisibleImages((prev) => {
      const newVisibleImages = [...prev]
      newVisibleImages[index] = !newVisibleImages[index]
      return newVisibleImages
    })
  }

  return (
    <div className=" p-4 bg-[#0A0A0A]">
    <div className="grid grid-cols-9 grid-rows-7 gap-4 h-full">
      {/* Hero text */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="col-start-1 col-end-5 row-start-1 row-end-5 flex flex-col justify-center bg-[#0D1215] rounded-3xl p-8"
      >
        <h1 className="text-4xl lg:text-5xl font-inria leading-tight">
          Crafting
          <br />
          seamless digi
          <br />
          tal experiences
          <br />
          <span className="text-gray-400">
            through elegant
            <br />
            code
            <br />
            and intuitive design
          </span>
          <span className="text-white">..</span>
        </h1>
      </motion.div>

      {/* Profile image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="col-start-5 col-end-7 row-start-1 row-end-5 flex items-center justify-center"
      >
        <img
          src="/lo.png"
          alt="Profile"
          className="w-full h-full object-cover rounded-3xl"
        />
      </motion.div>

      {/* Projects - Fixed height with scroll */}
     <div className="col-start-7 col-end-10 row-start-1 row-end-7 bg-[#0D1215] rounded-3xl">
  <div className="h-full overflow-y-auto custom-scrollbar p-2">
    {projects.map((project, index) => (
      <motion.div
        key={project.name}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className={`group ${index !== 0 ? "border-t border-gray-700/40" : ""}`}
      >
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center cursor-pointer">
            <h3
              className="text-lg text-white"
              onClick={() => toggleImageVisibility(index)}
            >
              {project.name}
            </h3>
            {project.demo && (
              <motion.div whileHover={{ rotate: 45 }} transition={{ duration: 0.2 }}>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="w-5 h-5 text-gray-300 cursor-pointer" />
                </a>
              </motion.div>
            )}
          </div>

          {/* Expandable Image */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: visibleImages[index] ? "auto" : 0,
              opacity: visibleImages[index] ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {project.hasImage && (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-md"
              />
            )}
          </motion.div>
        </div>
      </motion.div>
    ))}
  </div>
</div>


      {/* Summary */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="col-start-1 col-end-4 row-start-5 row-end-8 flex flex-col justify-center gap-4 mx-auto bg-[#0D1215] rounded-3xl p-4"
      >
        <p className="text-gray-300 text-sm leading-relaxed">
          I am a frontend developer passionate about merging innovative technology with user-centric design. Based in
          Brooklyn, I build engaging digital experiences that reflect a commitment to both functionality and style.
        </p>
        <div className="flex items-center">
          <ArrowDown className="w-4 h-4 text-gray-400" />
        </div>
      </motion.div>

      {/* Contact me */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="col-start-4 col-end-7 row-start-5 row-end-8 flex items-center mx-auto bg-[#232935] rounded-3xl"
      >
        <div className="rounded-2xl p-6 w-full">
          <h2 className="text-xl font-light mb-4">Let's Connect</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Open to new opportunities, collaborations, or just a chat about web development and design. Always happy to
            connect and discuss ideas!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D9D9D9] hover:bg-[#1B1B1B] text-[#0D1215] hover:text-[#D9D9D9] transition-all duration-500 rounded-full px-6 py-2"
          >
            Contact me
          </motion.button>
        </div>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="col-start-7 col-end-10 row-start-7 row-end-8 flex items-center justify-center bg-[#0D1215] rounded-3xl"
      >
        <div className="flex justify-center items-center gap-6 text-xs text-gray-400 w-full">
          <a href="#" className="hover:text-white transition-colors">
            INSTAGRAM
          </a>
          <a href="#" className="hover:text-white transition-colors">
            TWITTER
          </a>
          <a href="#" className="hover:text-white transition-colors">
            LINKEDIN
          </a>
        </div>
      </motion.div>
    </div>
    </div>  
  )
}
