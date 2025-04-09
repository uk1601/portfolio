"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/components/theme-provider"
import { personalInfo } from "@/config/portfolio-config"
import { Moon, Sun, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

/**
 * Navbar Component
 *
 * A fixed navigation bar that stays at the top of the page.
 * Includes the portfolio owner's name, navigation links, and theme toggle.
 * Transforms into a mobile menu on smaller screens.
 */
export default function Navbar() {
  const { theme, toggleTheme, colors } = useTheme()
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      style={{
        backgroundColor: scrolled
          ? theme === "light"
            ? "rgba(255, 255, 255, 0.8)"
            : "rgba(0, 0, 0, 0.8)"
          : "transparent",
      }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Name */}
        <div className="text-xl font-semibold cursor-pointer" onClick={() => scrollToSection("hero")}>
          {personalInfo.name}
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center space-x-8">
            <button onClick={() => scrollToSection("about")} className="text-sm hover:text-primary transition-colors">
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-sm hover:text-primary transition-colors">
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm hover:text-primary transition-colors">
              Contact
            </button>
            <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
              <a href={personalInfo.resumeUrl} download>
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Resume</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme" className="mr-2">
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <div className="space-y-1.5">
                <span
                  className={`block h-0.5 w-6 bg-current transform transition duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-current transition duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-current transform transition duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </Button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div
          className="absolute top-full left-0 w-full bg-white dark:bg-black shadow-md py-4 px-4 flex flex-col space-y-4 transition-all duration-300"
          style={{
            backgroundColor: theme === "light" ? colors.background : colors.background,
          }}
        >
          <button
            onClick={() => scrollToSection("about")}
            className="text-left py-2 hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-left py-2 hover:text-primary transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-left py-2 hover:text-primary transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-left py-2 hover:text-primary transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-left py-2 hover:text-primary transition-colors"
          >
            Contact
          </button>
          <a
            href={personalInfo.resumeUrl}
            download
            className="flex items-center py-2 hover:text-primary transition-colors"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Resume
          </a>
        </div>
      )}
    </nav>
  )
}

