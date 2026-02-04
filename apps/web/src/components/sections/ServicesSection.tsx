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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {servicesContent.services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            
            return (
              <div 
                key={index}
                className="group"
              >
                {/* Icon */}
                {IconComponent && (
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <IconComponent 
                        className="w-7 h-7 text-white" 
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                )}
                
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-base text-teal-50 leading-relaxed">
                  {service.cxoProblem}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
