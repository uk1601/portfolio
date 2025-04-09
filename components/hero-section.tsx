"use client"

import { useState, useEffect, useRef } from "react"
import { useTheme } from "@/components/theme-provider"
import { personalInfo } from "@/config/portfolio-config"
import { Button } from "@/components/ui/button"
import { Download, ChevronDown } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

/**
 * Hero Section Component
 *
 * A full-screen introduction section with:
 * - Animated typewriter effect for the name
 * - Professional title
 * - Brief tagline
 * - Resume download button
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

  // Typewriter effect for the name
  useEffect(() => {
    const text = personalInfo.name
    let currentIndex = 0
    let timer: NodeJS.Timeout

    if (isTyping) {
      timer = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(timer)
          setIsTyping(false)
        }
      }, 100)
    }

    return () => clearInterval(timer)
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
          className="space-y-6"
        >
          {/* Name with Typewriter Effect */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="inline-block min-h-[1.5em]">{displayText}</span>
            <span
              className={`inline-block w-1 h-12 md:h-16 bg-primary ml-1 ${isTyping ? "animate-blink" : "opacity-0"}`}
            ></span>
          </h1>

          {/* Professional Title with Fade In */}
          <motion.h2
            className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300"
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

          {/* Resume Button with Fade In */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Button
              size="lg"
              className="rounded-full px-6"
              style={{
                backgroundColor: colors.primary,
                color: "white",
              }}
              asChild
            >
              <a href={personalInfo.resumeUrl} download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
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
          onClick={scrollToAbout}
          whileHover={{
            y: 2,
            scale: 1.05,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
        >
          {/* More visible text label */}
          <motion.p
            className="text-xs font-medium text-gray-200 dark:text-gray-300 mb-2 tracking-[0.15em] uppercase"
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
            {/* Outer glow for better visibility */}
            <motion.div
              className="absolute -inset-1.5 rounded-full bg-blue-500/20 dark:bg-blue-400/30 blur-md -z-10"
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
              className="w-6 h-10 rounded-full border-2 border-white/50 dark:border-gray-400/70 backdrop-blur-sm flex items-center justify-center overflow-hidden"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.1)",
              }}
            >
              <motion.div
                className="w-1.5 h-2.5 rounded-full bg-white dark:bg-gray-200"
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

          {/* More visible chevron */}
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
            <ChevronDown className="h-4 w-4 text-white/90 dark:text-gray-300/90" strokeWidth={2} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

