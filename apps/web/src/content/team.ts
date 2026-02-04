// Team Section Content
// Defines core team and advisors with credentials and "why matters" context

import { TeamContent } from './types';

export const teamContent: TeamContent = {
  // Core team members (Requirement 8.1)
  coreTeam: [
    {
      name: "Shrinath V",
      title: "Founder & Principal Consultant",
      photo: "/images/team/shrinath.jpg",
      // Credentials highlighting relevant experience (Requirement 8.4)
      credentials: [
        "Ex-Amazon AI leader, managed $1B+ AI programs",
        "Built production ML systems serving 100M+ customers",
        "Led AI strategy for Amazon's retail and advertising businesses",
        "15+ years in AI/ML, from research to production at scale",
        "Advised Fortune 500 companies on AI transformation"
      ],
      // Why this matters - context explaining relevant experience (Requirement 8.3)
      whyMatters: "Shrinath has seen AI at the largest scale in the world—Amazon's retail and advertising systems processing billions of predictions daily. He knows the difference between demos that impress and systems that deliver business value. He's navigated the organizational, technical, and economic challenges of AI at scale, and he's here to help you avoid the mistakes he's seen (and made) along the way.",
      linkedin: "https://www.linkedin.com/in/shrinathv/"
    },
    {
      name: "Ashish Gulati",
      title: "Co-Founder & Technical Lead",
      photo: "/images/team/ashish.jpg",
      credentials: [
        "Ex-Amazon AI engineer, built ML infrastructure at scale",
        "Designed and deployed production ML platforms serving millions",
        "Expert in MLOps, model deployment, and production AI systems",
        "12+ years building AI systems from prototype to production",
        "Specialized in AI economics, cost optimization, and scalability"
      ],
      whyMatters: "Ashish is the engineer who makes AI actually work in production. He's built the infrastructure that takes models from notebooks to systems serving millions of users with sub-second latency and predictable costs. He understands the operational realities of AI at scale—monitoring, versioning, rollbacks, cost management, and everything else that separates successful AI systems from expensive science projects.",
      linkedin: "https://www.linkedin.com/in/ashishgulati/"
    }
  ],
  
  // Advisors (Requirement 8.2)
  advisors: [
    {
      name: "Mintoo Kakati",
      title: "Strategic Advisor - Enterprise AI",
      photo: "/images/team/mintoo.jpg",
      credentials: [
        "Former CTO at multiple Fortune 500 companies",
        "Led enterprise-wide AI transformations across retail, finance, and healthcare",
        "Board member and advisor to AI startups and enterprises",
        "30+ years in technology leadership and digital transformation"
      ],
      whyMatters: "Mintoo brings the CXO perspective—he's been in your seat, facing board questions about AI strategy, ROI, and risk. He knows how to navigate organizational politics, secure executive buy-in, and build the business case for AI investment. His experience spans multiple industries and company sizes, giving him pattern recognition for what works and what doesn't in enterprise AI adoption.",
      linkedin: "https://www.linkedin.com/in/mintookokati/"
    },
    {
      name: "NP Menon",
      title: "Strategic Advisor - Board-Level AI Strategy",
      photo: "/images/team/npmenon.jpg",
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
      title: "Strategic Advisor - AI Product & GTM",
      photo: "/images/team/ramesh.jpg",
      credentials: [
        "Former VP Product at leading AI companies",
        "Built and scaled AI products from 0 to $100M+ revenue",
        "Expert in AI product strategy, go-to-market, and monetization",
        "20+ years in product management and business development"
      ],
      whyMatters: "Ramesh knows how to turn AI capabilities into products that customers actually want and will pay for. He's navigated the challenges of AI product-market fit, pricing, and go-to-market strategy. His experience is invaluable for organizations looking to monetize AI capabilities or build AI-powered products, not just internal efficiency tools.",
      linkedin: "https://www.linkedin.com/in/rameshsrinivasan/"
    }
  ]
};

export default teamContent;
