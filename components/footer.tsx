"use client"

import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden font-serif">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft Floating Clouds */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`cloud-${i}`}
            className="absolute rounded-full bg-orange-200 opacity-30"
            style={{
              width: `${Math.random() * 120 + 60}px`,
              height: `${Math.random() * 40 + 20}px`,
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(8px)',
            }}
            animate={{
              x: [0, -100, -200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
          />
        ))}

        {/* Birds Animation */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`bird-${i}`}
            className="absolute text-orange-300 opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50 + 10}%`,
            }}
            animate={{
              x: [-100, 1200],
              y: [0, -20, 0, 20, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 12l-4-4v3h-5c-1 0-2-1-2-2V2h-2v7c0 1-1 2-2 2H2l-2 2 4 4v-3h5c1 0 2 1 2 2v7h2v-7c0-1 1-2 2-2h5v3l4-4z" />
            </svg>
          </motion.div>
        ))}

        {/* Sun Glow */}
        <motion.div
          className="absolute top-8 right-12 w-16 h-16 rounded-full bg-orange-300 shadow-lg opacity-20"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-orange-300 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Footer Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl py-20 px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 mb-16"
          >
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg border border-orange-300">
                  <span className="font-bold text-lg text-orange-700">MA</span>
                </div>
                <h3 className="font-bold text-3xl text-orange-800">
                  Muhammad Adil
                </h3>
              </motion.div>
              <p className="text-orange-700 leading-relaxed text-lg max-w-md mb-6">
                Crafting exceptional digital experiences with modern technologies,
                clean code, and creative solutions that bring ideas to life.
              </p>
              <div className="flex items-center gap-4 text-orange-600">
                <Mail size={18} />
                <span className="font-medium">adildil363@gmail.com</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.h4
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-bold text-orange-800 mb-6 text-xl"
              >
                Navigation
              </motion.h4>
              <ul className="space-y-4">
                {["About", "Projects", "Skills", "Contact"].map((link, i) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="group flex items-center gap-2 text-orange-700 hover:text-orange-900 transition-all duration-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-orange-600" />
                      <span className="font-medium hover:translate-x-1 transition-transform duration-300">
                        {link}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <motion.h4
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-bold text-orange-800 mb-6 text-xl"
              >
                Let's Connect
              </motion.h4>
              <p className="text-orange-700 mb-6 leading-relaxed">
                Follow me on social media and let's build something amazing together.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com" },
                  { icon: Linkedin, href: "https://linkedin.com" },
                  { icon: Twitter, href: "https://twitter.com" },
                ].map(({ icon: Icon, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl text-orange-700 border border-orange-300 hover:bg-orange-50 shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <Icon
                      size={20}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <div className="border-t border-orange-200 pt-8 text-center">
            <p className="text-orange-700 text-sm">
              © {new Date().getFullYear()} Muhammad Adil. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}