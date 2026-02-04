/**
 * Approach Framework Section Component
 * 
 * Presents 5 non-negotiable principles with anti-patterns.
 * Validates Requirements 4.1, 4.2, 4.3
 * 
 * Visual Design:
 * - Background: Alternating white and stone-50
 * - Principle cards: Two-column layout (principle | anti-pattern)
 * - Anti-patterns: Red accent with ❌ icon
 * - Practical examples: Indented with checkmark icon
 * 
 * Responsive Behavior:
 * - Mobile: Stack principle and anti-pattern vertically
 * - Desktop: Side-by-side comparison
 */

import React from 'react';
import { approachContent } from '@/content/approach';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import {
  FlagIcon,
  ChartBarIcon,
  PuzzlePieceIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

// Icon mapping for principles
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'target': FlagIcon,
  'chart-bar': ChartBarIcon,
  'puzzle-piece': PuzzlePieceIcon,
  'arrow-trending-up': ArrowTrendingUpIcon,
  'shield-check': ShieldCheckIcon,
};

export function ApproachSection() {
  return (
    <section
      id="approach"
      className="relative py-12 md:py-16 lg:py-20 bg-white"
      aria-labelledby="approach-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12 max-w-4xl mx-auto">
          <h2 
            id="approach-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-600 mb-4"
          >
            Our Approach Framework
          </h2>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed">
            5 non-negotiable principles for AI success
          </p>
        </div>

        {/* Principles - Requirement 4.1, 4.2, 4.3 */}
        <div className="space-y-6 md:space-y-8">
          {approachContent.principles.map((principle, index) => {
            const IconComponent = iconMap[principle.icon];
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className="rounded-lg overflow-hidden"
              >
                {/* Mobile: Teal header card */}
                <div className="md:hidden bg-white border border-stone-200 rounded-lg overflow-hidden">
                  <div className="bg-teal-700 px-6 py-4">
                    <h3 className="text-xl font-bold text-white">
                      {principle.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xl" role="img" aria-label="risk">⚠️</span>
                          <h4 className="text-lg font-semibold text-red-700">Risk Scenario</h4>
                        </div>
                        <p className="text-base text-stone-700 leading-relaxed">{principle.theRisk}</p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xl" role="img" aria-label="solution">✓</span>
                          <h4 className="text-lg font-semibold text-green-700">How We Mitigate It</h4>
                        </div>
                        <p className="text-base text-stone-700 leading-relaxed">{principle.howWeMitigateIt}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop: Alternating background with icon+title */}
                <div className={`hidden md:block ${isEven ? 'bg-stone-50' : 'bg-white'} border border-stone-200 rounded-lg p-8`}>
                  <div className="flex items-center gap-4 mb-8">
                    {IconComponent && (
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-lg bg-primary-100 flex items-center justify-center">
                          <IconComponent 
                            className="w-8 h-8 text-primary-600" 
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-primary-600">
                      {principle.title}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xl" role="img" aria-label="risk">⚠️</span>
                        <h4 className="text-lg font-semibold text-red-700">Risk Scenario</h4>
                      </div>
                      <p className="text-base text-stone-700 leading-relaxed">{principle.theRisk}</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xl" role="img" aria-label="solution">✓</span>
                        <h4 className="text-lg font-semibold text-green-700">How We Mitigate It</h4>
                      </div>
                      <p className="text-base text-stone-700 leading-relaxed">{principle.howWeMitigateIt}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ApproachSection;
