import { describe, it, expect } from 'vitest';
import {
  contactFormSchema,
  trialRequestSchema,
  newsletterSchema,
} from '@/lib/validations';

describe('contactFormSchema', () => {
  it('validates correct contact form data', () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'This is a test message',
    };
    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('rejects invalid email', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'invalid-email',
      message: 'This is a test message',
    };
    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('rejects short name', () => {
    const invalidData = {
      name: 'J',
      email: 'john@example.com',
      message: 'This is a test message',
    };
    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('rejects short message', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Short',
    };
    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('accepts optional phone field', () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      message: 'This is a test message',
    };
    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });
});

describe('trialRequestSchema', () => {
  it('validates correct trial request data', () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      company: 'Test Corp',
    };
    const result = trialRequestSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('rejects missing required fields', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'john@example.com',
    };
    const result = trialRequestSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('accepts valid employee count option', () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      company: 'Test Corp',
      numberOfEmployees: '51-200' as const,
    };
    const result = trialRequestSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });
});

describe('newsletterSchema', () => {
  it('validates correct newsletter data', () => {
    const validData = {
      email: 'john@example.com',
      consent: true,
    };
    const result = newsletterSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('rejects without consent', () => {
    const invalidData = {
      email: 'john@example.com',
      consent: false,
    };
    const result = newsletterSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('rejects invalid email', () => {
    const invalidData = {
      email: 'invalid-email',
      consent: true,
    };
    const result = newsletterSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});
