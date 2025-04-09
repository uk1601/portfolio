import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { personalInfo } from "@/config/portfolio-config"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description: personalInfo.tagline,
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
        {/* Vercel Analytics Script */}
        <script defer src="/_vercel/insights/script.js"></script>
      </body>
    </html>
  )
}



import './globals.css'