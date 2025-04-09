/**
 * Portfolio Configuration Index
 *
 * Central configuration file for the portfolio website.
 */

// Personal Information
export const personalInfo = {
  name: "Uday Kiran Dasari",
  title: "Data Engineer / AI & ML Engineer",
  tagline: "Building intelligent data pipelines and AI solutions that transform raw data into actionable insights",
  about: `I'm a Data Engineer and AI/ML specialist with expertise in designing scalable data architectures, 
  implementing advanced machine learning models, and developing end-to-end AI solutions. With a strong 
  background in cloud technologies and big data frameworks, I help organizations leverage their data 
  to drive innovation and business value.`,
  resumeUrl: "https://drive.google.com/file/d/12vzlO_tJFxcmQ1qlfBBVDcRAkXHZeoxl/view?usp=drive_link",
}

// Contact Information
export const contactInfo = {
  emails: ["udaykiranchintu16@gmail.com", "dasari.uda@northeastern.edu"],
  socialMedia: {
    linkedin: "https://linkedin.com/in/udaykiran16",
    github: "https://github.com/uk1601",
  },
}

// Projects Configuration
export const projectsConfig = {
  initialVisibleCount: 5, // Number of projects to show initially
}

// Import the rest of the configurations
import { projects } from "./projects"
import { experiences, education } from "./experience"
import { skills } from "./skills"
import { themeConfig } from "./theme"
import { sectionVisibility } from "./section-visibility"

// Re-export them
export { projects, experiences, education, skills, themeConfig, sectionVisibility }
