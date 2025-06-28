export interface SectionHeaderProps {
  title?: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeader({
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left"

  return (
    <header className={`space-y-2 max-w-2xl ${alignment}`}>
      {title && (
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </header>
  )
}
