import { SectionWrapper } from "@/components/sections/section.wrapper"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <SectionWrapper
      id="contact"
      title="Let's Connect"
      description="Have a question, idea, or want to collaborate? Hit me up!"
      align="center"
    >
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <Button variant="outline" size="sm" asChild>
          <a href="mailto:generic@example.com" aria-label="Send email">
            <Mail className="mr-2 h-4 w-4" />
            Email
          </a>
        </Button>

        <Button variant="outline" size="sm" asChild>
          <a
            href="https://github.com/tgenericx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>

        <Button variant="outline" size="sm" asChild>
          <a
            href="https://linkedin.com/in/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </a>
        </Button>
      </div>
    </SectionWrapper>
  )
}
