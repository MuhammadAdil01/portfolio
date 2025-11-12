"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Mail, User, ArrowDown } from "lucide-react"
import { useState, useEffect } from "react"

export function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const fullText = " Frontend Developer"

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    if (currentIndex < fullText.length && !isLoading) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      
      return () => clearTimeout(timeout)
    }

    return () => clearTimeout(loadingTimer)
  }, [currentIndex, fullText, isLoading])

  const scrollToNext = () => {
    const nextSection = document.getElementById('about')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Simplified Loading Animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.8 }
            }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              exit={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="w-20 h-20 border-4 border-orange-500 border-t-transparent rounded-full flex items-center justify-center"
            >
              <span className="text-orange-700 font-bold text-lg">MA</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!isLoading && (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
            {/* Left Side - Background Image with Modern Frame */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative z-10">
                {/* Modern Image Container */}
                <div className="relative">
                  {/* Main Image */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl border"
                  >
                    <div 
                      className="aspect-[4/5] bg-cover bg-center"
                      style={{
                        backgroundImage: "url('/bgroto.png')",
                      }}
                    />
                    
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-orange-500 rounded-2xl -z-10" />
                    <div className="absolute -bottom-4 -left-4 w-20 h-20 border-4 border-orange-400 rounded-2xl -z-10" />
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                    className="absolute -top-6 -left-6 w-12 h-12 border border-orange-200 rounded-2xl flex items-center justify-center"
                  >
                    <div className="w-6 h-6 border-2 border-orange-500 rounded-full" />
                  </motion.div>

                  <motion.div
                    animate={{ 
                      y: [0, 10, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1 
                    }}
                    className="absolute -bottom-6 -right-6 w-16 h-16 border border-orange-200 rounded-2xl flex items-center justify-center"
                  >
                    <div className="w-8 h-8 border-2 border-orange-400 rounded-full" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-left space-y-8"
            >
              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center gap-3 rounded-2xl border border-orange-200 px-4 py-3 shadow-sm"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <User className="text-orange-700" size={18} />
                <span className="text-sm text-orange-700 font-semibold font-serif tracking-wide">
                  Available for freelance work
                </span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif text-orange-800 leading-tight"
                >
                  Hi, I&apos;m{" "}
                  <span className="text-orange-600 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                    Muhammad Adil
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex items-center gap-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-700"
                >
                  <span className="text-orange-600 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                    {displayText}
                  </span>
                  <span className="animate-pulse text-orange-500">|</span>
                </motion.div>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-lg sm:text-xl text-orange-600 leading-relaxed max-w-2xl"
              >
                I craft elegant, responsive web experiences using{" "}
                <span className="font-semibold text-orange-600">Next.js</span>,{" "}
                <span className="font-semibold text-orange-600">React</span>,{" "}
                <span className="font-semibold text-orange-600">TypeScript</span>, and{" "}
                <span className="font-semibold text-orange-600">Tailwind CSS</span>. 
                Transforming ideas into seamless digital solutions.
              </motion.p>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex items-center gap-4"
              >
                {[
                  { icon: Github, href: "https://github.com" },
                  { icon: Linkedin, href: "https://linkedin.com" },
                  { icon: Mail, href: "mailto:adildil363@gmail.com" },
                ].map(({ icon: Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 rounded-2xl border border-orange-200 text-orange-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 shadow-sm"
                  >
                    <Icon size={22} />
                  </motion.a>
                ))}
              </motion.div>

              {/* Scroll Indicator */}
              <motion.button
                onClick={scrollToNext}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="flex items-center gap-2 text-orange-700 hover:text-orange-800 transition-colors duration-300 group"
              >
                <span className="text-sm font-medium tracking-wide">Explore More</span>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      )}
    </section>
  )
}