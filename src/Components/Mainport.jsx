import React, { useState } from 'react'
import { ArrowUpRight } from 'lucide-react';
import avatar from '../../public/avatar.jpg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Mainport() {
    const projects = [
        {
          name: 'Hero',
          image: '../../public/hero.png',
          hasImage: false
        },
        {
          name: 'FleckNest',
          image: '../../public/flecknest.png',
          hasImage: true,
          demo: "https://flecknest.netlify.app/",
        },
        {
          name: 'SuniFy',
          image: '../../public/sun.png',
          hasImage: true,
          demo: "https://sunify.netlify.app/",
        },
        {
          name: 'Sane',
          image: '../../public/medusa.png',
          hasImage: true,
          demo: "https://sanemedusa.netlify.app/",
        }
      ]
      const [visibleImages, setVisibleImages] = useState(projects.map(() => false));
      const toggleImageVisibility = (index) => {
        setVisibleImages((prev) => {
            const newVisibleImages = [...prev];
            newVisibleImages[index] = !newVisibleImages[index];
            return newVisibleImages;
        });
    };
  return (
    <>
      <div className=' p-4 flex flex-col justify-start gap-6'>
          <div className=' flex justify-center'>
            <motion.div
              className="flex flex-col md:flex-row sm:flex-col justify-center items-start gap-4 md:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className="md:w-auto md:h-[400px] h-[50%] w-[90%] mx-auto bg-[#3A4A3A] rounded-3xl p-8 relative"
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
                  Crafting seamless <em>digital experiences</em> through elegant code and intuitive design..
                </motion.h1>
              </motion.div>
              <motion.div
                className="col-span-3 row-span-2  rounded-3xl overflow-hidden mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <img
                  src={avatar}
                  alt="Profile"
                  className="w-[650px] h-[400px] object-cover"
                />
              </motion.div>

            </motion.div>
          </div>
          <div className=' flex flex-col md:flex-row justify-center gap-4 md:gap-6'>
            <motion.div
              className="md:w-[300px] md:h-[230px] h-[50%] w-[90%] mx-auto bg-[#3A4A3A] rounded-3xl p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.p
                className="text-sm leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                I am a frontend developer passionate about merging innovative technology with user-centric design. Based in Brooklyn, I build engaging digital experiences that reflect a commitment to both functionality and style.
              </motion.p>
            </motion.div>
            <motion.div
              className="w-[90%] mx-auto bg-[#D4C5B9] text-[#2F3B2F] rounded-3xl p-8 flex justify-between items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.h2
                className="text-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Contact me
              </motion.h2>
              <motion.div
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.2 }}
                className="flex items-center" // Ensures the icon stays vertically centered
              >
                <Link to="/CONTACT">
                <ArrowUpRight className="w-6 h-6 cursor-pointer" /></Link>
                
              </motion.div>
            </motion.div>

          </div>
        </div>
        <div className='flex justify-center p-4 md:w-full md:h-auto w-full'>
        <motion.div
          className="bg-[#3A4A3A]  rounded-3xl overflow-hidden overflow-y-auto scroll-bar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
           {projects.map((project, index) => (
                <motion.div
                    key={project.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`group ${index !== 0 ? 'border-t border-[#FFB4B4]/20' : ''}`}
                >
                    <div className="p-6 space-y-4">
                        <div className="flex justify-between items-center cursor-pointer" >
                            <h3 className="text-xl text-[#D4C5B9]" onClick={() => toggleImageVisibility(index)}>{project.name}</h3>
                            <motion.div
                                whileHover={{ rotate: 45 }}
                                transition={{ duration: 0.2 }}
                            >
                              <Link to={project.demo}>
                                <ArrowUpRight className="w-5 h-5 text-[#D4C5B9] cursor-pointer" />
                                </Link>
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                                height: visibleImages[index] ? 'auto' : 0,
                                opacity: visibleImages[index] ? 1 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-48 object-cover"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
        </div>
        
    </>
  )
}

export default Mainport
