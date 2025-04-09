"use client"

import { useRef } from "react"
import { useTheme } from "@/components/theme-provider"
import { personalInfo } from "@/config"
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
      {/* Enhanced Background Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              theme === "light"
                ? "radial-gradient(circle, rgba(0, 102, 204, 0.03) 0%, rgba(0, 102, 204, 0.01) 70%, transparent 100%)"
                : "radial-gradient(circle, rgba(10, 132, 255, 0.06) 0%, rgba(10, 132, 255, 0.02) 70%, transparent 100%)",
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
            y: useTransform(scrollYProgress, [0, 1], [-30, 70]),
            opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.5, 0.5, 0]),
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.05]),
          }}
        />
      </div>

      <motion.div className="container mx-auto px-4" style={{ opacity, y, scale }}>
        {/* Section Header with Decorative Lines - Consistent with other sections */}
        <motion.div
          className="flex items-center justify-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="h-[1px] w-12"
            style={{
              background:
                theme === "light"
                  ? "linear-gradient(to right, transparent, rgba(0, 102, 204, 0.5))"
                  : "linear-gradient(to right, transparent, rgba(10, 132, 255, 0.5))",
            }}
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          ></motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mx-4">About Me</h2>
          <motion.div
            className="h-[1px] w-12"
            style={{
              background:
                theme === "light"
                  ? "linear-gradient(to left, transparent, rgba(0, 102, 204, 0.5))"
                  : "linear-gradient(to left, transparent, rgba(10, 132, 255, 0.5))",
            }}
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          ></motion.div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center md:items-stretch gap-8 md:gap-10">
          <motion.div
            className="w-full md:w-2/5 flex items-center justify-center md:justify-end md:pr-4 md:pt-4"
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
              className="relative w-60 h-60 md:w-64 md:h-64 overflow-hidden rounded-full border-4 shadow-lg"
              style={{ borderColor: colors.primary }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >
              <Image
                src="/images/profile.jpeg"
                alt={personalInfo.name}
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full md:w-3/5 flex items-start md:items-center md:pl-4 md:h-full"
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
            onClick={() => {
              const projectsSection = document.getElementById("projects")
              if (projectsSection) {
                // Simple scroll with a small delay for a more deliberate feel
                window.scrollTo({
                  top: projectsSection.offsetTop,
                  behavior: "smooth",
                })

                // Add a small delay to make the scroll feel more deliberate
                setTimeout(() => {
                  window.scrollTo({
                    top: projectsSection.offsetTop,
                    behavior: "smooth",
                  })
                }, 50)
              }
            }}
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            whileHover={{ y: 3, transition: { duration: 0.2 } }} // Faster hover response
            whileTap={{ scale: 0.95, transition: { duration: 0.1 } }} // Immediate tap feedback
          >
            <span className="text-sm uppercase tracking-widest mb-2">View Projects</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 2, // Moderate animation speed
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
