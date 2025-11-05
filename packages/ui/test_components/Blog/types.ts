export interface BlogCategory {
  /** Category label displayed with the post */
  title: string
  /** Optional link for the category badge */
  href?: string
}

export interface BlogAuthor {
  /** Author full name */
  name: string
  /** Optional author role or title */
  role?: string
  /** Optional destination URL for the author */
  href?: string
  /** URL of the author avatar image */
  imageUrl?: string
  /** Alternative text for the avatar image */
  imageAlt?: string
}

export interface BlogPost {
  /** Unique identifier for list rendering */
  id?: number | string
  /** Post headline */
  title: string
  /** Destination URL for the post */
  href?: string
  /** Supporting description text */
  description?: string
  /** Human-readable publish date */
  date?: string
  /** Machine-readable publish date */
  datetime?: string
  /** Category metadata attached to the post */
  category?: BlogCategory
  /** Author metadata for the post */
  author?: BlogAuthor
  /** Preview image URL */
  imageUrl?: string
  /** Alternative text for the preview image */
  imageAlt?: string
}

export interface BlogSectionProps {
  /** Section headline */
  title?: string
  /** Supporting section description */
  description?: string
  /** Optional Tailwind CSS class override */
  className?: string
}

export interface BlogSingleColumnProps extends BlogSectionProps {
  /** Collection of posts rendered in a single column */
  posts?: BlogPost[]
}

export interface BlogSingleColumnWithImagesProps extends BlogSectionProps {
  /** Collection of posts rendered with preview images */
  posts?: BlogPost[]
}

export interface BlogThreeColumnProps extends BlogSectionProps {
  /** Collection of posts rendered across three columns */
  posts?: BlogPost[]
}

export interface BlogThreeColumnBackgroundImagesProps extends BlogSectionProps {
  /** Collection of posts rendered with full background images */
  posts?: BlogPost[]
}

export interface BlogThreeColumnWithImagesProps extends BlogSectionProps {
  /** Collection of posts rendered with card images and metadata */
  posts?: BlogPost[]
}

export interface BlogWithFeaturedPostProps extends BlogSectionProps {
  /** Highlighted featured post configuration */
  featuredPost?: BlogPost
  /** Supporting posts rendered in the list */
  posts?: BlogPost[]
}
