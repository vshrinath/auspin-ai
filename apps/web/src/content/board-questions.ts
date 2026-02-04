// Board Questions Section Content
// Defines the key strategic questions boards ask about AI initiatives

import { BoardQuestionsContent } from './types';

export const boardQuestionsContent: BoardQuestionsContent = {
  headline: "The Questions Your Board Is Asking About AI",
  subheadline: "If these sound familiar, you're not alone",
  
  questions: [
    {
      question: "What's the real ROI timeline and how do we track it?",
      challenge: "Most AI initiatives run with no cost tracking or clear unit economics. Finance blocks scale-up because there's no credible business case. You need visibility into costs, value creation, and realistic payback timelines.",
      icon: "currency-dollar"
    },
    {
      question: "How do we build internal AI capability, not just buy projects?",
      challenge: "Dependence on consultants and vendors leaves you vulnerable. When they leave, your AI systems become black boxes. You need to build internal expertise and ownership.",
      icon: "academic-cap"
    },
    {
      question: "How do we scale AI across the enterprise without creating chaos?",
      challenge: "Multiple departments launch disconnected pilots with different vendors and architectures. The result: duplication, technical debt, and no enterprise-wide capability.",
      icon: "building-office-2"
    },
    {
      question: "How do we make money if you're designed to make us independent?",
      challenge: "We charge for building capability, not creating dependency. Our model is time-boxed sprints with clear deliverables and knowledge transfer. You own the strategy, the roadmap, and the capability—we're here to accelerate, not to stay forever.",
      icon: "lock-open"
    }
  ],
  
  ctaText: "We've helped boards answer these questions",
  ctaLink: "#contact"
};

export default boardQuestionsContent;
