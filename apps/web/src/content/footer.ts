// Footer Content
// Defines footer sections, links, contact info, and legal links

import { FooterContent } from './types';

export const footerContent: FooterContent = {
  // Footer sections with navigation links (Requirement 12.1)
  sections: [
    {
      title: "Services",
      links: [
        { text: "Board Readiness Package", href: "#services" },
        { text: "AI Portfolio Triage", href: "#services" },
        { text: "AI Deployment Readiness", href: "#services" },
        { text: "AI Cost Control & Economics", href: "#services" },
        { text: "Enterprise AI Rollout", href: "#services" },
        { text: "AI Independence Program", href: "#services" }
      ]
    },
    {
      title: "Approach",
      links: [
        { text: "Our Philosophy", href: "#differentiation" },
        { text: "Working Process", href: "#process" },
        { text: "Success Framework", href: "#approach" },
        { text: "Team & Advisors", href: "#team" }
      ]
    },
    {
      title: "Resources",
      links: [
        { text: "AI Readiness Assessment", href: "#contact" },
        { text: "CXO's Guide to AI", href: "#contact" },
        { text: "Case Studies", href: "#social-proof" },
        { text: "Expected Outcomes", href: "#outcomes" }
      ]
    },
    {
      title: "Company",
      links: [
        { text: "About AUSPIN", href: "#team" },
        { text: "Why We're Different", href: "#differentiation" },
        { text: "Who We Work With", href: "#qualification" },
        { text: "Contact Us", href: "#contact" }
      ]
    }
  ],
  
  // Contact information (Requirement 12.2)
  contactInfo: {
    email: "hello@auspin.ai",
    phone: "+1 (555) 123-4567"
  },
  
  // Tagline (Requirement 12.4)
  tagline: "AI execution without the vendor agenda",
  
  // Legal links (Requirement 12.3)
  legalLinks: [
    { text: "Privacy Policy", href: "/privacy" },
    { text: "Terms of Service", href: "/terms" },
    { text: "Cookie Policy", href: "/cookies" }
  ]
};

export default footerContent;
