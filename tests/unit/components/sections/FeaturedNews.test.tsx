import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FeaturedNews } from '@/components/sections/FeaturedNews';

describe('FeaturedNews', () => {
  it('renders the New Feature badge', () => {
    render(<FeaturedNews />);
    expect(screen.getByText('New Feature')).toBeInTheDocument();
  });

  it('renders the main heading', () => {
    render(<FeaturedNews />);
    expect(screen.getByText('Introducing Support at Home')).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<FeaturedNews />);
    expect(
      screen.getByText(/Empower your support teams with our new at-home solution/i)
    ).toBeInTheDocument();
  });

  it('renders both CTA buttons', () => {
    render(<FeaturedNews />);
    expect(screen.getByText('Learn More')).toBeInTheDocument();
    expect(screen.getByText('Try it Free')).toBeInTheDocument();
  });

  it('renders stats cards', () => {
    render(<FeaturedNews />);
    expect(screen.getByText('98%')).toBeInTheDocument();
    expect(screen.getByText('Satisfaction')).toBeInTheDocument();
    expect(screen.getByText('24/7')).toBeInTheDocument();
    expect(screen.getByText('Availability')).toBeInTheDocument();
    expect(screen.getByText('-40%')).toBeInTheDocument();
    expect(screen.getByText('Response Time')).toBeInTheDocument();
  });

  it('renders platform label', () => {
    render(<FeaturedNews />);
    expect(screen.getByText('Support at Home Platform')).toBeInTheDocument();
  });

  it('Learn More button has correct href', () => {
    render(<FeaturedNews />);
    const learnMoreButton = screen.getByText('Learn More').closest('a');
    expect(learnMoreButton).toHaveAttribute('href', '#support-at-home');
  });

  it('Try it Free button has correct href', () => {
    render(<FeaturedNews />);
    const tryFreeButton = screen.getByText('Try it Free').closest('a');
    expect(tryFreeButton).toHaveAttribute('href', '#trial');
  });

  it('applies custom className when provided', () => {
    const { container } = render(<FeaturedNews className="custom-class" />);
    const section = container.querySelector('section');
    expect(section?.className).toContain('custom-class');
  });

  it('renders with gradient background', () => {
    const { container } = render(<FeaturedNews />);
    const section = container.querySelector('section');
    expect(section?.className).toContain('bg-gradient-to-r');
  });

  it('renders Sparkles icons', () => {
    const { container } = render(<FeaturedNews />);
    const sparklesIcons = container.querySelectorAll('svg');
    // Should have at least 2 sparkles icons (badge and visual)
    expect(sparklesIcons.length).toBeGreaterThanOrEqual(2);
  });
});
