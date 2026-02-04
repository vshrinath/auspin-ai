import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps extends React.ComponentProps<"input"> {
  error?: boolean
  success?: boolean
  helperText?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, success, helperText, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-md border-2 bg-transparent px-3 py-2 text-base shadow-sm transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 min-h-touch-target",
            // Default state
            "border-stone-200 focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
            // Error state
            error && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500",
            // Success state
            success && "border-green-500 focus-visible:border-green-500 focus-visible:ring-green-500",
            className
          )}
          ref={ref}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={helperText ? `${props.id}-helper` : undefined}
          {...props}
        />
        {helperText && (
          <p
            id={`${props.id}-helper`}
            className={cn(
              "mt-1.5 text-sm",
              error && "text-red-600",
              success && "text-green-600",
              !error && !success && "text-stone-600"
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
