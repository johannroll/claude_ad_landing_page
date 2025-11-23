import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ValueProposition } from '@/components/sections/ValueProposition';

describe('ValueProposition', () => {
  it('renders the section heading', () => {
    render(<ValueProposition />);

    expect(screen.getByText('Delivering Real Business Value')).toBeInTheDocument();
    expect(
      screen.getByText(/See the measurable impact Airdocs brings to your organization/i)
    ).toBeInTheDocument();
  });

  it('renders all three value propositions', () => {
    render(<ValueProposition />);

    expect(screen.getByText('Faster Revenue Growth')).toBeInTheDocument();
    expect(screen.getByText('Saved Labour Costs')).toBeInTheDocument();
    expect(screen.getByText('Better Retention')).toBeInTheDocument();
  });

  it('renders value proposition descriptions', () => {
    render(<ValueProposition />);

    expect(
      screen.getByText('Accelerate your sales cycle and close deals faster')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Eliminate manual processes and reduce operational overhead')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Improve customer satisfaction and loyalty')
    ).toBeInTheDocument();
  });

  it('renders benefits for Faster Revenue Growth', () => {
    render(<ValueProposition />);

    expect(screen.getByText('Reduce time-to-revenue by 50%')).toBeInTheDocument();
    expect(screen.getByText('Automate quote generation and delivery')).toBeInTheDocument();
    expect(screen.getByText('Streamline approval workflows')).toBeInTheDocument();
    expect(screen.getByText('Real-time tracking and analytics')).toBeInTheDocument();
  });

  it('renders benefits for Saved Labour Costs', () => {
    render(<ValueProposition />);

    expect(screen.getByText('Cut document processing costs by 70%')).toBeInTheDocument();
    expect(screen.getByText('Automate repetitive communication tasks')).toBeInTheDocument();
    expect(screen.getByText('Reduce errors and rework')).toBeInTheDocument();
    expect(screen.getByText('Scale without adding headcount')).toBeInTheDocument();
  });

  it('renders benefits for Better Retention', () => {
    render(<ValueProposition />);

    expect(screen.getByText('Increase customer satisfaction by 40%')).toBeInTheDocument();
    expect(screen.getByText('Personalized communication at scale')).toBeInTheDocument();
    expect(screen.getByText('Faster response times')).toBeInTheDocument();
    expect(screen.getByText('Consistent brand experience')).toBeInTheDocument();
  });

  it('renders check icons for all benefits', () => {
    const { container } = render(<ValueProposition />);

    // Each value prop has 4 benefits, so 12 check icons total
    const checkIcons = container.querySelectorAll('svg[class*="lucide-check"]');
    expect(checkIcons.length).toBeGreaterThanOrEqual(12);
  });

  it('renders value prop icons', () => {
    const { container } = render(<ValueProposition />);

    // Should have icons for each value prop (TrendingUp, DollarSign, Heart)
    const icons = container.querySelectorAll('svg');
    expect(icons.length).toBeGreaterThan(0);
  });

  it('has proper layout structure', () => {
    const { container } = render(<ValueProposition />);

    // Check for grid layout
    const gridContainer = container.querySelector('.grid');
    expect(gridContainer).toBeInTheDocument();
  });

  it('applies hover effects on cards', () => {
    const { container } = render(<ValueProposition />);

    const cards = container.querySelectorAll('.rounded-2xl');
    expect(cards.length).toBe(3);

    cards.forEach(card => {
      expect(card.className).toContain('hover:shadow-lg');
    });
  });
});
