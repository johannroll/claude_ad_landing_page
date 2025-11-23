import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AspireFeature } from '@/components/sections/AspireFeature';

describe('AspireFeature', () => {
  it('renders Aspire leaderboard badge', () => {
    render(<AspireFeature />);

    expect(screen.getByText('Aspire')).toBeInTheDocument();
    expect(screen.getByText('Leaderboard')).toBeInTheDocument();
  });

  it('displays the 9/10 rating', () => {
    render(<AspireFeature />);

    expect(screen.getByText('9')).toBeInTheDocument();
    expect(screen.getByText('/10')).toBeInTheDocument();
  });

  it('renders star rating', () => {
    const { container } = render(<AspireFeature />);

    // Should have 5 star icons
    const stars = container.querySelectorAll('svg[class*="fill-primary"]');
    expect(stars.length).toBeGreaterThanOrEqual(5);
  });

  it('displays outstanding performance text', () => {
    render(<AspireFeature />);

    expect(screen.getByText('Outstanding Performance Rating')).toBeInTheDocument();
  });

  it('renders testimonial quote', () => {
    render(<AspireFeature />);

    expect(
      screen.getByText(/Airdocs consistently delivers exceptional value/i)
    ).toBeInTheDocument();
  });

  it('displays main heading', () => {
    render(<AspireFeature />);

    expect(screen.getByText('Why Organizations Choose Airdocs')).toBeInTheDocument();
  });

  it('renders all four feature highlights', () => {
    render(<AspireFeature />);

    expect(screen.getByText('Recognized Leader in CCM solutions')).toBeInTheDocument();
    expect(screen.getByText('Highest customer satisfaction score')).toBeInTheDocument();
    expect(screen.getByText('Trusted by hundreds of organizations')).toBeInTheDocument();
    expect(screen.getByText('Best-in-class implementation support')).toBeInTheDocument();
  });

  it('renders CTA button', () => {
    render(<AspireFeature />);

    expect(screen.getByText("See Why We're Rated 9/10")).toBeInTheDocument();
  });

  it('has gradient background', () => {
    const { container } = render(<AspireFeature />);

    const section = container.querySelector('section');
    expect(section?.className).toContain('bg-gradient-to-br');
  });

  it('renders feature icons', () => {
    const { container } = render(<AspireFeature />);

    // Should have multiple lucide icons
    const icons = container.querySelectorAll('svg');
    expect(icons.length).toBeGreaterThan(4);
  });

  it('has two-column grid layout on large screens', () => {
    const { container } = render(<AspireFeature />);

    const grid = container.querySelector('.grid');
    expect(grid?.className).toContain('lg:grid-cols-2');
  });

  it('renders feature cards with hover effects', () => {
    const { container } = render(<AspireFeature />);

    const featureCards = container.querySelectorAll('.hover\\:shadow-md');
    expect(featureCards.length).toBe(4);
  });
});
