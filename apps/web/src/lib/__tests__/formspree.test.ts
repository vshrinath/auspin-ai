import {
  submitToFormspree,
  validateEmail,
  validateFormSubmission,
  submitFormWithValidation,
  FormspreeError,
  FORMSPREE_CONFIG,
} from '../formspree';
import { FormSubmission } from '@/content/types';

// Mock fetch
global.fetch = jest.fn();

describe('Formspree Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (global.fetch as jest.Mock).mockClear();
  });

  describe('validateEmail', () => {
    it('validates correct email formats', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name@domain.co.uk')).toBe(true);
      expect(validateEmail('user+tag@example.com')).toBe(true);
    });

    it('rejects invalid email formats', () => {
      expect(validateEmail('invalid')).toBe(false);
      expect(validateEmail('invalid@')).toBe(false);
      expect(validateEmail('@example.com')).toBe(false);
      expect(validateEmail('invalid@domain')).toBe(false);
      expect(validateEmail('')).toBe(false);
    });
  });

  describe('validateFormSubmission', () => {
    const validData: FormSubmission = {
      name: 'John Doe',
      email: 'john@example.com',
      company: 'Acme Corp',
      role: 'CEO',
      region: 'Middle East',
      outcome: 'Implement AI strategy',
    };

    it('returns no errors for valid data', () => {
      const errors = validateFormSubmission(validData);
      expect(errors).toHaveLength(0);
    });

    it('validates required name field', () => {
      const errors = validateFormSubmission({ ...validData, name: '' });
      expect(errors).toContainEqual({
        field: 'name',
        message: 'Name is required',
      });
    });

    it('validates required email field', () => {
      const errors = validateFormSubmission({ ...validData, email: '' });
      expect(errors).toContainEqual({
        field: 'email',
        message: 'Email is required',
      });
    });

    it('validates email format', () => {
      const errors = validateFormSubmission({
        ...validData,
        email: 'invalid-email',
      });
      expect(errors).toContainEqual({
        field: 'email',
        message: 'Invalid email format',
      });
    });

    it('validates required company field', () => {
      const errors = validateFormSubmission({ ...validData, company: '' });
      expect(errors).toContainEqual({
        field: 'company',
        message: 'Company is required',
      });
    });

    it('validates required role field', () => {
      const errors = validateFormSubmission({ ...validData, role: '' });
      expect(errors).toContainEqual({
        field: 'role',
        message: 'Role is required',
      });
    });

    it('validates required region field', () => {
      const errors = validateFormSubmission({ ...validData, region: '' });
      expect(errors).toContainEqual({
        field: 'region',
        message: 'Region is required',
      });
    });

    it('validates required outcome field', () => {
      const errors = validateFormSubmission({ ...validData, outcome: '' });
      expect(errors).toContainEqual({
        field: 'outcome',
        message: '90-day outcome is required',
      });
    });

    it('returns multiple errors for multiple invalid fields', () => {
      const errors = validateFormSubmission({
        name: '',
        email: 'invalid',
        company: '',
        role: '',
        region: '',
        outcome: '',
      });
      expect(errors.length).toBeGreaterThan(1);
    });
  });

  describe('submitToFormspree', () => {
    const validData: FormSubmission = {
      name: 'John Doe',
      email: 'john@example.com',
      company: 'Acme Corp',
      role: 'CEO',
      region: 'Middle East',
      outcome: 'Implement AI strategy',
    };

    it('submits form data successfully', async () => {
      (global.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => ({ ok: true, next: '/thank-you' }),
      });

      const result = await submitToFormspree(validData, 'test-form-id');

      expect(global.fetch).toHaveBeenCalledWith(
        `${FORMSPREE_CONFIG.ENDPOINT}/test-form-id`,
        expect.objectContaining({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        })
      );

      expect(result).toEqual({
        ok: true,
        next: '/thank-you',
      });
    });

    it('includes CSRF token in submission', async () => {
      (global.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => ({ ok: true }),
      });

      await submitToFormspree(validData, 'test-form-id');

      const callArgs = (global.fetch as jest.Mock).mock.calls[0];
      const body = JSON.parse(callArgs[1].body);

      expect(body._csrf).toBeDefined();
      expect(body._csrf).toMatch(/^csrf_/);
    });

    it('includes email metadata in submission', async () => {
      (global.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => ({ ok: true }),
      });

      await submitToFormspree(validData, 'test-form-id');

      const callArgs = (global.fetch as jest.Mock).mock.calls[0];
      const body = JSON.parse(callArgs[1].body);

      expect(body._subject).toContain(validData.name);
      expect(body._replyto).toBe(validData.email);
      expect(body._gotcha).toBe('');
    });

    it('throws error when form ID is not configured', async () => {
      await expect(
        submitToFormspree(validData, 'YOUR_FORM_ID')
      ).rejects.toThrow(FormspreeError);

      await expect(
        submitToFormspree(validData, '')
      ).rejects.toThrow('Formspree form ID not configured');
    });

    it('handles 400 Bad Request errors', async () => {
      (global.fetch as jest.Mock).mockResolvedValue({
        ok: false,
        status: 400,
        json: async () => ({
          errors: [{ field: 'email', message: 'Invalid email' }],
        }),
      });

      await expect(submitToFormspree(validData, 'test-form-id')).rejects.toThrow(
        FormspreeError
      );

      try {
        await submitToFormspree(validData, 'test-form-id');
      } catch (error) {
        expect(error).toBeInstanceOf(FormspreeError);
        expect((error as FormspreeError).statusCode).toBe(400);
        expect((error as FormspreeError).errors).toHaveLength(1);
      }
    });

    it('handles 429 Rate Limit errors', async () => {
      (global.fetch as jest.Mock).mockResolvedValue({
        ok: false,
        status: 429,
        json: async () => ({}),
      });

      await expect(submitToFormspree(validData, 'test-form-id')).rejects.toThrow(
        /too many requests/i
      );
    });

    it('handles 500 Server errors', async () => {
      (global.fetch as jest.Mock).mockResolvedValue({
        ok: false,
        status: 500,
        json: async () => ({}),
      });

      await expect(submitToFormspree(validData, 'test-form-id')).rejects.toThrow(
        /service temporarily unavailable/i
      );
    });

    it('handles network errors', async () => {
      (global.fetch as jest.Mock).mockRejectedValue(
        new TypeError('Network request failed')
      );

      await expect(submitToFormspree(validData, 'test-form-id')).rejects.toThrow(
        /network error/i
      );
    });

    it('handles timeout errors', async () => {
      (global.fetch as jest.Mock).mockImplementation(
        () =>
          new Promise((_, reject) => {
            const error = new Error('Aborted');
            error.name = 'AbortError';
            setTimeout(() => reject(error), 100);
          })
      );

      await expect(submitToFormspree(validData, 'test-form-id')).rejects.toThrow(
        /connection timeout/i
      );
    });
  });

  describe('submitFormWithValidation', () => {
    const validData: FormSubmission = {
      name: 'John Doe',
      email: 'john@example.com',
      company: 'Acme Corp',
      role: 'CEO',
      region: 'Middle East',
      outcome: 'Implement AI strategy',
    };

    it('validates data before submission', async () => {
      const invalidData: FormSubmission = {
        name: '',
        email: 'invalid',
        company: '',
        role: '',
        region: '',
        outcome: '',
      };

      await expect(
        submitFormWithValidation(invalidData, 'test-form-id')
      ).rejects.toThrow(FormspreeError);

      expect(global.fetch).not.toHaveBeenCalled();
    });

    it('submits valid data', async () => {
      (global.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => ({ ok: true }),
      });

      const result = await submitFormWithValidation(validData, 'test-form-id');

      expect(global.fetch).toHaveBeenCalled();
      expect(result.ok).toBe(true);
    });
  });
});
