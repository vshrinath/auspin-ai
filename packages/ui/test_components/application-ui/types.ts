export interface DescriptionListItem {
  /** Label displayed alongside the value */
  label: string
  /** Primary value text */
  value: string
}

export interface DescriptionListProps {
  /** Items to render in the description list */
  items?: DescriptionListItem[]
  /** Optional Tailwind CSS class override */
  className?: string
}

export interface DescriptionListWithAvatarProps extends DescriptionListProps {
  /** Optional avatar image associated with the first item */
  avatarUrl?: string
  /** Accessible name for the avatar */
  avatarAlt?: string
}

export interface DescriptionListInCardProps extends DescriptionListProps {
  /** Optional card class override */
  cardClassName?: string
}
