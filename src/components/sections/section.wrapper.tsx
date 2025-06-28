import { cn } from "@/lib/utils"
import { SectionHeader } from "./section.header"

export interface SectionWrapperProps {
  id?: string
  title?: string
  description?: string
  children: React.ReactNode
  align?: "left" | "center"
  className?: string
}

export function SectionWrapper({
  id,
  title,
  description,
  children,
  align,
  className,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-6 sm:py-10 md:py-12 lg:py-24", className)}>
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 space-y-10">
        {(title || description) && (
          <SectionHeader
            title={title}
            description={description}
            align={align}
          />
        )}
        {children}
      </div>
    </section>
  )
}
