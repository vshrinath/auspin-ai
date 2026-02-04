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
      cxoProblem: "We prepare you for board-level AI discussions with executive-ready strategy presentations, risk assessments, competitive analysis, and governance frameworks. You get clear answers to tough questions about ROI, execution risk, and competitive positioning—backed by data and realistic projections.",
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
      cxoProblem: "We audit your entire AI portfolio and provide honest kill/fix/fund recommendations. You get a consolidated roadmap that eliminates redundancies, sequences initiatives for maximum impact, and focuses resources on high-value opportunities with clear execution paths.",
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
      cxoProblem: "We build the production systems and processes needed to deploy AI reliably at scale. You get automated workflows, monitoring systems, cost controls, and operational playbooks that enable your teams to deploy and support AI independently.",
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
      cxoProblem: "We establish financial controls and sustainable economic models for your AI investments. You get cost visibility, optimization strategies, unit economics tracking, and vendor strategies that prevent overruns and ensure positive ROI before scaling.",
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
      cxoProblem: "We design and execute phased rollout strategies that scale AI across your enterprise with controlled risk. You get change management programs, customization frameworks, and success metrics that ensure adoption while maintaining business continuity.",
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
      cxoProblem: "We build your internal AI capabilities so you can execute independently. You get capability assessments, hiring playbooks, training programs, and operating models that develop sustainable AI expertise within your organization.",
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
