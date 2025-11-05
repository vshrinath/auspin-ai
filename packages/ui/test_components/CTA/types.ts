export interface CtaAction {
  /** Visible label for the call-to-action */
  label: string
  /** Destination URL for the action */
  href: string
}

export interface CtaSimpleCenteredProps {
  /** Section headline text */
  title?: string
  /** Supporting description */
  description?: string
  /** Primary action button configuration */
  primaryAction?: CtaAction
  /** Secondary action link configuration */
  secondaryAction?: CtaAction
  /** Optional Tailwind CSS class override */
  className?: string
}

export interface CtaSimpleStackedProps {
  /** Section headline text */
  title?: string
  /** Primary action button */
  primaryAction?: CtaAction
  /** Secondary action link */
  secondaryAction?: CtaAction
  /** Optional Tailwind CSS class override */
  className?: string
}

export interface CtaSplitWithImageProps {
  /** Eyebrow text displayed above the title */
  eyebrow?: string
  /** Section headline text */
  title?: string
  /** Supporting description copy */
  description?: string
  /** Primary action button */
  primaryAction?: CtaAction
  /** Image displayed in the split layout */
  imageUrl?: string
  /** Alternative text for the image */
  imageAlt?: string
  /** Optional Tailwind CSS class override */
  className?: string
}

export interface CtaTwoColumnWithPhotoProps {
  /** Section title */
  title?: string
  /** Supporting description */
  description?: string
  /** Bullet list of benefits */
  benefits?: string[]
  /** Primary action link */
  primaryAction?: CtaAction
  /** Image URL shown alongside the content */
  imageUrl?: string
  /** Alternative text for the image */
  imageAlt?: string
  /** Optional Tailwind CSS class override */
  className?: string
}

export interface CtaWithImageTilesImage {
  /** Image asset URL */
  src: string
  /** Alternative text for accessibility */
  alt: string
}

export interface CtaWithImageTilesProps {
  /** Section title */
  title?: string
  /** Supporting lead paragraph */
  lead?: string
  /** Additional descriptive copy */
  description?: string
  /** Primary action button */
  primaryAction?: CtaAction
  /** Collection of image tiles to render */
  images?: CtaWithImageTilesImage[]
  /** Optional Tailwind CSS class override */
  className?: string
}

export type CtaSimpleCenterdWithBrandProps = CtaSimpleCenteredProps
