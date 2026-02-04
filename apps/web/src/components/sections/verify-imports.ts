/**
 * Verification file to ensure all section components can be imported
 * This file is not used in production, just for build verification
 */

// Import all section components to verify they compile
import { DifferentiationSection } from './DifferentiationSection';
import { ApproachSection } from './ApproachSection';
import { ServicesSection } from './ServicesSection';
import { OutcomesSection } from './OutcomesSection';
import { ProcessSection } from './ProcessSection';
import { TeamSection } from './TeamSection';
import { SocialProofSection } from './SocialProofSection';
import { QualificationSection } from './QualificationSection';
import { Footer } from './Footer';

// Export them to prevent tree-shaking during verification
export {
  DifferentiationSection,
  ApproachSection,
  ServicesSection,
  OutcomesSection,
  ProcessSection,
  TeamSection,
  SocialProofSection,
  QualificationSection,
  Footer,
};

// Type check - ensure all components are valid React components
const components = [
  DifferentiationSection,
  ApproachSection,
  ServicesSection,
  OutcomesSection,
  ProcessSection,
  TeamSection,
  SocialProofSection,
  QualificationSection,
  Footer,
] as const;

export default components;
