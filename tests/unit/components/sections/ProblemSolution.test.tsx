import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProblemSolution } from '@/components/sections/ProblemSolution';

describe('ProblemSolution', () => {
  it('renders the section heading', () => {
    render(<ProblemSolution />);

    expect(screen.getByText('Transform Your Communication Process')).toBeInTheDocument();
    expect(
      screen.getByText(/See how Airdocs solves the challenges of traditional customer communications/i)
    ).toBeInTheDocument();
  });

  it('renders Before and After headers', () => {
    render(<ProblemSolution />);

    expect(screen.getByText('Before Airdocs')).toBeInTheDocument();
    expect(screen.getByText('After Airdocs')).toBeInTheDocument();
  });

  it('renders problem: manual document creation', () => {
    render(<ProblemSolution />);

    expect(
      screen.getByText('Manual document creation taking hours per communication')
    ).toBeInTheDocument();
  });

  it('renders solution: automated generation', () => {
    render(<ProblemSolution />);

    expect(
      screen.getByText('Automated generation in seconds with smart templates')
    ).toBeInTheDocument();
  });

  it('renders problem: inconsistent branding', () => {
    render(<ProblemSolution />);

    expect(
      screen.getByText('Inconsistent branding and messaging across channels')
    ).toBeInTheDocument();
  });

  it('renders solution: unified brand experience', () => {
    render(<ProblemSolution />);

    expect(
      screen.getByText('Unified brand experience across all touchpoints')
    ).toBeInTheDocument();
  });

  it('renders problem: high error rates', () => {
    render(<ProblemSolution />);

    expect(
      screen.getByText('High error rates from manual data entry and formatting')
    ).toBeInTheDocument();
  });

  it('renders solution: error-free documents', () => {
    render(<ProblemSolution />);

    expect(
      screen.getByText('Error-free documents with automated validation')
    ).toBeInTheDocument();
  });

  it('renders problem: limited capacity', () => {
    render(<ProblemSolution />);

    expect(
      screen.getByText('Limited capacity requiring constant hiring')
    ).toBeInTheDocument();
  });

  it('renders solution: infinite scalability', () => {
    render(<ProblemSolution />);

    expect(
      screen.getByText('Infinite scalability without additional headcount')
    ).toBeInTheDocument();
  });

  it('renders all comparison items', () => {
    const { container } = render(<ProblemSolution />);

    // Should have 4 comparison rows (plus the header row)
    const comparisonRows = container.querySelectorAll('.grid.grid-cols-1');
    expect(comparisonRows.length).toBeGreaterThanOrEqual(4);
  });

  it('renders CTA text', () => {
    render(<ProblemSolution />);

    expect(
      screen.getByText('Ready to transform your customer communications?')
    ).toBeInTheDocument();
  });

  it('applies correct styling to problem boxes', () => {
    const { container } = render(<ProblemSolution />);

    const problemBoxes = container.querySelectorAll('.bg-red-50');
    expect(problemBoxes.length).toBeGreaterThan(0);
  });

  it('applies correct styling to solution boxes', () => {
    const { container } = render(<ProblemSolution />);

    const solutionBoxes = container.querySelectorAll('.bg-primary\\/5');
    expect(solutionBoxes.length).toBeGreaterThan(0);
  });

  it('renders arrow icons between comparisons', () => {
    const { container } = render(<ProblemSolution />);

    const arrowIcons = container.querySelectorAll('svg[class*="lucide"]');
    expect(arrowIcons.length).toBeGreaterThan(0);
  });
});
