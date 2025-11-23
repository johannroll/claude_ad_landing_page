import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Logo } from '@/components/shared/Logo';

describe('Logo', () => {
  it('renders the logo with default props', () => {
    render(<Logo />);
    const logo = screen.getByLabelText('Airdocs Global');
    expect(logo).toBeInTheDocument();
  });

  it('applies the correct size class', () => {
    const { container } = render(<Logo size="lg" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('h-10');
  });

  it('applies custom className', () => {
    const { container } = render(<Logo className="custom-class" />);
    const div = container.querySelector('.custom-class');
    expect(div).toBeInTheDocument();
  });

  it('renders white variant correctly', () => {
    render(<Logo variant="white" />);
    const logo = screen.getByLabelText('Airdocs Global');
    expect(logo).toBeInTheDocument();
  });

  it('renders all size variants', () => {
    const sizes = ['sm', 'md', 'lg', 'xl'] as const;
    const expectedClasses = ['h-6', 'h-8', 'h-10', 'h-12'];

    sizes.forEach((size, index) => {
      const { container } = render(<Logo size={size} />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveClass(expectedClasses[index]);
    });
  });
});
