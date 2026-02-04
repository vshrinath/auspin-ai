import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ContactForm } from '../ContactForm';
import { FormField } from '@/content/types';

describe('ContactForm', () => {
  const mockFields: FormField[] = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      required: true,
    },
  ];

  const mockOnSubmit = jest.fn();
  const mockOnSuccess = jest.fn();
  const mockOnError = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all form fields', () => {
    render(
      <ContactForm
        fields={mockFields}
        onSubmit={mockOnSubmit}
      />
    );

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('shows required indicators for required fields', () => {
    render(
      <ContactForm
        fields={mockFields}
        onSubmit={mockOnSubmit}
      />
    );

    const requiredIndicators = screen.getAllByText('*');
    expect(requiredIndicators).toHaveLength(3);
  });

  it('validates required fields on submit', async () => {
    render(
      <ContactForm
        fields={mockFields}
        onSubmit={mockOnSubmit}
      />
    );

    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    });

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it('validates email format', async () => {
    render(
      <ContactForm
        fields={mockFields}
        onSubmit={mockOnSubmit}
      />
    );

    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);

    await waitFor(() => {
      expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    mockOnSubmit.mockResolvedValue(undefined);

    render(
      <ContactForm
        fields={mockFields}
        onSubmit={mockOnSubmit}
        onSuccess={mockOnSuccess}
      />
    );

    // Fill in form
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Test message' },
    });

    // Submit form
    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Test message',
      });
    });

    await waitFor(() => {
      expect(mockOnSuccess).toHaveBeenCalled();
    });
  });

  it('displays success message after successful submission', async () => {
    mockOnSubmit.mockResolvedValue(undefined);

    render(
      <ContactForm
        fields={mockFields}
        onSubmit={mockOnSubmit}
      />
    );

    // Fill and submit form
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Test message' },
    });

    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/thank you/i)).toBeInTheDocument();
    });
  });

  it('displays error message on submission failure', async () => {
    const errorMessage = 'Network error occurred';
    mockOnSubmit.mockRejectedValue(new Error(errorMessage));

    render(
      <ContactForm
        fields={mockFields}
        onSubmit={mockOnSubmit}
        onError={mockOnError}
      />
    );

    // Fill and submit form
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Test message' },
    });

    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/submission failed/i)).toBeInTheDocument();
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });

    expect(mockOnError).toHaveBeenCalled();
  });

  it('disables submit button while submitting', async () => {
    mockOnSubmit.mockImplementation(
      () => new Promise((resolve) => setTimeout(resolve, 100))
    );

    render(
      <ContactForm
        fields={mockFields}
        onSubmit={mockOnSubmit}
      />
    );

    // Fill form
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Test message' },
    });

    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    // Button should be disabled during submission
    expect(submitButton).toBeDisabled();

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });

  it('clears form after successful submission', async () => {
    mockOnSubmit.mockResolvedValue(undefined);

    render(
      <ContactForm
        fields={mockFields}
        onSubmit={mockOnSubmit}
      />
    );

    const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;

    // Fill form
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Test message' },
    });

    // Submit
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/thank you/i)).toBeInTheDocument();
    });

    // Click "Send Another Message" button
    const sendAnotherButton = screen.getByRole('button', {
      name: /send another message/i,
    });
    fireEvent.click(sendAnotherButton);

    // Form should be cleared
    await waitFor(() => {
      expect(nameInput.value).toBe('');
      expect(emailInput.value).toBe('');
    });
  });

  it('prevents spam with honeypot field', async () => {
    render(
      <ContactForm
        fields={mockFields}
        onSubmit={mockOnSubmit}
      />
    );

    // Fill honeypot field (should be hidden)
    const honeypotField = document.querySelector('input[name="website"]') as HTMLInputElement;
    expect(honeypotField).toBeInTheDocument();
    
    fireEvent.change(honeypotField, { target: { value: 'spam' } });

    // Fill other fields
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Test message' },
    });

    // Submit
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    // Should not call onSubmit if honeypot is filled
    await waitFor(() => {
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });
  });
});
