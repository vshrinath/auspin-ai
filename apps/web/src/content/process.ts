// Process Section Content
// Defines 4 time-boxed sprints with activities, outcomes, and "why it matters" explanations

import { ProcessContent } from './types';

export const processContent: ProcessContent = {
  // 4 time-boxed sprints (Requirement 7.1)
  sprints: [
    {
      name: "Strategic Alignment",
      duration: "2 days",
      icon: "users",
      // What happens - activities description (Requirement 7.2)
      activities: "Board-level workshop to align on AI strategy, investment priorities, and success criteria. We facilitate decisions on which initiatives advance business objectives and what trade-offs you're willing to make.",
      // Why this matters - value explanation (Requirement 7.3)
      whyMatters: "Without board-level alignment on what success looks like, AI initiatives become science projects that never deliver business value. We ensure everyone—from the board to operations—agrees on priorities before committing resources.",
      // Outcome - deliverables statement (Requirement 7.4)
      outcome: "Board-approved AI strategy with prioritized initiatives, defined success metrics, resource requirements, and executive accountability. Clear mandate to proceed."
    },
    {
      name: "Investment Review",
      duration: "3 weeks",
      icon: "beaker",
      activities: "Rigorous assessment of top priority initiatives. We evaluate business case, data readiness, cost projections, and implementation risks. You get honest go/no-go recommendations with full transparency on what's required to succeed.",
      whyMatters: "This is where we separate viable opportunities from expensive experiments. We validate that initiatives can deliver ROI before you commit significant capital and organizational resources.",
      outcome: "Investment-grade business case for each initiative with cost projections, risk assessment, resource requirements, and implementation roadmap. Clear go/no-go decision backed by data."
    },
    {
      name: "Commitment Gate",
      duration: "2 hours",
      icon: "clipboard-document-check",
      activities: "Executive decision session where we present findings, recommendations, and resource requirements. Board decides which initiatives to fund, what resources to allocate, and what governance structure to establish.",
      whyMatters: "This is where we separate real commitment from wishful thinking. If the board isn't willing to commit the necessary resources and organizational change, we stop here. No surprises, no scope creep, no failed pilots.",
      outcome: "Formal board approval to proceed, approved budget and resource allocation, defined governance and review cadence, and executive accountability for delivery."
    },
    {
      name: "Controlled Rollout",
      duration: "30-90 days",
      icon: "rocket-launch",
      activities: "Phased implementation with built-in risk controls. We start with limited scope, validate results, then scale systematically. Board receives regular progress updates against defined success criteria with full transparency on challenges.",
      whyMatters: "Most AI initiatives fail during scale-up because organizations underestimate operational complexity. Our phased approach manages risk while building internal capability for long-term sustainability.",
      outcome: "Operating AI system delivering measurable business impact. Internal team capable of managing and extending the system. Documented playbook for scaling additional initiatives. Board-level metrics showing ROI."
    }
  ],
  
  // Call-to-action for process section (Requirement 7.1)
  ctaText: "Request Sprint Schedule",
  ctaLink: "#contact"
};

export default processContent;
