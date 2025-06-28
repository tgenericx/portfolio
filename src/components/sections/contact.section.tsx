import { SectionWrapper } from "@/components/sections/section.wrapper"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/tgenericx",
    ariaLabel: "GitHub Profile",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/tgenericx",
    ariaLabel: "LinkedIn Profile",
  },
]

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
          <a href="mailto:hammedanuoluwapopelumi@gmail.com" aria-label="Send email">
            <Mail className="mr-2 h-4 w-4" />
            Email
          </a>
        </Button>

        {socialLinks.map(({ name, icon: Icon, href, ariaLabel }, index) => (
          <Button key={index} variant="outline" size="sm" asChild>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ariaLabel || name}
            >
              <Icon className="mr-2 h-4 w-4" />
              {name}
            </a>
          </Button>
        ))}
      </div>
    </SectionWrapper>
  )
}
