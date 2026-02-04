'use client';

/**
 * Services Section Component
 * 
 * Displays 6 services with problem-solution framing.
 * Validates Requirements 5.1, 5.2, 5.3, 5.4, 5.5
 * 
 * Visual Design:
 * - Background: Deep teal (#0f3d3a) with subtle pattern
 * - Service cards: White with shadow, hover lift effect
 * - Icons: Gold accent (#EAB308)
 * - CTA: Gold button at section bottom
 * 
 * Responsive Behavior:
 * - Mobile: Single column, full-width cards
 * - Tablet: 2-column grid
 * - Desktop: 3-column grid
 */

import React from 'react';
import { servicesContent } from '@/content/services';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  PresentationChartLineIcon,
  ClipboardDocumentCheckIcon,
  ServerStackIcon,
  ShieldExclamationIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

// Icon mapping for services
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'presentation-chart-line': PresentationChartLineIcon,
  'clipboard-document-check': ClipboardDocumentCheckIcon,
  'server-stack': ServerStackIcon,
  'shield-exclamation': ShieldExclamationIcon,
  'rocket-launch': RocketLaunchIcon,
  'academic-cap': AcademicCapIcon,
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-12 md:py-16 lg:py-20 bg-primary-600"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <h2 
            id="services-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Full Execution Cycle
          </h2>
          <p className="text-lg md:text-xl text-stone-200 leading-relaxed">
            From strategy to production, we deliver the capabilities you need to succeed with AI
          </p>
        </div>

        {/* Services Grid - Requirement 5.1, 5.2, 5.3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {servicesContent.services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            
            return (
              <Card 
                key={index}
                className="bg-white border-stone-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col gap-4">
                    {/* Icon */}
                    {IconComponent && (
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                          <IconComponent 
                            className="w-8 h-8 text-accent" 
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    )}
                    
                    {/* Title */}
                    <CardTitle className="text-xl md:text-2xl text-primary-600">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* The CXO Problem - Requirement 5.2 */}
                  <div>
                    <h4 className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-2">
                      The CXO Problem
                    </h4>
                    <p className="text-base text-stone-700 leading-relaxed">
                      {service.cxoProblem}
                    </p>
                  </div>
                  
                  {/* What We Deliver - Requirement 5.3 */}
                  <div>
                    <h4 className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-3">
                      What We Deliver
                    </h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((deliverable, idx) => (
                        <li 
                          key={idx}
                          className="flex items-start gap-2 text-sm text-stone-600"
                        >
                          <span className="text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true">
                            ✓
                          </span>
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Button - Requirement 5.4, 5.5 */}
        <div className="text-center">
          <a 
            href={servicesContent.ctaLink}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 bg-gold text-white shadow-md hover:bg-gold-600 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] px-8 py-6 h-12"
          >
            {servicesContent.ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
