# Implementation Plan: AUSPIN Website Redesign

## Overview

This implementation plan breaks down the AUSPIN website redesign into discrete coding tasks. The approach follows a bottom-up strategy: establish the foundation (design system, content types, base components), build section components, integrate everything, and finally add enhancements (animations, analytics, testing).

The design uses TypeScript constants for content management, eliminating the need for markdown parsing and providing compile-time type safety. All content is defined in typed TypeScript files that components import directly.

## Tasks

- [x] 1. Set up project foundation and design system
  - Create Tailwind configuration with custom design tokens (colors, fonts, spacing)
  - Set up Next.js configuration for static export
  - Configure TypeScript with strict mode
  - Install dependencies: Tailwind CSS, Framer Motion, Heroicons, fast-check
  - Create base layout with font loading (Inter, JetBrains Mono)
  - _Requirements: 15.1, 15.5, 19.3_

- [x] 2. Create content type definitions and base UI components
  - [x] 2.1 Define all content type interfaces in `src/content/types.ts`
    - Create interfaces for all 12 sections (Hero, RealityCheck, Differentiation, etc.)
    - Define nested types (TrustBadge, Service, Sprint, TeamMember, etc.)
    - Define form types (FormSubmission, FormspreeResponse, FormError)
    - _Requirements: 13.1, 13.2_
  
  - [x] 2.2 Create base UI components
    - Build Button component with variants (primary, secondary, loading states)
    - Build Card component with hover effects
    - Build Input component with validation states
    - Build Select component for form dropdowns
    - _Requirements: 10.1, 16.3_
  
  - [ ]* 2.3 Write property test for UI component type safety
    - **Property 1: Section Component Data Completeness**
    - **Validates: Requirements 2.3, 3.2, 4.1, 5.1, 6.1, 7.1, 9.1, 11.1, 11.2**

- [x] 3. Create TypeScript content files
  - [x] 3.1 Create hero.ts with hero section content
    - Define heroContent object with headline, subheadline, CTA, trust badges
    - Export typed constant matching HeroContent interface
    - _Requirements: 1.1, 1.2, 1.3, 13.1_
  
  - [x] 3.2 Create reality-check.ts with funnel data
    - Define reality check content with statistics and failure categories
    - Include funnel stage data with colors
    - _Requirements: 2.1, 2.2, 2.3, 13.1_
  
  - [x] 3.3 Create differentiation.ts with differentiators
    - Define 5 key differentiators with icons and descriptions
    - Include philosophy statement and honest Q&A
    - _Requirements: 3.1, 3.2, 3.3, 13.1_
  
  - [x] 3.4 Create approach.ts with principles
    - Define 5 non-negotiable principles
    - Include anti-patterns and practical meanings
    - _Requirements: 4.1, 4.2, 4.3, 13.1_
  
  - [x] 3.5 Create services.ts with 6 services
    - Define all services with CXO problems and deliverables
    - Include preselect values for form integration
    - _Requirements: 5.1, 5.2, 5.3, 13.1_
  
  - [x] 3.6 Create outcomes.ts with outcome categories
    - Define 4 outcome categories with before/after states
    - Include metrics where applicable
    - _Requirements: 6.1, 6.2, 6.3, 13.1_
  
  - [x] 3.7 Create process.ts with sprint definitions
    - Define 4 time-boxed sprints with activities and outcomes
    - Include duration and "why it matters" explanations
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 13.1_
  
  - [x] 3.8 Create team.ts with team member data
    - Define core team and advisors with credentials
    - Include photos, LinkedIn links, and "why matters" text
    - _Requirements: 8.1, 8.2, 8.3, 13.1_
  
  - [x] 3.9 Create social-proof.ts with testimonials
    - Define 3 CXO testimonials with quotes and metrics
    - Include role, industry, and anonymity flags
    - _Requirements: 9.1, 9.2, 9.3, 13.1_
  
  - [x] 3.10 Create qualification.ts with qualifiers/disqualifiers
    - Define lists of disqualifiers and qualifiers
    - Use honest, direct language
    - _Requirements: 11.1, 11.2, 13.1_
  
  - [x] 3.11 Create footer.ts with footer content
    - Define footer sections, links, and contact info
    - Include tagline and legal links
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 13.1_
  
  - [ ]* 3.12 Write property test for content type safety
    - **Property 4: TypeScript Content Type Safety**
    - **Validates: Requirements 13.1, 13.2**

- [x] 4. Build section components (Part 1: Hero through Differentiation)
  - [x] 4.1 Build HeroSection component
    - Import heroContent from content file
    - Render headline, subheadline, CTA button, trust badges
    - Apply responsive layout and styling
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_
  
  - [x] 4.2 Build RealityCheckSection component
    - Import realityCheckContent from content file
    - Create SVG funnel visualization with color coding
    - Render failure category cards
    - _Requirements: 2.1, 2.2, 2.3, 2.4_
  
  - [x] 4.3 Build DifferentiationSection component
    - Import differentiationContent from content file
    - Render differentiator cards in responsive grid
    - Include honest Q&A section with gold border
    - _Requirements: 3.1, 3.2, 3.3_
  
  - [ ]* 4.4 Write property test for nested data completeness
    - **Property 2: Nested Data Structure Completeness**
    - **Validates: Requirements 2.4, 3.3, 4.2, 4.3, 5.2, 5.3, 6.2, 6.3, 7.2, 7.3, 7.4, 8.1, 8.2, 8.3, 9.2, 9.3**

- [x] 5. Build section components (Part 2: Approach through Process)
  - [x] 5.1 Build ApproachSection component
    - Import approachContent from content file
    - Render principles with anti-patterns in two-column layout
    - Apply alternating background colors
    - _Requirements: 4.1, 4.2, 4.3_
  
  - [x] 5.2 Build ServicesSection component
    - Import servicesContent from content file
    - Render service cards in responsive grid (1/2/3 columns)
    - Include CXO problem framing and deliverables
    - Add CTA button at bottom
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_
  
  - [x] 5.3 Build OutcomesSection component
    - Import outcomesContent from content file
    - Render outcome cards with before/after split design
    - Include metrics with JetBrains Mono font
    - _Requirements: 6.1, 6.2, 6.3_
  
  - [x] 5.4 Build ProcessSection component
    - Import processContent from content file
    - Create timeline visualization (vertical mobile, horizontal desktop)
    - Render sprint cards with duration badges
    - _Requirements: 7.1, 7.2, 7.3, 7.4_

- [x] 6. Build section components (Part 3: Team through Footer)
  - [x] 6.1 Build TeamSection component
    - Import teamContent from content file
    - Render core team in 2-column grid
    - Render advisors in 3-column grid
    - Include circular photos with gold borders
    - _Requirements: 8.1, 8.2, 8.3_
  
  - [x] 6.2 Build SocialProofSection component
    - Import socialProofContent from content file
    - Render testimonial cards in 3-column grid
    - Include quote styling and metrics
    - _Requirements: 9.1, 9.2, 9.3_
  
  - [x] 6.3 Build QualificationSection component
    - Import qualificationContent from content file
    - Render disqualifiers and qualifiers in two columns
    - Use red ❌ and green ✅ icons
    - _Requirements: 11.1, 11.2, 11.3, 11.4_
  
  - [x] 6.4 Build Footer component
    - Import footerContent from content file
    - Render footer sections in 4-column grid (desktop)
    - Include contact info and legal links
    - Apply deep teal background
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5_
  
  - [ ]* 6.5 Write property test for navigation completeness
    - **Property 3: Navigation Link Completeness**
    - **Validates: Requirements 1.5, 5.5, 12.1**

- [ ] 7. Build CTA section with contact form
  - [x] 7.1 Create ContactForm component
    - Build form with fields: name, email, company, role, region, outcome, service
    - Implement client-side validation
    - Add loading states and error handling
    - Include CSRF protection and spam prevention
    - _Requirements: 10.1, 10.2, 10.3, 16.1, 16.2, 16.3_
  
  - [x] 7.2 Create Formspree integration utility
    - Implement submitToFormspree function in lib/formspree.ts
    - Handle API responses and errors
    - Return typed FormspreeResponse
    - _Requirements: 10.4, 10.5, 16.4_
  
  - [x] 7.3 Build CTASection component
    - Import ContactForm component
    - Add lead magnet download button
    - Implement form submission flow with success/error states
    - _Requirements: 10.1, 10.4, 10.6, 10.7_
  
  - [ ]* 7.4 Write property tests for form validation
    - **Property 7: Form Validation Completeness**
    - **Validates: Requirements 10.3**
  
  - [ ]* 7.5 Write property test for form success flow
    - **Property 8: Form Submission Success Flow**
    - **Validates: Requirements 10.4, 10.6, 20.2**
  
  - [ ]* 7.6 Write property test for form error flow
    - **Property 9: Form Submission Error Flow**
    - **Validates: Requirements 10.7, 16.5**
  
  - [ ]* 7.7 Write unit tests for form edge cases
    - Test empty submissions, invalid emails, network timeouts
    - Test CSRF token inclusion
    - _Requirements: 10.3, 16.2_

- [ ] 8. Implement responsive design and accessibility
  - [ ] 8.1 Add responsive breakpoints to all section components
    - Implement mobile-first responsive layouts
    - Test at breakpoints: 640px, 768px, 1024px, 1280px
    - Ensure proper stacking on mobile
    - _Requirements: 14.1, 14.2_
  
  - [ ] 8.2 Implement touch target sizing for mobile
    - Ensure all buttons/links are minimum 44x44px on mobile
    - Add appropriate padding to interactive elements
    - _Requirements: 14.3_
  
  - [ ] 8.3 Add accessibility features
    - Add semantic HTML elements (header, nav, main, section, footer)
    - Add ARIA labels for icons and non-semantic elements
    - Implement keyboard navigation support
    - Add visible focus indicators (2px gold outline)
    - Add alt text to all images
    - _Requirements: 17.1, 17.2, 17.4, 17.5, 17.6_
  
  - [ ] 8.4 Verify color contrast compliance
    - Test all text/background combinations meet WCAG AA standards
    - Ensure 4.5:1 ratio for normal text, 3:1 for large text
    - _Requirements: 17.3_
  
  - [ ]* 8.5 Write property tests for accessibility
    - **Property 15: Image Alt Text Completeness**
    - **Property 16: Color Contrast Compliance**
    - **Property 17: Keyboard Navigation Completeness**
    - **Property 18: Focus Indicator Visibility**
    - **Property 19: ARIA and Semantic HTML**
    - **Validates: Requirements 17.2, 17.3, 17.4, 17.5, 17.6**
  
  - [ ]* 8.6 Write property tests for responsive design
    - **Property 12: Mobile Touch Target Sizing**
    - **Property 13: Mobile Layout Stacking**
    - **Property 14: Responsive Footer Accessibility**
    - **Validates: Requirements 14.2, 14.3, 12.5**

- [ ] 9. Checkpoint - Verify core functionality
  - Ensure all sections render correctly with TypeScript content
  - Verify responsive layouts work at all breakpoints
  - Test form submission with Formspree
  - Verify accessibility with keyboard navigation
  - Run TypeScript compiler to check for type errors
  - Ensure all tests pass, ask the user if questions arise

- [ ] 10. Add animations and interactions
  - [ ] 10.1 Create animation utilities
    - Define fadeInVariants, slideInVariants, staggerContainerVariants
    - Create lib/animations.ts with reusable animation configs
    - _Requirements: 1.6, 2.5_
  
  - [ ] 10.2 Add scroll-based animations to sections
    - Wrap sections with Framer Motion components
    - Add intersection observer for viewport detection
    - Apply fade-in animations to section content
    - Stagger child animations for lists/grids
    - _Requirements: 1.6, 2.5, 3.4, 5.4, 6.4_
  
  - [ ] 10.3 Add hover effects to interactive elements
    - Implement button hover states (scale, shadow)
    - Add card hover effects (lift, shadow)
    - Add link hover effects (underline slide-in)
    - _Requirements: 5.4, 6.4, 8.4_
  
  - [ ] 10.4 Add form interaction animations
    - Implement input focus animations
    - Add submit button loading spinner
    - Add success checkmark animation
    - Add error shake animation
    - _Requirements: 10.8, 16.3_
  
  - [ ] 10.5 Implement reduced motion support
    - Respect prefers-reduced-motion media query
    - Disable animations for users who prefer reduced motion
    - _Requirements: 17.7_

- [ ] 11. Implement analytics and tracking
  - [ ] 11.1 Create analytics utility
    - Implement trackEvent, trackCTAClick, trackFormSubmission functions
    - Create lib/analytics.ts with Google Analytics integration
    - _Requirements: 20.1, 20.5_
  
  - [ ] 11.2 Add event tracking to CTAs
    - Track all CTA button clicks with labels and locations
    - _Requirements: 20.1_
  
  - [ ] 11.3 Add form submission tracking
    - Track successful form submissions
    - Track form errors
    - _Requirements: 20.2_
  
  - [ ] 11.4 Add download tracking
    - Track lead magnet downloads
    - _Requirements: 20.3_
  
  - [ ] 11.5 Add scroll depth tracking
    - Track scroll milestones (25%, 50%, 75%, 100%)
    - _Requirements: 20.4_
  
  - [ ]* 11.6 Write property test for analytics completeness
    - **Property 28: Event Tracking Completeness**
    - **Property 29: Analytics Integration**
    - **Validates: Requirements 20.1, 20.2, 20.3, 20.4, 20.5**

- [ ] 12. Implement lead magnet downloads
  - [ ] 12.1 Add PDF files to public/downloads/
    - Add ai-readiness-assessment.pdf
    - Add cxo-guide-to-ai.pdf
    - _Requirements: 18.1, 18.3_
  
  - [ ] 12.2 Implement download gating
    - Require email submission before download
    - Integrate with contact form
    - _Requirements: 18.2_
  
  - [ ] 12.3 Implement download trigger
    - Automatically trigger download after email submission
    - Track download event
    - _Requirements: 18.4, 18.5_
  
  - [ ]* 12.4 Write property tests for downloads
    - **Property 30: Download Gating**
    - **Property 31: Download Trigger**
    - **Property 32: Download File Availability**
    - **Validates: Requirements 18.2, 18.3, 18.4, 18.5**

- [x] 13. Compose main page and configure build
  - [x] 13.1 Create main page component
    - Import all section components
    - Compose sections in correct order
    - Add proper spacing between sections
    - _Requirements: 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 8.1, 9.1, 10.1, 11.1, 12.1_
  
  - [x] 13.2 Configure Next.js for static export
    - Set output: 'export' in next.config.js
    - Configure image optimization for static export
    - Enable CSS optimization
    - Remove console logs in production
    - _Requirements: 15.1, 15.5_
  
  - [x] 13.3 Add sitemap generation
    - Generate sitemap.xml during build
    - Include all public pages
    - _Requirements: 15.4_
  
  - [ ]* 13.4 Write property tests for build process
    - **Property 5: Content Import Completeness**
    - **Property 6: Build Process Content Integration**
    - **Property 20: Static HTML Generation**
    - **Property 22: Sitemap Generation**
    - **Property 23: No Server-Side Dependencies**
    - **Property 33: Qualification Section Positioning**
    - **Property 34: Section Ordering**
    - **Validates: Requirements 13.2, 13.3, 13.4, 15.1, 15.2, 15.4, 15.5, 11.4**

- [ ] 14. Optimize performance
  - [ ] 14.1 Implement image optimization
    - Use Next.js Image component for all images
    - Generate WebP with JPEG fallback
    - Add responsive image sizes
    - Implement lazy loading for below-fold images
    - Add blur placeholders
    - _Requirements: 19.2, 19.4_
  
  - [x] 14.2 Implement code splitting
    - Use dynamic imports for heavy components
    - Split vendor bundles
    - Enable tree shaking
    - _Requirements: 19.3_
  
  - [ ] 14.3 Configure caching headers
    - Set cache-control headers for static assets
    - Configure immutable caching for versioned assets
    - _Requirements: 19.5_
  
  - [x] 14.4 Optimize CSS
    - Enable Tailwind CSS purge
    - Inline critical CSS
    - Load non-critical CSS asynchronously
    - _Requirements: 19.3_
  
  - [ ] 14.5 Optimize font loading
    - Self-host fonts (Inter, JetBrains Mono)
    - Use font-display: swap
    - Preload critical fonts
    - Subset fonts to required characters
    - _Requirements: 19.4_
  
  - [ ]* 14.6 Write property tests for performance
    - **Property 21: Image Optimization**
    - **Property 25: Image Lazy Loading**
    - **Property 26: Bundle Size Optimization**
    - **Property 27: Static Asset Caching**
    - **Validates: Requirements 15.3, 19.2, 19.3, 19.4, 19.5**

- [ ] 15. Implement security measures
  - [ ] 15.1 Add Content Security Policy
    - Configure CSP headers in layout
    - Allow necessary external resources (Formspree, Google Analytics)
    - Restrict script sources
    - _Requirements: 16.1_
  
  - [ ] 15.2 Implement form security
    - Add CSRF tokens to form submissions
    - Add honeypot fields for spam prevention
    - Validate email format and domain
    - _Requirements: 16.2_
  
  - [ ] 15.3 Add privacy compliance
    - Add privacy policy and terms of service links
    - Ensure no PII stored client-side
    - Anonymize analytics data
    - _Requirements: 16.6_
  
  - [ ]* 15.4 Write property test for form CSRF protection
    - **Property 11: Form CSRF Protection**
    - **Validates: Requirements 16.2**

- [ ] 16. Final testing and quality assurance
  - [ ]* 16.1 Run full property test suite
    - Execute all 34 property tests with 100 iterations each
    - Verify all properties pass
    - _Requirements: All_
  
  - [ ]* 16.2 Run accessibility audit
    - Use jest-axe to test WCAG 2.1 AA compliance
    - Fix any accessibility violations
    - _Requirements: 17.1, 17.2, 17.3, 17.4, 17.5, 17.6, 17.7_
  
  - [ ]* 16.3 Run Lighthouse audit
    - Test performance, accessibility, best practices, SEO
    - Ensure performance score 90+
    - Verify sub-2s load time on 3G
    - _Requirements: 19.1_
  
  - [ ]* 16.4 Test responsive design
    - Test all breakpoints (mobile, tablet, desktop)
    - Verify touch targets on mobile
    - Test landscape and portrait orientations
    - _Requirements: 14.1, 14.2, 14.3_
  
  - [ ]* 16.5 Test form functionality
    - Test successful submission flow
    - Test validation errors
    - Test network errors
    - Test loading states
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7_
  
  - [ ]* 16.6 Test cross-browser compatibility
    - Test in Chrome, Firefox, Safari, Edge
    - Verify animations work correctly
    - Test form submission in all browsers
    - _Requirements: All_

- [ ] 17. Checkpoint - Final verification
  - Run full test suite (unit + property tests)
  - Verify Lighthouse score 90+
  - Verify accessibility compliance
  - Test form submission end-to-end
  - Verify all content renders correctly
  - Test responsive design at all breakpoints
  - Verify bundle size under 200KB
  - Ensure all tests pass, ask the user if questions arise

- [x] 18. Deployment preparation
  - [x] 18.1 Create build scripts
    - Add build, export, and deploy scripts to package.json
    - Configure Cloudflare Pages deployment
    - _Requirements: 15.1_
  
  - [x] 18.2 Create deployment documentation
    - Document build process
    - Document content update process
    - Document deployment process
    - _Requirements: 15.1_
  
  - [x] 18.3 Configure CI/CD
    - Set up pre-commit checks (tests, linting, type checking)
    - Set up PR checks (full test suite, Lighthouse audit)
    - Set up deployment checks (verify build, verify sitemap)
    - _Requirements: 15.1, 19.1_

## Notes

- Tasks marked with `*` are optional testing tasks that can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation at key milestones
- Property tests validate universal correctness properties with 100 iterations each
- Unit tests validate specific examples, edge cases, and error conditions
- TypeScript content files provide compile-time type safety and eliminate parsing overhead
- All content is directly imported by components, no file I/O at runtime
- Build process compiles TypeScript content into static HTML output
