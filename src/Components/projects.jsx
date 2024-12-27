'use client'

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

import '../index.css';

const projects = [
  {
    title: "Hero",
    video: '/hero.mp4',
    description: "A web-based hotel management system built with PHP and Bootstrap. It allows for easy management of reservations, guest details, room availability, and billing with a responsive and user-friendly interface.",
    github: "https://github.com/username/musea",
  },
  {
    title: "FleckNest",
    video: '/flecknest.mp4',
    description: "A fast, responsive movie streaming app built with React and Vite. It allows users to browse, search, and stream movies seamlessly with an optimized, modern interface for a smooth viewing experience.",
    github: "https://github.com/username/elara",
    demo: "https://notesflecknest.netlify.app/",
  },
  {
    title: "SuniFy",
    video: '/sunify.mp4',
    description: "A weather forecasting app built with React, Vite, and Axios. It allows users to check real-time weather updates, including temperature, humidity, and forecasts, with a sleek and responsive interface.",
    github: "https://github.com/username/verve",
    demo: "https://sunify.netlify.app/",
  },
  {
    title: "Sane",
    video: '/sane.mp4', 
    description: "A sleek, responsive audio player built with React and Vite. It allows users to play, pause, skip, and control volume with an intuitive interface for a smooth music listening experience.",
    github: "https://github.com/username/zephyr",
    demo: "https://sanemedusa.netlify.app/",
  },
];

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
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Projectsport() {
  const handleMouseEnter = (video) => {
    video.play();
  };

  const handleMouseLeave = (video) => {
    video.pause();
  };

  return (
    <div className="text-stone-200 p-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-4"
      >
        <motion.div
          className="md:w-full md:h-auto w-[100%] bg-[#3A4A3A] rounded-3xl p-8 relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.h1
            className="text-4xl md:text-4xl font-light my-12 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Crafting seamless <em>digital experiences</em> through elegant code and intuitive design..
          </motion.h1>
        </motion.div>

        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            className="bg-[#2a372f] md:w-[440px] rounded-3xl p-6 hover:bg-[#324438] transition-colors group"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-serif">{project.title}</h3>
            </div>

            {project.video && (
              <div className="mb-4 rounded-xl overflow-hidden">
                <video
                  className="w-full object-cover"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => handleMouseEnter(e.target)}
                  onMouseLeave={(e) => handleMouseLeave(e.target)}
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            <p className="text-stone-400 mb-6">{project.description}</p>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-400 hover:text-stone-200 transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-stone-400 hover:text-stone-200 transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
