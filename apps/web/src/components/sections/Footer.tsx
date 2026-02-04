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
        
        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Contact Info - Requirement 12.2, 12.4 */}
          <div className="text-center md:text-left">
            <p className="text-stone-200 text-sm">
              <a 
                href={`mailto:${footerContent.contactInfo.email}`}
                className="hover:text-accent transition-colors duration-200"
              >
                {footerContent.contactInfo.email}
              </a>
            </p>
          </div>

          {/* Legal Links & Copyright - Requirement 12.3 */}
          <div className="text-center md:text-right">
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
