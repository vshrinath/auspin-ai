/**
 * Formspree Integration Utility
 * 
 * This module provides functions for submitting forms to Formspree API
 * with proper error handling, CSRF protection, and type safety.
 */

import { FormSubmission, FormspreeResponse, FormError } from '@/content/types';

/**
 * Configuration for Formspree
 */
export const FORMSPREE_CONFIG = {
  // Replace with your actual Formspree form ID
  // Get this from https://formspree.io/forms after creating a form
  FORM_ID: process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || 'YOUR_FORM_ID',
  ENDPOINT: 'https://formspree.io/f',
  TIMEOUT: 30000, // 30 seconds
};

/**
 * Custom error class for Formspree submission errors
 */
export class FormspreeError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public errors?: FormError[]
  ) {
    super(message);
    this.name = 'FormspreeError';
  }
}

/**
 * Generate a simple CSRF token
 * In production, this should be generated server-side and validated
 */
function generateCSRFToken(): string {
  return `csrf_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
}

/**
 * Submit form data to Formspree
 * 
 * @param data - Form submission data
 * @param formId - Optional Formspree form ID (defaults to config)
 * @returns Promise resolving to Formspree response
 * @throws FormspreeError on submission failure
 */
export async function submitToFormspree(
  data: FormSubmission,
  formId?: string
): Promise<FormspreeResponse> {
  const targetFormId = formId || FORMSPREE_CONFIG.FORM_ID;

  // Validate form ID
  if (!targetFormId || targetFormId === 'YOUR_FORM_ID') {
    throw new FormspreeError(
      'Formspree form ID not configured. Please set NEXT_PUBLIC_FORMSPREE_FORM_ID environment variable.',
      0
    );
  }

  // Prepare request payload with CSRF token
  const payload = {
    ...data,
    _csrf: generateCSRFToken(),
    _subject: `New contact form submission from ${data.name}`,
    _replyto: data.email,
    _gotcha: '', // Honeypot field for spam prevention
  };

  // Create abort controller for timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FORMSPREE_CONFIG.TIMEOUT);

  try {
    const response = await fetch(
      `${FORMSPREE_CONFIG.ENDPOINT}/${targetFormId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      }
    );

    clearTimeout(timeoutId);

    // Handle successful response
    if (response.ok) {
      const result = await response.json();
      return {
        ok: true,
        next: result.next,
      };
    }

    // Handle error responses
    const errorData = await response.json().catch(() => ({}));
    
    // Parse Formspree error format
    const errors: FormError[] = [];
    if (errorData.errors) {
      // Formspree returns errors as an array of objects
      if (Array.isArray(errorData.errors)) {
        errorData.errors.forEach((error: any) => {
          errors.push({
            field: error.field || 'unknown',
            message: error.message || 'Validation error',
          });
        });
      }
    }

    // Determine error message based on status code
    let errorMessage = 'Form submission failed. Please try again.';
    
    if (response.status === 400) {
      errorMessage = 'Invalid form data. Please check your inputs and try again.';
    } else if (response.status === 403) {
      errorMessage = 'Form submission blocked. Please contact support.';
    } else if (response.status === 404) {
      errorMessage = 'Form not found. Please contact support.';
    } else if (response.status === 429) {
      errorMessage = 'Too many requests. Please wait a moment and try again.';
    } else if (response.status >= 500) {
      errorMessage = 'Service temporarily unavailable. Please try again later.';
    }

    throw new FormspreeError(errorMessage, response.status, errors);
  } catch (error) {
    clearTimeout(timeoutId);

    // Handle abort (timeout)
    if (error instanceof Error && error.name === 'AbortError') {
      throw new FormspreeError(
        'Connection timeout. Please check your internet connection and try again.',
        0
      );
    }

    // Handle network errors
    if (error instanceof TypeError) {
      throw new FormspreeError(
        'Network error. Please check your internet connection and try again.',
        0
      );
    }

    // Re-throw FormspreeError
    if (error instanceof FormspreeError) {
      throw error;
    }

    // Handle unknown errors
    throw new FormspreeError(
      error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.',
      0
    );
  }
}

/**
 * Validate email format
 * 
 * @param email - Email address to validate
 * @returns true if email is valid, false otherwise
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate form submission data
 * 
 * @param data - Form submission data to validate
 * @returns Array of validation errors (empty if valid)
 */
export function validateFormSubmission(data: FormSubmission): FormError[] {
  const errors: FormError[] = [];

  // Required fields
  if (!data.name || !data.name.trim()) {
    errors.push({ field: 'name', message: 'Name is required' });
  }

  if (!data.email || !data.email.trim()) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!validateEmail(data.email)) {
    errors.push({ field: 'email', message: 'Invalid email format' });
  }

  if (!data.company || !data.company.trim()) {
    errors.push({ field: 'company', message: 'Company is required' });
  }

  if (!data.role || !data.role.trim()) {
    errors.push({ field: 'role', message: 'Role is required' });
  }

  if (!data.region || !data.region.trim()) {
    errors.push({ field: 'region', message: 'Region is required' });
  }

  if (!data.outcome || !data.outcome.trim()) {
    errors.push({ field: 'outcome', message: '90-day outcome is required' });
  }

  return errors;
}

/**
 * Submit form with validation
 * 
 * @param data - Form submission data
 * @param formId - Optional Formspree form ID
 * @returns Promise resolving to Formspree response
 * @throws FormspreeError on validation or submission failure
 */
export async function submitFormWithValidation(
  data: FormSubmission,
  formId?: string
): Promise<FormspreeResponse> {
  // Validate data
  const validationErrors = validateFormSubmission(data);
  if (validationErrors.length > 0) {
    throw new FormspreeError(
      'Please fix the validation errors and try again.',
      400,
      validationErrors
    );
  }

  // Submit to Formspree
  return submitToFormspree(data, formId);
}
