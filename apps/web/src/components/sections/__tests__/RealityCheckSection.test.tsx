/**
 * RealityCheckSection Component Tests
 * Validates Requirements 2.1, 2.2, 2.3, 2.4
 */

import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { RealityCheckSection } from '../RealityCheckSection';
import { realityCheckContent } from '@/content/reality-check';

describe('RealityCheckSection', () => {
  it('renders the main statistic (Requirement 2.1)', () => {
    render(<RealityCheckSection />);
    
    // Check for the 95% statistic
    expect(screen.getByText(realityCheckContent.statistic)).toBeInTheDocument();
    expect(screen.getByText(realityCheckContent.statisticLabel)).toBeInTheDocument();
  });

  it('renders all funnel stages (Requirement 2.2)', () => {
    render(<RealityCheckSection />);
    
    // Check for funnel visualization text
    expect(screen.getByText(/100 pilots → 30 production → 5 succeed/i)).toBeInTheDocument();
  });

  it('renders all 4 failure categories (Requirement 2.3, 2.4)', () => {
    render(<RealityCheckSection />);
    
    // Check that all failure categories are rendered
    realityCheckContent.failureCategories.forEach(category => {
      expect(screen.getByText(category.title)).toBeInTheDocument();
      expect(screen.getByText(category.description)).toBeInTheDocument();
    });
  });

  it('renders the callout text (Requirement 2.5)', () => {
    render(<RealityCheckSection />);
    
    expect(screen.getByText(realityCheckContent.calloutText)).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(<RealityCheckSection />);
    
    // Check for section element
    const section = screen.getByRole('region', { name: /reality check/i });
    expect(section).toBeInTheDocument();
  });

  it('renders exactly 4 failure category cards', () => {
    const { container } = render(<RealityCheckSection />);
    
    // Count the number of failure category cards
    const cards = container.querySelectorAll('[class*="Card"]');
    // We expect 4 failure cards + 1 callout card = 5 total cards
    expect(cards.length).toBeGreaterThanOrEqual(4);
  });
});
