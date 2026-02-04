'use client';

/**
 * Process Section Component
 * 
 * Explains 4 time-boxed sprints with activities and outcomes.
 * Validates Requirements 7.1, 7.2, 7.3, 7.4
 * 
 * Visual Design:
 * - Background: Stone-50
 * - Sprint cards: Timeline visualization with connecting lines
 * - Duration badges: Gold background with white text
 * - Timeline: Vertical on mobile, horizontal on desktop
 * 
 * Responsive Behavior:
 * - Mobile: Vertical timeline, cards stack
 * - Desktop: Horizontal timeline with cards below
 */

import React from 'react';
import { processContent } from '@/content/process';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative py-12 md:py-16 lg:py-20 bg-teal-800"
      aria-labelledby="process-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12 max-w-4xl mx-auto">
          <h2 
            id="process-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            Our Working Process
          </h2>
          <p className="text-base md:text-lg text-teal-100 leading-relaxed">
            Time-boxed sprints with clear outcomes at every stage
          </p>
        </div>

        {/* Sprints - Requirement 7.1, 7.2, 7.3, 7.4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:items-stretch">
          {processContent.sprints.map((sprint, index) => {
            
            return (
              <Card 
                key={index}
                className="bg-white border-stone-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
              >
                {/* Gray bar at top with Sprint label and duration */}
                <div className="bg-stone-100 px-6 py-3 flex justify-between items-center">
                  <div className="text-sm font-bold text-stone-600">
                    Sprint {index + 1}
                  </div>
                  <div className="text-sm font-bold text-stone-600">
                    {sprint.duration}
                  </div>
                </div>

                <CardHeader className="px-6 pt-5 pb-4">
                  {/* Title */}
                  <CardTitle className="text-xl md:text-2xl text-primary-600 mb-3">
                    {sprint.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="px-6 pb-6 space-y-5 flex-grow">
                  {/* What Happens - Requirement 7.2 */}
                  <div>
                    <h4 className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-2">
                      What Happens
                    </h4>
                    <p className="text-sm md:text-base text-stone-700 leading-relaxed">
                      {sprint.activities}
                    </p>
                  </div>
                </CardContent>
                
                {/* Outcome - Full width colored section at bottom */}
                <div className="bg-green-50 px-6 py-5 border-t border-green-200 mt-auto md:min-h-[200px]">
                  <h4 className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2 flex items-center gap-2">
                    <span aria-hidden="true">✓</span>
                    Outcome
                  </h4>
                  <p className="text-sm md:text-base text-stone-700 leading-relaxed">
                    {sprint.outcome}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
