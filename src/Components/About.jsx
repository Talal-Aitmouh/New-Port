'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail,Instagram, ChevronDown, ChevronUp, BookOpen, Code, Briefcase, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import avatar from '../../public/avatar.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const ExpandableSection = ({ title, children, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left text-xl font-serif mb-2"
      >
        <span className="flex items-center">
          <Icon className="mr-2" size={20} />
          {title}
        </span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function About() {
  return (
    <div className="text-stone-200 py-6">


      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
      >
        <div className='flex flex-col gap-4 col-span-2'>
          <div className='flex flex-col md:flex-row gap-4'>
            <motion.div
              className="md:w-auto md:h-[350px] h-[100%] w-[100%]  bg-[#3A4A3A] rounded-3xl p-8 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl font-light mt-12 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Crafting seamless <em>front-end</em> experiences with a balance of design, code, and performance..
              </motion.h1>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-[#2a372f] rounded-3xl p-6 flex flex-col justify-center">
            <div className='flex gap-4'>
                <button className='bg-stone-400 text-[#3A4A3A] px-4 py-2 rounded-lg mb-8 mx-auto'>Hire me</button>
              </div>
              <div className="flex justify-center space-x-4">
                <Link to="https://github.com/Talal-Aitmouh" className="text-stone-400 hover:text-stone-200 transition-colors">
                  <Github size={24} />
                </Link>
                <Link to="https://linkedin.com/in/aitmouh" className="text-stone-400 hover:text-stone-200 transition-colors">
                  <Linkedin size={24} />
                </Link>
                <Link to="mailto:Talalait1234@gmail.com" className="text-stone-400 hover:text-stone-200 transition-colors">
                  <Mail size={24} />
                </Link>
                <Link to="mailto:Talalait1234@gmail.com" className="text-stone-400 hover:text-stone-200 transition-colors">
                  <Instagram size={24} />
                </Link>
              </div>
            </motion.div>
          </div>
          <motion.div variants={itemVariants} className="bg-[#2a372f] rounded-3xl p-6">
            <h3 className="text-2xl font-serif mb-4">About Me</h3>
            <p className="text-stone-400 mb-4">
              I’m a frontend developer with over a year of experience, passionate about building responsive and user-friendly web applications. I work with HTML, CSS, JavaScript, and React to create clean, accessible interfaces.
            </p>
            <p className="text-stone-400 mb-4">
              While I’m still growing as a developer, I’m eager to learn new technologies and contribute to meaningful projects. In my free time, I enjoy exploring coding challenges and staying up-to-date with the latest web trends.            </p>
            <p className="text-stone-400">
              When I'm not coding, you can find me exploring the latest web technologies, contributing to open-source projects, mentoring junior developers, or enjoying the vibrant tech community in New York City.
            </p>
          </motion.div>

        </div>


        <div className='flex flex-col gap-4'>
          <motion.div variants={itemVariants} className="bg-[#2a372f] rounded-3xl p-6 ">
            <ExpandableSection title="Skills" icon={Code}>
              <ul className="list-disc list-inside text-stone-400 space-y-2">
                <li>JavaScript (ES6+), TypeScript</li>
                <li>React.js, Next.js</li>
                <li>Node.js, Express.js</li>
                <li>HTML5, CSS3</li>
                <li>Tailwind CSS, Styled Components</li>
                <li>Mysql, REST APIs</li>
                <li>Git, GitHub</li>
                <li>Agile methodologies (Scrum, Kanban)</li>
              </ul>
            </ExpandableSection>

            <ExpandableSection title="Experience" icon={Briefcase}>
              <div className="space-y-4 text-stone-400">
                <div>
                  <h4 className="font-semibold">Frontend Developer - PFE.</h4>
                  <p className="text-sm">2024</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Designed and implemented a task management web application using React.js and Node.js for seamless team collaboration and task tracking.</li>
                    <li>Developed an intuitive task creation and assignment feature, allowing team leads to delegate work and set deadlines for team members.</li>
                    <li>Designed role-based access control to manage permissions for different users (Admin, Team Lead, Developer).</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Intern  Developer - TechCorp</h4>
                  <p className="text-sm">2023</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Collaborated with senior developers to integrate API endpoints, improving data fetching and state management in the application.</li>
                    <li>Developed UI components for the company’s internal admin dashboard using React.js and Tailwind CSS.</li>
                  </ul>
                </div>

              </div>
            </ExpandableSection>

            <ExpandableSection title="Education" icon={BookOpen}>
              <div className="space-y-4 text-stone-400">
              <div>
                  <h4 className="font-semibold">Digital
                  Development</h4>
                  <p>ISTA, 2023 - Present</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">UI UX Design</h4>
                  <p>GOMYCODE, 2023</p>
                </div>
              </div>
            </ExpandableSection>

            <ExpandableSection title="Certifications" icon={Award}>
              <ul className="list-disc list-inside text-stone-400 space-y-2">
                <li>Computer Basic</li>
                <li>Google Cloud Certified - Professional Cloud Developer</li>
                <li>MongoDB Certified Developer Associate</li>
                <li>Python - Advanced</li>
              </ul>
            </ExpandableSection>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2 bg-[#e0d6c8] text-[#1a2721] rounded-3xl p-6">
            <h3 className="text-2xl font-serif mb-4">Let's Connect</h3>
            <p className="mb-4">
              I'm always open to new opportunities, collaborations, or just a friendly chat about web development and design. Whether you have a project in mind or want to discuss the latest trends in frontend development, I'd love to hear from you!
            </p>
            <Link
              to="/port/contact"
              className="inline-block bg-[#1a2721] text-stone-200 px-6 py-3 rounded-full hover:bg-[#2a372f] transition-colors"
            >
              Contact me
            </Link>
          </motion.div>
        </div>



      </motion.div>
    </div>
  );
}
