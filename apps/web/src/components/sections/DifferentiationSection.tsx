/**
 * Differentiation Section Component
 * 
 * Explains AUSPIN's unique positioning with 5 key differentiators.
 * Validates Requirements 3.1, 3.2, 3.3
 * 
 * Visual Design:
 * - Background: White with subtle texture
 * - Differentiator cards: Grid layout with hover effects
 * - Icons: Custom SVG in deep teal (#0f3d3a)
 * - Honest Q&A: Highlighted box with gold border
 * 
 * Responsive Behavior:
 * - Mobile: Single column, cards stack
 * - Tablet: 2-column grid
 * - Desktop: 3-column grid for first 3, 2-column for last 2
 */

import React from 'react';
import { differentiationContent } from '@/content/differentiation';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  BuildingOfficeIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

// Icon mapping for differentiators
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'building-office': BuildingOfficeIcon,
  'shield-check': ShieldCheckIcon,
  'wrench-screwdriver': WrenchScrewdriverIcon,
  'chat-bubble-left-right': ChatBubbleLeftRightIcon,
  'currency-dollar': CurrencyDollarIcon,
  'arrow-path': ArrowPathIcon,
};

export function DifferentiationSection() {
  return (
    <section
      className="relative py-12 md:py-16 lg:py-20 bg-teal-800"
      aria-labelledby="differentiation-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header with Philosophy - Requirement 3.1 */}
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <h2 
            id="differentiation-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            What Makes Us Different
          </h2>
          <p className="text-lg md:text-xl text-teal-100 leading-relaxed">
            {differentiationContent.philosophy}
          </p>
        </div>

        {/* Differentiators Grid - Requirement 3.2, 3.3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {differentiationContent.differentiators.map((differentiator, index) => {
            
            return (
              <Card 
                key={index}
                className="bg-white border-stone-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden p-0"
              >
                {/* Header with border */}
                <div className="bg-stone-50 px-6 py-4 border-b border-stone-200">
                  <CardTitle className="text-lg md:text-xl text-primary-600">
                    {differentiator.title}
                  </CardTitle>
                </div>
                
                {/* Content */}
                <div className="px-6 py-5">
                  <CardDescription className="text-sm md:text-base text-stone-600 leading-relaxed">
                    {differentiator.description}
                  </CardDescription>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Honest Q&A Section - Requirement 3.4, 3.5 */}
        <div className="max-w-4xl mx-auto mt-12 md:mt-16">
          <div className="space-y-6 p-8 md:p-10 border-l-4 border-white/30">
            {/* Question */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-start gap-3">
                <span className="hidden md:inline text-gold-400 text-3xl" aria-hidden="true">💡</span>
                <span>{differentiationContent.honestQuestion}</span>
              </h3>
            </div>
            
            {/* Answer */}
            <div className="pl-0 md:pl-12">
              <p className="text-base md:text-lg text-teal-50 leading-relaxed">
                {differentiationContent.honestAnswer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DifferentiationSection;
