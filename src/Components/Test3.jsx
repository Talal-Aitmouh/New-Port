"use client"
import { Github, Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <div className="h-screen bg-[#0A0A0A] text-white relative overflow-hidden">
      <div className="grid grid-cols-[repeat(9,1fr)] grid-rows-[repeat(8,1fr)] gap-y-[10px] gap-x-[10px] h-full p-4">
        {/* 1. Header - row 1-2, col 1-10 */}
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

        {/* 2. Ready to take... - row 2-4, col 1-10 */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="col-start-1 col-end-10 row-start-2 row-end-4 flex flex-col justify-center bg-[#0D1215] rounded-2xl p-8"
        >
          <h1 className="text-3xl lg:text-4xl font-light leading-relaxed">
            Ready to take your project to the next level? Whether you're looking for a
            <br />
            collaborative partner or a unique design solution, I'm here to help. Let's get in
            <br />
            touch.
          </h1>
        </motion.div>

        {/* 3. Contact Information - col 1-5, row 4-7 */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="col-start-1 col-end-5 row-start-4 row-end-7 bg-[#0D1215] rounded-2xl p-6"
        >
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>

          <div className="space-y-4">
            <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 text-gray-300">
              <Mail className="w-5 h-5" />
              <span>Talalait234@gmail.com</span>
            </motion.div>

            <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 text-gray-300">
              <Phone className="w-5 h-5" />
              <span>+212-673-197262</span>
            </motion.div>

            <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 text-gray-300">
              <MapPin className="w-5 h-5" />
              <span>Ouarazazate, Morocco</span>
            </motion.div>
          </div>

          <div className="flex gap-4 mt-8">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Github, label: "GitHub" },
              { icon: Linkedin, label: "LinkedIn" },
            ].map((social, index) => (
              <motion.button
                key={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* 4. Get in touch form - col 5-10, row 4-9 */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="col-start-5 col-end-10 row-start-4 row-end-9 bg-[#0D1215] rounded-2xl p-6"
        >
          <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                className="w-full bg-[#1A1F2E] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-500 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                className="w-full bg-[#1A1F2E] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                rows={6}
                className="w-full h-20 bg-[#1A1F2E] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-500 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* 5. Testimonials - col 1-5, row 7-9 */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="col-start-1 col-end-5 row-start-7 row-end-9 bg-[#0D1215] rounded-2xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-lg font-semibold">A</span>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-1">Anass benjaloune</h3>
              <p className="text-gray-400 text-sm mb-4">Product Manager of Nexadev</p>

              <blockquote className="text-gray-300 leading-relaxed">
                "Talal transformed our complex app into an intuitive masterpiece. Our user engagement jumped 40%
                overnight. Exceptional work."
              </blockquote>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
