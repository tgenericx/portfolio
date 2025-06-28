import { SectionWrapper } from "@/components/sections/section.wrapper"

export function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      title="About Me"
      description="Here’s the TL;DR on who I am and what I do."
      align="center"
    >
      <div className="mx-auto max-w-3xl space-y-6 text-sm sm:text-base md:text-lg leading-relaxed px-4 sm:px-0">
        <p>
          I'm <b>Anuoluwapo Pelumi Hammed</b>, a 300-level Computer Science and Engineering student at Obafemi Awolowo University, studying B.Sc. Computer Science with Economics. I'm passionate about backend systems, cloud-native applications, and building scalable software architectures — always learning by building.
        </p>

        <p>
          Outside the classroom, I tinker with backend systems, build CLI tools, automate workflows, and explore developer tooling. I keep my stack lean, focus on developer experience, and enjoy sharing what I learn.
        </p>

        <p>
          Currently diving into design systems, state management, and tools that make development smoother. Open to internship opportunities and collaborations — let's build something cool together.
        </p>
      </div>
    </SectionWrapper>
  )
}
