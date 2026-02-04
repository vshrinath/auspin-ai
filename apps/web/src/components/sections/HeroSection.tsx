'use client';

/**
 * Hero Section Component
 * 
 * First impression section with headline, subheadline, trust badges, and primary CTA.
 * Validates Requirements 1.1, 1.2, 1.3, 1.4, 1.5
 * 
 * Visual Design:
 * - Background: Subtle gradient from warm stone (#FAFAF9) to white
 * - Headline: 4xl-6xl responsive, Inter 700, deep teal (#0f3d3a)
 * - Trust badges: Horizontal row on desktop, stacked on mobile
 * - CTA button: Gold accent (#EAB308) with hover state (#CA8A04)
 * 
 * Responsive Behavior:
 * - Mobile (<768px): Stack all elements vertically, reduce headline to 3xl
 * - Tablet (768-1024px): Maintain vertical stack, increase spacing
 * - Desktop (>1024px): Center-aligned with max-width 1200px
 */

import React from 'react';
import { heroContent } from '@/content/hero';
import { Button } from '@/components/ui/button';
import { 
  BuildingOfficeIcon,
  ShieldCheckIcon, 
  ChartBarIcon
} from '@heroicons/react/24/outline';

// Icon mapping for trust badges
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'building-office': BuildingOfficeIcon,
  'shield-check': ShieldCheckIcon,
  'chart-bar': ChartBarIcon,
};

export function HeroSection() {
  return (
    <section 
      className="relative min-h-[80vh] md:min-h-[80vh] flex items-center justify-center py-12 md:py-16 lg:py-20 bg-teal-800 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Container with max-width */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-10 lg:space-y-12">
          
          {/* Headline - Requirement 1.1 */}
          <h1 
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-5xl leading-tight"
          >
            {heroContent.headline}
          </h1>
          
          {/* Subheadline - Requirement 1.2 */}
          <p className="text-lg sm:text-xl md:text-2xl text-stone-100 max-w-3xl leading-relaxed">
            {heroContent.subheadline}
          </p>
          
          {/* Primary CTA Button - Requirement 1.3, 1.5 */}
          <div className="pt-4">
            <a 
              href={heroContent.ctaLink}
              aria-label={`${heroContent.ctaText} - Navigate to booking form`}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base md:text-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal-800 bg-white text-teal-900 shadow-lg hover:bg-stone-50 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] px-8 md:px-10 py-3 md:py-4 h-auto"
            >
              {heroContent.ctaText}
            </a>
          </div>
          
          {/* Trust Badges - Requirement 1.4 */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 pt-8 md:pt-12"
            role="list"
            aria-label="Trust indicators"
          >
            {heroContent.trustBadges.map((badge, index) => {
              const IconComponent = iconMap[badge.icon];
              
              return (
                <div 
                  key={index}
                  className="flex items-center gap-3 text-white"
                  role="listitem"
                >
                  {/* Icon */}
                  {IconComponent && (
                    <IconComponent 
                      className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 text-white" 
                      aria-hidden="true"
                    />
                  )}
                  
                  {/* Badge Text */}
                  <div className="flex flex-col items-start text-left">
                    <span className="text-base md:text-lg font-semibold">
                      {badge.text}
                    </span>
                    {badge.emphasis && (
                      <span className="text-sm md:text-base text-stone-200">
                        {badge.emphasis}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
