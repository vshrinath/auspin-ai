import type { ComponentType, SVGProps } from 'react'

export interface HeaderBaseProps {
  /** Optional Tailwind CSS class override */
  className?: string
}

export interface HeaderCopyProps extends HeaderBaseProps {
  /** Eyebrow text displayed above the title */
  eyebrow?: string
  /** Primary heading */
  title?: string
  /** Supporting description */
  description?: string
}

export type HeaderSimpleProps = HeaderCopyProps

export type HeaderCenteredProps = HeaderCopyProps

export interface BackgroundMedia {
  /** Background image source URL */
  imageUrl?: string
  /** Background image alt text */
  imageAlt?: string
}

export interface HeaderSimpleWithBackgroundProps extends HeaderCopyProps {
  /** Configuration for the background media */
  background?: BackgroundMedia
}

export interface HeaderLink {
  /** Link label */
  name: string
  /** Link destination */
  href: string
}

export interface HeaderStat {
  /** Stat label */
  name: string
  /** Stat value */
  value: string
}

export interface HeaderWithStatsProps extends HeaderCopyProps {
  /** Link list displayed under the copy */
  links?: HeaderLink[]
  /** Stat cards displayed under the links */
  stats?: HeaderStat[]
  /** Background media configuration */
  background?: BackgroundMedia
}

export interface HeaderCard {
  /** Card title */
  name: string
  /** Card description text */
  description: string
  /** Icon component rendered in the card */
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export interface HeaderWithCardsProps extends HeaderCopyProps {
  /** Cards rendered beneath the header copy */
  cards?: HeaderCard[]
  /** Background media configuration */
  background?: BackgroundMedia
}
