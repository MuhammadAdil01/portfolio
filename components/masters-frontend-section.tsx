"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MastersFrontendSection() {
  const expertiseAreas = [
    {
      title: "React & Advanced Patterns",
      description: "Deep expertise in React hooks, server components, and architectural patterns",
      icon: "⚛️",
    },
    {
      title: "Performance Optimization",
      description: "Mastering code splitting, lazy loading, and rendering optimizations",
      icon: "⚡",
    },
    {
      title: "TypeScript Excellence",
      description: "Advanced type systems, generics, and type-safe architectures",
      icon: "🎯",
    },
    {
      title: "State Management",
      description: "Expert-level patterns with Context, Redux, and modern solutions",
      icon: "🔄",
    },
  ]

  const masterProjects = [
    {
      name: "Design System",
      role: "Architect & Lead Developer",
      impact: "Built scalable component library used across 50+ projects",
    },
    {
      name: "Performance Audit",
      role: "Performance Engineer",
      impact: "Improved Core Web Vitals by 65% for enterprise platform",
    },
    {
      name: "Frontend Architecture",
      role: "Tech Lead",
      impact: "Designed and implemented micro-frontend infrastructure",
    },
  ]

  return (
    <section className="min-h-screen relative overflow-hidden py-24 px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="inline-block mb-4 px-4 py-2 rounded-full border border-orange-200">
            <span className="text-sm font-semibold text-orange-700">Expert Level</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Masters Frontend
            </span>
          </h2>
          <p className="text-xl text-orange-600 max-w-2xl leading-relaxed">
            Specialized expertise in building scalable, performant, and maintainable frontend architectures. Deep
            mastery across modern React ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl border hover:border-orange-300 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-orange-800 mb-3">{area.title}</h3>
                <p className="text-orange-600">{area.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-orange-800 mb-8">Featured Mastery Projects</h3>
          <div className="space-y-4">
            {masterProjects.map((project, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg border border-orange-100 hover:border-orange-300 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-lg font-bold text-orange-800 group-hover:text-orange-600 transition-colors">
                      {project.name}
                    </h4>
                    <p className="text-sm text-orange-600 font-medium">{project.role}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-orange-300 group-hover:text-orange-600 transition-all group-hover:translate-x-1" />
                </div>
                <p className="text-orange-600">{project.impact}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-12 bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Collaborate?</h3>
          <p className="text-lg text-orange-50 mb-8 max-w-2xl mx-auto">
            Let's discuss how my frontend expertise can elevate your next project.
          </p>
          <Button className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-3 h-auto text-base">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  )
}