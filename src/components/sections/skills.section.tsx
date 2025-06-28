import { SectionWrapper } from "@/components/sections/section.wrapper"
import { Badge } from "@/components/ui/badge"

const skills = {
  Languages: ["TypeScript", "JavaScript", "Python", "Bash", "C", "SQL"],
  "Frameworks & Libraries": [
    "Next.js",
    "React",
    "Vite",
    "Tailwind CSS",
    "ShadCN",
    "Zustand",
    "Express.js",
    "NestJS",
    "GraphQL",
  ],
  Tools: [
    "Git",
    "GitHub CLI",
    "Neovim",
    "VS Code",
    "ESLint",
    "Prettier",
    "Prisma",
    "MongoDB",
    "PostgreSQL",
    "SQLite",
    "REST APIs",
    "Insomnia",
    "tmux",
    "FZF",
    "ripgrep",
  ],
  Learning: ["Microservices", "Docker", "Redis"],
}

export function SkillsSection() {
  return (
    <SectionWrapper
      id="skills"
      title="Tech Stack & Skills"
      description="Here’s a glimpse of the tools, languages, and frameworks I work with."
      align="center"
    >
      <div className="space-y-10">
        {Object.entries(skills).map(([category, items], i) => (
          <div key={i} className="space-y-3">
            <h3 className="text-base sm:text-lg font-semibold text-foreground/80">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-xs sm:text-sm font-normal px-2 py-1"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
