// Services Section Content
// Defines 6 distinct services mapped to real CXO problems with concrete deliverables

import { ServicesContent } from './types';

export const servicesContent: ServicesContent = {
  // 6 distinct services with problem-solution framing (Requirement 5.1)
  services: [
    {
      title: "Board Readiness Package",
      icon: "presentation-chart-line",
      // The CXO Problem (Requirement 5.2)
      cxoProblem: "Your board is asking tough questions about AI strategy, ROI, and risk—and you don't have clear answers. You need to present a credible AI plan that addresses their concerns about hype, costs, and execution risk without overselling or underselling the opportunity.",
      // What We Deliver (Requirement 5.3)
      deliverables: [
        "Executive-ready AI strategy presentation with clear business case and ROI projections",
        "Risk assessment covering technical, operational, and financial risks with mitigation plans",
        "Competitive landscape analysis showing where AI creates defensible advantage vs. table stakes",
        "3-year roadmap with phased investment requirements and expected returns",
        "Governance framework defining roles, decision rights, and oversight mechanisms"
      ],
      // Preselect value for form integration (Requirement 5.5)
      preselect: "board-readiness"
    },
    {
      title: "AI Portfolio Triage",
      icon: "clipboard-document-check",
      cxoProblem: "You have 15 AI pilots, 8 vendors, and no clear picture of what's working, what's failing, or where to invest next. Teams are building in silos, duplicating efforts, and creating technical debt. You need an honest assessment of your current AI portfolio and a clear prioritization framework.",
      deliverables: [
        "Comprehensive audit of all AI initiatives with honest assessment of viability and ROI potential",
        "Kill/fix/fund recommendations for each initiative based on business value and technical feasibility",
        "Consolidated roadmap eliminating redundancies and sequencing initiatives for maximum impact",
        "Technical debt assessment identifying integration challenges and architectural gaps",
        "Resource reallocation plan focusing investment on high-impact, executable opportunities"
      ],
      preselect: "portfolio-triage"
    },
    {
      title: "AI Deployment Readiness",
      icon: "server-stack",
      cxoProblem: "Your AI pilots work in demos but can't scale to production. You're missing the systems and processes to deploy AI reliably across the enterprise. Your technical teams are stuck, and business stakeholders are losing confidence in AI's viability.",
      deliverables: [
        "Production deployment framework with automated workflows and quality controls",
        "Performance monitoring and alerting systems tracking business impact and system health",
        "Cost management framework with visibility into spending and ROI by initiative",
        "Security and compliance controls meeting enterprise governance requirements",
        "Operational playbooks enabling your teams to deploy and support AI systems independently"
      ],
      preselect: "infrastructure"
    },
    {
      title: "AI Cost Control & Economics",
      icon: "shield-exclamation",
      cxoProblem: "You're spending heavily on AI with no visibility into costs or value creation. Expenses are unpredictable, and you can't answer basic questions about unit economics or ROI. You need financial controls and a sustainable economic model before scaling further.",
      deliverables: [
        "Cost control framework with spending limits and automated alerts to prevent overruns",
        "Optimization strategies reducing AI costs without sacrificing quality or performance",
        "Quality assurance processes ensuring AI outputs meet business requirements",
        "Unit economics model tracking cost per transaction and ROI by use case",
        "Vendor strategy and architecture to avoid lock-in and optimize total cost of ownership"
      ],
      preselect: "ai-firewall"
    },
    {
      title: "Enterprise AI Rollout",
      icon: "rocket-launch",
      cxoProblem: "You have a successful AI pilot, but scaling it across the enterprise feels impossible. Change management is complex, different business units have different needs, and you're concerned about failures at scale. You need a proven approach for enterprise-wide deployment.",
      deliverables: [
        "Phased rollout strategy with controlled expansion and clear success criteria at each stage",
        "Change management program including training, communication, and stakeholder engagement",
        "Risk mitigation and fallback mechanisms ensuring business continuity when issues arise",
        "Customization framework allowing business unit adaptation without fragmenting the platform",
        "Success metrics and dashboards tracking adoption, performance, and business impact"
      ],
      preselect: "enterprise-rollout"
    },
    {
      title: "AI Independence Program",
      icon: "academic-cap",
      cxoProblem: "You're dependent on vendors, consultants, and a handful of AI experts who could leave tomorrow. You need to build internal AI capabilities so your organization can execute independently. But you don't know how to hire, train, and organize AI teams for long-term success.",
      deliverables: [
        "AI capability assessment identifying skill gaps and training needs across technical and business teams",
        "Hiring playbook with role definitions, interview frameworks, and compensation benchmarks for AI talent",
        "Training program covering AI fundamentals, MLOps practices, and responsible AI for your existing teams",
        "Operating model defining how AI teams integrate with product, engineering, and business units",
        "Knowledge transfer plan with documentation, code reviews, and pair programming to build internal expertise"
      ],
      preselect: "independence-program"
    }
  ],
  
  // Call-to-action for services section (Requirement 5.4)
  ctaText: "Map Your Use-Case Portfolio",
  ctaLink: "#contact"
};

export default servicesContent;
