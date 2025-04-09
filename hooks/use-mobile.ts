"use client"

import { useState, useEffect } from "react"

/**
 * Custom hook to detect if the current viewport is mobile
 *
 * @returns {boolean} True if the viewport width is less than 768px
 */
export function useMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Function to check if the screen is mobile-sized
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile)

    // Clean up event listener
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}

