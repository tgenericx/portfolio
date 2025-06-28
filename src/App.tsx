import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import { Github, Mail } from "lucide-react"

import { HeroSection } from "@/components/sections/hero.section"
import { ProjectsSection } from "@/components/sections/projects.section"
import { AboutSection } from "@/components/sections/about.section"
import { SkillsSection } from "@/components/sections/skills.section"
import { ContactSection } from "@/components/sections/contact.section"

function App() {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1 space-y-6 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 ">
        <Header />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer
        copyrightText="© 2025 tgenericx. Built with Vite, React, and ♥️"
        contactLinks={[
          {
            name: "GitHub",
            icon: Github,
            link: "https://github.com/tgenericx",
          },
          {
            name: "Email",
            icon: Mail,
            link: "mailto:hammedanuoluwapopelumi@gmail.com",
          },
        ]}
      />
    </div>
  )
}

export default App
