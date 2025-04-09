import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { sectionVisibility } from "@/config/portfolio-config"

/**
 * Main Page Component
 *
 * Assembles all sections of the portfolio website.
 * Sections can be toggled via the configuration module.
 */
export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Sections */}
      {sectionVisibility.hero && <HeroSection />}
      {sectionVisibility.about && <AboutSection />}
      {sectionVisibility.projects && <ProjectsSection />}
      {sectionVisibility.skills && <SkillsSection />}
      {sectionVisibility.experience && <ExperienceSection />}
      {sectionVisibility.contact && <ContactSection />}

      <Footer />
    </main>
  )
}

