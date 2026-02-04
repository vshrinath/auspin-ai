'use client';

import React, { useState } from 'react';
import { ContactForm } from '@/components/forms/ContactForm';
import { Button } from '@/components/ui/button';
import { ctaContent } from '@/content/cta';
import { submitToFormspree } from '@/lib/formspree';
import { FormSubmission } from '@/content/types';

export interface CTASectionProps {
  preselectedService?: string;
}

export function CTASection({ preselectedService }: CTASectionProps) {
  const [downloadingLeadMagnet, setDownloadingLeadMagnet] = useState(false);

  // Handle form submission
  const handleFormSubmit = async (data: FormSubmission) => {
    try {
      await submitToFormspree(data);
      
      // Track form submission (analytics)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submission', {
          form_name: 'contact_form',
          service: data.service || 'none',
        });
      }
    } catch (error) {
      // Re-throw to let ContactForm handle the error display
      throw error;
    }
  };

  // Handle form submission success
  const handleFormSuccess = () => {
    // Track successful submission
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
      });
    }
  };

  // Handle form submission error
  const handleFormError = (error: Error) => {
    // Log error for debugging
    console.error('Form submission error:', error);
    
    // Track error event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_error', {
        error_message: error.message,
      });
    }
  };

  // Handle lead magnet download
  const handleLeadMagnetDownload = () => {
    setDownloadingLeadMagnet(true);

    // Track download event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'download', {
        file_name: 'ai-readiness-assessment.pdf',
        file_type: 'lead_magnet',
      });
    }

    // Trigger download
    const link = document.createElement('a');
    link.href = ctaContent.leadMagnetFile;
    link.download = 'ai-readiness-assessment.pdf';
    link.click();

    // Reset button state after a short delay
    setTimeout(() => {
      setDownloadingLeadMagnet(false);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-24 lg:py-28 bg-gradient-to-b from-stone-50 to-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-deep-teal rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-teal mb-4">
            {ctaContent.heading}
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Book a 2-day Alignment Sprint to align your team on AI strategy, identify high-value use cases, and create a roadmap for execution.
          </p>
        </div>

        {/* Contact form card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 lg:p-12 mb-8">
          <ContactForm
            fields={ctaContent.formFields}
            onSubmit={handleFormSubmit}
            onSuccess={handleFormSuccess}
            onError={handleFormError}
            preselectedService={preselectedService}
          />
        </div>

        {/* Lead magnet CTA */}
        <div className="text-center">
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-stone-600">
              Not ready to book? Start with our free assessment:
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={handleLeadMagnetDownload}
              loading={downloadingLeadMagnet}
              disabled={downloadingLeadMagnet}
              className="group w-full sm:w-auto"
            >
              <svg
                className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              {downloadingLeadMagnet ? 'Downloading...' : ctaContent.leadMagnetText}
            </Button>
            <p className="text-xs text-stone-500">
              No email required • Instant download • 15-minute assessment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
