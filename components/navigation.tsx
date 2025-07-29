"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <Phone className="h-8 w-8 text-[#ff5dde] transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
              <span className="text-xl font-bold text-gray-900 transition-all duration-300 group-hover:text-[#ff5dde]">
                Mitchjolly Solutions
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/features", label: "Features" },
              { href: "/pricing", label: "Pricing" },
              { href: "/about", label: "About" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-[#ff5dde] transition-all duration-300 relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff5dde] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <a
              href="https://salescentri.com/get-started/free-trial"
              className="cta-button animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Free Trial
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#ff5dde] transition-all duration-300 hover:scale-110"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`h-6 w-6 absolute transition-all duration-300 ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
                />
                <X
                  className={`h-6 w-6 absolute transition-all duration-300 ${isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md shadow-lg">
          {[
            { href: "/", label: "Home" },
            { href: "/features", label: "Features" },
            { href: "/pricing", label: "Pricing" },
            { href: "/about", label: "About" },
            { href: "/blog", label: "Blog" },
            { href: "/contact", label: "Contact" },
          ].map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 text-gray-700 hover:text-[#ff5dde] transition-all duration-300 hover:translate-x-2 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://salescentri.com/get-started/free-trial"
            className="block mx-3 my-2 cta-button text-center animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </nav>
  )
}
