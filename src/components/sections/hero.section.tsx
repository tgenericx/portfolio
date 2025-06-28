import { Avatar } from "@/components/avatar"
import { Button } from "../ui/button"
import { SectionHeader } from "./section.header"

export function HeroSection() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-3xl mx-auto flex flex-col items-center space-y-8 text-center">
        <Avatar
          src="https://avatars.githubusercontent.com/u/217401569?v=4"
          alt="tgenericx GitHub avatar"
        />

        <SectionHeader
          title="Hey, I'm tgenericx"
          description="Backend-focused dev exploring scalable systems, automation, and clean developer experience."
        />

        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
