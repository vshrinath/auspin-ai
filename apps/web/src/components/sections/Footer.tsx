/**
 * Footer Component
 * 
 * Navigation, contact info, and legal links.
 * Validates Requirements 12.1, 12.2, 12.3, 12.4, 12.5
 * 
 * Visual Design:
 * - Background: Deep teal (#0f3d3a)
 * - Text: White and stone-200
 * - Links: Hover state with gold underline
 * - Logo: White version
 * 
 * Responsive Behavior:
 * - Mobile: Single column, sections stack
 * - Desktop: 4-column grid
 */

import React from 'react';
import { footerContent } from '@/content/footer';

export function Footer() {
  return (
    <footer
      className="relative py-12 md:py-16 bg-primary-600 text-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          
          {/* Footer Sections - Requirement 12.1 */}
          {footerContent.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-stone-200 hover:text-accent transition-colors duration-200 text-sm inline-block hover:underline underline-offset-4"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-primary-500 mb-8" />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Contact Info & Tagline - Requirement 12.2, 12.4 */}
          <div className="text-center md:text-left">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">
                AUSPIN.AI
              </h3>
              <p className="text-stone-200 text-sm italic">
                {footerContent.tagline}
              </p>
            </div>
            
            <div className="space-y-2 text-sm">
              <p className="text-stone-200">
                <a 
                  href={`mailto:${footerContent.contactInfo.email}`}
                  className="hover:text-accent transition-colors duration-200"
                >
                  {footerContent.contactInfo.email}
                </a>
              </p>
              <p className="text-stone-200">
                <a 
                  href={`tel:${footerContent.contactInfo.phone.replace(/\s/g, '')}`}
                  className="hover:text-accent transition-colors duration-200"
                >
                  {footerContent.contactInfo.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Legal Links & Copyright - Requirement 12.3 */}
          <div className="text-center md:text-right">
            <div className="flex flex-wrap justify-center md:justify-end gap-4 mb-4">
              {footerContent.legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-stone-200 hover:text-accent transition-colors duration-200 text-sm hover:underline underline-offset-4"
                >
                  {link.text}
                </a>
              ))}
            </div>
            
            <p className="text-stone-300 text-sm">
              © {new Date().getFullYear()} AUSPIN.AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
