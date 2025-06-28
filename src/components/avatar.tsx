import { User } from "lucide-react"
import clsx from "clsx"

interface AvatarProps {
  src?: string
  alt?: string
  size?: number
  className?: string
}

export function Avatar({ src, alt = "User avatar", size, className = "" }: AvatarProps) {
  const responsiveClasses = size
    ? { width: `${size}px`, height: `${size}px` }
    : {}

  return (
    <div
      className={clsx(
        "rounded-full border overflow-hidden bg-muted flex items-center justify-center",
        !size && "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24",
        className
      )}
      style={size ? responsiveClasses : undefined}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full"
          onError={(e) => {
            e.currentTarget.onerror = null
            e.currentTarget.src = ""
          }}
        />
      ) : (
        <User className="text-muted-foreground w-1/2 h-1/2" />
      )}
    </div>
  )
}
