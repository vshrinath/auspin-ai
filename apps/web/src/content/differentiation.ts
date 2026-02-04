// Differentiation section content for AUSPIN website
// Defines what makes AUSPIN different from typical AI consultants

import { DifferentiationContent } from "./types";

export const differentiationContent: DifferentiationContent = {
  philosophy:
    "We're not here to sell you AI. We're here to help you build AI systems that actually work—without the vendor lock-in, the enterprise sales pitch, or the dependency on consultants who never leave. Our business model only works if you succeed and become independent.",

  differentiators: [
    {
      title: "Board-Level Perspective",
      description:
        "We don't just advise boards—we sit on them. Our Managing Partner serves as Board Director at a global tech conglomerate, bringing experience from organizations serving Fortune 500 clients across 20+ countries. We understand board dynamics, governance requirements, and what it takes to get board buy-in for AI initiatives.",
      icon: "building-office",
    },
    {
      title: "Practitioners Not Consultants",
      description:
        "We've built and scaled AI and technology systems in production—from global tech companies to growth-stage startups. We don't theorize—we've lived through the failures, the production incidents, and the hard lessons. We bring battle-tested patterns, not PowerPoint frameworks.",
      icon: "wrench-screwdriver",
    },
    {
      title: "Independence by Design",
      description:
        "We build your AI capabilities, not our consulting revenue. Every engagement is designed to transfer knowledge and ownership to your team. We succeed when you no longer need us.",
      icon: "shield-check",
    },
    {
      title: "Economics-First Always",
      description:
        "Every AI system must have a clear path to positive ROI. We start with the business case, not the technology. If the economics don't work, we won't help you build it. No vanity projects, no science experiments on your dime.",
      icon: "currency-dollar",
    },
    {
      title: "Truth Over Validation",
      description:
        "If your AI initiative is headed for failure, we'll tell you—even if it costs us the engagement. We're not here to validate bad ideas or extend timelines. We're here to help you succeed, not contribute to the failure statistics.",
      icon: "chat-bubble-left-right",
    },
    {
      title: "Built to Transfer Not Create Dependency",
      description:
        "We document everything, train your team, and build systems your engineers can maintain. No proprietary frameworks, no vendor lock-in, no mysterious black boxes. Open source first, with clear handoff plans from day one.",
      icon: "arrow-path",
    },
  ],

  honestQuestion: "How do you make money if you're designed to make us independent?",

  honestAnswer:
    "Fair question. We charge for the intensive work of building your AI capabilities—the alignment sprints, the architecture design, the production rollout, the knowledge transfer. But we don't optimize for long-term dependency. We'd rather do 10 successful 90-day engagements than one 3-year consulting contract. Our reputation is built on clients who succeed and become independent, not clients who can't function without us. That's a better business model for everyone.",
};

export default differentiationContent;
