import { SectionWrapper } from "@/components/sections/section.wrapper"
import { ProjectCard } from "@/components/cards/project.card"

export function ProjectsSection() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio built with Vite, React, TypeScript, and Tailwind. Designed to be fast, clean, and minimal.",
      technologies: ["React", "TypeScript", "Tailwind", "Vite"],
      links: {
        github: "https://github.com/tgenericx/portfolio",
        demo: "https://tgenericx-portfolio.vercel.app/",
      },
    },
    {
      title: "CLI Tool: gcs",
      description:
        "A shell wrapper around GitHub CLI for managing Codespaces with fuzzy selection and JSON parsing.",
      technologies: ["Bash", "gh CLI", "FZF", "JSON"],
      links: {
        github: "https://github.com/tgenericx/gcs",
      },
    },
    {
      title: "Task Tracker (WIP)",
      description:
        "A minimalist task tracker app using Zustand, Radix UI, and localStorage. Currently prototyping auth & sync.",
      technologies: ["React", "Zustand", "Tailwind", "Vite"],
      links: {
        github: "https://github.com/tgenericx/task-tracker",
      },
    },
    {
      title: "CLI Helpers",
      description:
        "A collection of small, reusable Bash scripts for automating dev workflows — installable via a custom installer with Termux support.",
      technologies: ["Bash", "POSIX", "curl", "CLI UX"],
      links: {
        github: "https://github.com/tgenericx/cli-helpers",
      },
    },
  ]

  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      description="A few things I’ve built recently. Code, tools, and experiments."
      align="center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </SectionWrapper>
  )
}
