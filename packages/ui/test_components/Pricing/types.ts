export interface PricingTier {
  /** Unique identifier for the tier */
  id: string
  /** Display name for the tier */
  name: string
  /** Link for the tier call-to-action */
  href: string
  /** Monthly price label */
  priceMonthly: string
  /** Short description of the plan */
  description: string
  /** Feature bullets included in the plan */
  features: string[]
  /** Flag for highlighting the tier as most popular */
  mostPopular?: boolean
  /** Override label for the call-to-action button */
  ctaLabel?: string
  /** Flag for tiers that should be visually featured */
  featured?: boolean
}

export interface PricingThreeTiersProps {
  /** Eyebrow heading displayed above the title */
  eyebrow?: string
  /** Main section title */
  title?: string
  /** Supporting descriptive text */
  description?: string
  /** Pricing tiers configuration */
  tiers?: PricingTier[]
  /** Optional Tailwind CSS class override */
  className?: string
  /** Shared call-to-action label used when tiers omit ctaLabel */
  defaultCtaLabel?: string
}

export interface PricingTwoTiersEmphasisProps {
  /** Eyebrow heading displayed above the title */
  eyebrow?: string
  /** Main section title */
  title?: string
  /** Supporting description */
  description?: string
  /** Tier configuration for the emphasis layout */
  tiers?: PricingTier[]
  /** Label text for the call-to-action button */
  ctaLabel?: string
  /** Optional Tailwind CSS class override */
  className?: string
}

export interface PricingHighlight {
  /** Description of what is included */
  description: string
  /** Marks highlight as unavailable for the tier */
  disabled?: boolean
}

export interface PricingTierWithHighlights extends PricingTier {
  /** Highlighted bullet list used in cards */
  highlights?: PricingHighlight[]
}

export interface PricingComparisonFeature {
  /** Feature name displayed in the comparison table */
  name: string
  /** Mapping of tier name to either a boolean or string value */
  tiers: Record<string, boolean | string>
}

export interface PricingComparisonSection {
  /** Section heading within the comparison */
  name: string
  /** Features included in the section */
  features: PricingComparisonFeature[]
}

export interface PricingLogo {
  /** Image source for the logo */
  src: string
  /** Accessible text for the logo */
  alt: string
}

export interface PricingThreeTiersWithLogoProps {
  /** Main section title */
  title?: string
  /** Supporting description */
  description?: string
  /** Tier cards displayed above the comparison table */
  tiers?: PricingTierWithHighlights[]
  /** Comparison sections used in the matrix table */
  sections?: PricingComparisonSection[]
  /** Logo strip displayed beneath the cards */
  logos?: PricingLogo[]
  /** Optional Tailwind CSS class override */
  className?: string
}

export interface PricingThreeTiersComparisonTableProps {
  /** Eyebrow heading displayed above the title */
  eyebrow?: string
  /** Main section title */
  title?: string
  /** Supporting description */
  description?: string
  /** Tier configuration to compare */
  tiers?: PricingTier[]
  /** Comparison sections used in the table */
  sections?: PricingComparisonSection[]
  /** Label used for the call-to-action buttons */
  ctaLabel?: string
  /** Optional Tailwind CSS class override */
  className?: string
}

export interface PricingToggleAmounts {
  /** Monthly price */
  monthly: string
  /** Annual price */
  annually: string
}

export interface PricingToggleTier {
  /** Display name for the tier */
  name: string
  /** Unique identifier */
  id: string
  /** Link for the call-to-action */
  href: string
  /** Price values for each frequency */
  price: PricingToggleAmounts
  /** Short description for the tier */
  description: string
  /** Included feature bullets */
  features: string[]
  /** Highlight this tier visually */
  featured?: boolean
  /** Custom call-to-action label */
  ctaLabel?: string
}

export interface PricingThreeTiersWithToggleProps {
  /** Eyebrow heading displayed above the title */
  eyebrow?: string
  /** Main section title */
  title?: string
  /** Supporting description */
  description?: string
  /** Tier configuration for the toggle layout */
  tiers?: PricingToggleTier[]
  /** Label displayed for the monthly toggle option */
  monthlyLabel?: string
  /** Label displayed for the annual toggle option */
  annualLabel?: string
  /** Suffix appended to monthly prices */
  monthlyPriceSuffix?: string
  /** Suffix appended to annual prices */
  annualPriceSuffix?: string
  /** Optional Tailwind CSS class override */
  className?: string
}

export interface PricingSinglePriceWithDetailsProps {
  /** Main section title */
  title?: string
  /** Supporting introduction copy */
  description?: string
  /** Name of the plan */
  planName?: string
  /** Detailed description of the plan */
  planDescription?: string
  /** Feature list included with the plan */
  includedFeatures?: string[]
  /** Price label displayed prominently */
  price?: string
  /** Supplementary price text (e.g., currency) */
  priceSuffix?: string
  /** Call-to-action label */
  ctaLabel?: string
  /** Call-to-action href */
  ctaHref?: string
  /** Footnote text displayed below the button */
  disclaimer?: string
  /** Optional Tailwind CSS class override */
  className?: string
}
