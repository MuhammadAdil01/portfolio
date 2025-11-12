"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left side: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-md">
            <Image
              src="/web-dev.png" 
              alt="About"
              width={500}
              height={500}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
        </motion.div>

        {/* Right side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          {/* Logo / Icon */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-500/10 flex items-center justify-center rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-7 h-7 text-orange-600"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <Badge className="bg-orange-100 text-orange-700 font-semibold text-sm px-3 py-1">
              About me
            </Badge>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-800">
            <span className="text-orange-600">ABOUT ME</span>
            <br /> <span className="text-orange-700">AS A FRONTEND DEV</span>
          </h2>

          {/* Description */}
          <Card className="border">
            <CardContent className="p-6 text-orange-600 space-y-3 leading-relaxed">
              <p>
              As a frontend developer, I'm driven by design precision and performance. I build interfaces that are both visually appealing and technically sound. I'm constantly learning new frameworks and tools to stay ahead in this fast-evolving world of web development
              </p>
              <p>
                I believe a great website isn't just about how it looks — it's about how it feels. I focus on building smooth, dynamic, and visually appealing interfaces that make users enjoy every click. With a strong foundation in React, Next.js Tailwind CSS, and TypeScript , I bring creativity and precision to every line of code.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}