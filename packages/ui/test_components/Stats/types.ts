export interface StatItem {
  /** Unique identifier used as the React key */
  id?: number | string
  /** Label describing the metric */
  name: string
  /** Display value for the metric */
  value: string
}

export interface StatsSimpleProps {
  /** Main section title */
  title?: string
  /** Supporting description */
  description?: string
  /** List of statistics to display */
  stats?: StatItem[]
  /** Optional Tailwind CSS class override */
  className?: string
}

export interface StatsSplitWithImageProps {
  /** Eyebrow heading shown above the title */
  eyebrow?: string
  /** Main section title */
  title?: string
  /** Supporting description */
  description?: string
  /** Hero image URL displayed alongside stats */
  imageUrl?: string
  /** Image alt text for accessibility */
  imageAlt?: string
  /** List of statistics to display */
  stats?: StatItem[]
  /** Optional Tailwind CSS class override */
  className?: string
}

export interface StatsTimelineItem {
  /** Milestone title */
  name: string
  /** Additional context about the milestone */
  description: string
  /** Human-readable date label */
  date: string
  /** Machine-readable date value */
  dateTime: string
}

export interface StatsTimelineProps {
  /** Collection of timeline milestones */
  timeline?: StatsTimelineItem[]
  /** Optional Tailwind CSS class override */
  className?: string
}

export interface StatsWithDescriptionProps {
  /** Section title */
  title?: string
  /** Lead paragraph copy */
  lead?: string
  /** Supporting paragraph copy */
  description?: string
  /** Statistics to highlight alongside content */
  stats?: StatItem[]
  /** Optional Tailwind CSS class override */
  className?: string
}
