/**
 * Reality Check Section Component
 * 
 * Visualizes the 95% AI pilot failure rate with funnel diagram and failure categories.
 * Validates Requirements 2.1, 2.2, 2.3, 2.4
 * 
 * Visual Design:
 * - Background: Gradient from red-50 to orange-50
 * - Funnel visualization: SVG-based with color coding
 * - Failure cards: White background with subtle shadow
 * - Color coding: Green (start) → Amber (production) → Red (failure)
 * 
 * Responsive Behavior:
 * - Mobile: Funnel stacks vertically, cards full-width
 * - Desktop: Funnel on left (50%), cards on right (50%)
 */

import React from 'react';
import { realityCheckContent } from '@/content/reality-check';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import {
  UsersIcon,
  ShieldExclamationIcon,
  PuzzlePieceIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

// Icon mapping for failure categories
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'users': UsersIcon,
  'shield-exclamation': ShieldExclamationIcon,
  'puzzle-piece': PuzzlePieceIcon,
  'currency-dollar': CurrencyDollarIcon,
};

/**
 * Funnel Visualization Component
 * Creates an SVG funnel showing the dramatic drop-off from pilots to success
 */
function FunnelVisualization() {
  const { funnelData } = realityCheckContent;
  
  return (
    <div className="w-full max-w-md mx-auto">
      <svg
        viewBox="0 0 300 400"
        className="w-full h-auto"
        role="img"
        aria-label="AI pilot success funnel showing decline from 100 pilots to 5 successes"
      >
        {/* Funnel stages */}
        {funnelData.map((stage, index) => {
          // Calculate funnel dimensions based on value
          const topWidth = 280 - (index * 60);
          const bottomWidth = 280 - ((index + 1) * 60);
          const height = 100;
          const yPosition = index * 120;
          const xOffset = (300 - topWidth) / 2;
          const xOffsetBottom = (300 - bottomWidth) / 2;
          
          return (
            <g key={index}>
              {/* Funnel segment */}
              <path
                d={`
                  M ${xOffset} ${yPosition}
                  L ${xOffset + topWidth} ${yPosition}
                  L ${xOffsetBottom + bottomWidth} ${yPosition + height}
                  L ${xOffsetBottom} ${yPosition + height}
                  Z
                `}
                fill={stage.color}
                opacity="0.8"
                stroke="white"
                strokeWidth="2"
              />
              
              {/* Value text */}
              <text
                x="150"
                y={yPosition + 40}
                textAnchor="middle"
                className="fill-white font-bold text-3xl"
                style={{ fontSize: '32px' }}
              >
                {stage.value}
              </text>
              
              {/* Label text */}
              <text
                x="150"
                y={yPosition + 70}
                textAnchor="middle"
                className="fill-white font-medium text-sm"
                style={{ fontSize: '14px' }}
              >
                {stage.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function RealityCheckSection() {
  return (
    <section
      className="relative py-12 md:py-16 lg:py-20 bg-white"
      aria-labelledby="reality-check-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header with Main Statistic - Requirement 2.1 */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block">
            <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-red-600 mb-4">
              {realityCheckContent.statistic}
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl text-stone-700 font-semibold">
              {realityCheckContent.statisticLabel}
            </p>
          </div>
        </div>

        {/* Main Content: Funnel + Failure Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-12 md:mb-16">
          
          {/* Funnel Visualization - Requirement 2.2 */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-deep-teal-800 mb-8 text-center">
              The AI Pilot Reality
            </h3>
            <FunnelVisualization />
            <p className="text-center text-stone-600 mt-6 text-sm md:text-base max-w-md">
              100 pilots → 30 production → 5 succeed
            </p>
          </div>

          {/* Failure Categories - Requirement 2.3, 2.4 */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-deep-teal-800 mb-6">
              Why AI Projects Fail
            </h3>
            
            {realityCheckContent.failureCategories.map((category, index) => {
              const IconComponent = iconMap[category.icon];
              
              return (
                <Card 
                  key={index}
                  className="bg-white border-stone-200"
                  hover
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      {IconComponent && (
                        <div className="flex-shrink-0 mt-1">
                          <IconComponent 
                            className="w-8 h-8 text-red-600" 
                            aria-hidden="true"
                          />
                        </div>
                      )}
                      
                      {/* Content */}
                      <div className="flex-1">
                        <CardTitle className="text-xl md:text-2xl text-deep-teal-800 mb-3">
                          {category.title}
                        </CardTitle>
                        <CardDescription className="text-base text-stone-600 leading-relaxed">
                          {category.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Callout Box - Requirement 2.5 */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-2 border-gold-500 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center">
                    <span className="text-2xl" role="img" aria-label="warning">
                      ⚠️
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-lg md:text-xl text-stone-700 leading-relaxed">
                    {realityCheckContent.calloutText}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default RealityCheckSection;
