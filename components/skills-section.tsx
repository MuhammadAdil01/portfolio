"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code, Figma, LayoutDashboard, Zap } from "lucide-react"

export default function SkillsSection() {
  const skills = [
    { name: "UX/IX Design", level: 90, icon: <Figma className="w-8 h-8 text-orange-500" /> },
    { name: "Frontend Development", level: 85, icon: <Code className="w-8 h-8 text-orange-500" /> },
    { name: "Product Design", level: 80, icon: <LayoutDashboard className="w-8 h-8 text-orange-500" /> },
    { name: "Performance Optimization", level: 75, icon: <Zap className="w-8 h-8 text-orange-500" /> },
  ]

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-orange-600 mb-4">My Features</h2>
        <p className="text-orange-700 max-w-2xl mx-auto mb-12">
          A snapshot of my expertise in front-end development, UI/UX design, and product building. Constantly improving to craft beautiful, responsive, and performant digital experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="border shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-left">
                  <div className="flex items-center gap-4 mb-4">
                    {skill.icon}
                    <h3 className="text-xl font-semibold text-orange-800">{skill.name}</h3>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-orange-100" />
                  <p className="text-sm text-orange-600 mt-2">Proficiency: {skill.level}%</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}