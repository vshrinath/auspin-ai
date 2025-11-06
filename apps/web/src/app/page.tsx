/**
 * AUSPIN Ventures - AI Strategic Execution Partner
 * Polished one-page site using Tailwind CSS
 */

import { AuspinHero } from "../components/AuspinHero";
import { ProblemSection } from "../components/ProblemSection";
import { ServicesSection } from "../components/ServicesSection";
import { MethodSection } from "../components/MethodSection";
import { OutcomesSection } from "../components/OutcomesSection";
import { AuspinTeamLarge } from "../components/AuspinTeamLarge";
import { AuspinContact } from "../components/AuspinContact";

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <AuspinHero />
      
      {/* Problem Section */}
      <ProblemSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Method Section */}
      <MethodSection />
      
      {/* Outcomes Section */}
      <OutcomesSection />
      
      {/* Team Section */}
      <AuspinTeamLarge />
      
      {/* Contact Section */}
      <AuspinContact />
    </main>
  );
}
