import { type LucideIcon } from "lucide-react"

export interface FooterProps {
  copyrightText: string
  contactLinks: Array<{
    name: string
    icon: LucideIcon
    link: string
    ariaLabel?: string
  }>
}

export function Footer({ copyrightText, contactLinks }: FooterProps) {
  return (
    <footer className="border-t bg-background px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          {copyrightText}
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:justify-end md:gap-6">
          {contactLinks.map(({ name, icon: Icon, link, ariaLabel }, index) => (
            <a
              key={index}
              href={link}
              aria-label={ariaLabel || name}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="h-4 w-4" />
              {name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
