'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react'
import { Link } from 'react-router-dom' // Use react-router-dom

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

export default function Component() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
    alert('Thank you for your message! I will get back to you soon.')
  }

  return (
    <div className=" text-stone-200 p-6 mx-auto gap-4 flex flex-col  w-full">

      <motion.div
        className="md:w-full md:h-auto w-[100%] bg-[#3A4A3A] rounded-3xl p-2 relative flex justify-center items-center"
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
          Ready to take your project to <em>the next level? </em> Whether you're looking for a collaborative partner or a unique design solution, I'm here to help. Let’s get in touch.
        </motion.h1>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >


        <motion.div variants={itemVariants} className="bg-[#2a372f] rounded-3xl p-6">
          <h3 className="text-2xl font-serif mb-6">Get in Touch</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-400 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-[#1a2721] border border-[#4a574f] rounded-md focus:outline-none focus:ring-2 focus:ring-[#e0d6c8] text-stone-200"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-400 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-[#1a2721] border border-[#4a574f] rounded-md focus:outline-none focus:ring-2 focus:ring-[#e0d6c8] text-stone-200"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-400 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-3 py-2 bg-[#1a2721] border border-[#4a574f] rounded-md focus:outline-none focus:ring-2 focus:ring-[#e0d6c8] text-stone-200"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#e0d6c8] text-[#1a2721] px-6 py-3 rounded-full hover:bg-[#d0c6b8] transition-colors flex items-center justify-center"
            >
              <Send className="mr-2" size={20} />
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-[#2a372f] rounded-3xl p-6">
          <h3 className="text-2xl font-serif mb-6">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="mr-4 text-[#e0d6c8]" size={24} />
              <a href="mailto:Talalait1234@gmail.com" className="hover:text-[#e0d6c8] transition-colors">Talalait1234@gmail.com</a>
            </div>
            <div className="flex items-center">
              <Phone className="mr-4 text-[#e0d6c8]" size={24} />
              <a href="tel:+212-673-197262" className="hover:text-[#e0d6c8] transition-colors">+212-673-197262</a>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-4 text-[#e0d6c8]" size={24} />
              <span>Ouarazazate, Morocco</span>
            </div>
          </div>

          <h3 className="text-2xl font-serif mt-8 mb-6">Connect with Me</h3>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" className="text-stone-400 hover:text-[#e0d6c8] transition-colors">
              <Github size={32} />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="text-stone-400 hover:text-[#e0d6c8] transition-colors">
              <Linkedin size={32} />
            </a>
            <a href="mailto:talal@example.com" className="text-stone-400 hover:text-[#e0d6c8] transition-colors">
              <Mail size={32} />
            </a>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-serif mb-4">Freelance Available</h3>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
