// Social Proof Section Content
// Defines 3 CXO testimonials with quotes, metrics, and context

import { SocialProofContent } from './types';

export const socialProofContent: SocialProofContent = {
  // 3 CXO-level testimonials (Requirement 9.1)
  testimonials: [
    {
      // Quote with specific context (Requirement 9.1)
      quote: "We had 12 AI pilots and no idea which ones were worth scaling. AUSPIN gave us an honest assessment—killed 7 projects, fixed 3, and helped us scale 2 that actually delivered ROI. They saved us from wasting another year and $5M on initiatives that would never work.",
      // Specific metrics achieved (Requirement 9.2)
      metrics: [
        "12 → 2 focused initiatives",
        "$5M in avoided waste",
        "18-month ROI on scaled projects",
        "Internal team now executing independently"
      ],
      // Role and industry context (Requirement 9.2)
      role: "Chief Technology Officer",
      industry: "Financial Services",
      // Anonymity flag (Requirement 9.3)
      anonymous: true
    },
    {
      quote: "Our AI pilot worked great in testing but fell apart in production—costs were 10x higher than expected and accuracy degraded within weeks. AUSPIN rebuilt our infrastructure with proper monitoring, cost controls, and retraining pipelines. Now we're processing 5x the volume at 60% lower cost with better accuracy than the original pilot.",
      metrics: [
        "10x → 0.4x cost reduction (60% savings)",
        "5x volume increase",
        "Accuracy improved from 82% → 91%",
        "Zero production incidents in 6 months"
      ],
      role: "Chief Operating Officer",
      industry: "E-commerce & Retail",
      anonymous: true
    },
    {
      quote: "We were stuck in vendor lock-in hell—$200K/month in API costs with no control over pricing or roadmap. AUSPIN helped us build a multi-provider architecture with cost optimization and quality gates. We cut costs by 65%, improved response quality, and now we have leverage in vendor negotiations. Best decision we made.",
      metrics: [
        "$200K → $70K monthly costs (65% reduction)",
        "Response quality improved 30%",
        "Zero vendor lock-in risk",
        "Negotiating leverage with multiple providers"
      ],
      role: "Chief Financial Officer",
      industry: "Healthcare Technology",
      anonymous: true
    }
  ]
};

export default socialProofContent;
