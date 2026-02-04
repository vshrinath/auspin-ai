/**
 * Outcomes Section Component
 * 
 * Shows 4 outcome categories with before/after transformations.
 * Validates Requirements 6.1, 6.2, 6.3
 * 
 * Visual Design:
 * - Background: White
 * - Outcome cards: Split design (before | after)
 * - Before state: Gray with subtle red tint
 * - After state: Green tint with checkmark
 * - Metrics: Bold numbers with JetBrains Mono font
 * 
 * Responsive Behavior:
 * - Mobile: Stack before/after vertically
 * - Desktop: Side-by-side comparison
 */

import React from 'react';
import { outcomesContent } from '@/content/outcomes';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  UserGroupIcon,
  CurrencyDollarIcon,
  CogIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline';

// Icon mapping for outcomes
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'user-group': UserGroupIcon,
  'currency-dollar': CurrencyDollarIcon,
  'cog': CogIcon,
  'building-office': BuildingOfficeIcon,
};

export function OutcomesSection() {
  return (
    <section
      className="relative py-12 md:py-16 lg:py-20 bg-white"
      aria-labelledby="outcomes-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <h2 
            id="outcomes-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 mb-6"
          >
            Outcomes We Deliver
          </h2>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
            Real transformations with measurable business impact
          </p>
        </div>

        {/* Outcomes - Requirement 6.1, 6.2, 6.3 */}
        <div className="space-y-8 md:space-y-12">
          {outcomesContent.outcomes.map((outcome, index) => {
            const IconComponent = iconMap[outcome.icon];
            
            return (
              <Card 
                key={index}
                className="bg-white border-stone-200 overflow-hidden"
              >
                <CardHeader className="bg-stone-50 border-b border-stone-200">
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    {IconComponent && (
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                          <IconComponent 
                            className="w-7 h-7 text-primary-600" 
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    )}
                    
                    {/* Category Title */}
                    <CardTitle className="text-2xl md:text-3xl text-primary-600">
                      {outcome.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    
                    {/* Before State - Requirement 6.2 */}
                    <div className="p-6 md:p-8 bg-red-50/30 border-b lg:border-b-0 lg:border-r border-stone-200">
                      <div className="flex items-start gap-3 mb-4">
                        <span className="text-2xl" role="img" aria-label="before">
                          ❌
                        </span>
                        <h4 className="text-lg font-bold text-red-700 uppercase tracking-wide">
                          Before
                        </h4>
                      </div>
                      <p className="text-base text-stone-700 leading-relaxed">
                        {outcome.beforeState}
                      </p>
                    </div>
                    
                    {/* After State - Requirement 6.2 */}
                    <div className="p-6 md:p-8 bg-green-50/30">
                      <div className="flex items-start gap-3 mb-4">
                        <span className="text-2xl" role="img" aria-label="after">
                          ✅
                        </span>
                        <h4 className="text-lg font-bold text-green-700 uppercase tracking-wide">
                          After
                        </h4>
                      </div>
                      <p className="text-base text-stone-700 leading-relaxed mb-6">
                        {outcome.afterState}
                      </p>
                      
                      {/* Metrics - Requirement 6.3 */}
                      {outcome.metrics && outcome.metrics.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {outcome.metrics.map((metric, idx) => (
                            <div 
                              key={idx}
                              className="bg-white rounded-lg p-3 border border-green-200"
                            >
                              <p className="text-sm font-mono font-bold text-green-700">
                                {metric}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OutcomesSection;
