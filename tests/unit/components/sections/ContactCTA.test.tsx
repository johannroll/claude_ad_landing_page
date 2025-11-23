import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ContactCTA } from '@/components/sections/ContactCTA';

describe('ContactCTA', () => {
  it('renders main heading', () => {
    render(<ContactCTA />);

    expect(
      screen.getByText(/Ready to Transform Your Customer Communications/i)
    ).toBeInTheDocument();
  });

  it('renders introduction text', () => {
    render(<ContactCTA />);

    expect(
      screen.getByText(/Let's discuss how Airdocs can help/i)
    ).toBeInTheDocument();
  });

  it('renders "What to Expect" heading', () => {
    render(<ContactCTA />);

    expect(screen.getByText('What to Expect')).toBeInTheDocument();
  });

  it('renders all four benefits', () => {
    render(<ContactCTA />);

    expect(screen.getByText('24-Hour Response')).toBeInTheDocument();
    expect(screen.getByText('Expert Support')).toBeInTheDocument();
    expect(screen.getByText('No Obligation')).toBeInTheDocument();
    expect(screen.getByText('Tailored Solutions')).toBeInTheDocument();
  });

  it('renders benefit descriptions', () => {
    render(<ContactCTA />);

    expect(
      screen.getByText(/Get a response from our team within one business day/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Speak directly with our CCM specialists/i)
    ).toBeInTheDocument();
  });

  it('renders contact information box', () => {
    render(<ContactCTA />);

    expect(screen.getByText(/Prefer to talk to us directly/i)).toBeInTheDocument();
  });

  it('renders phone number link', () => {
    render(<ContactCTA />);

    const phoneLink = screen.getByRole('link', { name: /\+61 2 9999 0000/i });
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink.getAttribute('href')).toBe('tel:+61-2-9999-0000');
  });

  it('renders email link', () => {
    render(<ContactCTA />);

    const emailLink = screen.getByRole('link', { name: /sales@airdocs\.io/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink.getAttribute('href')).toBe('mailto:sales@airdocs.io');
  });

  it('renders business hours', () => {
    render(<ContactCTA />);

    expect(screen.getByText(/Mon-Fri, 9am-5pm AEST/i)).toBeInTheDocument();
  });

  it('renders "Send Us a Message" heading', () => {
    render(<ContactCTA />);

    expect(screen.getByText('Send Us a Message')).toBeInTheDocument();
  });

  it('includes ContactForm component', () => {
    render(<ContactCTA />);

    // Check for form fields from ContactForm
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  it('has proper section id for anchor linking', () => {
    const { container } = render(<ContactCTA />);

    const section = container.querySelector('section');
    expect(section?.getAttribute('id')).toBe('contact');
  });

  it('has gradient background', () => {
    const { container } = render(<ContactCTA />);

    const section = container.querySelector('section');
    expect(section?.className).toContain('bg-gradient-to-br');
  });

  it('renders benefit icons', () => {
    const { container } = render(<ContactCTA />);

    const icons = container.querySelectorAll('svg');
    expect(icons.length).toBeGreaterThanOrEqual(4); // Should have icons for each benefit
  });

  it('has two-column grid layout', () => {
    const { container } = render(<ContactCTA />);

    const grid = container.querySelector('.grid');
    expect(grid?.className).toContain('lg:grid-cols-2');
  });
});
