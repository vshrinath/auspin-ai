/**
 * Board Questions Section Component
 * 
 * Surfaces the key strategic questions boards ask about AI initiatives.
 * Problem-first approach that establishes credibility by naming real concerns.
 * Answers come later in Differentiation, Approach, and Services sections.
 * 
 * Visual Design:
 * - Background: White (clean break from teal hero)
 * - Layout: Simple card grid
 * - Icons: Teal accent
 * - Typography: Question as bold header, challenge as body text
 * 
 * Responsive Behavior:
 * - Mobile: Single column, full-width cards
 * - Tablet: 2 columns
 * - Desktop: 2x2 grid
 */

import React from 'react';
import { boardQuestionsContent } from '@/content/board-questions';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  CurrencyDollarIcon,
  AcademicCapIcon,
  BuildingOffice2Icon,
  LockOpenIcon,
} from '@heroicons/react/24/outline';

// Icon mapping for board questions
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'currency-dollar': CurrencyDollarIcon,
  'academic-cap': AcademicCapIcon,
  'building-office-2': BuildingOffice2Icon,
  'lock-open': LockOpenIcon,
};

export function BoardQuestionsSection() {
  return (
    <section
      className="relative py-16 md:py-20 lg:py-24 bg-white"
      aria-labelledby="board-questions-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
          <h2 
            id="board-questions-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3"
          >
            {boardQuestionsContent.headline}
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            {boardQuestionsContent.subheadline}
          </p>
        </div>

        {/* Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
          {boardQuestionsContent.questions.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            
            return (
              <Card 
                key={index}
                className="bg-white border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col items-center text-center gap-3">
                    {/* Icon - Center aligned */}
                    {IconComponent && (
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center">
                          <IconComponent 
                            className="w-6 h-6 text-teal-600" 
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    )}
                    
                    {/* Question */}
                    <CardTitle className="text-lg md:text-xl text-gray-900 leading-tight">
                      "{item.question}"
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Challenge Description */}
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center">
                    {item.challenge}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Optional CTA */}
        <div className="text-center">
          <a
            href={boardQuestionsContent.ctaLink}
            className="inline-flex flex-col md:flex-row items-center text-base md:text-lg font-medium text-teal-600 hover:text-teal-700 transition-colors duration-200"
          >
            <span>{boardQuestionsContent.ctaText}</span>
            <svg
              className="mt-2 md:mt-0 md:ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default BoardQuestionsSection;
