import type { FormEvent } from 'react'

export interface ActionPanelAction {
  /** Visible label for the primary button */
  label: string
  /** Optional click handler for the action button */
  onClick?: () => void
  /** HTML button type attribute */
  type?: 'button' | 'submit' | 'reset'
}

export interface ActionPanelInput {
  /** Unique identifier applied to the input element */
  id: string
  /** Form field name attribute */
  name: string
  /** Input type attribute (e.g. email, text) */
  type: string
  /** Placeholder copy displayed inside the input */
  placeholder?: string
  /** Accessible label announced by screen readers */
  ariaLabel?: string
  /** Default value rendered in the input */
  defaultValue?: string
}

export interface ActionPanelToggle {
  /** Form field name attribute */
  name: string
  /** Accessible label for the toggle control */
  ariaLabel: string
  /** ID of the description element referenced by aria-describedby */
  descriptionId: string
  /** Whether the toggle renders as checked initially */
  defaultChecked?: boolean
  /** Handler invoked when the toggle state changes */
  onChange?: (checked: boolean) => void
}

export interface ActionPanelsSimpleProps {
  /** Panel headline text */
  title?: string
  /** Supporting descriptive copy */
  description?: string
  /** Primary button configuration */
  action?: ActionPanelAction
  /** Optional Tailwind CSS class override */
  className?: string
}

export interface ActionPanelsWithInputProps {
  /** Panel headline text */
  title?: string
  /** Supporting description for the panel */
  description?: string
  /** Input configuration for the form field */
  input?: ActionPanelInput
  /** Submit button configuration */
  submitAction?: ActionPanelAction
  /** Optional Tailwind CSS class override */
  className?: string
  /** Form submission handler */
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void
}

export interface ActionPanelsWithToggleProps {
  /** Panel headline text */
  title?: string
  /** Supporting description for the panel */
  description?: string
  /** Toggle configuration */
  toggle?: ActionPanelToggle
  /** Optional Tailwind CSS class override */
  className?: string
}
