// Team Section Content
// Defines core team and advisors with credentials and "why matters" context

import { TeamContent } from "./types";

export const teamContent: TeamContent = {
  // Core team members (Requirement 8.1)
  coreTeam: [
    {
      name: "Shrinath V",
      title: "Strategic Advisor & Systems Leader",
      photo: "/team/shrinath.jpg",
      // Credentials highlighting relevant experience (Requirement 8.4)
      credentials: [
        "20+ years across product innovation and organizational transformation",
        "Anchor mentor with Google for Startups (10+ years, 100+ founders across 5 continents)",
        "Systems thinker aligning business, design, and technology",
        "Surfaces hidden interdependencies in complex transformations",
      ],
      // Why this matters - context explaining relevant experience (Requirement 8.3)
      whyMatters:
        "Shrinath brings deep systems thinking to AI strategy, helping boards and CXOs see beyond the technology to understand organizational, economic, and strategic interdependencies. His work with 100+ founders across 5 continents gives him pattern recognition for what works—and what fails—in AI transformation.",
      linkedin: "https://www.linkedin.com/in/shrinathv/",
    },
    {
      name: "Ashish Gulati",
      title: "Data & AI Systems Architect",
      photo: "/team/ashish-gulati-v2.jpg",
      credentials: [
        "15+ years in AI, data science, and cloud architecture across the Python ecosystem",
        "Certified AWS Architect specializing in Machine Learning and Generative AI",
        "Led technical transformations at Tower Research Capital, Flipkart, and Dell",
        "10,000+ training hours delivered",
      ],
      whyMatters:
        "Ashish makes AI work in production. His expertise spans the full technical stack—from architecture to deployment to operations. He's trained thousands of practitioners and led transformations at scale, giving him deep insight into what it takes to move from proof-of-concept to production systems that deliver business value.",
      linkedin: "https://www.linkedin.com/in/ashishgulati/",
    },
  ],

  // Advisors (Requirement 8.2)
  advisors: [
    {
      name: "Mintoo Kakati",
      title: "Big Tech Scaling Expert & Innovator",
      photo: "/team/mintoo.jpg",
      credentials: [
        "12 years at Amazon; $2B+ in realized business value",
        "3 AI systems patents",
        "Launches at 100M+ weekly actives",
        "Crafts Amazon-grade strategy & execution plans that align CXOs and teams",
      ],
      whyMatters:
        "Mintoo brings proven big-tech execution patterns to AI strategy. He's built and scaled AI systems at Amazon serving 100M+ users, navigated the organizational complexity of enterprise AI adoption, and knows how to align technical execution with board-level strategy. His patents and track record demonstrate deep expertise in AI systems that work at scale.",
      linkedin: "https://www.linkedin.com/in/mintookakati/",
    },
    {
      name: "Padmanabhan (NP) Menon",
      title: "Managing Partner, AUSPIN Ventures",
      photo: "/team/np-menon-v2.jpg",
      credentials: [
        "Board Member and Advisor to growth-stage technology firms",
        "30+ years in global strategy and product marketing",
        "Deep expertise in AI, SaaS, and digital transformation",
        "Cross-sector experience: BFSI, energy, and healthcare",
      ],
      whyMatters:
        "NP Menon brings board-level perspective to AI strategy. As a board member and advisor to growth-stage technology firms, he understands how boards evaluate AI investments, manage transformation risk, and shape strategic bets. His 30+ years in global strategy across BFSI, energy, and healthcare give him unique insight into sector-specific AI opportunities and challenges.",
      linkedin: "https://www.linkedin.com/in/padmanabhan-menon-8192224/",
    },
    {
      name: "Ramesh Srinivasan",
      title: "Senior Advisor, Leadership & Systems Design",
      photo: "/team/ramesh-srinivasan.jpg",
      credentials: [
        "Leadership coach, educator, and systems consultant",
        "4,000+ coaching hours for 125+ senior leaders across India, SE Asia, and the Middle East",
        "Former Head of Operations at HCL Technologies (Singapore)",
        "Founder of i.e. Consulting",
      ],
      whyMatters:
        "Ramesh brings the human dimension to AI transformation. With 4,000+ coaching hours for senior leaders, he understands the organizational change challenges that make or break AI initiatives. His systems design expertise helps align leadership, culture, and execution—the critical factors that determine whether AI investments deliver value or become expensive experiments.",
      linkedin: "https://www.linkedin.com/in/rameshie/",
    },
  ],
};

export default teamContent;
