"use client"

import { useTheme } from "@/components/theme-provider"
import { experiences, education } from "@/config/portfolio-config"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react"

/**
 * Experience Section Component
 *
 * Displays professional experience and education in a unified timeline.
 * Features a clean, modern design with clear visual hierarchy.
 */
export default function ExperienceSection() {
  const { colors, theme } = useTheme()
  const [ref, inView] = useInView({
    threshold: 0.2,
  })

  // Filter visible experiences and education
  const visibleExperiences = experiences.filter((exp) => exp.visible)
  const visibleEducation = education.filter((edu) => edu.visible)

  // Combine and sort experiences and education by period (most recent first)
  const timelineItems = [
    ...visibleExperiences.map((exp) => ({
      ...exp,
      type: "experience",
      sortDate: new Date(exp.period.split("–")[0].trim()),
    })),
    ...visibleEducation.map((edu) => ({
      ...edu,
      type: "education",
      sortDate: new Date(edu.period.split("–")[0].trim()),
    })),
  ].sort((a, b) => b.sortDate.getTime() - a.sortDate.getTime())

  return (
    <section
      id="experience"
      className="py-20 relative overflow-hidden"
      style={{
        backgroundColor: colors.experienceBackground,
      }}
      ref={ref}
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title with Decorative Lines */}
          <div className="flex items-center justify-center mb-8">
            <div
              className="h-[1px] w-12"
              style={{
                background:
                  theme === "light"
                    ? "linear-gradient(to right, transparent, rgba(0, 102, 204, 0.5))"
                    : "linear-gradient(to right, transparent, rgba(10, 132, 255, 0.5))",
              }}
            ></div>
            <h2 className="text-3xl md:text-4xl font-bold mx-4">Experience & Education</h2>
            <div
              className="h-[1px] w-12"
              style={{
                background:
                  theme === "light"
                    ? "linear-gradient(to left, transparent, rgba(0, 102, 204, 0.5))"
                    : "linear-gradient(to left, transparent, rgba(10, 132, 255, 0.5))",
              }}
            ></div>
          </div>

          {/* Subtitle */}
          <div className="text-center mb-16">
            <p className="text-lg text-gray-600 dark:text-gray-300">My professional journey and academic background</p>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto relative">
            {/* Timeline Center Line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-[2px] bg-gray-200 dark:bg-gray-800 transform md:-translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="relative">
              {timelineItems.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} isLeft={index % 2 === 0} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Timeline Item Component
function TimelineItem({
  item,
  index,
  isLeft,
}: {
  item: any
  index: number
  isLeft: boolean
}) {
  const { colors, theme } = useTheme()
  const [ref, inView] = useInView({
    threshold: 0.2,
  })

  // Determine if this is an experience or education item
  const isExperience = item.type === "experience"

  // Set icon based on item type
  const Icon = isExperience ? Briefcase : GraduationCap

  // Set content based on item type
  const title = isExperience ? item.title : item.degree
  const subtitle = isExperience ? item.company : item.institution
  const description = isExperience ? item.description : item.gpa ? `GPA: ${item.gpa}` : ""
  const achievements = isExperience ? item.achievements : []

  return (
    <div className={`mb-16 relative flex ${isLeft ? "md:flex-row-reverse" : "md:flex-row"} flex-col`}>
      {/* Timeline Dot */}
      <div className="absolute left-[-9px] md:left-1/2 top-6 md:transform md:-translate-x-1/2 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4 }}
          className="w-5 h-5 rounded-full border-4 border-white dark:border-gray-900"
          style={{ backgroundColor: isExperience ? colors.primary : colors.secondary }}
        ></motion.div>
      </div>

      {/* Content */}
      <div className="md:w-1/2 pl-8 md:pl-0 md:pr-0 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? 50 : -50 }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
          className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 h-full"
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
        >
          {/* Icon */}
          <div className="flex items-center mb-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
              style={{
                backgroundColor: isExperience ? `${colors.primary}15` : `${colors.secondary}15`,
                color: isExperience ? colors.primary : colors.secondary,
              }}
            >
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{subtitle}</p>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-3 ml-13">
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
              <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>{item.period}</span>
            </div>

            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
              <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>{item.location}</span>
            </div>

            {description && <p className="text-gray-700 dark:text-gray-300 text-sm mt-3">{description}</p>}

            {achievements.length > 0 && (
              <div className="mt-4">
                <h4 className="font-semibold mb-2 text-sm text-gray-800 dark:text-gray-200">Key Achievements</h4>
                <ul className="space-y-2">
                  {achievements.map((achievement: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <div
                        className="w-2 h-2 rounded-full mt-1.5 mr-2 flex-shrink-0"
                        style={{ backgroundColor: colors.primary }}
                      />
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{achievement}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Date for Desktop - Shown on opposite side */}
      <div className="hidden md:flex md:w-1/2 md:items-center md:justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4, delay: index * 0.05 + 0.2 }}
          className={`text-center ${isLeft ? "md:text-left md:pr-8" : "md:text-right md:pl-8"}`}
        >
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-medium"
            style={{
              backgroundColor: isExperience ? `${colors.primary}15` : `${colors.secondary}15`,
              color: isExperience ? colors.primary : colors.secondary,
            }}
          >
            {item.period}
          </span>
        </motion.div>
      </div>
    </div>
  )
}

