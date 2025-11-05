import type { ComponentType, SVGProps } from 'react'

export interface BannerToneClasses {
  /** Tailwind classes applied to the root container */
  container?: string
  /** Tailwind classes applied to banner copy */
  text?: string
  /** Tailwind classes applied to highlighted text */
  highlight?: string
  /** Tailwind classes applied to inline links */
  link?: string
  /** Tailwind classes applied to CTA buttons */
  ctaButton?: string
  /** Tailwind classes applied to dismiss buttons */
  dismissButton?: string
  /** Tailwind classes applied to dismiss icons */
  dismissIcon?: string
  /** Tailwind classes applied to primary actions */
  primaryAction?: string
  /** Tailwind classes applied to secondary actions */
  secondaryAction?: string
}

export interface BannerBaseProps {
  /** Optional Tailwind CSS class override */
  className?: string
  /** Override default tone-specific class names */
  toneClasses?: BannerToneClasses
}

export interface BannerAnnouncement {
  /** Bolded highlight text displayed before the message */
  highlight?: string
  /** Supporting announcement message */
  message: string
  /** Destination URL for the announcement */
  href?: string
  /** Whether to display the trailing arrow glyph */
  showArrow?: boolean
}

export interface BannerButtonAction {
  /** Visible label for the action */
  label: string
  /** Optional link destination */
  href?: string
  /** Optional click handler when rendered as a button */
  onClick?: () => void
  /** Button type attribute */
  type?: 'button' | 'submit' | 'reset'
  /** Tailwind classes applied to the action */
  className?: string
  /** Whether to append a trailing arrow glyph */
  showArrow?: boolean
}

export interface BannerDismissAction {
  /** Accessible label announced by screen readers */
  label?: string
  /** Handler invoked when the dismiss button is pressed */
  onDismiss?: () => void
  /** Icon rendered inside the dismiss button */
  icon?: ComponentType<SVGProps<SVGSVGElement>>
}

export interface BannerInlineLink {
  /** Visible label for the inline link */
  label: string
  /** Destination URL for the inline link */
  href: string
  /** Tailwind classes applied to the inline link */
  className?: string
  /** Whether to append a trailing arrow glyph */
  showArrow?: boolean
}

export interface BannerBottomAlignedProps extends BannerBaseProps {
  /** Announcement configuration displayed within the banner */
  announcement?: BannerAnnouncement
  /** Dismiss control for closing the banner */
  dismiss?: BannerDismissAction
}

export type BannerFloatingAtBottomProps = BannerBottomAlignedProps

export type BannerOnBrandProps = BannerBottomAlignedProps

export interface BannerWithButtonProps extends BannerBaseProps {
  /** Announcement content rendered to the left of the CTA */
  announcement?: BannerAnnouncement
  /** Call-to-action rendered as a pill button */
  cta?: BannerButtonAction
  /** Dismiss control for closing the banner */
  dismiss?: BannerDismissAction
}

export interface BannerWithLinkProps extends BannerBaseProps {
  /** Message copy displayed before the inline link */
  message?: string
  /** Inline link rendered within the message */
  link?: BannerInlineLink
  /** Dismiss control for closing the banner */
  dismiss?: BannerDismissAction
}

export interface BannerPrivacyFullWidthProps extends BannerBaseProps {
  /** Primary privacy notice copy */
  message?: string
  /** Inline link directing users to privacy details */
  policyLink?: BannerInlineLink
  /** Primary button action */
  primaryAction?: BannerButtonAction
  /** Secondary text button action */
  secondaryAction?: BannerButtonAction
}

export type BannerPrivacyNoticeProps = BannerPrivacyFullWidthProps
