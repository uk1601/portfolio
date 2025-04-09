"use client"

import { useTheme } from "@/components/theme-provider"
import { contactInfo } from "@/config/portfolio-config"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Contact Section Component
 *
 * Displays contact information and social media links.
 * Features a clean, card-based layout with icons.
 */
export default function ContactSection() {
  const { colors, theme } = useTheme()
  const [ref, inView] = useInView({
    threshold: 0.2,
  })

  return (
    <section
      id="contact"
      className="py-20"
      style={{
        backgroundColor: colors.contactBackground,
      }}
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title with Decorative Lines */}
          <motion.div
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
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
              animate={inView ? { width: 48 } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            ></motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mx-4">Get In Touch</h2>
            <motion.div
              className="h-[1px] w-12"
              style={{
                background:
                  theme === "light"
                    ? "linear-gradient(to left, transparent, rgba(0, 102, 204, 0.5))"
                    : "linear-gradient(to left, transparent, rgba(10, 132, 255, 0.5))",
              }}
              initial={{ width: 0 }}
              animate={inView ? { width: 48 } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            ></motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Have a project in mind or want to discuss potential opportunities?
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">Feel free to reach out.</p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
            {/* Email Card */}
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-8 flex flex-col items-center justify-center h-full"
              initial={{ opacity: 0, x: -50, y: 20 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -50, y: 20 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              whileHover={{ y: -8, boxShadow: "0 15px 30px -5px rgba(0,0,0,0.1)" }}
            >
              <div className="flex flex-col items-center justify-center w-full">
                <motion.div
                  className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.6,
                  }}
                >
                  <Mail className="h-8 w-8 text-blue-500" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6 text-center">Reach out via email</p>

                <div className="w-full space-y-3">
                  {contactInfo.emails.map((email, index) => (
                    <motion.a
                      key={index}
                      href={`mailto:${email}`}
                      className="block w-full py-3 px-4 text-center rounded-md bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                    >
                      {email}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Social Profiles Card */}
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-8 flex flex-col items-center justify-center h-full"
              initial={{ opacity: 0, x: 50, y: 20 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 50, y: 20 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              whileHover={{ y: -8, boxShadow: "0 15px 30px -5px rgba(0,0,0,0.1)" }}
            >
              <div className="flex flex-col items-center justify-center flex-grow">
                <h3 className="text-xl font-semibold mb-2">Social Profiles</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8 text-center">Connect with me online</p>

                <div className="flex gap-6 justify-center">
                  <motion.a
                    href={contactInfo.socialMedia.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition-colors"
                    aria-label="GitHub Profile"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.7,
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Github className="h-7 w-7 text-white" />
                  </motion.a>
                  <motion.a
                    href={contactInfo.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-teal-500 flex items-center justify-center hover:bg-teal-600 transition-colors"
                    aria-label="LinkedIn Profile"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.8,
                    }}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <Linkedin className="h-7 w-7 text-white" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Message and CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Looking forward to connecting with you</p>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Button
                size="lg"
                className="rounded-md px-6 py-4 h-auto text-base font-medium bg-blue-500 hover:bg-blue-600"
                asChild
              >
                <a href={`mailto:${contactInfo.emails[0]}`}>Send an Email</a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

