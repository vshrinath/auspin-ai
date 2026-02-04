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
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <h2 
            id="approach-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 mb-6"
          >
            Our Approach Framework
          </h2>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
            5 non-negotiable principles for AI success
          </p>
        </div>

        {/* Principles - Requirement 4.1, 4.2, 4.3 */}
        <div className="space-y-8 md:space-y-12">
          {approachContent.principles.map((principle, index) => {
            const IconComponent = iconMap[principle.icon];
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`${isEven ? 'bg-stone-50' : 'bg-white'} rounded-lg p-6 md:p-8`}
              >
                {/* Card Header with Icon and Title */}
                <div className="flex items-center gap-4 mb-6 md:mb-8">
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
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-600">
                    {principle.title}
                  </h3>
                </div>

                {/* Risk and Mitigation Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  
                  {/* Risk Scenario Column (Left) */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl" role="img" aria-label="risk">⚠️</span>
                      <h4 className="text-lg font-semibold text-red-700">
                        Risk Scenario
                      </h4>
                    </div>
                    <p className="text-base text-stone-700 leading-relaxed pl-7">
                      {principle.theRisk}
                    </p>
                  </div>

                  {/* How We Mitigate It Column (Right) */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl" role="img" aria-label="solution">✓</span>
                      <h4 className="text-lg font-semibold text-green-700">
                        How We Mitigate It
                      </h4>
                    </div>
                    <p className="text-base text-stone-700 leading-relaxed pl-7">
                      {principle.howWeMitigateIt}
                    </p>
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
