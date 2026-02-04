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
import { Button } from '@/components/ui/button';
import {
  UsersIcon,
  BeakerIcon,
  ClipboardDocumentCheckIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

// Icon mapping for sprints
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'users': UsersIcon,
  'beaker': BeakerIcon,
  'clipboard-document-check': ClipboardDocumentCheckIcon,
  'rocket-launch': RocketLaunchIcon,
};

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative py-12 md:py-16 lg:py-20 bg-teal-800"
      aria-labelledby="process-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <h2 
            id="process-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Our Working Process
          </h2>
          <p className="text-lg md:text-xl text-teal-100 leading-relaxed">
            Time-boxed sprints with clear outcomes at every stage
          </p>
        </div>

        {/* Timeline - Desktop only */}
        <div className="hidden lg:block mb-12">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-teal-600" aria-hidden="true" />
            
            {/* Timeline dots */}
            <div className="relative flex justify-between">
              {processContent.sprints.map((sprint, index) => {
                const IconComponent = iconMap[sprint.icon];
                
                return (
                  <div key={index} className="flex flex-col items-center" style={{ width: '25%' }}>
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border-4 border-teal-600 shadow-lg z-10">
                      {IconComponent && (
                        <IconComponent className="w-8 h-8 text-teal-800" aria-hidden="true" />
                      )}
                    </div>
                    <div className="mt-4 text-center">
                      <div className="inline-block px-4 py-2 bg-gold-500 text-teal-900 font-bold rounded-full text-sm">
                        {sprint.duration}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sprints - Requirement 7.1, 7.2, 7.3, 7.4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {processContent.sprints.map((sprint, index) => {
            const IconComponent = iconMap[sprint.icon];
            
            return (
              <Card 
                key={index}
                className="bg-white border-stone-200 hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  {/* Title as main header */}
                  <CardTitle className="text-xl md:text-2xl text-primary-600 mb-3">
                    Sprint {index + 1}: {sprint.name}
                  </CardTitle>
                  
                  {/* Duration badge */}
                  <div className="inline-block px-3 py-1 bg-accent text-white font-bold rounded-full text-sm">
                    {sprint.duration}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* What Happens - Requirement 7.2 */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">
                      What Happens
                    </h4>
                    <p className="text-base text-stone-700 leading-relaxed">
                      {sprint.activities}
                    </p>
                  </div>
                  
                  {/* Why This Matters - Requirement 7.3 */}
                  <div>
                    <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                      Why This Matters
                    </h4>
                    <p className="text-base text-stone-700 leading-relaxed">
                      {sprint.whyMatters}
                    </p>
                  </div>
                  
                  {/* Outcome - Requirement 7.4 */}
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h4 className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-2 flex items-center gap-2">
                      <span aria-hidden="true">✓</span>
                      Outcome
                    </h4>
                    <p className="text-base text-stone-700 leading-relaxed">
                      {sprint.outcome}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Button - Requirement 7.1 */}
        <div className="text-center">
          <a 
            href={processContent.ctaLink}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal-800 bg-white text-teal-900 shadow-lg hover:bg-stone-50 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] px-8 py-6 h-12"
          >
            {processContent.ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
