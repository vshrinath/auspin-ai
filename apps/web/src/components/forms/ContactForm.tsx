"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FormField, FormSubmission } from "@/content/types";

export interface ContactFormProps {
  fields: FormField[];
  onSubmit: (data: FormSubmission) => Promise<void>;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  preselectedService?: string;
}

interface FormErrors {
  [key: string]: string;
}

interface FormData {
  [key: string]: string;
}

export function ContactForm({
  fields,
  onSubmit,
  onSuccess,
  onError,
  preselectedService,
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>(() => {
    const initialData: FormData = {};
    fields.forEach((field) => {
      initialData[field.name] =
        field.name === "service" && preselectedService ? preselectedService : "";
    });
    return initialData;
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Honeypot field for spam prevention
  const [honeypot, setHoneypot] = useState("");

  // Validate a single field
  const validateField = (name: string, value: string): string => {
    const field = fields.find((f) => f.name === name);
    if (!field) return "";

    // Required field validation
    if (field.required && !value.trim()) {
      return `${field.label} is required`;
    }

    // Email validation
    if (field.type === "email" && value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address";
      }
    }

    return "";
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    fields.forEach((field) => {
      const error = validateField(field.name, formData[field.name] || "");
      if (error) {
        newErrors[field.name] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  // Handle field change
  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    // Clear submit status when user modifies form
    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
      setErrorMessage("");
    }
  };

  // Handle field blur (validate on blur)
  const handleBlur = (name: string) => {
    const error = validateField(name, formData[name] || "");
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam prevention: Check honeypot
    if (honeypot) {
      console.warn("Spam detected: honeypot field filled");
      return;
    }

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Prepare submission data
      const submissionData: FormSubmission = {
        name: formData.name || "",
        email: formData.email || "",
        company: formData.company || "",
        role: formData.role || "",
        region: formData.region || "",
        outcome: formData.outcome || "",
        service: formData.service,
      };

      // Submit form
      await onSubmit(submissionData);

      // Success
      setSubmitStatus("success");

      // Clear form
      const clearedData: FormData = {};
      fields.forEach((field) => {
        clearedData[field.name] = "";
      });
      setFormData(clearedData);
      setErrors({});

      // Call success callback
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      // Error
      setSubmitStatus("error");
      const errorMsg =
        error instanceof Error ? error.message : "An error occurred. Please try again.";
      setErrorMessage(errorMsg);

      // Call error callback
      if (onError && error instanceof Error) {
        onError(error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render field based on type
  const renderField = (field: FormField) => {
    const commonProps = {
      id: field.name,
      name: field.name,
      value: formData[field.name] || "",
      error: !!errors[field.name],
      helperText: errors[field.name],
      disabled: isSubmitting,
      required: field.required,
      placeholder: field.placeholder,
      onBlur: () => handleBlur(field.name),
    };

    switch (field.type) {
      case "email":
        return (
          <Input
            {...commonProps}
            type="email"
            onChange={(e) => handleChange(field.name, e.target.value)}
            autoComplete="email"
          />
        );

      case "select":
        return (
          <Select
            {...commonProps}
            onChange={(e) => handleChange(field.name, e.target.value)}
          >
            <option value="">Select {field.label}</option>
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        );

      case "textarea":
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {
          error: _textareaError,
          helperText: _textareaHelperText,
          ...textareaProps
        } = commonProps;
        return (
          <Textarea
            {...textareaProps}
            onChange={(e) => handleChange(field.name, e.target.value)}
            className="min-h-[120px] border-2 border-stone-200 focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            rows={4}
          />
        );

      case "text":
      default:
        return (
          <Input
            {...commonProps}
            type="text"
            onChange={(e) => handleChange(field.name, e.target.value)}
            autoComplete={
              field.name === "name"
                ? "name"
                : field.name === "company"
                  ? "organization"
                  : undefined
            }
          />
        );
    }
  };

  // Success message
  if (submitStatus === "success") {
    return (
      <div className="rounded-lg bg-green-50 border-2 border-green-500 p-8 text-center">
        <div className="flex justify-center mb-4">
          <svg
            className="h-16 w-16 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-green-900 mb-2">Thank You!</h3>
        <p className="text-green-800 mb-4">
          Your message has been received. We&apos;ll get back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          onClick={() => setSubmitStatus("idle")}
          className="border-green-500 text-green-700 hover:bg-green-500 hover:text-white"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot field - hidden from users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Form fields */}
      {fields.map((field) => (
        <div key={field.name}>
          <label
            htmlFor={field.name}
            className="block text-sm font-medium text-stone-900 mb-2"
          >
            {field.label}
            {field.required && (
              <span className="text-red-500 ml-1" aria-label="required">
                *
              </span>
            )}
          </label>
          {renderField(field)}
        </div>
      ))}

      {/* Error message */}
      {submitStatus === "error" && errorMessage && (
        <div
          className="rounded-lg bg-red-50 border-2 border-red-500 p-4"
          role="alert"
          aria-live="polite"
        >
          <div className="flex items-start">
            <svg
              className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h4 className="text-sm font-semibold text-red-900 mb-1">
                Submission Failed
              </h4>
              <p className="text-sm text-red-800">{errorMessage}</p>
            </div>
          </div>
        </div>
      )}

      {/* Submit button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={isSubmitting}
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
