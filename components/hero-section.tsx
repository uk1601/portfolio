"use client"

import { useState, useEffect, useRef } from "react"
import { useTheme } from "@/components/theme-provider"
import { personalInfo } from "@/config"
import { ChevronDown } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

/**
 * Hero Section Component
 *
 * A full-screen introduction section with:
 * - Circular profile photo
 * - Smooth animated typewriter effect for the name
 * - Professional title
 * - Brief tagline
 * - Animated scroll indicator
 * - Apple-style background animations
 */
export default function HeroSection() {
  const { colors, theme } = useTheme()
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  // Scroll animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  // Transform values based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  // Improved smoother typewriter effect for the name
  useEffect(() => {
    const text = personalInfo.name
    let currentIndex = 0

    const typeNextChar = () => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex))
        currentIndex++

        // Randomize the typing speed slightly for a more natural effect
        const randomDelay = Math.random() * 30 + 50 // Between 50-80ms
        setTimeout(typeNextChar, randomDelay)
      } else {
        setIsTyping(false)
      }
    }

    if (isTyping) {
      typeNextChar()
    }

    return () => {
      // No cleanup needed as we're using setTimeout
    }
  }, [isTyping])

  // Scroll to About section with smooth animation
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
      style={{ backgroundColor: colors.heroBackground }}
    >
      {/* Apple-style Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              theme === "light"
                ? "radial-gradient(circle, rgba(0, 102, 204, 0.04) 0%, rgba(0, 102, 204, 0.01) 70%, transparent 100%)"
                : "radial-gradient(circle, rgba(10, 132, 255, 0.08) 0%, rgba(10, 132, 255, 0.03) 70%, transparent 100%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              theme === "light"
                ? "radial-gradient(circle, rgba(52, 199, 89, 0.04) 0%, rgba(52, 199, 89, 0.01) 70%, transparent 100%)"
                : "radial-gradient(circle, rgba(48, 209, 88, 0.08) 0%, rgba(48, 209, 88, 0.03) 70%, transparent 100%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.7, 1, 0.7],
            x: [0, -30, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </div>

      {/* Content with scroll-based animations */}
      <motion.div className="container mx-auto px-4 z-10 text-center" style={{ opacity, y, scale }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-3"
        >
          {/* Profile Photo */}
          <motion.div
            className="mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.2,
            }}
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uk.JPG-8j3fIDgOloRIXBr0hgJod2lRkZAXju.jpeg"
                alt={personalInfo.name}
                fill
                className="object-cover object-center scale-110"
                priority
              />
            </div>
          </motion.div>

          {/* Name with Smoother Typewriter Effect */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="inline-block min-h-[1.5em]">{displayText}</span>
            <span
              className={`inline-block w-1 h-12 md:h-16 bg-primary ml-1 ${isTyping ? "animate-blink" : "opacity-0"}`}
            ></span>
          </h1>

          {/* Professional Title with Fade In */}
          <motion.h2
            className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 -mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {personalInfo.title}
          </motion.h2>

          {/* Tagline with Fade In */}
          <motion.p
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 dark:text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {personalInfo.tagline}
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Refined Apple-style Scroll Indicator - Enhanced Visibility */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          className="cursor-pointer flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: 1.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          onClick={() => {
            // Replace the existing scrollToAbout function call with this smoother scroll implementation
            const aboutSection = document.getElementById("about")
            if (aboutSection) {
              window.scrollTo({
                top: aboutSection.offsetTop,
                behavior: "smooth",
              })
              // Add a small delay to make the scroll feel more deliberate
              setTimeout(() => {
                window.scrollTo({
                  top: aboutSection.offsetTop,
                  behavior: "smooth",
                })
              }, 50)
            }
          }}
          whileHover={{
            y: 2,
            scale: 1.05,
            transition: {
              duration: 0.5, // Slower hover animation
              ease: "easeOut",
            },
          }}
        >
          {/* More visible text label with improved contrast */}
          <motion.p
            className={`text-xs font-medium mb-2 tracking-[0.15em] uppercase ${
              theme === "light" ? "text-gray-700 dark:text-gray-300" : "text-gray-200 dark:text-gray-300"
            }`}
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            Discover
          </motion.p>

          {/* Enhanced scroll indicator with better visibility */}
          <motion.div
            className="relative"
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            {/* Outer glow for better visibility - enhanced for light theme */}
            <motion.div
              className={`absolute -inset-1.5 rounded-full blur-md -z-10 ${
                theme === "light" ? "bg-blue-500/40" : "bg-blue-400/30"
              }`}
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />

            <motion.div
              className={`w-6 h-10 rounded-full flex items-center justify-center overflow-hidden ${
                theme === "light"
                  ? "border-2 border-gray-600/70 bg-white/80"
                  : "border-2 border-gray-400/70 backdrop-blur-sm"
              }`}
              style={{
                boxShadow:
                  theme === "light"
                    ? "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.1)"
                    : "0 4px 20px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.1)",
              }}
            >
              <motion.div
                className={`w-1.5 h-2.5 rounded-full ${theme === "light" ? "bg-gray-700" : "bg-gray-200"}`}
                animate={{
                  y: [0, 4, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

          {/* More visible chevron with improved contrast for light theme */}
          <motion.div
            className="mt-2"
            animate={{
              y: [0, 3, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 0.3,
            }}
          >
            <ChevronDown
              className={`h-4 w-4 ${theme === "light" ? "text-gray-700" : "text-gray-300/90"}`}
              strokeWidth={2}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
