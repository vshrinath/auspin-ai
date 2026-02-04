import * as React from "react"

import { cn } from "@/lib/utils"

export interface SelectProps extends React.ComponentProps<"select"> {
  error?: boolean
  success?: boolean
  helperText?: string
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, success, helperText, children, ...props }, ref) => {
    return (
      <div className="w-full">
        <div className="relative">
          <select
            className={cn(
              "flex h-12 w-full appearance-none rounded-md border-2 bg-transparent px-3 py-2 pr-10 text-base shadow-sm transition-all duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 min-h-touch-target",
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
          >
            {children}
          </select>
          {/* Dropdown arrow icon */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="h-5 w-5 text-stone-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
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
Select.displayName = "Select"

export { Select }
