import * as React from "react"

import { cn } from "@/lib/utils"

type ContainerSize = "sm" | "md" | "lg" | "xl"

const containerSizes: Record<ContainerSize, string> = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
}

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: ContainerSize
}

const Container = ({
  className,
  children,
  size = "md",
  ...props
}: ContainerProps) => {
  return (
    <div
      className={cn("mx-auto px-4", containerSizes[size], className)}
      {...props}
    >
      {children}
    </div>
  )
}
Container.displayName = "Container"

export { Container }
