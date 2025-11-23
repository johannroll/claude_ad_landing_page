import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Logo } from '@/components/shared/Logo';

describe('Logo', () => {
  it('renders the logo with default props', () => {
    render(<Logo />);
    const logo = screen.getByAltText('Airdocs Global');
    expect(logo).toBeInTheDocument();
  });

  it('applies the correct size dimensions for lg', () => {
    render(<Logo size="lg" />);
    const logo = screen.getByAltText('Airdocs Global');
    expect(logo).toHaveAttribute('width', '200');
    expect(logo).toHaveAttribute('height', '40');
  });

  it('applies custom className', () => {
    const { container } = render(<Logo className="custom-class" />);
    const div = container.querySelector('.custom-class');
    expect(div).toBeInTheDocument();
  });

  it('renders white variant correctly', () => {
    render(<Logo variant="white" />);
    const logo = screen.getByAltText('Airdocs Global');
    expect(logo).toBeInTheDocument();
  });

  it('renders all size variants', () => {
    const testCases = [
      { size: 'sm' as const, width: '120', height: '24' },
      { size: 'md' as const, width: '160', height: '32' },
      { size: 'lg' as const, width: '200', height: '40' },
      { size: 'xl' as const, width: '240', height: '48' },
    ];

    testCases.forEach(({ size, width, height }) => {
      const { unmount } = render(<Logo size={size} />);
      const logo = screen.getByAltText('Airdocs Global');
      expect(logo).toHaveAttribute('width', width);
      expect(logo).toHaveAttribute('height', height);
      unmount();
    });
  });
});
