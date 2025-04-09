"use client"

import { useTheme } from "@/components/theme-provider"
import { skills } from "@/config/portfolio-config"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

/**
 * Skills Section Component
 *
 * Displays technical skills organized by categories in a modern, interactive layout.
 * Features a clean card-based design with subtle animations and hover effects.
 */
export default function SkillsSection() {
  const { colors, theme } = useTheme()
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  // Get visible skill categories
  const visibleCategories = Object.entries(skills)
    .filter(([_, category]) => category.visible)
    .map(([key, category]) => ({ key, ...category }))

  // Refined background gradients for both themes
  const bgGradients = {
    light: {
      primary: "from-blue-100/40 to-indigo-100/40",
      secondary: "from-rose-50/30 to-purple-100/30",
    },
    dark: {
      primary: "from-blue-950/30 to-indigo-950/30",
      secondary: "from-rose-950/20 to-purple-950/20",
    },
  }

  // Select current theme gradients
  const currentGradients = theme === "light" ? bgGradients.light : bgGradients.dark

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{
        backgroundColor: colors.skillsBackground,
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Background Elements - Apple-inspired subtle gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              theme === "light"
                ? "radial-gradient(circle, rgba(0, 102, 204, 0.03) 0%, rgba(0, 102, 204, 0.01) 70%, transparent 100%)"
                : "radial-gradient(circle, rgba(10, 132, 255, 0.06) 0%, rgba(10, 132, 255, 0.02) 70%, transparent 100%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              theme === "light"
                ? "radial-gradient(circle, rgba(52, 199, 89, 0.03) 0%, rgba(52, 199, 89, 0.01) 70%, transparent 100%)"
                : "radial-gradient(circle, rgba(48, 209, 88, 0.06) 0%, rgba(48, 209, 88, 0.02) 70%, transparent 100%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 5,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-block relative mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.span
              className="absolute -left-6 top-1/2 h-[2px] w-12 bg-gradient-to-r from-transparent"
              style={{
                backgroundImage:
                  theme === "light"
                    ? "linear-gradient(to right, transparent, rgba(79, 70, 229, 0.6))"
                    : "linear-gradient(to right, transparent, rgba(129, 140, 248, 0.6))",
              }}
              initial={{ width: 0 }}
              animate={inView ? { width: 48 } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <h2 className="text-3xl md:text-4xl font-bold px-4">Technical Skills</h2>
            <motion.span
              className="absolute -right-6 top-1/2 h-[2px] w-12 bg-gradient-to-l from-transparent"
              style={{
                backgroundImage:
                  theme === "light"
                    ? "linear-gradient(to left, transparent, rgba(79, 70, 229, 0.6))"
                    : "linear-gradient(to left, transparent, rgba(129, 140, 248, 0.6))",
              }}
              initial={{ width: 0 }}
              animate={inView ? { width: 48 } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </motion.div>
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            A comprehensive overview of my technical expertise and proficiencies
          </motion.p>
        </motion.div>

        {/* Skills Categories - More compact grid with smaller gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {visibleCategories.map((category, categoryIndex) => (
            <SkillCategory key={category.key} category={category} index={categoryIndex} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Skill Category Component
function SkillCategory({
  category,
  index,
  inView,
}: {
  category: any
  index: number
  inView: boolean
}) {
  const { colors, theme } = useTheme()
  const { ref: cardInViewRef, inView: isCardInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  // Apple-inspired color palette
  const getCategoryColor = (title: string) => {
    if (title.includes("Machine Learning") || title.includes("AI")) {
      // Apple purple
      return {
        bg: theme === "light" ? "bg-purple-50/70" : "bg-purple-950/30",
        border: theme === "light" ? "border-purple-100" : "border-purple-900/30",
        text: theme === "light" ? "text-purple-600" : "text-purple-400",
        icon: theme === "light" ? "bg-purple-100/80" : "bg-purple-900/20",
        accent: theme === "light" ? "#BF5AF2" : "#BF5AF2",
      }
    } else if (title.includes("Data") || title.includes("Engineering")) {
      // Apple blue
      return {
        bg: theme === "light" ? "bg-blue-50/70" : "bg-blue-950/30",
        border: theme === "light" ? "border-blue-100" : "border-blue-900/30",
        text: theme === "light" ? "text-blue-600" : "text-blue-400",
        icon: theme === "light" ? "bg-blue-100/80" : "bg-blue-900/20",
        accent: theme === "light" ? "#0066CC" : "#0A84FF",
      }
    } else if (title.includes("Cloud") || title.includes("DevOps")) {
      // Apple green
      return {
        bg: theme === "light" ? "bg-green-50/70" : "bg-green-950/30",
        border: theme === "light" ? "border-green-100" : "border-green-900/30",
        text: theme === "light" ? "text-green-600" : "text-green-400",
        icon: theme === "light" ? "bg-green-100/80" : "bg-green-900/20",
        accent: theme === "light" ? "#34C759" : "#30D158",
      }
    } else {
      // Apple orange
      return {
        bg: theme === "light" ? "bg-orange-50/70" : "bg-orange-950/30",
        border: theme === "light" ? "border-orange-100" : "border-orange-900/30",
        text: theme === "light" ? "text-orange-600" : "text-orange-400",
        icon: theme === "light" ? "bg-orange-100/80" : "bg-orange-900/20",
        accent: theme === "light" ? "#FF9500" : "#FF9F0A",
      }
    }
  }

  const categoryColorClasses = getCategoryColor(category.title)

  // Animation variants for container
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for smooth entry
        staggerChildren: 0.03, // Faster stagger for more items
        delayChildren: 0.1,
      },
    },
  }

  // Animation variants for skills
  const skillVariants = {
    hidden: {
      opacity: 0,
      y: 10, // Smaller movement
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3, // Faster animation
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      ref={cardInViewRef}
      initial="hidden"
      animate={isCardInView ? "visible" : "hidden"}
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
          boxShadow: "0 0 0 rgba(0,0,0,0)",
        },
        visible: {
          opacity: 1,
          y: 0,
          boxShadow: theme === "light" ? "0 8px 20px rgba(0,0,0,0.04)" : "0 8px 20px rgba(0,0,0,0.15)",
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.15,
          },
        },
      }}
      whileHover={{
        y: -3, // Smaller hover movement
        boxShadow: theme === "light" ? "0 12px 25px rgba(0,0,0,0.06)" : "0 12px 25px rgba(0,0,0,0.2)",
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      className={`rounded-xl overflow-hidden border ${categoryColorClasses.border} ${categoryColorClasses.bg} backdrop-blur-sm`}
      style={{
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Category Header with animated accent line - Smaller padding */}
      <div className="p-4 border-b border-gray-100/50 dark:border-gray-800/50 relative">
        <h3 className={`text-lg font-bold ${categoryColorClasses.text}`}>{category.title}</h3>
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r"
          style={{
            backgroundImage: `linear-gradient(to right, transparent, ${categoryColorClasses.accent}, transparent)`,
          }}
          initial={{ width: "0%" }}
          animate={isCardInView ? { width: "100%" } : { width: "0%" }}
          transition={{
            duration: 1.2,
            delay: index * 0.15 + 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>

      {/* Skills Grid with staggered animations - More columns, smaller gap */}
      <div className="p-4">
        <motion.div className="grid grid-cols-3 sm:grid-cols-4 gap-2" variants={containerVariants}>
          {category.items.map((skill: any, skillIndex: number) => (
            <motion.div
              key={skill.name}
              variants={skillVariants}
              whileHover={{
                scale: 1.03, // Smaller scale
                y: -2, // Smaller lift
                transition: {
                  duration: 0.2,
                  ease: "easeOut",
                },
              }}
              className="group"
            >
              <div className="flex flex-col items-center p-2 rounded-lg bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 h-full backdrop-blur-sm">
                {/* Smaller icon */}
                <div
                  className={`w-7 h-7 ${categoryColorClasses.icon} rounded-full flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className={`text-[10px] ${categoryColorClasses.text}`}>{skill.name.charAt(0)}</span>
                </div>
                {/* Smaller text */}
                <span className="text-xs font-medium text-center text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 line-clamp-2">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

