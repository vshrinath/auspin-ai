import type { ComponentType, SVGProps } from 'react'

export interface NavigationItem {
  /** Visible label for the navigation link */
  name: string
  /** Destination URL */
  href: string
}

export interface NavigationLogo {
  /** Logo image source */
  src: string
  /** Accessible alternate text */
  alt: string
  /** Link destination for the logo */
  href?: string
}

export interface NavigationAction {
  /** Action label */
  label: string
  /** Destination URL */
  href: string
}

export interface NavigationProduct {
  /** Product name displayed in menus */
  name: string
  /** Supporting description text */
  description: string
  /** Destination URL */
  href: string
  /** Optional icon rendered alongside the product */
  icon?: ComponentType<SVGProps<SVGSVGElement>>
}

export interface NavigationCallToAction {
  /** CTA label text */
  name: string
  /** Destination URL */
  href: string
  /** Icon rendered with the CTA */
  icon?: ComponentType<SVGProps<SVGSVGElement>>
}

export interface BaseNavbarProps {
  /** Logo configuration */
  logo?: NavigationLogo
  /** Primary navigation links */
  navigation?: NavigationItem[]
  /** Action rendered on the right side */
  action?: NavigationAction
  /** Optional Tailwind CSS class override */
  className?: string
}

export interface NavbarBrandBackgroundProps extends BaseNavbarProps {
  /** Background color class string */
  backgroundClassName?: string
}

export type NavbarWithCenteredLogoProps = BaseNavbarProps

export interface NavbarWithFlyoutMenuProps extends BaseNavbarProps {
  /** Product collection displayed in the flyout */
  products?: NavigationProduct[]
  /** Additional call-to-action links */
  callsToAction?: NavigationCallToAction[]
}

export type NavbarFullWidthFlyoutMenuProps = NavbarWithFlyoutMenuProps
