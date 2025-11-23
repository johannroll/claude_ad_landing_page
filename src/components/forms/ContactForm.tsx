'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormData } from '@/lib/validations';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CTAButton } from '@/components/shared/CTAButton';
import { Loader2, CheckCircle2, XCircle } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface ContactFormProps {
  onSuccess?: () => void;
  className?: string;
}

export function ContactForm({ onSuccess, className }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      reset();
      onSuccess?.();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      );

      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      <div className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
            Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Your full name"
            {...register('name')}
            disabled={status === 'submitting'}
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            {...register('email')}
            disabled={status === 'submitting'}
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
            Phone
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            {...register('phone')}
            disabled={status === 'submitting'}
            className={errors.phone ? 'border-red-500' : ''}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        {/* Company Field */}
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-700">
            Company
          </label>
          <Input
            id="company"
            type="text"
            placeholder="Your company name"
            {...register('company')}
            disabled={status === 'submitting'}
            className={errors.company ? 'border-red-500' : ''}
          />
          {errors.company && (
            <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
            Message <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            placeholder="Tell us about your needs..."
            rows={5}
            {...register('message')}
            disabled={status === 'submitting'}
            className={errors.message ? 'border-red-500' : ''}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Status Messages */}
        {status === 'success' && (
          <div className="flex items-center gap-2 rounded-lg bg-green-50 p-4 text-green-800">
            <CheckCircle2 className="h-5 w-5" />
            <p>Thank you! Your message has been sent successfully.</p>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-red-800">
            <XCircle className="h-5 w-5" />
            <p>{errorMessage || 'Something went wrong. Please try again.'}</p>
          </div>
        )}

        {/* Submit Button */}
        <div>
          <CTAButton
            type="submit"
            variant="primary"
            size="lg"
            disabled={status === 'submitting'}
            className="w-full"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </CTAButton>
        </div>

        <p className="text-center text-sm text-gray-500">
          We'll respond within 24 hours during business days
        </p>
      </div>
    </form>
  );
}
