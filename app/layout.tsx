import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { personalInfo } from "@/config"
import { Analytics } from "@vercel/analytics/react"
import { contactInfo } from "@/config"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description: personalInfo.tagline,
  keywords:
    "data engineer, AI engineer, machine learning, data science, portfolio, uday kiran dasari, uday kiran, ukd, udaykirandasari.me, northeastern university, GEN AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://udaykirandasari.me",
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.tagline,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: personalInfo.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.tagline,
    images: ["/images/twitter-image.jpg"],
  },
  generator: "v0.dev",
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: personalInfo.name,
              url: "https://udaykirandasari.me",
              jobTitle: personalInfo.title,
              sameAs: [contactInfo.socialMedia.linkedin, contactInfo.socialMedia.github],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </body>
    </html>
  )
}


import './globals.css'