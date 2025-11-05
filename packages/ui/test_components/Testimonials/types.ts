export interface TestimonialAuthor {
  /** Full name of the author */
  name: string
  /** Social or username handle */
  handle?: string
  /** Avatar image URL */
  imageUrl: string
  /** Optional author title or role */
  title?: string
}

export interface Testimonial {
  /** Quoted testimonial body */
  body: string
  /** Person providing the testimonial */
  author: TestimonialAuthor
}

export interface TestimonialsGridProps {
  /** Eyebrow heading displayed above the title */
  eyebrow?: string
  /** Main section title */
  title?: string
  /** Collection of testimonials to display */
  testimonials?: Testimonial[]
  /** Optional Tailwind CSS class override */
  className?: string
}

export interface TestimonialsSingleCenteredProps {
  /** Logo image displayed above the quote */
  logoSrc?: string
  /** Accessible text for the logo */
  logoAlt?: string
  /** Quoted testimonial copy */
  quote?: string
  /** Author details */
  author?: TestimonialAuthor
  /** Optional Tailwind CSS class override */
  className?: string
}

export interface TestimonialsSingleWithAvatarProps {
  /** Quoted testimonial copy */
  quote?: string
  /** Author details */
  author?: TestimonialAuthor
  /** Optional Tailwind CSS class override */
  className?: string
}

export interface TestimonialsWithBackgroundImageProps {
  /** Logo displayed above the quote */
  logoSrc?: string
  /** Accessible text for the logo */
  logoAlt?: string
  /** Background image behind the testimonial */
  backgroundImageUrl?: string
  /** Accessible description for the background image */
  backgroundImageAlt?: string
  /** Quoted testimonial copy */
  quote?: string
  /** Author details */
  author?: TestimonialAuthor
  /** Optional Tailwind CSS class override */
  className?: string
}

export interface TestimonialsStarRatingProps {
  /** Numeric rating value */
  rating?: number
  /** Maximum rating value to display */
  maxRating?: number
  /** Accessible label describing the rating */
  ratingLabel?: string
  /** Quoted testimonial copy */
  quote?: string
  /** Author details */
  author?: TestimonialAuthor
  /** Optional Tailwind CSS class override */
  className?: string
}

export interface SideBySideTestimonial extends Testimonial {
  /** Logo shown with the testimonial */
  logoSrc: string
  /** Accessible text for the testimonial logo */
  logoAlt?: string
  /** Optional link the logo should navigate to */
  logoHref?: string
}

export interface TestimonialsTwoSideBySideProps {
  /** Testimonials presented side by side */
  testimonials?: SideBySideTestimonial[]
  /** Optional Tailwind CSS class override */
  className?: string
}
