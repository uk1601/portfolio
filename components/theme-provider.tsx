"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { themeConfig } from "@/config/portfolio-config"

type Theme = "light" | "dark"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  colors: typeof themeConfig.light | typeof themeConfig.dark
}

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
  toggleTheme: () => null,
  colors: themeConfig.light,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "light", // Ensure light theme is default
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  // Get the current theme colors
  const colors = theme === "light" ? themeConfig.light : themeConfig.dark

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  useEffect(() => {
    // Check for user preference in localStorage
    const storedTheme = localStorage.getItem("theme") as Theme | null

    if (storedTheme) {
      setTheme(storedTheme)
    } else {
      // Check for system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setTheme(prefersDark ? "dark" : "light")
    }
  }, [])

  useEffect(() => {
    // Update the document with the current theme
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)

    // Store the theme preference
    localStorage.setItem("theme", theme)
  }, [theme])

  const value = {
    theme,
    setTheme,
    toggleTheme,
    colors,
  }

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>
}

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}

