# Design Document: AUSPIN Website Redesign

## Overview

This design document specifies the technical architecture and implementation details for the AUSPIN.AI website redesign. The redesign transforms the existing site into a CXO-optimized marketing platform with 10 major sections, markdown-based content management, and performance-optimized static export.

### Design Goals

1. **CXO-Focused Messaging**: Every section addresses specific executive concerns with practitioner-focused value propositions
2. **Premium Positioning**: Visual design conveys confidence and expertise for Middle East, India, and SE Asia markets
3. **Performance Excellence**: 90+ Lighthouse score with sub-2s load times on 3G connections
4. **Content Flexibility**: Non-technical users can update all text through markdown files
5. **Accessibility Compliance**: WCAG 2.1 AA standards for inclusive access
6. **Static Export**: Zero server-side dependencies for Cloudflare Pages deployment

### Technology Stack

- **Framework**: Next.js 14+ with App Router and static export
- **Styling**: Tailwind CSS 3.4+ with custom design tokens
- **Typography**: Inter (headings/body), JetBrains Mono (metrics)
- **Content**: TypeScript constants with type-safe interfaces
- **Forms**: Formspree API integration
- **Animations**: Framer Motion (client-side only)
- **Icons**: Heroicons + custom SVG icons
- **Deployment**: Cloudflare Pages with static HTML output

## Architecture

### System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Static Site Generation                   │
│                                                              │
│  ┌──────────────┐      ┌──────────────┐     ┌────────────┐ │
│  │  TypeScript  │─────▶│  Next.js     │────▶│   Static   │ │
│  │  Content     │      │  Build       │     │   HTML     │ │
│  │  Constants   │      │  Process     │     │   Output   │ │
│  └──────────────┘      └──────────────┘     └────────────┘ │
│                                                              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  Cloudflare      │
                    │  Pages CDN       │
                    └──────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  User Browser    │
                    │  - React Hydration│
                    │  - Client Animations│
                    │  - Form Handling │
                    └──────────────────┘
```

### Directory Structure

```
apps/web/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Main landing page
│   │   ├── layout.tsx               # Root layout with fonts
│   │   └── globals.css              # Tailwind imports
│   ├── components/
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── RealityCheckSection.tsx
│   │   │   ├── DifferentiationSection.tsx
│   │   │   ├── ApproachSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── OutcomesSection.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── TeamSection.tsx
│   │   │   ├── SocialProofSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── QualificationSection.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Select.tsx
│   │   └── forms/
│   │       └── ContactForm.tsx
│   ├── content/
│   │   ├── hero.ts                 # Hero section content
│   │   ├── reality-check.ts        # Reality check content
│   │   ├── differentiation.ts      # Differentiation content
│   │   ├── approach.ts             # Approach content
│   │   ├── services.ts             # Services content
│   │   ├── outcomes.ts             # Outcomes content
│   │   ├── process.ts              # Process content
│   │   ├── team.ts                 # Team content
│   │   ├── social-proof.ts         # Social proof content
│   │   ├── qualification.ts        # Qualification content
│   │   ├── footer.ts               # Footer content
│   │   └── types.ts                # Shared content types
│   ├── lib/
│   │   ├── formspree.ts            # Form submission logic
│   │   └── analytics.ts            # Event tracking
│   └── types/
│       └── content.ts               # TypeScript interfaces
├── public/
│   ├── downloads/
│   │   ├── ai-readiness-assessment.pdf
│   │   └── cxo-guide-to-ai.pdf
│   ├── images/
│   │   └── team/
│   └── logo.svg
└── next.config.js                   # Static export config
```

## Architecture

### Content Management Strategy

The website uses **TypeScript constants** for content management, providing a simple, type-safe approach that eliminates build complexity while maintaining easy content updates. This approach provides:

- **Maximum simplicity**: No file I/O, no parsing, no external dependencies
- **Strong type safety**: Content defined with TypeScript interfaces and validated at compile time
- **Easy updates**: Content editors can modify TypeScript files with full IDE support and autocomplete
- **Version control**: All content changes tracked in git with full diff visibility
- **Fast builds**: No parsing overhead, direct imports, instant compilation
- **Better debugging**: Stack traces point directly to content definitions
- **Zero runtime overhead**: Content is compiled into the bundle, no parsing at runtime

### Content Architecture

```
apps/web/src/content/
├── hero.ts              # Hero section content
├── reality-check.ts     # Reality check section content
├── differentiation.ts   # Differentiation section content
├── approach.ts          # Approach section content
├── services.ts          # Services section content
├── outcomes.ts          # Outcomes section content
├── process.ts           # Process section content
├── team.ts              # Team section content
├── social-proof.ts      # Social proof section content
├── qualification.ts     # Qualification section content
├── footer.ts            # Footer content
└── types.ts             # Shared content type definitions
```

Each TypeScript file exports:
- **Type definitions**: Interfaces defining content structure
- **Typed constants**: Content objects with full TypeScript type checking
- **Default exports**: Ready-to-use content objects

### Data Flow

```
TypeScript Content Files → Direct Import → React Components → Rendered UI
```

**Example Content File Structure:**

```typescript
// apps/web/src/content/hero.ts
import { HeroContent } from './types';

export const heroContent: HeroContent = {
  headline: "AI Without the Vendor Lock-In",
  subheadline: "We help CXOs build AI systems that work—without the enterprise sales pitch.",
  ctaText: "Book Alignment Sprint",
  ctaLink: "#contact",
  trustBadges: [
    {
      icon: "shield-check",
      text: "No vendor lock-in",
      emphasis: "Ever"
    },
    {
      icon: "code",
      text: "Open source first"
    },
    {
      icon: "clock",
      text: "4-week sprints"
    }
  ]
};

export default heroContent;
```

**Component Usage:**

```typescript
// apps/web/src/components/sections/HeroSection.tsx
import { heroContent } from '@/content/hero';

export function HeroSection() {
  return (
    <section>
      <h1>{heroContent.headline}</h1>
      <p>{heroContent.subheadline}</p>
      <a href={heroContent.ctaLink}>{heroContent.ctaText}</a>
    </section>
  );
}
```

**Benefits of This Approach:**

1. **Type Safety**: TypeScript compiler catches errors before runtime
2. **IDE Support**: Full autocomplete and IntelliSense for content editing
3. **Refactoring**: Rename fields across all content files with IDE refactoring
4. **No Build Complexity**: No markdown parsing, no gray-matter dependency
5. **Faster Builds**: Direct imports compile instantly
6. **Better Errors**: TypeScript errors point to exact line and field
7. **Version Control**: Git diffs show exact content changes
8. **No Runtime Parsing**: Content is compiled into the bundle

## Components and Interfaces

### 1. Hero Section Component

**Purpose**: First impression with headline, subheadline, trust badges, and primary CTA.

**Component Interface**:
```typescript
interface HeroContent {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  trustBadges: TrustBadge[];
}

interface TrustBadge {
  icon: string;
  text: string;
  emphasis?: string;
}
```

**Visual Design**:
- Background: Subtle gradient from warm stone (#FAFAF9) to white
- Headline: 4xl-6xl responsive, Inter 700, deep teal (#0f3d3a)
- Trust badges: Horizontal row on desktop, stacked on mobile
- CTA button: Gold accent (#EAB308) with hover state (#CA8A04)

**Responsive Behavior**:
- Mobile (<768px): Stack all elements vertically, reduce headline to 3xl
- Tablet (768-1024px): Maintain vertical stack, increase spacing
- Desktop (>1024px): Center-aligned with max-width 1200px

**Accessibility**:
- Semantic HTML: `<header>`, `<h1>`, `<nav>`
- ARIA labels for navigation and CTA buttons
- Focus indicators with 2px gold outline
- Minimum touch target: 44x44px for mobile

### 2. Reality Check Section Component

**Purpose**: Visualize the 95% AI pilot failure rate with funnel diagram and failure categories.

**Component Interface**:
```typescript
interface RealityCheckContent {
  statistic: string;
  statisticLabel: string;
  funnelData: FunnelStage[];
  failureCategories: FailureCategory[];
  calloutText: string;
}

interface FunnelStage {
  label: string;
  value: number;
  color: string;
}

interface FailureCategory {
  title: string;
  description: string;
  icon: string;
}
```

**Visual Design**:
- Background: Gradient from red-50 to orange-50
- Funnel visualization: SVG-based with animated transitions
- Failure cards: White background with subtle shadow
- Color coding: Green (start) → Yellow (production) → Red (failure)

**Animation**:
- Funnel stages fade in sequentially (200ms delay between stages)
- Numbers count up from 0 to target value
- Failure cards slide in from left on scroll

**Responsive Behavior**:
- Mobile: Funnel stacks vertically, cards full-width
- Desktop: Funnel on left (50%), cards on right (50%)

### 3. Differentiation Section Component

**Purpose**: Explain AUSPIN's unique positioning with 5 key differentiators.

**Component Interface**:
```typescript
interface DifferentiationContent {
  philosophy: string;
  differentiators: Differentiator[];
  honestQuestion: string;
  honestAnswer: string;
}

interface Differentiator {
  title: string;
  description: string;
  icon: string;
}
```

**Visual Design**:
- Background: White with subtle texture
- Differentiator cards: Grid layout with hover effects
- Icons: Custom SVG in deep teal (#0f3d3a)
- Honest Q&A: Highlighted box with gold border

**Responsive Behavior**:
- Mobile: Single column, cards stack
- Tablet: 2-column grid
- Desktop: 3-column grid for first 3, 2-column for last 2

### 4. Approach Framework Section Component

**Purpose**: Present 5 non-negotiable principles with anti-patterns.

**Component Interface**:
```typescript
interface ApproachContent {
  principles: Principle[];
}

interface Principle {
  title: string;
  antiPattern: string;
  practicalMeaning: string;
  icon: string;
}
```

**Visual Design**:
- Background: Alternating white and stone-50
- Principle cards: Two-column layout (principle | anti-pattern)
- Anti-patterns: Red accent with ❌ icon
- Practical examples: Indented with checkmark icon

**Responsive Behavior**:
- Mobile: Stack principle and anti-pattern vertically
- Desktop: Side-by-side comparison

### 5. Services Section Component

**Purpose**: Display 6 services with problem-solution framing.

**Component Interface**:
```typescript
interface ServicesContent {
  services: Service[];
  ctaText: string;
  ctaLink: string;
}

interface Service {
  title: string;
  icon: string;
  cxoProblem: string;
  deliverables: string[];
  preselect?: string; // For form pre-population
}
```

**Visual Design**:
- Background: Deep teal (#0f3d3a) with subtle pattern
- Service cards: White with shadow, hover lift effect
- Icons: Gold accent (#EAB308)
- CTA: Gold button at section bottom

**Responsive Behavior**:
- Mobile: Single column, full-width cards
- Tablet: 2-column grid
- Desktop: 3-column grid

### 6. Outcomes Section Component

**Purpose**: Show 4 outcome categories with before/after transformations.

**Component Interface**:
```typescript
interface OutcomesContent {
  outcomes: Outcome[];
}

interface Outcome {
  category: string;
  icon: string;
  beforeState: string;
  afterState: string;
  metrics?: string[];
}
```

**Visual Design**:
- Background: White
- Outcome cards: Split design (before | after)
- Before state: Gray with subtle red tint
- After state: Green tint with checkmark
- Metrics: Bold numbers with JetBrains Mono font

**Responsive Behavior**:
- Mobile: Stack before/after vertically
- Desktop: Side-by-side comparison

### 7. Process Section Component

**Purpose**: Explain 4 time-boxed sprints with activities and outcomes.

**Component Interface**:
```typescript
interface ProcessContent {
  sprints: Sprint[];
  ctaText: string;
  ctaLink: string;
}

interface Sprint {
  name: string;
  duration: string;
  activities: string;
  whyMatters: string;
  outcome: string;
  icon: string;
}
```

**Visual Design**:
- Background: Stone-50
- Sprint cards: Timeline visualization with connecting lines
- Duration badges: Gold background with white text
- Timeline: Vertical on mobile, horizontal on desktop

**Responsive Behavior**:
- Mobile: Vertical timeline, cards stack
- Desktop: Horizontal timeline with cards below

### 8. Team Section Component

**Purpose**: Display core team and advisors with credentials.

**Component Interface**:
```typescript
interface TeamContent {
  coreTeam: TeamMember[];
  advisors: TeamMember[];
}

interface TeamMember {
  name: string;
  title: string;
  photo: string;
  credentials: string[];
  whyMatters: string;
  linkedin?: string;
}
```

**Visual Design**:
- Background: White
- Team cards: Photo + text layout
- Photos: Circular with gold border
- Credentials: Bullet list with checkmark icons
- Advisors: Smaller cards, less prominent

**Responsive Behavior**:
- Mobile: Single column, full-width cards
- Desktop: 2-column for core team, 3-column for advisors

### 9. Social Proof Section Component

**Purpose**: Display 3 CXO testimonials with metrics.

**Component Interface**:
```typescript
interface SocialProofContent {
  testimonials: Testimonial[];
}

interface Testimonial {
  quote: string;
  metrics?: string[];
  role: string;
  industry: string;
  anonymous: boolean;
}
```

**Visual Design**:
- Background: Deep teal (#0f3d3a)
- Testimonial cards: White with shadow
- Quotes: Large text with quotation marks
- Metrics: Bold gold numbers

**Responsive Behavior**:
- Mobile: Single column, cards stack
- Desktop: 3-column grid

### 10. CTA Section Component

**Purpose**: Primary conversion point with form and lead magnet.

**Component Interface**:
```typescript
interface CTAContent {
  heading: string;
  formFields: FormField[];
  leadMagnetText: string;
  leadMagnetFile: string;
}

interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  options?: string[];
}
```

**Visual Design**:
- Background: Gradient from stone-50 to white
- Form: White card with shadow
- Input fields: Stone-200 border, focus state with gold border
- Submit button: Gold with hover animation
- Lead magnet: Secondary button below form

**Form Validation**:
- Client-side validation before submission
- Required field indicators (red asterisk)
- Error messages below fields in red
- Success message replaces form on submission

**Responsive Behavior**:
- Mobile: Full-width form, stacked fields
- Desktop: Max-width 600px, centered

### 11. Qualification Section Component

**Purpose**: Set expectations with disqualifiers and qualifiers.

**Component Interface**:
```typescript
interface QualificationContent {
  disqualifiers: string[];
  qualifiers: string[];
}
```

**Visual Design**:
- Background: White
- Two-column layout: Disqualifiers (left) | Qualifiers (right)
- Disqualifiers: Red ❌ icons
- Qualifiers: Green ✅ icons
- Honest, direct language

**Responsive Behavior**:
- Mobile: Stack disqualifiers above qualifiers
- Desktop: Side-by-side columns

### 12. Footer Component

**Purpose**: Navigation, contact info, and legal links.

**Component Interface**:
```typescript
interface FooterContent {
  sections: FooterSection[];
  contactInfo: ContactInfo;
  tagline: string;
  legalLinks: Link[];
}

interface FooterSection {
  title: string;
  links: Link[];
}

interface Link {
  text: string;
  href: string;
}

interface ContactInfo {
  email: string;
  phone: string;
}
```

**Visual Design**:
- Background: Deep teal (#0f3d3a)
- Text: White and stone-200
- Links: Hover state with gold underline
- Logo: White version

**Responsive Behavior**:
- Mobile: Single column, sections stack
- Desktop: 4-column grid

## Data Models

### Content Type Definitions

```typescript
// apps/web/src/content/types.ts

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

export interface ApproachContent {
  principles: Principle[];
}

export interface Principle {
  title: string;
  antiPattern: string;
  practicalMeaning: string;
  icon: string;
}

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

export interface QualificationContent {
  disqualifiers: string[];
  qualifiers: string[];
}

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

// Form submission types
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
```

### Example Content File

```typescript
// apps/web/src/content/services.ts
import { ServicesContent } from './types';

export const servicesContent: ServicesContent = {
  services: [
    {
      title: "AI Readiness Assessment",
      icon: "clipboard-document-check",
      cxoProblem: "You're being pitched AI solutions, but you don't know if your organization is ready.",
      deliverables: [
        "Current state analysis",
        "Gap identification",
        "Readiness roadmap",
        "Risk assessment"
      ],
      preselect: "assessment"
    },
    {
      title: "Alignment Sprint",
      icon: "users",
      cxoProblem: "Your teams have different ideas about what AI should do and how to measure success.",
      deliverables: [
        "Stakeholder alignment workshop",
        "Success metrics definition",
        "Priority use case selection",
        "Implementation roadmap"
      ],
      preselect: "alignment"
    },
    // ... more services
  ],
  ctaText: "Book a Service",
  ctaLink: "#contact"
};

export default servicesContent;
```

## Animation and Interaction Patterns

### Scroll-Based Animations

All animations use Framer Motion with intersection observer for performance.

**Fade In Pattern**:
```typescript
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};
```

**Slide In Pattern**:
```typescript
const slideInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};
```

**Stagger Children Pattern**:
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
```

### Hover Effects

**Button Hover**:
- Scale: 1.02
- Shadow: Increase elevation
- Duration: 200ms
- Easing: ease-in-out

**Card Hover**:
- Translate Y: -4px
- Shadow: Increase from sm to md
- Duration: 300ms
- Easing: ease-out

**Link Hover**:
- Underline: Slide in from left
- Color: Transition to gold accent
- Duration: 200ms

### Form Interactions

**Input Focus**:
- Border color: Transition to gold (#EAB308)
- Border width: 1px → 2px
- Label: Scale and translate up
- Duration: 200ms

**Submit Button States**:
- Default: Gold background
- Hover: Darker gold (#CA8A04)
- Active: Scale 0.98
- Loading: Spinner animation
- Success: Checkmark animation
- Error: Shake animation

### Performance Considerations

1. **Lazy Loading**: Animations only initialize when elements enter viewport
2. **Will-Change**: Applied to animated properties for GPU acceleration
3. **Reduced Motion**: Respect `prefers-reduced-motion` media query
4. **Debouncing**: Scroll events debounced to 16ms (60fps)

## Responsive Design

### Breakpoints

```typescript
// Tailwind CSS breakpoints
const breakpoints = {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet portrait
  lg: '1024px',  // Tablet landscape / Small desktop
  xl: '1280px',  // Desktop
  '2xl': '1536px' // Large desktop
};
```

### Mobile-First Approach

All components start with mobile styles and progressively enhance for larger screens.

**Typography Scale**:
- Mobile: Base 16px, scale 1.2
- Tablet: Base 16px, scale 1.25
- Desktop: Base 16px, scale 1.333

**Spacing Scale**:
- Mobile: 4px base unit
- Tablet: 4px base unit
- Desktop: 8px base unit

### Touch Targets

All interactive elements meet minimum touch target size:
- Buttons: 44x44px minimum
- Links: 44px height minimum
- Form inputs: 48px height minimum

### Viewport Considerations

**Hero Section**:
- Mobile: 100vh height, centered content
- Desktop: 80vh height, centered content

**Section Padding**:
- Mobile: py-12 (48px)
- Tablet: py-16 (64px)
- Desktop: py-20 (80px)

**Container Max Width**:
- Default: 1280px (xl)
- Narrow sections: 768px (md)
- Wide sections: 1536px (2xl)

## Accessibility Requirements

### WCAG 2.1 AA Compliance

**Color Contrast**:
- Normal text: 4.5:1 minimum
- Large text (18pt+): 3:1 minimum
- UI components: 3:1 minimum

**Keyboard Navigation**:
- All interactive elements accessible via Tab
- Focus order follows visual order
- Skip links for main content
- Escape key closes modals/menus

**Screen Reader Support**:
- Semantic HTML elements
- ARIA labels for icons and buttons
- ARIA live regions for dynamic content
- Alt text for all images

**Focus Indicators**:
- Visible focus ring: 2px solid gold (#EAB308)
- Offset: 2px from element
- Never remove outline without replacement

### Accessibility Testing Checklist

1. Keyboard navigation works for all interactions
2. Screen reader announces all content correctly
3. Color contrast meets WCAG AA standards
4. Focus indicators are visible
5. Form errors are announced
6. Images have alt text
7. Headings follow logical hierarchy
8. Links have descriptive text

## Performance Optimization

### Target Metrics

- **Lighthouse Performance**: 90+
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Time to Interactive**: <3.5s
- **Cumulative Layout Shift**: <0.1
- **Total Bundle Size**: <200KB (gzipped)

### Optimization Strategies

**Image Optimization**:
- Use Next.js Image component for automatic optimization
- WebP format with JPEG fallback
- Responsive images with srcset
- Lazy loading for below-fold images
- Blur placeholder for loading state

**Code Splitting**:
- Dynamic imports for heavy components
- Route-based code splitting (automatic with Next.js)
- Separate vendor bundles
- Tree shaking for unused code

**CSS Optimization**:
- Tailwind CSS purge for unused styles
- Critical CSS inlined in HTML
- Non-critical CSS loaded asynchronously

**Font Loading**:
- Self-hosted fonts for performance
- Font-display: swap for FOIT prevention
- Preload critical fonts
- Subset fonts to required characters

**Caching Strategy**:
- Static assets: Cache-Control: public, max-age=31536000, immutable
- HTML: Cache-Control: public, max-age=0, must-revalidate
- Service worker for offline support (optional)

### Build Optimization

```javascript
// next.config.js
module.exports = {
  output: 'export',
  images: {
    unoptimized: true, // For static export
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true,
  },
};
```

### Performance Monitoring

Track these metrics in production:
- Core Web Vitals (LCP, FID, CLS)
- Page load time by region
- Bundle size over time
- API response times (Formspree)


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property Reflection

After analyzing all acceptance criteria, I identified several areas of redundancy:

1. **Component Structure Properties**: Many sections test for "exactly N items with icons" - these can be consolidated into a single property about component data completeness
2. **Form Validation Properties**: Multiple properties test form validation, success, and error states - these can be combined into comprehensive form behavior properties
3. **Content System Properties**: Several properties test markdown parsing, frontmatter, and file organization - these can be unified into content system correctness properties
4. **Accessibility Properties**: Multiple properties test WCAG compliance aspects - these can be consolidated into comprehensive accessibility properties
5. **Analytics Properties**: All analytics tracking can be tested with a single property about event tracking

The following properties represent the unique, non-redundant validation requirements:

### Content Rendering Properties

**Property 1: Section Component Data Completeness**
*For any* section component (Services, Outcomes, Process, Team, etc.), all required data fields specified in the component interface should be present and non-empty in the rendered output.
**Validates: Requirements 2.3, 3.2, 4.1, 5.1, 6.1, 7.1, 9.1, 11.1, 11.2**

**Property 2: Nested Data Structure Completeness**
*For any* item within a collection (service, outcome, sprint, team member, testimonial), all required nested fields (icon, description, metrics, etc.) should be present and properly structured.
**Validates: Requirements 2.4, 3.3, 4.2, 4.3, 5.2, 5.3, 6.2, 6.3, 7.2, 7.3, 7.4, 8.1, 8.2, 8.3, 9.2, 9.3**

**Property 3: Navigation Link Completeness**
*For any* major section on the page, there should be a corresponding navigation link in the header and footer that correctly navigates to that section.
**Validates: Requirements 1.5, 5.5, 12.1**

### Content Management System Properties

**Property 4: TypeScript Content Type Safety**
*For any* content file in `apps/web/src/content/`, the exported content object should match its corresponding TypeScript interface without type errors.
**Validates: Requirements 13.1, 13.2**

**Property 5: Content Import Completeness**
*For any* section component, importing its corresponding content file should provide all required fields defined in the component's interface.
**Validates: Requirements 13.3, 13.4**

**Property 6: Build Process Content Integration**
*For any* content file in `apps/web/src/content/`, the content should be compiled into the static HTML output after the build process completes.
**Validates: Requirements 13.2, 15.2**

### Form Handling Properties

**Property 7: Form Validation Completeness**
*For any* form submission with one or more required fields missing, the validation should fail and display field-specific error messages without submitting to the API.
**Validates: Requirements 10.3**

**Property 8: Form Submission Success Flow**
*For any* valid form submission that receives a successful response from Formspree, the system should clear the form fields, display a success message, and track the submission event.
**Validates: Requirements 10.4, 10.6, 20.2**

**Property 9: Form Submission Error Flow**
*For any* form submission that receives an error response from Formspree, the system should preserve all user input, display an error message, and provide a retry option.
**Validates: Requirements 10.7, 16.5**

**Property 10: Form Loading State**
*For any* form submission in progress, the submit button should be disabled and a loading indicator should be visible until the API response is received.
**Validates: Requirements 16.3**

**Property 11: Form CSRF Protection**
*For any* form submission, the request should include CSRF protection tokens and spam prevention measures before being sent to the API.
**Validates: Requirements 16.2**

### Responsive Design Properties

**Property 12: Mobile Touch Target Sizing**
*For any* interactive element (button, link, input) when viewport width is below 768px, the element should have a minimum touch target size of 44x44 pixels.
**Validates: Requirements 14.3**

**Property 13: Mobile Layout Stacking**
*For any* section with multi-column layout on desktop, when viewport width is below 768px, the layout should stack vertically with appropriate spacing.
**Validates: Requirements 14.2**

**Property 14: Responsive Footer Accessibility**
*For any* viewport size (mobile, tablet, desktop), the footer should be present in the DOM and accessible via keyboard navigation.
**Validates: Requirements 12.5**

### Accessibility Properties

**Property 15: Image Alt Text Completeness**
*For any* image or icon element in the rendered HTML, there should be either an alt attribute with descriptive text or an aria-label for decorative images.
**Validates: Requirements 17.2**

**Property 16: Color Contrast Compliance**
*For any* text element in the design system, the color contrast ratio between text and background should meet or exceed 4.5:1 for normal text and 3:1 for large text.
**Validates: Requirements 17.3**

**Property 17: Keyboard Navigation Completeness**
*For any* interactive element (button, link, form input), the element should be reachable and operable using only keyboard navigation (Tab, Enter, Space, Escape).
**Validates: Requirements 17.4**

**Property 18: Focus Indicator Visibility**
*For any* interactive element that receives keyboard focus, a visible focus indicator (2px gold outline) should be displayed.
**Validates: Requirements 17.6**

**Property 19: ARIA and Semantic HTML**
*For any* component, the rendered HTML should use semantic elements (header, nav, main, section, footer) and include appropriate ARIA labels for non-semantic interactive elements.
**Validates: Requirements 17.5**

### Static Export and Build Properties

**Property 20: Static HTML Generation**
*For any* page in the application, running the Next.js build process should generate a corresponding static HTML file in the `out` directory without errors.
**Validates: Requirements 15.1**

**Property 21: Image Optimization**
*For any* image in the `public/images/` directory, the build process should generate optimized versions (WebP with JPEG fallback) with reduced file sizes.
**Validates: Requirements 15.3, 19.4**

**Property 22: Sitemap Generation**
*For any* build process execution, a valid `sitemap.xml` file should be generated in the output directory containing all public pages.
**Validates: Requirements 15.4**

**Property 23: No Server-Side Dependencies**
*For any* component or page in the application, the code should not use server-side only APIs (Node.js fs, path, etc.) in client-side code, ensuring Cloudflare Pages compatibility.
**Validates: Requirements 15.5**

### Performance Properties

**Property 24: Lighthouse Performance Score**
*For any* production build deployed to Cloudflare Pages, running Lighthouse audit should yield a performance score of 90 or above.
**Validates: Requirements 19.1**

**Property 25: Image Lazy Loading**
*For any* image element that is initially below the viewport fold, the image should have lazy loading enabled and should not load until the user scrolls near it.
**Validates: Requirements 19.2**

**Property 26: Bundle Size Optimization**
*For any* production build, the total JavaScript bundle size (gzipped) should not exceed 200KB, verified through code splitting and tree shaking.
**Validates: Requirements 19.3**

**Property 27: Static Asset Caching**
*For any* static asset (CSS, JS, images) served from the production site, the HTTP response should include appropriate cache-control headers (max-age=31536000 for immutable assets).
**Validates: Requirements 19.5**

### Analytics and Tracking Properties

**Property 28: Event Tracking Completeness**
*For any* user interaction (CTA click, form submission, download request, scroll milestone), an analytics event should be fired with appropriate event labels and parameters.
**Validates: Requirements 20.1, 20.2, 20.3, 20.4**

**Property 29: Analytics Integration**
*For any* page load, the analytics platform (Google Analytics or equivalent) should be initialized and ready to receive events.
**Validates: Requirements 20.5**

### Download and Lead Magnet Properties

**Property 30: Download Gating**
*For any* lead magnet download request, the system should require email address submission before triggering the file download.
**Validates: Requirements 18.2**

**Property 31: Download Trigger**
*For any* valid email submission for a lead magnet, the system should automatically trigger the download of the corresponding PDF file and track the download event.
**Validates: Requirements 18.4, 18.5**

**Property 32: Download File Availability**
*For any* lead magnet referenced in the UI, the corresponding PDF file should exist in the `public/downloads/` directory and be accessible via direct URL.
**Validates: Requirements 18.3**

### Component Positioning Properties

**Property 33: Qualification Section Positioning**
*For any* page render, the Qualification Section should appear in the DOM after all main content sections but before the Footer component.
**Validates: Requirements 11.4**

**Property 34: Section Ordering**
*For any* page render, sections should be rendered in the order they are imported and composed in the main page component.
**Validates: Requirements 13.3**

## Error Handling

### Form Submission Errors

**Client-Side Validation Errors**:
- Display inline error messages below each invalid field
- Highlight invalid fields with red border
- Prevent form submission until all errors are resolved
- Preserve user input during validation

**API Communication Errors**:
- Network timeout (30s): Display "Connection timeout. Please try again."
- 4xx errors: Display Formspree error message
- 5xx errors: Display "Service temporarily unavailable. Please try again later."
- Unknown errors: Display generic error message with support email

**Error Recovery**:
- Preserve all user input on error
- Provide clear retry button
- Log errors to console for debugging
- Track error events in analytics

### Content Loading Errors

**TypeScript Compilation Errors**:
- Display detailed error with filename and line number
- Fail build process to prevent deployment of broken content
- TypeScript compiler provides specific error messages

**Missing Content Files**:
- Fail build process if required content files are missing
- TypeScript import errors will catch missing files
- Provide clear error message indicating which content file is missing

**Invalid Content Structure**:
- TypeScript type checking validates content structure at compile time
- Fail build with specific type errors
- IDE shows errors in real-time during content editing

### Image Loading Errors

**Missing Images**:
- Display placeholder with alt text
- Log warning to console
- Continue rendering rest of page

**Image Optimization Failures**:
- Fall back to original image
- Log warning to console
- Continue build process

### Build Errors

**Static Export Failures**:
- Display detailed error message with stack trace
- Identify problematic component or page
- Prevent deployment of broken build

**Bundle Size Exceeded**:
- Fail build if bundle size exceeds 200KB limit
- Display bundle analysis report
- Suggest code splitting opportunities

## Testing Strategy

### Dual Testing Approach

The testing strategy combines unit tests for specific examples and edge cases with property-based tests for universal properties. Both approaches are complementary and necessary for comprehensive coverage.

**Unit Tests**: Focus on specific examples, edge cases, and integration points
**Property Tests**: Verify universal properties across all inputs through randomization

### Property-Based Testing Configuration

**Library Selection**: Use `fast-check` for TypeScript/JavaScript property-based testing

**Test Configuration**:
- Minimum 100 iterations per property test
- Each test tagged with feature name and property number
- Tag format: `Feature: auspin-website-redesign, Property N: [property text]`

**Example Property Test Structure**:
```typescript
import fc from 'fast-check';

describe('Feature: auspin-website-redesign, Property 4: TypeScript Content Type Safety', () => {
  it('should validate content objects match their TypeScript interfaces', () => {
    fc.assert(
      fc.property(
        fc.record({
          headline: fc.string(),
          subheadline: fc.string(),
          ctaText: fc.string(),
          ctaLink: fc.webUrl(),
          trustBadges: fc.array(fc.record({
            icon: fc.string(),
            text: fc.string(),
            emphasis: fc.option(fc.string())
          }))
        }),
        (heroData) => {
          // Type checking happens at compile time
          const content: HeroContent = heroData;
          expect(content.headline).toBeDefined();
          expect(content.trustBadges).toBeInstanceOf(Array);
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

### Unit Testing Strategy

**Component Tests**:
- Test specific examples from requirements (e.g., "Book Alignment Sprint" button exists)
- Test edge cases (empty data, missing fields, long text)
- Test user interactions (clicks, form submissions, navigation)
- Use React Testing Library for component rendering

**Integration Tests**:
- Test form submission flow with mocked Formspree API
- Test content loading from markdown files
- Test navigation between sections
- Test responsive behavior at specific breakpoints

**Build Tests**:
- Test static export generates expected files
- Test sitemap.xml is valid
- Test bundle sizes are within limits
- Test image optimization produces correct formats

### Test Coverage Goals

- **Component Coverage**: 90%+ line coverage for all components
- **Property Coverage**: All 34 properties implemented as property tests
- **Integration Coverage**: All critical user flows tested
- **Accessibility Coverage**: All WCAG 2.1 AA criteria tested

### Testing Tools

- **Unit Testing**: Jest + React Testing Library
- **Property Testing**: fast-check
- **E2E Testing**: Playwright (optional for critical flows)
- **Accessibility Testing**: axe-core + jest-axe
- **Performance Testing**: Lighthouse CI
- **Visual Regression**: Percy or Chromatic (optional)

### Continuous Integration

**Pre-Commit Checks**:
- Run unit tests
- Run linting (ESLint + Prettier)
- Run type checking (TypeScript)

**Pull Request Checks**:
- Run all unit tests
- Run all property tests (100 iterations each)
- Run accessibility tests
- Run build process
- Check bundle size
- Run Lighthouse audit

**Deployment Checks**:
- Run full test suite
- Run Lighthouse audit on staging
- Verify sitemap.xml generation
- Verify all content files parsed correctly

## Implementation Notes

### Design System Tokens

```typescript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f3d3a',
          50: '#f0f9f8',
          100: '#d9f0ed',
          200: '#b3e1db',
          300: '#8dd2c9',
          400: '#67c3b7',
          500: '#41b4a5',
          600: '#0f3d3a',
          700: '#0c302e',
          800: '#092322',
          900: '#061716',
        },
        accent: {
          DEFAULT: '#EAB308',
          light: '#FACC15',
          dark: '#CA8A04',
        },
        stone: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          600: '#78716C',
          900: '#1C1917',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
    },
  },
};
```

### Animation Utilities

```typescript
// lib/animations.ts
export const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const slideInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
```

### Formspree Integration

```typescript
// lib/formspree.ts
export async function submitToFormspree(
  formId: string,
  data: FormSubmission
): Promise<FormspreeResponse> {
  const response = await fetch(`https://formspree.io/f/${formId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Form submission failed');
  }

  return response.json();
}
```

### Analytics Integration

```typescript
// lib/analytics.ts
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>
): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

export function trackCTAClick(ctaLabel: string, ctaLocation: string): void {
  trackEvent('cta_click', {
    cta_label: ctaLabel,
    cta_location: ctaLocation,
  });
}

export function trackFormSubmission(formName: string): void {
  trackEvent('form_submission', {
    form_name: formName,
  });
}

export function trackDownload(fileName: string): void {
  trackEvent('download', {
    file_name: fileName,
  });
}

export function trackScrollDepth(depth: number): void {
  trackEvent('scroll_depth', {
    depth_percentage: depth,
  });
}
```

## Deployment Configuration

### Next.js Configuration

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
```

### Cloudflare Pages Configuration

```toml
# wrangler.toml
name = "auspin-website"
compatibility_date = "2024-01-01"

[site]
bucket = "./out"

[[redirects]]
from = "/*"
to = "/404.html"
status = 404
```

### Build Script

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "export": "next build && next export",
    "deploy": "npm run export && wrangler pages publish out",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:properties": "jest --testNamePattern='Property'",
    "lint": "eslint . --ext .ts,.tsx",
    "format": "prettier --write .",
    "lighthouse": "lighthouse http://localhost:3000 --output=html --output-path=./lighthouse-report.html"
  }
}
```

## Security Considerations

### Content Security Policy

```typescript
// app/layout.tsx
export const metadata = {
  other: {
    'Content-Security-Policy': `
      default-src 'self';
      script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https:;
      font-src 'self' data:;
      connect-src 'self' https://formspree.io https://www.google-analytics.com;
      frame-ancestors 'none';
    `.replace(/\s+/g, ' ').trim()
  }
};
```

### Form Security

- CSRF tokens for all form submissions
- Rate limiting via Formspree
- Email validation (format and domain checks)
- Honeypot fields for spam prevention
- reCAPTCHA integration (optional)

### Data Privacy

- No cookies without consent
- Analytics data anonymized
- Form data encrypted in transit (HTTPS)
- No PII stored client-side
- Privacy policy and terms of service links

## Maintenance and Updates

### Content Update Process

1. Edit TypeScript files in `apps/web/src/content/`
2. IDE shows type errors immediately if content structure is invalid
3. Run `npm run build` to verify compilation
4. Commit changes to git
5. Push to main branch
6. Cloudflare Pages automatically rebuilds and deploys
7. Verify changes on production site

**Benefits of TypeScript Content Updates**:
- Immediate feedback from IDE (autocomplete, type checking)
- Compile-time validation prevents broken content
- Refactoring tools work across all content files
- Git diffs show exact changes to content structure

### Component Update Process

1. Make changes to component files
2. Run tests: `npm test`
3. Run property tests: `npm run test:properties`
4. Check accessibility: `npm run test:a11y`
5. Build and verify: `npm run build`
6. Commit and push changes

### Performance Monitoring

- Weekly Lighthouse audits
- Monthly bundle size reviews
- Quarterly accessibility audits
- Continuous analytics monitoring

### Dependency Updates

- Monthly security updates
- Quarterly feature updates
- Annual major version updates
- Test thoroughly after each update
