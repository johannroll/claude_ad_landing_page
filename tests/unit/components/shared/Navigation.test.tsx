import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Navigation } from '@/components/shared/Navigation';
import { NavigationItem } from '@/data/navigation';

const mockNavItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      {
        label: 'Product 1',
        href: '/products/1',
        description: 'First product',
      },
      {
        label: 'Product 2',
        href: '/products/2',
        description: 'Second product',
      },
    ],
  },
  {
    label: 'About',
    href: '/about',
  },
];

describe('Navigation', () => {
  it('renders navigation items', () => {
    render(<Navigation items={mockNavItems} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders dropdown items with chevron for items with children', () => {
    const { container } = render(<Navigation items={mockNavItems} />);
    const productsButton = screen.getByText('Products');
    expect(productsButton).toBeInTheDocument();

    // Check for chevron icon
    const chevron = container.querySelector('svg');
    expect(chevron).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Navigation items={mockNavItems} className="custom-class" />);
    const nav = container.querySelector('.custom-class');
    expect(nav).toBeInTheDocument();
  });
});
