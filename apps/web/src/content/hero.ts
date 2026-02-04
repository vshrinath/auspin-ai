// Hero section content for AUSPIN website
// Validates Requirements 1.1, 1.2, 1.3, 13.1

import { HeroContent } from './types';

export const heroContent: HeroContent = {
  // Requirement 1.1: Headline focused on board-level independent strategy
  headline: "Independent AI Strategy for Boards and CXOs",
  
  // Requirement 1.2: Board directors and practitioners value proposition
  subheadline: "Board directors and practitioners who've built AI at scale—providing honest guidance without vendor lock-in or consulting dependency.",
  
  // Requirement 1.3: Primary CTA labeled "Book Alignment Sprint"
  ctaText: "Book Alignment Sprint",
  
  // Requirement 1.5: Navigate to booking form section
  ctaLink: "#contact",
  
  // Requirement 1.4: Trust badges highlighting board-level credentials
  trustBadges: [
    {
      icon: "building-office",
      text: "Board Directors",
      emphasis: "with governance experience"
    },
    {
      icon: "shield-check",
      text: "Practitioners",
      emphasis: "who've built AI at scale"
    },
    {
      icon: "chart-bar",
      text: "Independent",
      emphasis: "no vendor lock-in"
    }
  ]
};

export default heroContent;
