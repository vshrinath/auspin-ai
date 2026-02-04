# Requirements Document

## Introduction

This specification defines the requirements for a complete redesign of the AUSPIN.AI website. The redesign focuses on CXO-optimized messaging, enhanced interactivity, and a markdown-based content management system. The new site will feature 10 major sections with practitioner-focused value propositions, trust-building elements, and clear calls-to-action designed to convert enterprise decision-makers.

## Glossary

- **CXO**: C-level executives (CEO, CTO, CFO, etc.) who are primary decision-makers for enterprise AI initiatives
- **Alignment_Sprint**: A 2-day intensive workshop to align stakeholders on AI strategy and objectives
- **Content_System**: Markdown-based file structure for managing all website text content
- **Lead_Magnet**: Downloadable resources offered in exchange for contact information
- **Static_Export**: Next.js build output that generates static HTML files for deployment
- **Component_Library**: Reusable UI components built with React, TypeScript, and Tailwind CSS
- **AI_Pilot**: An experimental AI project or proof-of-concept implementation
- **ROI**: Return on Investment - financial metric measuring profitability of AI initiatives
- **Formspree**: Third-party form handling service for contact form submissions

## Requirements

### Requirement 1: Hero Section with Trust Indicators

**User Story:** As a CXO visiting the site, I want to immediately understand AUSPIN's unique value proposition and credibility, so that I can quickly assess if they're worth my time.

#### Acceptance Criteria

1. WHEN the page loads, THE Hero_Section SHALL display the headline "AI Without the Vendor Lock-In, Hype, or Regret"
2. WHEN the Hero_Section is rendered, THE Hero_Section SHALL include a practitioner-focused subheadline explaining the value proposition
3. THE Hero_Section SHALL display a primary call-to-action button labeled "Book Alignment Sprint"
4. THE Hero_Section SHALL include trust badges highlighting "Ex-Amazon AI leaders", "$2B+ programs managed", and "95% pilot failure rate" context
5. WHEN a user clicks the primary CTA, THE System SHALL navigate to the booking form section

### Requirement 2: Reality Check Section (Enterprise AI Quagmire)

**User Story:** As a CXO who has experienced AI project failures, I want to see that AUSPIN understands the real challenges, so that I trust they can help me avoid common pitfalls.

#### Acceptance Criteria

1. THE Reality_Check_Section SHALL display a visual representation showing "95% of AI pilots fail to reach production"
2. THE Reality_Check_Section SHALL include a funnel visualization showing "100 pilots → 30 production → 5 succeed"
3. THE Reality_Check_Section SHALL list 4 systematic failure categories with detailed explanations: Leadership misalignment, Governance gaps, Messy integration, and Unscalable economics
4. WHEN displaying failure categories, THE Reality_Check_Section SHALL include specific examples for each category
5. THE Reality_Check_Section SHALL include a callout box highlighting wasted investment statistics

### Requirement 3: Differentiation Section

**User Story:** As a CXO evaluating AI consultants, I want to understand what makes AUSPIN different from competitors, so that I can justify choosing them over alternatives.

#### Acceptance Criteria

1. THE Differentiation_Section SHALL display a philosophy statement explaining AUSPIN's approach
2. THE Differentiation_Section SHALL list 5 key differentiators with accompanying icons: Independence by Design, Practitioners Not Consultants, Truth Over Validation, Economics-First Always, and Built to Transfer Not Create Dependency
3. WHEN displaying differentiators, THE Differentiation_Section SHALL include detailed explanations for each point
4. THE Differentiation_Section SHALL include a "How do you make money if this fails?" question with an honest answer
5. THE Differentiation_Section SHALL conclude with a statement on alignment and shared success

### Requirement 4: Approach Framework Section

**User Story:** As a CXO planning AI initiatives, I want to understand AUSPIN's methodology, so that I can evaluate if their approach aligns with my organization's needs.

#### Acceptance Criteria

1. THE Approach_Section SHALL display 5 non-negotiable principles for AI success: Business objective driven, ROI focus, Strategy aligned, Phased adoption, and Managed risks
2. WHEN displaying each principle, THE Approach_Section SHALL include an anti-pattern explanation showing what NOT to do
3. WHEN displaying each principle, THE Approach_Section SHALL include a "what this means in practice" explanation with concrete examples
4. THE Approach_Section SHALL use visual hierarchy to distinguish principles from anti-patterns
5. THE Approach_Section SHALL be structured as a framework that can be referenced throughout the site

### Requirement 5: Services Section (Full Execution Cycle)

**User Story:** As a CXO with specific AI challenges, I want to see AUSPIN's service offerings mapped to real problems, so that I can identify which services address my needs.

#### Acceptance Criteria

1. THE Services_Section SHALL display 6 distinct services with icons: Board Readiness Package, AI Portfolio Triage, Production-Grade Infrastructure, AI Firewall & Economics Model, Enterprise Rollout Engine, and AI Independence Program
2. WHEN displaying each service, THE Services_Section SHALL include "The CXO Problem" statement describing the business challenge
3. WHEN displaying each service, THE Services_Section SHALL include "What We Deliver" statement listing concrete deliverables
4. THE Services_Section SHALL include a call-to-action button labeled "Map your use-case portfolio"
5. WHEN a user clicks the service CTA, THE System SHALL navigate to the contact form with the service pre-selected

### Requirement 6: Outcomes Section

**User Story:** As a CXO evaluating ROI, I want to see concrete outcomes AUSPIN delivers, so that I can assess the potential value for my organization.

#### Acceptance Criteria

1. THE Outcomes_Section SHALL display 4 outcome categories with icons: AI-Enhanced Customer Journeys, AI Economics & Growth Models, AI Engineering & Ops at Scale, and Enterprise-Wide AI Adoption Enablers
2. WHEN displaying each outcome, THE Outcomes_Section SHALL include before-and-after examples showing transformation
3. WHEN displaying each outcome, THE Outcomes_Section SHALL include specific metrics or results where applicable
4. THE Outcomes_Section SHALL use visual elements to highlight the transformation from current state to desired state
5. THE Outcomes_Section SHALL link outcomes back to the services that deliver them

### Requirement 7: Working Process Section (Sprints & Frameworks)

**User Story:** As a CXO considering engagement, I want to understand AUSPIN's working process and timeline, so that I can plan resources and set expectations.

#### Acceptance Criteria

1. THE Process_Section SHALL display 4 time-boxed sprints: Alignment Sprint (2 days), Feasibility Sprint (3 weeks), Commitment Review (2 hours), and Scaling Sprint (30-90 days)
2. WHEN displaying each sprint, THE Process_Section SHALL include "What happens" description of activities
3. WHEN displaying each sprint, THE Process_Section SHALL include "Why this matters" explanation of value
4. WHEN displaying each sprint, THE Process_Section SHALL include "Outcome" statement of deliverables
5. THE Process_Section SHALL include a call-to-action button labeled "Request Sprint Schedule"

### Requirement 8: Team Section (Practitioner Advantage)

**User Story:** As a CXO vetting service providers, I want to see the team's credentials and experience, so that I can assess their capability to deliver results.

#### Acceptance Criteria

1. THE Team_Section SHALL display core team members: Shrinath V and Ashish Gulati with photos, titles, and credentials
2. THE Team_Section SHALL display advisors: Mintoo Kakati, NP Menon, and Ramesh Srinivasan with credentials
3. WHEN displaying each team member, THE Team_Section SHALL include "Why this matters" context explaining their relevant experience
4. THE Team_Section SHALL highlight specific achievements such as "$2B+ programs managed" and "Ex-Amazon AI leadership"
5. THE Team_Section SHALL use visual hierarchy to distinguish core team from advisors

### Requirement 9: Social Proof Section

**User Story:** As a CXO seeking validation, I want to see testimonials from peers, so that I can trust AUSPIN's track record.

#### Acceptance Criteria

1. THE Social_Proof_Section SHALL display 3 testimonials from CXO-level executives
2. WHEN displaying testimonials, THE Social_Proof_Section SHALL include specific metrics or results achieved
3. THE Social_Proof_Section SHALL maintain anonymity while providing role and industry context
4. THE Social_Proof_Section SHALL use visual design to emphasize credibility and authenticity
5. WHERE testimonials are integrated into other sections, THE System SHALL maintain consistent formatting and attribution

### Requirement 10: Primary Call-to-Action Section

**User Story:** As a CXO ready to engage, I want a clear path to book a consultation, so that I can take the next step without friction.

#### Acceptance Criteria

1. THE CTA_Section SHALL display the heading "De-Risk Your AI Execution"
2. THE CTA_Section SHALL include a form with fields: Name, Work Email, Company & Role, Region, and 90-day outcome
3. WHEN a user submits the form, THE System SHALL validate all required fields before submission
4. WHEN a user submits the form, THE System SHALL send form data to Formspree for processing
5. THE CTA_Section SHALL include an alternative CTA to "Download AI Readiness Self-Assessment"
6. WHEN form submission succeeds, THE System SHALL display a confirmation message
7. IF form submission fails, THEN THE System SHALL display an error message and preserve user input

### Requirement 11: Qualification Section (When Not to Work With Us)

**User Story:** As a CXO evaluating fit, I want to understand who AUSPIN is NOT right for, so that I can self-qualify and respect their selectivity.

#### Acceptance Criteria

1. THE Qualification_Section SHALL display 5 disqualifiers marked with ❌ icons explaining who should NOT work with AUSPIN
2. THE Qualification_Section SHALL display 5 qualifiers marked with ✅ icons explaining ideal client characteristics
3. THE Qualification_Section SHALL use honest, direct language to build trust through selectivity
4. THE Qualification_Section SHALL be positioned before the footer to serve as a final qualification checkpoint
5. THE Qualification_Section SHALL use visual contrast to distinguish disqualifiers from qualifiers

### Requirement 12: Footer with Navigation

**User Story:** As a user navigating the site, I want quick access to all sections and contact information, so that I can easily find what I need.

#### Acceptance Criteria

1. THE Footer SHALL include quick links to all major sections of the site
2. THE Footer SHALL display contact information including email and phone number
3. THE Footer SHALL include legal links for Privacy Policy and Terms of Service
4. THE Footer SHALL display the tagline "AI execution without the vendor agenda"
5. THE Footer SHALL remain accessible on all pages and viewport sizes

### Requirement 13: Markdown Content Management System

**User Story:** As a content manager, I want to edit all website text through markdown files, so that I can update content without touching code.

#### Acceptance Criteria

1. THE Content_System SHALL store all text content in markdown files under the `apps/web/content/` directory
2. WHEN content files are updated, THE System SHALL reflect changes on the next build without code modifications
3. THE Content_System SHALL support frontmatter for metadata such as section titles, order, and visibility
4. THE Content_System SHALL organize content files by section with clear naming conventions
5. THE Content_System SHALL include a README documenting the content structure and editing guidelines

### Requirement 14: Responsive Design Implementation

**User Story:** As a mobile user, I want the site to work seamlessly on my device, so that I can access information anywhere.

#### Acceptance Criteria

1. THE System SHALL implement mobile-first responsive design using Tailwind CSS breakpoints
2. WHEN viewport width is below 768px, THE System SHALL stack sections vertically and adjust typography
3. WHEN viewport width is below 768px, THE System SHALL optimize touch targets to minimum 44x44 pixels
4. THE System SHALL ensure all interactive elements are accessible via touch on mobile devices
5. THE System SHALL maintain visual hierarchy and readability across all viewport sizes

### Requirement 15: Static Export and Deployment

**User Story:** As a site administrator, I want the site to deploy as static files to Cloudflare Pages, so that I get fast load times and low hosting costs.

#### Acceptance Criteria

1. THE System SHALL generate static HTML files using Next.js static export to the `out` directory
2. WHEN the build process runs, THE System SHALL process all markdown content into static pages
3. THE System SHALL optimize images and assets for fast loading
4. THE System SHALL generate a sitemap.xml file for SEO
5. THE System SHALL be deployable to Cloudflare Pages without server-side runtime requirements

### Requirement 16: Form Integration with Formspree

**User Story:** As a site administrator, I want contact form submissions to be handled reliably, so that I don't miss any leads.

#### Acceptance Criteria

1. WHEN a user submits a contact form, THE System SHALL send form data to Formspree API endpoint
2. THE System SHALL include CSRF protection and spam prevention measures
3. WHEN form submission is in progress, THE System SHALL display a loading state and disable the submit button
4. WHEN form submission succeeds, THE System SHALL clear the form and display a success message
5. IF form submission fails, THEN THE System SHALL preserve user input and display a retry option

### Requirement 17: Accessibility Compliance

**User Story:** As a user with disabilities, I want the site to be accessible, so that I can access all content and functionality.

#### Acceptance Criteria

1. THE System SHALL meet WCAG 2.1 AA compliance standards
2. THE System SHALL provide alternative text for all images and icons
3. THE System SHALL ensure sufficient color contrast ratios for all text (minimum 4.5:1 for normal text)
4. THE System SHALL support keyboard navigation for all interactive elements
5. THE System SHALL include proper ARIA labels and semantic HTML structure
6. WHEN focus moves between elements, THE System SHALL provide visible focus indicators

### Requirement 18: Lead Magnet Downloads

**User Story:** As a CXO researching AI strategy, I want to download helpful resources, so that I can evaluate AUSPIN's expertise before committing to a call.

#### Acceptance Criteria

1. THE System SHALL offer downloadable resources including "AI Readiness Self-Assessment" and "CXO's Guide to AI"
2. WHEN a user requests a download, THE System SHALL collect email address before providing the resource
3. THE System SHALL store downloadable PDFs in the `public/downloads/` directory
4. WHEN a user submits their email, THE System SHALL trigger the download automatically
5. THE System SHALL track download requests for analytics purposes

### Requirement 19: Performance Optimization

**User Story:** As a user on a slow connection, I want the site to load quickly, so that I don't abandon it due to poor performance.

#### Acceptance Criteria

1. THE System SHALL achieve a Lighthouse performance score of 90 or above
2. THE System SHALL implement lazy loading for images below the fold
3. THE System SHALL minimize JavaScript bundle size through code splitting
4. THE System SHALL use optimized image formats (WebP with fallbacks)
5. THE System SHALL implement proper caching headers for static assets

### Requirement 20: Analytics and Tracking

**User Story:** As a marketing manager, I want to track user behavior and conversions, so that I can optimize the site for better results.

#### Acceptance Criteria

1. THE System SHALL track CTA button clicks with event labels
2. THE System SHALL track form submissions and completion rates
3. THE System SHALL track scroll depth to measure content engagement
4. THE System SHALL track download requests for lead magnets
5. THE System SHALL integrate with Google Analytics or similar analytics platform
