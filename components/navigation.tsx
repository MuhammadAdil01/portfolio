"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X, HandMetal } from "lucide-react"
import Themetoggle from "./theme-toggle";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <nav 
      className="sticky top-0 z-50 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 shadow-[0_4px_10px_rgba(249,115,22,0.15)] border-b border-orange-200"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="#" 
            className="flex items-center space-x-2"
            onClick={handleLinkClick}
          >
            <HandMetal className="text-white" size={24} />
            <span className="text-xl font-bold text-white drop-shadow-sm">
              Portfolio
            </span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Themetoggle/>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-semibold text-white/90 hover:text-white px-4 py-2 relative group transition-all duration-300"
                >
                  {item.name}
                  {/* Hover Line Effect */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white hover:text-orange-100 p-2 rounded-lg" 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-orange-300/40 py-4 space-y-2 bg-gradient-to-b from-orange-50 to-white">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 font-semibold text-orange-700 hover:text-orange-800 hover:bg-orange-100 rounded-lg mx-2 relative group transition-all duration-300"
                onClick={handleLinkClick}
              >
                {item.name}
                {/* Mobile Hover Line Effect */}
                <span className="absolute bottom-2 left-4 right-4 h-0.5 bg-orange-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            ))}            
          </div>
        )}
      </div>
    </nav>
  )
}