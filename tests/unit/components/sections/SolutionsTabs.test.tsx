import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SolutionsTabs } from '@/components/sections/SolutionsTabs';
import { solutions } from '@/data/solutions';

describe('SolutionsTabs', () => {
  it('renders the main heading', () => {
    render(<SolutionsTabs />);
    expect(screen.getByText('Explore Our Solutions')).toBeInTheDocument();
  });

  it('renders the subheading', () => {
    render(<SolutionsTabs />);
    expect(
      screen.getByText('Discover how each solution can transform your customer communications')
    ).toBeInTheDocument();
  });

  it('renders all tab triggers', () => {
    render(<SolutionsTabs />);
    solutions.forEach((solution) => {
      expect(screen.getByText(solution.shortTitle)).toBeInTheDocument();
    });
  });

  it('displays first solution content by default', () => {
    render(<SolutionsTabs />);
    expect(screen.getByText(solutions[0].title)).toBeInTheDocument();
    expect(screen.getByText(solutions[0].longDescription)).toBeInTheDocument();
  });

  it('displays solution features list', () => {
    render(<SolutionsTabs />);
    expect(screen.getByText('Key Features:')).toBeInTheDocument();
    // Check if at least some features are rendered
    solutions[0].features.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it('renders CTA buttons', () => {
    render(<SolutionsTabs />);
    expect(screen.getByText('Book a Demo')).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('renders interactive tab triggers', () => {
    const { container } = render(<SolutionsTabs />);

    // Verify all tabs are clickable buttons with proper role
    const tabs = container.querySelectorAll('[role="tab"]');
    expect(tabs.length).toBe(solutions.length);

    // Verify at least one tab is active by default
    const activeTabs = container.querySelectorAll('[data-state="active"]');
    expect(activeTabs.length).toBeGreaterThanOrEqual(1);
  });

  it('renders feature checkmarks', () => {
    const { container } = render(<SolutionsTabs />);
    const checkIcons = container.querySelectorAll('svg');
    // Should have multiple check icons (at least one per feature)
    expect(checkIcons.length).toBeGreaterThan(solutions[0].features.length);
  });

  it('applies custom className when provided', () => {
    const { container } = render(<SolutionsTabs className="custom-class" />);
    const section = container.querySelector('section');
    expect(section?.className).toContain('custom-class');
  });

  it('Learn More button has correct href', () => {
    render(<SolutionsTabs />);
    const learnMoreButton = screen.getByText('Learn More').closest('a');
    expect(learnMoreButton).toHaveAttribute('href', `/solutions/${solutions[0].id}`);
  });

  it('Book a Demo button links to trial', () => {
    render(<SolutionsTabs />);
    const demoButton = screen.getByText('Book a Demo').closest('a');
    expect(demoButton).toHaveAttribute('href', '#trial');
  });
});
