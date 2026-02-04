/**
 * Basic rendering tests for all section components
 * Ensures components render without errors
 */

import { describe, it, expect, beforeAll } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { DifferentiationSection } from '../DifferentiationSection';
import { ApproachSection } from '../ApproachSection';
import { ServicesSection } from '../ServicesSection';
import { OutcomesSection } from '../OutcomesSection';
import { ProcessSection } from '../ProcessSection';
import { TeamSection } from '../TeamSection';
import { SocialProofSection } from '../SocialProofSection';
import { QualificationSection } from '../QualificationSection';
import { Footer } from '../Footer';

// Mock Next.js Image component
beforeAll(() => {
  // @ts-ignore
  global.Image = class MockImage {
    onload: (() => void) | null = null;
    src = '';
    constructor() {
      setTimeout(() => {
        if (this.onload) this.onload();
      }, 0);
    }
  };
});

describe('Section Components - Basic Rendering', () => {
  describe('DifferentiationSection', () => {
    it('should render without crashing', () => {
      render(<DifferentiationSection />);
      expect(screen.getByText(/What Makes Us Different/i)).toBeInTheDocument();
    });

    it('should display all differentiators', () => {
      render(<DifferentiationSection />);
      expect(screen.getByText(/Independence by Design/i)).toBeInTheDocument();
      expect(screen.getByText(/Practitioners Not Consultants/i)).toBeInTheDocument();
    });
  });

  describe('ApproachSection', () => {
    it('should render without crashing', () => {
      render(<ApproachSection />);
      expect(screen.getByText(/Our Approach Framework/i)).toBeInTheDocument();
    });

    it('should display principles and anti-patterns', () => {
      render(<ApproachSection />);
      expect(screen.getByText(/Business Objective Driven/i)).toBeInTheDocument();
      expect(screen.getByText(/Anti-Pattern/i)).toBeInTheDocument();
    });
  });

  describe('ServicesSection', () => {
    it('should render without crashing', () => {
      render(<ServicesSection />);
      expect(screen.getByText(/Full Execution Cycle/i)).toBeInTheDocument();
    });

    it('should display all services', () => {
      render(<ServicesSection />);
      expect(screen.getByText(/Board Readiness Package/i)).toBeInTheDocument();
      expect(screen.getByText(/AI Portfolio Triage/i)).toBeInTheDocument();
    });
  });

  describe('OutcomesSection', () => {
    it('should render without crashing', () => {
      render(<OutcomesSection />);
      expect(screen.getByText(/Outcomes We Deliver/i)).toBeInTheDocument();
    });

    it('should display before and after states', () => {
      render(<OutcomesSection />);
      expect(screen.getByText(/Before/i)).toBeInTheDocument();
      expect(screen.getByText(/After/i)).toBeInTheDocument();
    });
  });

  describe('ProcessSection', () => {
    it('should render without crashing', () => {
      render(<ProcessSection />);
      expect(screen.getByText(/Our Working Process/i)).toBeInTheDocument();
    });

    it('should display all sprints', () => {
      render(<ProcessSection />);
      expect(screen.getByText(/Alignment Sprint/i)).toBeInTheDocument();
      expect(screen.getByText(/Feasibility Sprint/i)).toBeInTheDocument();
    });
  });

  describe('TeamSection', () => {
    it('should render without crashing', () => {
      render(<TeamSection />);
      expect(screen.getByText(/The Practitioner Advantage/i)).toBeInTheDocument();
    });

    it('should display core team and advisors', () => {
      render(<TeamSection />);
      expect(screen.getByText(/Core Team/i)).toBeInTheDocument();
      expect(screen.getByText(/Strategic Advisors/i)).toBeInTheDocument();
    });
  });

  describe('SocialProofSection', () => {
    it('should render without crashing', () => {
      render(<SocialProofSection />);
      expect(screen.getByText(/What CXOs Say/i)).toBeInTheDocument();
    });

    it('should display testimonials', () => {
      render(<SocialProofSection />);
      expect(screen.getByText(/Chief Technology Officer/i)).toBeInTheDocument();
    });
  });

  describe('QualificationSection', () => {
    it('should render without crashing', () => {
      render(<QualificationSection />);
      expect(screen.getByText(/When \(Not\) to Work With Us/i)).toBeInTheDocument();
    });

    it('should display disqualifiers and qualifiers', () => {
      render(<QualificationSection />);
      expect(screen.getByText(/We're NOT Right For You If/i)).toBeInTheDocument();
      expect(screen.getByText(/We're Perfect For You If/i)).toBeInTheDocument();
    });
  });

  describe('Footer', () => {
    it('should render without crashing', () => {
      render(<Footer />);
      expect(screen.getByText(/AUSPIN.AI/i)).toBeInTheDocument();
    });

    it('should display contact information', () => {
      render(<Footer />);
      expect(screen.getByText(/hello@auspin.ai/i)).toBeInTheDocument();
    });

    it('should display tagline', () => {
      render(<Footer />);
      expect(screen.getByText(/AI execution without the vendor agenda/i)).toBeInTheDocument();
    });
  });
});
