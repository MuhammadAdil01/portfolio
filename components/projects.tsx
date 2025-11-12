"use client"

import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory management, built with Next.js and TypeScript.",
      image: "/ecommerce-dashboard.jpg",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      links: { demo: "#", github: "#" },
    },
    {
      title: "Design System",
      description:
        "Comprehensive component library with 50+ reusable components, documentation, and Storybook integration.",
      image: "/design-system-components.jpg",
      tags: ["React", "TypeScript", "Storybook", "Tailwind"],
      links: { demo: "#", github: "#" },
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management app with real-time updates, user authentication, and dark mode support.",
      image: "/task-management-app.jpg",
      tags: ["React", "Firebase", "Tailwind CSS", "Zustand"],
      links: { demo: "#", github: "#" },
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl font-bold text-center font-serif text-orange-700 mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="relative group overflow-hidden rounded-2xl border shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-3 flex flex-col h-full hover:scale-[1.02]"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden flex-shrink-0">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Card Header */}
              <CardHeader className="flex-shrink-0 transition-all duration-500 ease-in-out group-hover:translate-y-1">
                <CardTitle className="text-xl text-orange-700 font-serif transition-colors duration-300 group-hover:text-orange-800">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-orange-600 transition-colors duration-300 group-hover:text-orange-700">
                  {project.description}
                </CardDescription>
              </CardHeader>

              {/* Card Content */}
              <CardContent className="space-y-4 flex-grow flex flex-col transition-all duration-300 group-hover:translate-y-1">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full text-orange-700 border border-orange-200 shadow-sm font-medium transition-all duration-300 hover:bg-orange-50 hover:border-orange-300 hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4 border-t border-orange-100 mt-auto transition-all duration-300 group-hover:border-orange-200">
                  <a
                    href={project.links.demo}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 hover:shadow-orange-400/40"
                  >
                    Demo
                    <ExternalLink size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <a
                    href={project.links.github}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-orange-400 text-orange-700 hover:bg-orange-50 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg hover:scale-105"
                  >
                    Code
                    <Github size={16} className="transition-transform duration-300 group-hover:scale-110" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 