// Team Section Content
// Defines core team and advisors with credentials and "why matters" context

import { TeamContent } from './types';

export const teamContent: TeamContent = {
  // Core team members (Requirement 8.1)
  coreTeam: [
    {
      name: "Shrinath V",
      title: "Founder & Principal Consultant",
      photo: "/team/shrinath.jpg",
      // Credentials highlighting relevant experience (Requirement 8.4)
      credentials: [
        "20+ years building and scaling AI and technology systems",
        "Led AI strategy and execution for enterprise transformation programs",
        "Deep expertise in AI economics, risk management, and production deployment",
        "Advised boards and CXOs on AI investment strategy and governance",
        "Built systems serving millions of users with predictable costs and outcomes"
      ],
      // Why this matters - context explaining relevant experience (Requirement 8.3)
      whyMatters: "Shrinath has navigated the full spectrum of AI challenges—from technical architecture to board-level strategy. He understands the difference between demos that impress and systems that deliver business value. His experience spans organizational change, technical execution, and economic modeling, helping you avoid costly mistakes and accelerate time to value.",
      linkedin: "https://www.linkedin.com/in/shrinathv/"
    },
    {
      name: "Ashish Gulati",
      title: "Co-Founder & Technical Lead",
      photo: "/team/ashish-gulati-v2.jpg",
      credentials: [
        "15+ years building production AI and ML infrastructure at scale",
        "Expert in MLOps, model deployment, and production system reliability",
        "Specialized in AI economics, cost optimization, and operational excellence",
        "Built platforms serving millions with sub-second latency and predictable costs",
        "Deep expertise in monitoring, versioning, and production AI governance"
      ],
      whyMatters: "Ashish makes AI work in production. He understands the operational realities that separate successful AI systems from expensive science projects—monitoring, cost management, rollbacks, and everything else that keeps systems running reliably at scale. His focus is on sustainable, economically viable AI that delivers consistent business value.",
      linkedin: "https://www.linkedin.com/in/ashishgulati/"
    }
  ],
  
  // Advisors (Requirement 8.2)
  advisors: [
    {
      name: "Mintoo Kakati",
      title: "Strategic Advisor",
      photo: "/team/mintoo.jpg",
      credentials: [
        "Advisor to enterprises and boards on AI and technology strategy",
        "30+ years in technology leadership and digital transformation",
        "Cross-industry experience in retail, finance, healthcare, and technology",
        "Expert in organizational change, executive alignment, and business case development"
      ],
      whyMatters: "Mintoo brings the CXO perspective—he understands board-level questions about AI strategy, ROI, and risk. His experience spans organizational politics, executive buy-in, and building business cases that resonate at the governance level. He helps translate technical possibilities into strategic decisions.",
      linkedin: "https://www.linkedin.com/in/mintookokati/"
    },
    {
      name: "NP Menon",
      title: "Strategic Advisor - Board-Level AI Strategy",
      photo: "/team/np-menon-v2.jpg",
      credentials: [
        "Board Director at Bahwan CyberTek (global digital transformation company, 1,000+ customers including Fortune 500, 20+ countries)",
        "Led Group CEO's Office, driving AI-led transformation at board level",
        "Managing Partner at AUSPIN Ventures",
        "Founder & Board Director at Confianzys Consulting (India's first Product Management Consulting firm)",
        "30+ years cross-vertical board experience (BFSI, Energy, Healthcare, Logistics, Government, Life Sciences)"
      ],
      whyMatters: "NP brings board-level perspective to AI strategy. As Board Director at Bahwan CyberTek—a global digital transformation company serving 1,000+ customers including Fortune 500 firms across 20+ countries—he has guided AI-driven business model transformation and IP-led innovation at the highest governance level. He established and led the Group CEO's Office, improving strategic alignment and execution of growth programs at the board/CEO interface. His cross-vertical board experience across BFSI, Energy, Healthcare, Logistics, Government, and Life Sciences gives him unique insight into how boards evaluate AI investments, manage transformation risk, and shape portfolio bets for AI and technology systems.",
      linkedin: "https://www.linkedin.com/in/npmenon/"
    },
    {
      name: "Ramesh Srinivasan",
      title: "Strategic Advisor - Product & GTM",
      photo: "/team/ramesh-srinivasan.jpg",
      credentials: [
        "20+ years in product management and business development",
        "Built and scaled technology products from concept to market",
        "Expert in product strategy, go-to-market, and monetization",
        "Experience across enterprise software, SaaS, and AI-powered products"
      ],
      whyMatters: "Ramesh knows how to turn AI capabilities into products that customers want and will pay for. He's navigated product-market fit, pricing, and go-to-market strategy for technology products. His experience is invaluable for organizations looking to monetize AI capabilities or build AI-powered products, not just internal efficiency tools.",
      linkedin: "https://www.linkedin.com/in/rameshsrinivasan/"
    }
  ]
};

export default teamContent;
