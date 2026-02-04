/**
 * Qualification Section Component
 * 
 * Sets expectations with disqualifiers and qualifiers.
 * Validates Requirements 11.1, 11.2, 11.3, 11.4
 * 
 * Visual Design:
 * - Background: White
 * - Two-column layout: Disqualifiers (left) | Qualifiers (right)
 * - Disqualifiers: Red ❌ icons
 * - Qualifiers: Green ✅ icons
 * - Honest, direct language
 * 
 * Responsive Behavior:
 * - Mobile: Stack disqualifiers above qualifiers
 * - Desktop: Side-by-side columns
 */

import React from 'react';
import { qualificationContent } from '@/content/qualification';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export function QualificationSection() {
  return (
    <section
      className="relative py-12 md:py-16 lg:py-20 bg-white"
      aria-labelledby="qualification-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <h2 
            id="qualification-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 mb-6"
          >
            When (Not) to Work With Us
          </h2>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
            We're selective about who we work with. Here's how to know if we're the right fit.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Disqualifiers - Requirement 11.1 */}
          <Card className="bg-red-50/50 border-red-200">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-red-700 flex items-center gap-3">
                <span className="text-3xl" role="img" aria-label="not a fit">
                  ❌
                </span>
                <span>We're NOT Right For You If...</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <ul className="space-y-6">
                {qualificationContent.disqualifiers.map((disqualifier, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-4"
                  >
                    <span 
                      className="flex-shrink-0 w-6 h-6 rounded-full bg-red-200 flex items-center justify-center text-red-700 font-bold text-sm mt-0.5"
                      aria-hidden="true"
                    >
                      ✗
                    </span>
                    <p className="text-base text-stone-700 leading-relaxed">
                      {disqualifier}
                    </p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Qualifiers - Requirement 11.2 */}
          <Card className="bg-green-50/50 border-green-200">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-green-700 flex items-center gap-3">
                <span className="text-3xl" role="img" aria-label="good fit">
                  ✅
                </span>
                <span>We're Perfect For You If...</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <ul className="space-y-6">
                {qualificationContent.qualifiers.map((qualifier, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-4"
                  >
                    <span 
                      className="flex-shrink-0 w-6 h-6 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold text-sm mt-0.5"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <p className="text-base text-stone-700 leading-relaxed">
                      {qualifier}
                    </p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto">
            If you're nodding along to the right column, let's talk. If you're nodding along to the left column, we wish you the best—but we're probably not the right partner for you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default QualificationSection;
