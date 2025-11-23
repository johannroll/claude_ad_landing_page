import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Navigation } from '@/components/shared/Navigation';
import { NavigationItem } from '@/data/navigation';

// Mock next/navigation
vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

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

  it('shows dropdown on hover for items with children', async () => {
    const user = userEvent.setup();
    render(<Navigation items={mockNavItems} />);

    const productsButton = screen.getByText('Products');

    // Hover over the Products button
    await user.hover(productsButton);

    // Dropdown items should appear
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('First product')).toBeInTheDocument();
  });

  it('highlights active links', () => {
    const { container } = render(<Navigation items={mockNavItems} />);
    const homeLink = screen.getByText('Home');

    // Home link should be highlighted as we're on '/' pathname
    expect(homeLink.className).toContain('text-airdocs-blue');
  });

  it('has proper accessibility for dropdown items', () => {
    render(<Navigation items={mockNavItems} />);
    const productsButton = screen.getByText('Products');

    // Button should be a button element
    expect(productsButton.tagName).toBe('BUTTON');
  });

  it('rotates chevron when dropdown is active', async () => {
    const user = userEvent.setup();
    const { container } = render(<Navigation items={mockNavItems} />);

    const productsButton = screen.getByText('Products');
    await user.hover(productsButton);

    // Find the chevron and check if it has the rotate class
    const chevron = container.querySelector('svg');
    expect(chevron?.classList.contains('rotate-180')).toBe(true);
  });
});
