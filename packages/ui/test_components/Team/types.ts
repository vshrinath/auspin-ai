export interface TeamMember {
  /** Full name of the team member */
  name: string
  /** Job title or role */
  role: string
  /** Profile image URL */
  imageUrl: string
  /** Optional biography or description */
  bio?: string
  /** Optional link to the member's X profile */
  xUrl?: string
  /** Optional link to the member's LinkedIn profile */
  linkedinUrl?: string
}

export interface TeamWithSmallImagesProps {
  /** Section title */
  title?: string
  /** Section description text */
  description?: string
  /** Array of team members */
  members?: TeamMember[]
  /** Optional Tailwind CSS class override */
  className?: string
}

export type TeamWithLargeImagesProps = TeamWithSmallImagesProps

export type TeamGridWithRoundImagesProps = TeamWithSmallImagesProps

export type TeamLargeGridWithCardsProps = TeamWithSmallImagesProps

export type TeamWithVerticalImagesProps = TeamWithSmallImagesProps

export type TeamFullWidthVerticalImagesProps = TeamWithSmallImagesProps
