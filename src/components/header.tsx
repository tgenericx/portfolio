import { CodeXml } from "lucide-react"
import { ModeToggle } from "./mode-toggle"

export interface INavItem {
  label: string
  href: string
}

const navItems: INavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  return (
    <header className="w-full border-b bg-background">
      <div className="container flex items-center justify-between py-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 text-xl font-bold">
          <CodeXml className="h-6 w-6 text-primary" />
          <span>tgenericx</span>
        </div>

        {/* Center: Nav (hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Mode Toggle */}
        <div className="flex items-center">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
