// Outcomes Section Content
// Defines 4 outcome categories with before/after states and metrics

import { OutcomesContent } from './types';

export const outcomesContent: OutcomesContent = {
  // 4 outcome categories with before/after transformations (Requirement 6.1)
  outcomes: [
    {
      category: "AI-Enhanced Customer Journeys",
      icon: "user-group",
      // Before and after states showing transformation (Requirement 6.2)
      beforeState: "Manual customer support with 48-hour response times, inconsistent answers, and 30% of inquiries requiring escalation. Customer satisfaction scores stuck at 3.2/5. Support costs growing 20% annually as volume increases.",
      afterState: "AI-powered tier-1 support with instant responses, 85% resolution rate, and seamless escalation for complex cases. Customer satisfaction improved to 4.3/5. Support costs reduced by 40% while handling 3x the volume.",
      // Specific metrics showing results (Requirement 6.3)
      metrics: [
        "48h → 30s response time",
        "30% → 85% first-contact resolution",
        "3.2 → 4.3 CSAT score",
        "40% cost reduction"
      ]
    },
    {
      category: "AI Economics & Growth Models",
      icon: "currency-dollar",
      beforeState: "AI pilots running with no cost tracking, no unit economics, and no path to profitability. $200K/month in cloud costs with unclear ROI. Finance team blocking scale-up due to cost concerns and lack of business case.",
      afterState: "Full cost visibility with per-prediction tracking, automated cost optimization, and clear unit economics. Cloud costs reduced to $80K/month while processing 5x volume. ROI model showing 18-month payback and $2.4M annual savings at scale.",
      metrics: [
        "$200K → $80K monthly costs",
        "5x volume increase",
        "18-month payback period",
        "$2.4M annual savings"
      ]
    },
    {
      category: "AI Engineering & Ops at Scale",
      icon: "cog",
      beforeState: "Data scientists building models in notebooks that never reach production. 6-month deployment cycles. No monitoring, no versioning, no rollback capability. Ops team overwhelmed and unable to support AI systems.",
      afterState: "Production ML platform with automated deployment pipelines, real-time monitoring, and one-click rollbacks. Models deployed in days, not months. Ops team trained and confident in supporting AI systems with clear runbooks and incident response procedures.",
      metrics: [
        "6 months → 3 days deployment time",
        "0 → 15 models in production",
        "100% model monitoring coverage",
        "Zero production incidents"
      ]
    },
    {
      category: "Enterprise-Wide AI Adoption Enablers",
      icon: "building-office",
      beforeState: "15 disconnected AI pilots across different departments, each using different vendors and architectures. No shared infrastructure, massive duplication of effort, and growing technical debt. No clear path to enterprise-wide AI capability.",
      afterState: "Unified AI platform serving 8 business units with shared data foundations, reusable components, and consistent governance. 40+ AI use cases in production, all built on common infrastructure. Internal AI team capable of independent execution.",
      metrics: [
        "15 → 40+ use cases in production",
        "8 business units on shared platform",
        "60% reduction in vendor costs",
        "Internal team executing independently"
      ]
    }
  ]
};

export default outcomesContent;
