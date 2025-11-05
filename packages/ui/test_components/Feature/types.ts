import type { ComponentType, SVGProps } from 'react'

export interface FeatureBaseProps {
  /** Optional Tailwind CSS class override */
  className?: string
}

export interface FeatureCopyProps extends FeatureBaseProps {
  /** Eyebrow text shown above the title */
  eyebrow?: string
  /** Primary heading */
  title?: string
  /** Supporting description copy */
  description?: string
}

export interface FeatureItem {
  /** Feature title */
  name: string
  /** Brief description of the feature */
  description: string
}

export interface FeatureIconItem extends FeatureItem {
  /** Optional icon rendered alongside the feature */
  icon?: ComponentType<SVGProps<SVGSVGElement>>
  /** Destination for the feature link */
  href?: string
  /** Custom call-to-action label */
  ctaLabel?: string
}

export interface FeatureSimpleProps extends FeatureCopyProps {
  /** Collection of high-level features */
  features?: FeatureItem[]
}

export interface FeatureThreeColumnWithIconsProps extends FeatureCopyProps {
  /** Collection of features with icons and optional links */
  features?: FeatureIconItem[]
  /** Default link label used when a feature does not specify ctaLabel */
  linkLabel?: string
}

export interface FeatureScreenshot {
  /** Screenshot URL */
  src: string
  /** Accessible alternative text */
  alt: string
  /** Optional intrinsic width */
  width?: number
  /** Optional intrinsic height */
  height?: number
}

export interface FeatureWithProductScreenshotProps extends FeatureCopyProps {
  /** Feature list displayed beside the screenshot */
  features?: FeatureIconItem[]
  /** Screenshot configuration */
  screenshot?: FeatureScreenshot
}

export interface FeatureWithLargeScreenshotProps extends FeatureCopyProps {
  /** Feature list displayed beneath the screenshot */
  features?: FeatureIconItem[]
  /** Screenshot configuration */
  screenshot?: FeatureScreenshot
}

export interface FeaturePrimaryAction {
  /** Action label */
  label: string
  /** Destination URL */
  href: string
}

export interface FeatureTestimonial {
  /** Quoted testimonial body */
  quote: string
  /** Person giving the testimonial */
  authorName: string
  /** Author role or title */
  authorRole?: string
  /** Avatar image URL */
  authorImageUrl?: string
  /** Avatar alt text */
  authorImageAlt?: string
}

export interface FeatureWithTestimonialProps extends FeatureCopyProps {
  /** Primary call-to-action button */
  primaryAction?: FeaturePrimaryAction
  /** Featured testimonial content */
  testimonial?: FeatureTestimonial
  /** Screenshot configuration */
  screenshot?: FeatureScreenshot
}

export type { FeatureItem as BasicFeatureItem, FeatureIconItem as IconFeatureItem }
