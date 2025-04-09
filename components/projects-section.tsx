"use client"

import { useState, useRef } from "react"
import { useTheme } from "@/components/theme-provider"
import { projects } from "@/config/portfolio-config"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { Github, ArrowRight, ChevronDown } from "lucide-react"

/**
 * Projects Section Component
 *
 * Displays a collection of projects in a horizontal layout with alternating sides.
 * Features clean project cards with minimal design and technology tags.
 */
export default function ProjectsSection() {
  const { colors, theme } = useTheme()
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [expandedTechTags, setExpandedTechTags] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Scroll-based animations for section transition
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Transform values for section entrance
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])
  const sectionY = useTransform(scrollYProgress, [0, 0.1], [50, 0])

  // Filter visible projects
  const visibleProjects = projects
    .filter((project) => project.visible)
    .sort((a, b) => (a.preferenceOrder || 999) - (b.preferenceOrder || 999))

  // Handle tag expansion toggle
  const toggleTags = (projectId: string) => {
    setExpandedTechTags(expandedTechTags === projectId ? null : projectId)
  }

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{
        backgroundColor: colors.projectsBackground,
      }}
    >
      <motion.div
        className="container mx-auto px-4"
        style={{
          opacity: sectionOpacity,
          y: sectionY,
        }}
      >
        {/* Section header with subtle animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
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
              transition={{ duration: 1.2, ease: "easeOut" }}
            ></motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mx-4">Featured Projects</h2>
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
              transition={{ duration: 1.2, ease: "easeOut" }}
            ></motion.div>
          </div>
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            A selection of my recent work in data engineering, machine learning, and AI applications.
          </motion.p>
        </motion.div>

        {/* Projects list with subtle parallax animations */}
        <div className="space-y-16 md:space-y-24">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isEven={index % 2 === 0}
              expandedTags={expandedTechTags === project.id}
              onExpandTags={() => toggleTags(project.id)}
              onViewDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </motion.div>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-base mt-2">{selectedProject.shortDescription}</DialogDescription>
              </DialogHeader>

              <div className="mt-6">
                {/* Project Image */}
                <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-6">
                  <Image
                    src={selectedProject.images?.[0] || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* GitHub Button */}
                <div className="flex justify-end mb-6">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    <span className="font-medium">View on GitHub</span>
                  </a>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Overview</h3>
                    <p>{selectedProject.fullDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Problem</h3>
                    <p>{selectedProject.problemStatement}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Solution</h3>
                    <p>{selectedProject.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Key Learnings</h3>
                    <p>{selectedProject.keyLearnings}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

// Project Card Component with subtle parallax animations
function ProjectCard({
  project,
  index,
  isEven,
  expandedTags,
  onExpandTags,
  onViewDetails,
}: {
  project: (typeof projects)[0]
  index: number
  isEven: boolean
  expandedTags: boolean
  onExpandTags: () => void
  onViewDetails: () => void
}) {
  const { colors, theme } = useTheme()
  const [cardRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: "-50px 0px",
  })

  // Determine how many tech tags to show initially
  const initialTagCount = 3
  const hasMoreTags = project.technologies.length > initialTagCount

  // Get initial and additional tags
  const initialTags = project.technologies.slice(0, initialTagCount)
  const additionalTags = project.technologies.slice(initialTagCount)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 1.2, ease: "easeOut" },
      }}
      viewport={{ once: false, amount: 0.2 }}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500`}
    >
      {/* Project Image with subtle parallax effect */}
      <motion.div
        className="w-full md:w-1/2 relative h-64 md:h-auto overflow-hidden"
        initial={{ y: 20 }}
        whileInView={{
          y: 0,
          transition: {
            duration: 1.5,
            ease: "easeOut",
          },
        }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div
          whileHover={{
            scale: 1.03,
            transition: { duration: 1.5, ease: "easeOut" },
          }}
          className="w-full h-full"
        >
          <Image src={project.images?.[0] || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        </motion.div>
      </motion.div>

      {/* Project Details with subtle fade-in */}
      <motion.div
        className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: "easeOut",
            delay: 0.2,
          },
        }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
        <p className="mb-6 text-gray-600 dark:text-gray-300">{project.shortDescription}</p>

        {/* Technology Tags with fixed and animated sections */}
        <div className="mb-6">
          {/* Always visible tags */}
          <motion.div
            className="flex flex-wrap gap-2 mb-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
              hidden: {},
            }}
          >
            {initialTags.map((tech) => (
              <motion.span
                key={tech}
                variants={{
                  hidden: { opacity: 0, y: 5 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  },
                }}
                className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Expandable additional tags */}
          {hasMoreTags && (
            <div>
              <AnimatePresence>
                {expandedTags && (
                  <motion.div
                    className="flex flex-wrap gap-2 mb-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      transition: {
                        height: {
                          duration: 0.4,
                        },
                        opacity: {
                          duration: 0.3,
                          delay: 0.1,
                        },
                      },
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      transition: {
                        height: {
                          duration: 0.3,
                        },
                        opacity: {
                          duration: 0.2,
                        },
                      },
                    }}
                  >
                    {additionalTags.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.3,
                            delay: i * 0.05,
                          },
                        }}
                        exit={{
                          opacity: 0,
                          y: 5,
                          transition: {
                            duration: 0.2,
                          },
                        }}
                        className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Toggle button with improved animation and feedback */}
              <motion.button
                onClick={onExpandTags}
                className="mt-2 px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all flex items-center"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: theme === "light" ? "rgba(229, 231, 235, 1)" : "rgba(75, 85, 99, 1)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span>{expandedTags ? "Show less" : `+${additionalTags.length} more`}</span>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: expandedTags ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-1"
                >
                  <ChevronDown className="h-3.5 w-3.5" />
                </motion.div>
              </motion.button>
            </div>
          )}
        </div>

        {/* Action Links with subtle animations */}
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut",
            },
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.button
            onClick={onViewDetails}
            className="flex items-center text-blue-500 font-medium hover:text-blue-600 transition-colors"
            whileHover={{
              x: 3,
              transition: { duration: 0.3 },
            }}
          >
            <span>View Details</span>
            <motion.div
              className="inline-block ml-1"
              animate={{ x: [0, 3, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 2,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </motion.button>

          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.3 },
            }}
          >
            <Github className="mr-1 h-4 w-4" />
            GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

