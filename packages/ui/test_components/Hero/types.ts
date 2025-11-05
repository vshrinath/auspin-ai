export interface HeroNavigationItem {
  /** Navigation link label */
  name: string
  /** URL for the navigation item */
  href: string
}

export interface HeroAnnouncement {
  /** Announcement message shown in the pill */
  message: string
  /** Link URL for the announcement call-to-action */
  href: string
  /** Link label displayed inside the announcement */
  linkLabel: string
}

export interface HeroAction {
  /** CTA label text */
  label: string
  /** CTA hyperlink reference */
  href: string
}

export interface HeroLogo {
  /** Accessible company name */
  alt: string
  /** Link destination when the logo is clicked */
  href: string
  /** Logo image URL */
  src: string
}

export interface HeroLoginAction {
  /** Login link label */
  label: string
  /** Login link destination */
  href: string
}

export interface HeroSimpleCenteredProps {
  /** Primary navigation items */
  navigation?: HeroNavigationItem[]
  /** Header logo configuration */
  logo?: HeroLogo
  /** Optional announcement banner */
  announcement?: HeroAnnouncement
  /** Main hero headline */
  title?: string
  /** Supporting description */
  description?: string
  /** Primary call-to-action button */
  primaryAction?: HeroAction
  /** Secondary call-to-action link */
  secondaryAction?: HeroAction
  /** Login link displayed in the header */
  login?: HeroLoginAction
  /** Optional Tailwind CSS class override */
  className?: string
}
