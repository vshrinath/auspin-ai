/**
 * Team Section Component
 * 
 * Displays core team and advisors with credentials.
 * Validates Requirements 8.1, 8.2, 8.3, 8.4
 * 
 * Visual Design:
 * - Background: White
 * - Team cards: Photo + text layout
 * - Photos: Circular with gold border
 * - Credentials: Bullet list with checkmark icons
 * - Advisors: Smaller cards, less prominent
 * 
 * Responsive Behavior:
 * - Mobile: Single column, stacked layout
 * - Tablet: 2-column for advisors
 * - Desktop: 2-column for core team, 3-column for advisors
 */

import React from 'react';
import { teamContent } from '@/content/team';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export function TeamSection() {
  return (
    <section
      id="team"
      className="relative py-16 md:py-20 lg:py-24 bg-white"
      aria-labelledby="team-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 
            id="team-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-600 mb-4"
          >
            Core Team
          </h2>
        </div>

        {/* Core Team - Requirement 8.1 */}
        <div className="mb-20 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {teamContent.coreTeam.map((member, index) => (
              <Card 
                key={index}
                className="bg-white border-stone-200 hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    {/* Photo */}
                    <div className="flex-shrink-0 mx-auto sm:mx-0">
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-accent overflow-hidden">
                        <Image
                          src={member.photo}
                          alt={`${member.name} - ${member.title}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1 text-center sm:text-left">
                      <CardTitle className="text-xl sm:text-2xl text-primary-600 mb-2">
                        {member.name}
                      </CardTitle>
                      <CardDescription className="text-sm sm:text-base text-stone-600 mb-3">
                        {member.title}
                      </CardDescription>
                      
                      {/* LinkedIn */}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-5 pt-4">
                  {/* Credentials - Requirement 8.4 */}
                  <div>
                    <h4 className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-3">
                      Experience
                    </h4>
                    <ul className="space-y-2.5">
                      {member.credentials.map((credential, idx) => (
                        <li 
                          key={idx}
                          className="flex items-start gap-2.5 text-sm text-stone-700 leading-relaxed"
                        >
                          <span className="text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true">
                            ✓
                          </span>
                          <span>{credential}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Why This Matters - Requirement 8.3 */}
                  <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                    <h4 className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">
                      Why This Matters
                    </h4>
                    <p className="text-sm text-stone-700 leading-relaxed">
                      {member.whyMatters}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advisors - Requirement 8.2 */}
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 mb-10 text-center">
            Strategic Advisors
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {teamContent.advisors.map((advisor, index) => (
              <Card 
                key={index}
                className="bg-white border-stone-200 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col items-center text-center gap-3">
                    {/* Photo */}
                    <div className="relative w-20 h-20 rounded-full border-4 border-stone-300 overflow-hidden">
                      <Image
                        src={advisor.photo}
                        alt={`${advisor.name} - ${advisor.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Info */}
                    <div>
                      <CardTitle className="text-lg text-primary-600 mb-1.5">
                        {advisor.name}
                      </CardTitle>
                      <CardDescription className="text-xs text-stone-600 leading-snug">
                        {advisor.title}
                      </CardDescription>
                    </div>
                    
                    {/* LinkedIn */}
                    {advisor.linkedin && (
                      <a
                        href={advisor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </a>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4 pt-4 flex-1 flex flex-col">
                  {/* Credentials */}
                  <ul className="space-y-2 flex-1">
                    {advisor.credentials.map((credential, idx) => (
                      <li 
                        key={idx}
                        className="flex items-start gap-2 text-xs text-stone-700 leading-relaxed"
                      >
                        <span className="text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true">
                          ✓
                        </span>
                        <span>{credential}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Why This Matters */}
                  <div className="bg-stone-50 rounded-lg p-3 border border-stone-200">
                    <p className="text-xs text-stone-700 leading-relaxed">
                      {advisor.whyMatters}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
