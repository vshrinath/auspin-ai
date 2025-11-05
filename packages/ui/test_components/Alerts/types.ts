import type { ComponentType, SVGProps } from 'react'

export interface AlertToneClasses {
  /** Tailwind classes applied to the root container */
  container?: string
  /** Tailwind classes applied to the SVG icon */
  icon?: string
  /** Tailwind classes applied to the title element */
  title?: string
  /** Tailwind classes applied to the description element */
  description?: string
  /** Tailwind classes applied to the message element */
  message?: string
  /** Tailwind classes applied to the link element */
  link?: string
  /** Tailwind classes applied to the dismiss button */
  dismissButton?: string
  /** Tailwind classes applied to the primary action button */
  primaryAction?: string
  /** Tailwind classes applied to the secondary action button */
  secondaryAction?: string
}

export interface AlertBaseProps {
  /** Optional container class override */
  className?: string
  /** Override structural tone classes */
  toneClasses?: AlertToneClasses
}

export interface AlertContentProps {
  /** Alert title or headline */
  title?: string
  /** Supporting description copy */
  description?: string
  /** Icon rendered to the left of the copy */
  icon?: ComponentType<SVGProps<SVGSVGElement>>
}

export interface AlertMessageProps {
  /** Primary message displayed inside the alert */
  message?: string
  /** Icon rendered to the left of the message */
  icon?: ComponentType<SVGProps<SVGSVGElement>>
}

export interface AlertButtonAction {
  /** Visible label for the button */
  label: string
  /** Optional click handler */
  onClick?: () => void
  /** Button type attribute */
  type?: 'button' | 'submit' | 'reset'
  /** Tailwind classes applied to the button */
  className?: string
}

export interface AlertLinkAction {
  /** Visible label for the link */
  label: string
  /** Destination URL for the link */
  href: string
  /** Tailwind classes applied to the link */
  className?: string
}

export interface AlertsWithActionsProps extends AlertBaseProps, AlertContentProps {
  /** Collection of action buttons */
  actions?: [AlertButtonAction, AlertButtonAction] | AlertButtonAction[]
}

export interface AlertsWithDescriptionProps extends AlertBaseProps, AlertContentProps {}

export interface AlertsWithDismissButtonProps extends AlertBaseProps, AlertMessageProps {
  /** Accessible label for the dismiss control */
  dismissLabel?: string
  /** Handler invoked when the dismiss button is clicked */
  onDismiss?: () => void
  /** Icon displayed within the dismiss button */
  dismissIcon?: ComponentType<SVGProps<SVGSVGElement>>
}

export interface AlertsWithLinkProps extends AlertBaseProps, AlertMessageProps {
  /** Link rendered alongside the alert text */
  link?: AlertLinkAction
}
