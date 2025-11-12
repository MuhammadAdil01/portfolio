"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function Skills() {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills")
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.75) {
          setInView(true)
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = [
    { name: "REACT,NEXT.JS", level: 90 },
    { name: "TAILWIND CSS,SHADCN", level: 90 },
    { name: "JAVASCRIPT,TYPESCRIPT", level: 85 },
    { name: "UX/IX DESIGN", level: 85 },
    { name: "GIT,GITHUB", level: 80 },
    { name: "VERCEL,NETLIFY", level: 80 },
  ]

  return (
    <section
      id="skills"
      className="relative py-20 px-6 sm:px-8 lg:px-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text + Circular Chart */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-orange-700 font-serif">
            Skills & Expertise
          </h2>
          <p className="text-orange-600 leading-relaxed max-w-md">
            I'm a passionate Frontend Developer with hands-on experience in
            modern web technologies. I focus on building responsive,
            user-friendly, and visually appealing interfaces with clean code
            and creative design.
          </p>

          {/* Circular Chart */}
          <div className="relative w-64 h-64 mx-auto">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Background circle */}
              <circle
                cx="100"
                cy="100"
                r="80"
                stroke="#fdece2"
                strokeWidth="10"
                fill="none"
              />
              {/* UI Design */}
              <motion.circle
                cx="100"
                cy="100"
                r="80"
                stroke="#fb923c"
                strokeWidth="10"
                fill="none"
                strokeDasharray="502"
                strokeDashoffset={inView ? 502 - (502 * 90) / 100 : 502}
                strokeLinecap="round"
                initial={false}
                animate={{ strokeDashoffset: inView ? 502 - (502 * 90) / 100 : 502 }}
                transition={{ duration: 1.2, delay: 0.2 }}
              />
              {/* Label */}
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy=".3em"
                className="fill-orange-700 text-xl font-semibold"
              >
                UX / Web Dev
              </text>
            </svg>
          </div>
        </div>

        {/* Right Side: Skill Bars */}
        <Card className="border shadow-md">
          <CardContent className="p-8 space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm font-medium text-orange-700 mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-3 bg-orange-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: inView ? `${skill.level}%` : 0 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}