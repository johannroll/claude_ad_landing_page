import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SolutionsOverview } from '@/components/sections/SolutionsOverview';
import { solutions } from '@/data/solutions';

describe('SolutionsOverview', () => {
  it('renders the section heading', () => {
    render(<SolutionsOverview />);
    expect(screen.getByText('Our Solutions')).toBeInTheDocument();
    expect(
      screen.getByText('Comprehensive CCM platform for all your communication needs')
    ).toBeInTheDocument();
  });

  it('renders the Solutions badge', () => {
    render(<SolutionsOverview />);
    expect(screen.getByText('Solutions')).toBeInTheDocument();
  });

  it('renders all solution cards', () => {
    render(<SolutionsOverview />);
    solutions.forEach((solution) => {
      expect(screen.getByText(solution.title)).toBeInTheDocument();
    });
  });

  it('renders solution descriptions', () => {
    render(<SolutionsOverview />);
    solutions.forEach((solution) => {
      expect(screen.getByText(solution.description)).toBeInTheDocument();
    });
  });

  it('renders correct number of solution cards', () => {
    render(<SolutionsOverview />);
    const cards = screen.getAllByRole('link');
    expect(cards.length).toBe(solutions.length);
  });

  it('applies custom className when provided', () => {
    const { container } = render(<SolutionsOverview className="custom-class" />);
    const section = container.querySelector('section');
    expect(section?.className).toContain('custom-class');
  });

  it('renders with gray background by default', () => {
    const { container } = render(<SolutionsOverview />);
    const section = container.querySelector('section');
    expect(section?.className).toContain('bg-gray-50');
  });

  it('solution cards have correct href anchors', () => {
    render(<SolutionsOverview />);
    solutions.forEach((solution) => {
      const link = screen.getByText(solution.title).closest('a');
      expect(link).toHaveAttribute('href', `#${solution.id}`);
    });
  });
});
