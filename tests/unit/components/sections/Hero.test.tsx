import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/sections/Hero';

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />);
    expect(screen.getByText(/Transform Your/i)).toBeInTheDocument();
    expect(screen.getByText(/Customer Communications/i)).toBeInTheDocument();
  });

  it('renders the subheading', () => {
    render(<Hero />);
    expect(
      screen.getByText(/Streamline document generation, delivery, and management at scale/i)
    ).toBeInTheDocument();
  });

  it('renders both CTA buttons', () => {
    render(<Hero />);
    expect(screen.getByText('Book a Trial')).toBeInTheDocument();
    expect(screen.getByText('Explore Solutions')).toBeInTheDocument();
  });

  it('renders trust indicator badge', () => {
    render(<Hero />);
    expect(screen.getByText(/Rated 9\/10 on Aspire Leaderboard/i)).toBeInTheDocument();
  });

  it('renders additional trust message', () => {
    render(<Hero />);
    expect(
      screen.getByText(/Trusted by leading organizations across Australia and the Pacific/i)
    ).toBeInTheDocument();
  });

  it('renders star ratings in trust badge', () => {
    const { container } = render(<Hero />);
    const stars = container.querySelectorAll('svg');
    // Should have at least 5 stars (plus arrow icons from buttons)
    expect(stars.length).toBeGreaterThanOrEqual(5);
  });

  it('applies custom className when provided', () => {
    const { container } = render(<Hero className="custom-test-class" />);
    const section = container.querySelector('section');
    expect(section?.className).toContain('custom-test-class');
  });

  it('renders CTAs with correct hrefs', () => {
    render(<Hero />);
    const trialButton = screen.getByText('Book a Trial').closest('a');
    const solutionsButton = screen.getByText('Explore Solutions').closest('a');

    expect(trialButton).toHaveAttribute('href', '#trial');
    expect(solutionsButton).toHaveAttribute('href', '#solutions');
  });
});
