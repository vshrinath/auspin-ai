/**
 * Social Proof Section Component
 * 
 * Displays 3 CXO testimonials with metrics.
 * Validates Requirements 9.1, 9.2, 9.3
 * 
 * Visual Design:
 * - Background: Deep teal (#0f3d3a)
 * - Testimonial cards: White with shadow
 * - Quotes: Large text with quotation marks
 * - Metrics: Bold gold numbers
 * 
 * Responsive Behavior:
 * - Mobile: Single column, cards stack
 * - Desktop: 3-column grid
 */

import React from 'react';
import { socialProofContent } from '@/content/social-proof';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

export function SocialProofSection() {
  return (
    <section
      className="relative py-12 md:py-16 lg:py-20 bg-primary-600"
      aria-labelledby="social-proof-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <h2 
            id="social-proof-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            What CXOs Say
          </h2>
          <p className="text-lg md:text-xl text-stone-200 leading-relaxed">
            Real results from executives who've worked with us
          </p>
        </div>

        {/* Testimonials - Requirement 9.1, 9.2, 9.3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {socialProofContent.testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-white border-stone-200 hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <CardHeader>
                {/* Quote Icon */}
                <div className="mb-4">
                  <svg 
                    className="w-10 h-10 text-accent" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                {/* Quote - Requirement 9.1 */}
                <blockquote className="text-base md:text-lg text-stone-700 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
              </CardHeader>
              
              <CardContent className="mt-auto space-y-4">
                {/* Metrics - Requirement 9.2 */}
                {testimonial.metrics && testimonial.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-3">
                    {testimonial.metrics.map((metric, idx) => (
                      <div 
                        key={idx}
                        className="bg-accent/10 rounded-lg p-3 border border-accent/20"
                      >
                        <p className="text-xs font-mono font-bold text-accent">
                          {metric}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Attribution - Requirement 9.2, 9.3 */}
                <div className="pt-4 border-t border-stone-200">
                  <p className="text-sm font-semibold text-primary-600">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-stone-600">
                    {testimonial.industry}
                  </p>
                  {testimonial.anonymous && (
                    <p className="text-xs text-stone-500 italic mt-1">
                      (Name withheld for confidentiality)
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialProofSection;
