import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SectionHeading } from '@/components/shared/SectionHeading';

describe('SectionHeading', () => {
  it('renders title correctly', () => {
    render(<SectionHeading title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders title and subtitle', () => {
    render(<SectionHeading title="Test Title" subtitle="Test Subtitle" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('renders badge when provided', () => {
    render(<SectionHeading title="Test Title" badge="New Feature" />);
    expect(screen.getByText('New Feature')).toBeInTheDocument();
  });

  it('applies correct alignment classes', () => {
    const { container } = render(<SectionHeading title="Test Title" align="left" />);
    const heading = container.querySelector('.text-left');
    expect(heading).toBeInTheDocument();
  });

  it('renders without animation when animated is false', () => {
    render(<SectionHeading title="Test Title" animated={false} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<SectionHeading title="Test Title" className="custom-class" />);
    const heading = container.querySelector('.custom-class');
    expect(heading).toBeInTheDocument();
  });
});
