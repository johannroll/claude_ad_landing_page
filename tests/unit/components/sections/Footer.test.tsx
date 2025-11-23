import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from '@/components/sections/Footer';

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />);

    const logo = screen.getByAltText('Airdocs Global');
    expect(logo).toBeInTheDocument();
  });

  it('renders company description', () => {
    render(<Footer />);

    expect(
      screen.getByText(/Transforming customer communications with intelligent CCM solutions/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Trusted by 500\+ enterprises worldwide/i)).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<Footer />);

    expect(screen.getByText(/Level 5, 123 Example Street/i)).toBeInTheDocument();
    expect(screen.getByText(/Sydney NSW 2000, Australia/i)).toBeInTheDocument();
  });

  it('renders phone number link', () => {
    render(<Footer />);

    const phoneLink = screen.getByRole('link', { name: /\+61 2 9999 0000/i });
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink.getAttribute('href')).toBe('tel:+61-2-9999-0000');
  });

  it('renders email link', () => {
    render(<Footer />);

    const emailLink = screen.getByRole('link', { name: /info@airdocs\.io/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink.getAttribute('href')).toBe('mailto:info@airdocs.io');
  });

  it('renders social media links', () => {
    render(<Footer />);

    const twitterLink = screen.getByLabelText('Twitter');
    const linkedinLink = screen.getByLabelText('LinkedIn');
    const youtubeLink = screen.getByLabelText('YouTube');
    const githubLink = screen.getByLabelText('GitHub');

    expect(twitterLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(youtubeLink).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();

    expect(twitterLink.getAttribute('href')).toBe('https://twitter.com/airdocs');
    expect(linkedinLink.getAttribute('href')).toBe('https://linkedin.com/company/airdocs');
    expect(youtubeLink.getAttribute('href')).toBe('https://youtube.com/@airdocs');
    expect(githubLink.getAttribute('href')).toBe('https://github.com/airdocs');
  });

  it('opens social media links in new tab', () => {
    render(<Footer />);

    const twitterLink = screen.getByLabelText('Twitter');
    expect(twitterLink.getAttribute('target')).toBe('_blank');
    expect(twitterLink.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('renders Solutions section heading', () => {
    render(<Footer />);

    expect(screen.getByText('Solutions')).toBeInTheDocument();
  });

  it('renders solutions links', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: /Clever Correspondence/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Smart Agreements/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Dynamic Letters/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Delivery Hub/i })).toBeInTheDocument();
  });

  it('renders Company section heading', () => {
    render(<Footer />);

    expect(screen.getByText('Company')).toBeInTheDocument();
  });

  it('renders company links', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: /About Us/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Careers/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Blog/i })).toBeInTheDocument();
  });

  it('renders Resources section heading', () => {
    render(<Footer />);

    expect(screen.getByText('Resources')).toBeInTheDocument();
  });

  it('renders resources links', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: /Documentation/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /API Reference/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Case Studies/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Support/i })).toBeInTheDocument();
  });

  it('renders Legal section heading', () => {
    render(<Footer />);

    expect(screen.getByText('Legal')).toBeInTheDocument();
  });

  it('renders legal links', () => {
    render(<Footer />);

    const privacyLink = screen.getAllByRole('link', { name: /Privacy/i });
    const termsLink = screen.getAllByRole('link', { name: /Terms/i });

    // Check main legal section links
    expect(screen.getByRole('link', { name: /Privacy Policy/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Terms of Service/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Cookie Policy/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /GDPR Compliance/i })).toBeInTheDocument();

    // Check bottom bar links
    expect(privacyLink.length).toBeGreaterThanOrEqual(1);
    expect(termsLink.length).toBeGreaterThanOrEqual(1);
  });

  it('renders copyright notice with current year', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`© ${currentYear} Airdocs Global`, 'i'))
    ).toBeInTheDocument();
  });

  it('renders bottom bar links', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: /Cookies/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Sitemap/i })).toBeInTheDocument();
  });

  it('has dark background', () => {
    const { container } = render(<Footer />);

    const footer = container.querySelector('footer');
    expect(footer?.className).toContain('bg-gray-900');
  });

  it('has correct grid layout', () => {
    const { container } = render(<Footer />);

    const grid = container.querySelector('.grid');
    expect(grid?.className).toContain('lg:grid-cols-6');
  });

  it('renders contact info icons', () => {
    const { container } = render(<Footer />);

    const icons = container.querySelectorAll('svg');
    // Should have multiple icons: MapPin, Phone, Mail, + 4 social media icons
    expect(icons.length).toBeGreaterThanOrEqual(7);
  });

  it('company info section spans 2 columns on large screens', () => {
    const { container } = render(<Footer />);

    const companySection = container.querySelector('.lg\\:col-span-2');
    expect(companySection).toBeInTheDocument();
  });

  it('has border-top on bottom bar', () => {
    const { container } = render(<Footer />);

    const bottomBar = container.querySelector('.border-t');
    expect(bottomBar?.className).toContain('border-gray-800');
  });
});
