"use client"
import { ChevronDown, Mail, Github, Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function About() {
  const [skillsOpen, setSkillsOpen] = useState(true)
  const [experienceOpen, setExperienceOpen] = useState(false)
  const [educationOpen, setEducationOpen] = useState(false)
  const [certificationOpen, setCertificationOpen] = useState(false)

  return (
    <div className="grid grid-cols-9 grid-rows-7 gap-4 h-full bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Passionate about text */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="col-start-1 col-end-5 row-start-1 row-end-5 flex flex-col justify-center bg-[#0D1215] rounded-2xl p-6"
      >
        <h1 className="text-3xl lg:text-4xl font-light leading-tight">
          Passionate about
          <br />
          creating digital
          <br />
          experiences that
          <br />
          <span className="text-gray-400">make a difference</span>
        </h1>
      </motion.div>

      {/* Hire me section */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="col-start-5 col-end-7 row-start-1 row-end-5 flex flex-col items-center justify-center bg-[#0D1215] rounded-2xl p-6 gap-6"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#D9D9D9] hover:bg-gray-300 text-black rounded-full px-8 py-3 font-medium transition-all duration-300"
        >
          Hire me
        </motion.button>

        <div className="flex gap-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Github className="w-5 h-5" />
          </motion.a>
        </div>
      </motion.div>

      {/* Skills section */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="col-start-7 col-end-10 row-start-1 row-end-10 bg-[#0D1215] rounded-2xl p-6 overflow-y-auto"
      >
        <div className="space-y-4">
          {/* Skills */}
          <div>
            <button
              onClick={() => setSkillsOpen(!skillsOpen)}
              className="flex items-center justify-between w-full text-left text-lg font-medium mb-3"
            >
              Skills
              <motion.div animate={{ rotate: skillsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            <motion.div
              initial={false}
              animate={{ height: skillsOpen ? "auto" : 0, opacity: skillsOpen ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="text-sm text-gray-300 space-y-1 ml-4">
                <li>• JavaScript (ES6+), TypeScript</li>
                <li>• React.js, Next.js</li>
                <li>• Node.js, Express.js</li>
                <li>• HTML5, CSS3</li>
                <li>• Tailwind CSS, Styled Components</li>
                <li>• MySQL, REST APIs</li>
                <li>• Git, GitHub</li>
                <li>• Agile methodologies (Scrum, Kanban)</li>
              </ul>
            </motion.div>
          </div>

          {/* Experience */}
          <div>
            <button
              onClick={() => setExperienceOpen(!experienceOpen)}
              className="flex items-center justify-between w-full text-left text-lg font-medium mb-3"
            >
              Experience
              <motion.div animate={{ rotate: experienceOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            <motion.div
              initial={false}
              animate={{ height: experienceOpen ? "auto" : 0, opacity: experienceOpen ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="text-sm text-gray-300 ml-4">
                <p>Frontend Developer Experience</p>
              </div>
            </motion.div>
          </div>

          {/* Education */}
          <div>
            <button
              onClick={() => setEducationOpen(!educationOpen)}
              className="flex items-center justify-between w-full text-left text-lg font-medium mb-3"
            >
              Education
              <motion.div animate={{ rotate: educationOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            <motion.div
              initial={false}
              animate={{ height: educationOpen ? "auto" : 0, opacity: educationOpen ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="text-sm text-gray-300 ml-4">
                <p>Computer Science Background</p>
              </div>
            </motion.div>
          </div>

          {/* Certification */}
          <div>
            <button
              onClick={() => setCertificationOpen(!certificationOpen)}
              className="flex items-center justify-between w-full text-left text-lg font-medium mb-3"
            >
              Certification
              <motion.div animate={{ rotate: certificationOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            <motion.div
              initial={false}
              animate={{ height: certificationOpen ? "auto" : 0, opacity: certificationOpen ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="text-sm text-gray-300 ml-4">
                <p>Web Development Certifications</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* My name section */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="col-start-1 col-end-5 row-start-5 row-end-10 flex flex-col justify-center bg-[#0D1215] rounded-2xl p-6"
      >
        <p className="text-gray-300 text-sm leading-relaxed">
          My name is Talal Aitmouh, I am a 22-year-old Moroccan currently living in Ouarzazate, Morocco. I am available
          for freelance opportunities and open to collaboration. You can reach me by phone at +212-627319262 or via
          email at talalait234@gmail.com.
        </p>
      </motion.div>

      {/* +24 projects section */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="col-start-5 col-end-7 row-start-5 row-end-10 flex flex-col items-center justify-center bg-[#0D1215] rounded-2xl p-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 200 }}
          className="text-center"
        >
          <div className="text-6xl font-light mb-2">+24</div>
          <div className="text-lg text-gray-300">
            Completed
            <br />
            Projects
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
