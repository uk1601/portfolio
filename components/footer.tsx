"use client"

import { useTheme } from "@/components/theme-provider"
import { personalInfo } from "@/config/portfolio-config"

/**
 * Footer Component
 *
 * A simple footer with copyright information.
 */
export default function Footer() {
  const { colors } = useTheme()
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="py-8 text-center text-sm text-gray-600 dark:text-gray-400"
      style={{ backgroundColor: colors.background }}
    >
      <div className="container mx-auto px-4">
        <p>
          © {currentYear} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

