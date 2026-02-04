/**
 * AUSPIN Ventures - AI Strategic Execution Partner
 * Main landing page composed of all section components
 * 
 * Code Splitting Strategy:
 * - Above-the-fold sections (Hero, RealityCheck, Differentiation) load immediately
 * - Below-the-fold sections use dynamic imports for better performance
 */

import dynamic from 'next/dynamic';
import {
  HeroSection,
  BoardQuestionsSection,
  DifferentiationSection,
} from '@/components/sections';
import { Navbar } from '@/components/navigation/Navbar';

// Dynamically import below-the-fold sections for code splitting
const ApproachSection = dynamic(() => import('@/components/sections/ApproachSection'), {
  loading: () => <div className="min-h-[400px]" />,
});

const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'), {
  loading: () => <div className="min-h-[600px]" />,
});

const ProcessSection = dynamic(() => import('@/components/sections/ProcessSection'), {
  loading: () => <div className="min-h-[500px]" />,
});

const TeamSection = dynamic(() => import('@/components/sections/TeamSection'), {
  loading: () => <div className="min-h-[600px]" />,
});

const CTASection = dynamic(() => import('@/components/sections/CTASection'), {
  loading: () => <div className="min-h-[500px]" />,
});

const Footer = dynamic(() => import('@/components/sections/Footer'), {
  loading: () => <div className="min-h-[300px]" />,
});

export default function HomePage() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />
      
      <main className="bg-white pt-16 md:pt-20">
        {/* 1. Hero Section - Main headline and CTA */}
        <HeroSection />

      {/* 2. Board Questions Section - Strategic challenges boards face */}
      <BoardQuestionsSection />

      {/* 3. Differentiation Section - What makes AUSPIN different */}
      <DifferentiationSection />

      {/* 4. Approach Section - Non-negotiable principles */}
      <ApproachSection />

      {/* 5. Services Section - 6 core services */}
      <ServicesSection />

      {/* 6. Process Section - 4-sprint timeline */}
      <ProcessSection />

      {/* 7. Team Section - Core team and advisors */}
      <TeamSection />

      {/* 8. CTA Section - Contact form */}
      <CTASection />

      {/* 9. Footer - Links and contact info */}
      <Footer />
    </main>
    </>
  );
}
