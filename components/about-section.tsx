"use client"

import { useRef } from "react"
import { useTheme } from "@/components/theme-provider"
import { personalInfo } from "@/config/portfolio-config"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

/**
 * About Section Component
 *
 * Displays a concise summary about the portfolio owner.
 * Features clean typography, animated entrance, and smooth transitions.
 */
export default function AboutSection() {
  const { colors, theme } = useTheme()
  const sectionRef = useRef<HTMLElement>(null)

  // Update the scroll animation configuration to create a more seamless transition from the hero section
  // Replace the existing useScroll and transform hooks with these enhanced versions:

  // Scroll animation for this section with a larger offset to start earlier
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Enhanced transform values for smoother parallax effect
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.15, 0.8, 1], [100, 0, 0, -100])
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.8, 1], [0.9, 1, 1, 0.9])

  // Enhanced parallax effect for image with more subtle movement
  const imageY = useTransform(scrollYProgress, [0, 1], [-20, -70])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.7])

  // Scroll to Projects section with smooth animation
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: colors.aboutBackground }}
    >
      {/* Update the background elements for more subtle parallax
      // Replace the existing background elements div with: */}

      {/* Enhanced Background Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              theme === "light"
                ? "radial-gradient(circle, rgba(0, 102, 204, 0.03) 0%, rgba(0, 102, 204, 0.01) 70%, transparent 100%)"
                : "radial-gradient(circle, rgba(10, 132, 255, 0.06) 0%, rgba(10, 132, 255, 0.02) 70%, transparent 100%)",
          }}
          style={{
            y: useTransform(scrollYProgress, [0, 1], [50, -100]),
            opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.6, 0.6, 0]),
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]),
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              theme === "light"
                ? "radial-gradient(circle, rgba(52, 199, 89, 0.03) 0%, rgba(52, 199, 89, 0.01) 70%, transparent 100%)"
                : "radial-gradient(circle, rgba(48, 209, 88, 0.06) 0%, rgba(48, 209, 88, 0.02) 70%, transparent 100%)",
          }}
          style={{
            y: useTransform(scrollYProgress, [0, 1], [-30, 70]),
            opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.5, 0.5, 0]),
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.05]),
          }}
        />
      </div>

      <motion.div className="container mx-auto px-4" style={{ opacity, y, scale }}>
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Update the profile image container to include the opacity transform
          // Replace the existing motion.div for the profile image with: */}

          <motion.div
            className="w-full md:w-2/5"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 50,
              damping: 15,
            }}
            style={{
              y: imageY,
              scale: imageScale,
            }}
          >
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 mx-auto overflow-hidden rounded-full border-4 shadow-lg"
              style={{ borderColor: colors.primary }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >
              <Image
                src="/placeholder.svg?height=400&width=400&text=Your+Photo"
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Update the about text animation to be more coordinated with the image
          // Replace the existing motion.div for the about text with: */}

          <motion.div
            className="w-full md:w-3/5"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 50,
              damping: 15,
            }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <motion.p className="text-lg leading-relaxed mb-6" transition={{ duration: 0.7, delay: 0.3 }}>
                {personalInfo.about}
              </motion.p>
              <motion.div className="flex flex-wrap gap-4 mt-8" transition={{ duration: 0.7, delay: 0.5 }}>
                <Button
                  className="rounded-full"
                  style={{
                    backgroundColor: colors.primary,
                    color: "white",
                  }}
                  asChild
                >
                  <a href="#contact">Get In Touch</a>
                </Button>
                <Button variant="outline" className="rounded-full" asChild>
                  <a href={personalInfo.resumeUrl} download>
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll to Projects Indicator */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <motion.button
            onClick={scrollToProjects}
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            whileHover={{ y: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm uppercase tracking-widest mb-2">View Projects</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

