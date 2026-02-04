// Reality Check Section Content
// Displays the harsh reality of AI pilot failures with funnel visualization and failure categories

import { RealityCheckContent } from './types';

export const realityCheckContent: RealityCheckContent = {
  // Main statistic highlighting the failure rate (Requirement 2.1)
  statistic: "95%",
  statisticLabel: "of AI pilots fail to reach production",

  // Funnel visualization data showing the dramatic drop-off (Requirement 2.2)
  // "100 pilots → 30 production → 5 succeed"
  funnelData: [
    {
      label: "AI Pilots Started",
      value: 100,
      color: "#10b981" // Green - starting with optimism
    },
    {
      label: "Reach Production",
      value: 30,
      color: "#f59e0b" // Amber - warning zone
    },
    {
      label: "Actually Succeed",
      value: 5,
      color: "#ef4444" // Red - harsh reality
    }
  ],

  // 4 systematic failure categories with detailed explanations (Requirement 2.3, 2.4)
  failureCategories: [
    {
      title: "Leadership Misalignment",
      description: "Your C-suite thinks AI is magic, your engineers think it's math, and your business units think it's someone else's problem. Without shared understanding of what AI can and cannot do, projects drift toward the loudest voice rather than the best outcome.",
      icon: "users"
    },
    {
      title: "Governance Gaps",
      description: "No one owns the AI roadmap. IT wants control, business wants speed, legal wants compliance, and security wants to shut it all down. Without clear decision rights and accountability, every choice becomes a committee debate that kills momentum.",
      icon: "shield-exclamation"
    },
    {
      title: "Messy Integration",
      description: "Your data is scattered across 47 systems, half your APIs don't talk to each other, and nobody documented the business logic from 2003 that still runs critical processes. AI doesn't fix technical debt—it exposes it brutally.",
      icon: "puzzle-piece"
    },
    {
      title: "Unscalable Economics",
      description: "The pilot worked great on 1,000 records. Now you're trying to run it on 10 million records, and the cloud bill just hit $500K/month. Nobody modeled the unit economics, and now you're stuck between killing the project or explaining the budget overrun.",
      icon: "currency-dollar"
    }
  ],

  // Callout highlighting wasted investment (Requirement 2.5)
  calloutText: "Enterprise AI projects waste an estimated $50B annually on pilots that never scale. The problem isn't the technology—it's the execution gap between proof-of-concept and production reality."
};

export default realityCheckContent;
