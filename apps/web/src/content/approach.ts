// Approach Framework Section Content
// Defines 5 non-negotiable principles for AI success with anti-patterns and practical meanings

import { ApproachContent } from './types';

export const approachContent: ApproachContent = {
  // 5 non-negotiable principles for AI success (Requirement 4.1)
  principles: [
    {
      title: "Alignment with Business Objectives",
      theRisk: "Organizations start with the technology ('Let's use GPT-4!') instead of the business problem ('We need to reduce customer support costs by 30%'). This leads to solutions searching for problems, wasted POCs, and AI projects that deliver impressive demos but zero business value.",
      howWeMitigateIt: "Every AI initiative starts with a measurable business outcome. We define success metrics before writing a single line of code. If you can't articulate the business problem in one sentence and the success metric in another, we don't start building.",
      icon: "target"
    },
    {
      title: "ROI and Unit Economics",
      theRisk: "Organizations build AI systems without modeling unit economics. The pilot works great until you realize each AI-generated response costs $2.50 and you're processing 10 million requests per month. Now you're stuck with a $25M annual cloud bill for a system that saves $5M in labor costs.",
      howWeMitigateIt: "We model the full cost structure before production deployment—compute costs, data storage, API fees, human-in-the-loop review, error correction, and ongoing maintenance. Every AI system must have a clear path to positive ROI within 12-18 months. We build cost monitoring into the system from day one.",
      icon: "chart-bar"
    },
    {
      title: "Enterprise Strategy Alignment",
      theRisk: "Every department launches their own AI initiatives without coordination. Marketing builds a chatbot, Sales builds a lead scoring system, Support builds an email classifier—all using different vendors, different data models, and incompatible architectures. Two years later, you have 47 disconnected AI tools and massive technical debt.",
      howWeMitigateIt: "AI initiatives must align with enterprise architecture and data strategy. We establish shared data foundations, common platforms, and reusable components before building individual use cases. We create an AI portfolio roadmap that sequences initiatives to build on each other, not compete with each other.",
      icon: "puzzle-piece"
    },
    {
      title: "Phased Deployment Approach",
      theRisk: "Organizations go from zero to full production deployment in one big bang. You build for 6 months, launch to all users at once, and discover the AI makes catastrophic errors 2% of the time—which means 20,000 angry customers when you're processing a million transactions. Now you're in crisis mode, rolling back, and explaining to the board why the AI initiative failed.",
      howWeMitigateIt: "We deploy in controlled phases with human oversight, gradual rollout, and clear rollback plans. Start with shadow mode, then move to human-in-the-loop, then to monitored automation, and finally to full automation with exception handling. Each phase has defined success criteria and exit gates.",
      icon: "arrow-trending-up"
    },
    {
      title: "Ongoing Risk Management",
      theRisk: "Organizations treat AI systems like traditional software. You deploy a model, assume it will work forever, and move on to the next project. Six months later, the model's accuracy has degraded 40% because the underlying data distribution changed, but nobody noticed until customers started complaining.",
      howWeMitigateIt: "AI systems require ongoing monitoring, governance, and risk management. We build observability into every AI system—tracking model performance, data drift, prediction confidence, error rates, and business impact metrics. We establish clear ownership, incident response procedures, and model retraining schedules.",
      icon: "shield-check"
    }
  ]
};

export default approachContent;
