import type { ComponentType, SVGProps } from 'react'

export interface LogoImage {
  /** Logo image source URL */
  src: string
  /** Accessible alternative text */
  alt: string
  /** Optional intrinsic width */
  width?: number
  /** Optional intrinsic height */
  height?: number
}

export interface LogoCloudItem {
  /** Brand name used as a label */
  name: string
  /** Logo image metadata */
  logo: LogoImage
  /** Optional destination link around the logo */
  href?: string
  /** Optional custom class applied to the wrapper */
  className?: string
}

export interface LogoCloudsBaseProps {
  /** Optional Tailwind CSS class override */
  className?: string
}

export interface LogoCloudsSimpleProps extends LogoCloudsBaseProps {
  /** Section heading */
  title?: string
  /** Collection of logos displayed in the grid */
  logos?: LogoCloudItem[]
}

export interface LogoCloudsGridProps extends LogoCloudsBaseProps {
  /** Logos displayed in the dense grid */
  logos?: LogoCloudItem[]
}

export interface LogoCloudPrimaryAction {
  /** CTA label for the primary button */
  label: string
  /** Destination URL for the primary action */
  href: string
}

export interface LogoCloudSecondaryAction {
  /** CTA label for the secondary link */
  label: string
  /** Destination URL for the secondary action */
  href: string
}

export interface LogoCloudsLogoOnRightProps extends LogoCloudsBaseProps {
  /** Section heading */
  title?: string
  /** Supporting description text */
  description?: string
  /** Primary call-to-action configuration */
  primaryAction?: LogoCloudPrimaryAction
  /** Secondary link configuration */
  secondaryAction?: LogoCloudSecondaryAction
  /** Brand logos displayed alongside the copy */
  logos?: LogoCloudItem[]
}

export interface LogoCloudFeature {
  /** Feature name */
  name: string
  /** Short description of the feature */
  description: string
  /** Optional icon rendered next to the feature */
  icon?: ComponentType<SVGProps<SVGSVGElement>>
}

export interface LogoCloudTestimonial {
  /** Quoted testimonial text */
  quote: string
  /** Full name of the person quoted */
  authorName: string
  /** Optional social handle or subtitle */
  authorHandle?: string
  /** Optional role or title */
  authorRole?: string
  /** Avatar image URL */
  authorImageUrl?: string
  /** Avatar alternative text */
  authorImageAlt?: string
}

export interface LogoCloudsWithTestimonialProps extends LogoCloudsBaseProps {
  /** Eyebrow text displayed above the title */
  eyebrow?: string
  /** Section heading */
  title?: string
  /** Supporting description text */
  description?: string
  /** Feature list displayed alongside the testimonial */
  features?: LogoCloudFeature[]
  /** Testimonial content */
  testimonial?: LogoCloudTestimonial
}

export type { LogoCloudItem as BasicLogoCloudItem }
