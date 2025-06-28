import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  links: {
    github?: string
    demo?: string
  }
}

export function ProjectCard({
  title,
  description,
  technologies,
  links,
}: ProjectCardProps) {
  return (
    <Card className="w-full max-w-md transition-all hover:shadow-md hover:border-foreground/10">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <Badge
            key={index}
            variant="outline"
            className="font-normal"
          >
            {tech}
          </Badge>
        ))}
      </CardContent>

      <CardFooter className="flex gap-2">
        {links.github && (
          <Button variant="outline" size="sm" asChild aria-label="GitHub Repo">
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1 h-4 w-4" />
              GitHub
            </a>
          </Button>
        )}
        {links.demo && (
          <Button variant="outline" size="sm" asChild aria-label="Live Demo">
            <a href={links.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
