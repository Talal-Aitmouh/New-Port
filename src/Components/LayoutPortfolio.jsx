import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, Outlet } from 'react-router-dom';


const Portfolio = () => {
  return (
    <AnimatePresence>
      <div className=" w-full p-0 md:px-16 bg-black text-[#D4C5B9] font-serif overflow-y-auto scroll-bar h-screen ">
  <motion.header
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="p-4 md:p-6 mx-auto rounded-3xl bg-[#3A4A3A] hidden md:grid"
  >
    <nav className="flex justify-between items-center">
      <Link to="/">
      <motion.a
        href="#"
        className="text-xl italic"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        TALAL Ait ' mouh
      </motion.a>
      </Link>
      
      <div className="space-x-6 flex text-sm">
        {['ABOUT', 'PROJECTS', 'CONTACT'].map((item, index) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link to={`/${item.toLowerCase()}`} className="hover:opacity-70">
              {item}
            </Link>
          </motion.div>
        ))}
      </div>
    </nav>
  </motion.header>
  
  {/* Main Content */}
  <div className=" ">
    <Outlet />
  </div>
</div>

    </AnimatePresence>

  );
};

export default Portfolio;