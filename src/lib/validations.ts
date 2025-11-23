import { z } from 'zod';

/**
 * Contact form validation schema
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(100, { message: 'Name must not exceed 100 characters' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .max(255, { message: 'Email must not exceed 255 characters' }),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val) return true;
        // Basic phone validation - allows various formats
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        return phoneRegex.test(val);
      },
      { message: 'Please enter a valid phone number' }
    ),
  company: z
    .string()
    .max(200, { message: 'Company name must not exceed 200 characters' })
    .optional(),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(1000, { message: 'Message must not exceed 1000 characters' }),
  subject: z
    .string()
    .max(200, { message: 'Subject must not exceed 200 characters' })
    .optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Trial request form validation schema
 */
export const trialRequestSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(100, { message: 'Name must not exceed 100 characters' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .max(255, { message: 'Email must not exceed 255 characters' }),
  phone: z
    .string()
    .min(8, { message: 'Please enter a valid phone number' })
    .max(20, { message: 'Phone number is too long' }),
  company: z
    .string()
    .min(2, { message: 'Company name must be at least 2 characters' })
    .max(200, { message: 'Company name must not exceed 200 characters' }),
  jobTitle: z
    .string()
    .max(100, { message: 'Job title must not exceed 100 characters' })
    .optional(),
  industry: z
    .string()
    .max(100, { message: 'Industry must not exceed 100 characters' })
    .optional(),
  numberOfEmployees: z.enum([
    '1-10',
    '11-50',
    '51-200',
    '201-1000',
    '1000+',
  ]).optional(),
  interestedSolutions: z
    .array(z.string())
    .min(1, { message: 'Please select at least one solution' })
    .optional(),
  comments: z
    .string()
    .max(1000, { message: 'Comments must not exceed 1000 characters' })
    .optional(),
});

export type TrialRequestData = z.infer<typeof trialRequestSchema>;

/**
 * Newsletter subscription validation schema
 */
export const newsletterSchema = z.object({
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .max(255, { message: 'Email must not exceed 255 characters' }),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: 'You must consent to receive emails',
    }),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

/**
 * Feedback form validation schema
 */
export const feedbackSchema = z.object({
  rating: z
    .number()
    .min(1, { message: 'Please provide a rating' })
    .max(5, { message: 'Rating must be between 1 and 5' }),
  category: z.enum([
    'general',
    'bug',
    'feature',
    'support',
    'other',
  ]),
  message: z
    .string()
    .min(10, { message: 'Feedback must be at least 10 characters' })
    .max(1000, { message: 'Feedback must not exceed 1000 characters' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .optional(),
});

export type FeedbackData = z.infer<typeof feedbackSchema>;

/**
 * Search validation schema
 */
export const searchSchema = z.object({
  query: z
    .string()
    .min(2, { message: 'Search query must be at least 2 characters' })
    .max(100, { message: 'Search query must not exceed 100 characters' }),
  filters: z.array(z.string()).optional(),
  sortBy: z.enum(['relevance', 'date', 'title']).optional(),
});

export type SearchData = z.infer<typeof searchSchema>;
