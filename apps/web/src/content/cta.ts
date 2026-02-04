import { CTAContent } from './types';

/**
 * CTA Section Content
 * Primary conversion point with contact form and lead magnet download
 */
export const ctaContent: CTAContent = {
  heading: "De-Risk Your AI Execution",
  formFields: [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      required: true,
      placeholder: "John Smith"
    },
    {
      name: "email",
      label: "Work Email",
      type: "email",
      required: true,
      placeholder: "john.smith@company.com"
    },
    {
      name: "company",
      label: "Company",
      type: "text",
      required: true,
      placeholder: "Your Company Name"
    },
    {
      name: "role",
      label: "Role",
      type: "select",
      required: true,
      options: [
        "CEO / Founder",
        "CTO / VP Engineering",
        "CDO / Chief Data Officer",
        "CAO / Chief AI Officer",
        "VP Product",
        "Director / Manager",
        "Other"
      ]
    },
    {
      name: "region",
      label: "Region",
      type: "select",
      required: true,
      options: [
        "Middle East",
        "India",
        "Southeast Asia",
        "Other"
      ]
    },
    {
      name: "service",
      label: "Service Interest (Optional)",
      type: "select",
      required: false,
      options: [
        "Board Readiness Package",
        "AI Portfolio Triage",
        "Production-Grade Infrastructure",
        "AI Firewall & Economics Model",
        "Enterprise Rollout Engine",
        "AI Independence Program",
        "Not Sure Yet"
      ]
    },
    {
      name: "outcome",
      label: "What's your 90-day outcome?",
      type: "textarea",
      required: true,
      placeholder: "Describe what success looks like for your AI initiative in the next 90 days..."
    }
  ],
  leadMagnetText: "Download AI Readiness Self-Assessment",
  leadMagnetFile: "/downloads/ai-readiness-assessment.pdf"
};

export default ctaContent;
