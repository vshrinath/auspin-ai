// Content type definitions for AUSPIN website
// These interfaces define the structure of all content objects used throughout the site

// ============================================================================
// Hero Section Types
// ============================================================================

export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  trustBadges: TrustBadge[];
}

export interface TrustBadge {
  icon: string;
  text: string;
  emphasis?: string;
}

// ============================================================================
// Reality Check Section Types
// ============================================================================

export interface RealityCheckContent {
  statistic: string;
  statisticLabel: string;
  funnelData: FunnelStage[];
  failureCategories: FailureCategory[];
  calloutText: string;
}

export interface FunnelStage {
  label: string;
  value: number;
  color: string;
}

export interface FailureCategory {
  title: string;
  description: string;
  icon: string;
}

// ============================================================================
// Board Questions Section Types
// ============================================================================

export interface BoardQuestionsContent {
  headline: string;
  subheadline: string;
  questions: BoardQuestion[];
  ctaText: string;
  ctaLink: string;
}

export interface BoardQuestion {
  question: string;
  challenge: string;
  icon: string;
}

// ============================================================================
// Differentiation Section Types
// ============================================================================

export interface DifferentiationContent {
  philosophy: string;
  differentiators: Differentiator[];
  honestQuestion: string;
  honestAnswer: string;
}

export interface Differentiator {
  title: string;
  description: string;
  icon: string;
}

// ============================================================================
// Approach Section Types
// ============================================================================

export interface ApproachContent {
  principles: Principle[];
}

export interface Principle {
  title: string;
  theRisk: string;
  howWeMitigateIt: string;
  icon: string;
}

// ============================================================================
// Services Section Types
// ============================================================================

export interface ServicesContent {
  services: Service[];
  ctaText: string;
  ctaLink: string;
}

export interface Service {
  title: string;
  icon: string;
  cxoProblem: string;
  deliverables: string[];
  preselect?: string;
}

// ============================================================================
// Outcomes Section Types
// ============================================================================

export interface OutcomesContent {
  outcomes: Outcome[];
}

export interface Outcome {
  category: string;
  icon: string;
  beforeState: string;
  afterState: string;
  metrics?: string[];
}

// ============================================================================
// Process Section Types
// ============================================================================

export interface ProcessContent {
  sprints: Sprint[];
  ctaText: string;
  ctaLink: string;
}

export interface Sprint {
  name: string;
  duration: string;
  activities: string;
  whyMatters: string;
  outcome: string;
  icon: string;
}

// ============================================================================
// Team Section Types
// ============================================================================

export interface TeamContent {
  coreTeam: TeamMember[];
  advisors: TeamMember[];
}

export interface TeamMember {
  name: string;
  title: string;
  photo: string;
  credentials: string[];
  whyMatters: string;
  linkedin?: string;
}

// ============================================================================
// Social Proof Section Types
// ============================================================================

export interface SocialProofContent {
  testimonials: Testimonial[];
}

export interface Testimonial {
  quote: string;
  metrics?: string[];
  role: string;
  industry: string;
  anonymous: boolean;
}

// ============================================================================
// CTA Section Types
// ============================================================================

export interface CTAContent {
  heading: string;
  formFields: FormField[];
  leadMagnetText: string;
  leadMagnetFile: string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'select' | 'textarea';
  required: boolean;
  options?: string[];
  placeholder?: string;
}

// ============================================================================
// Qualification Section Types
// ============================================================================

export interface QualificationContent {
  disqualifiers: string[];
  qualifiers: string[];
}

// ============================================================================
// Footer Types
// ============================================================================

export interface FooterContent {
  sections: FooterSection[];
  contactInfo: ContactInfo;
  tagline: string;
  legalLinks: Link[];
}

export interface FooterSection {
  title: string;
  links: Link[];
}

export interface Link {
  text: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
}

// ============================================================================
// Form Submission Types
// ============================================================================

export interface FormSubmission {
  name: string;
  email: string;
  company: string;
  role: string;
  region: string;
  outcome: string;
  service?: string;
}

export interface FormspreeResponse {
  ok: boolean;
  next?: string;
  errors?: FormError[];
}

export interface FormError {
  field: string;
  message: string;
}
