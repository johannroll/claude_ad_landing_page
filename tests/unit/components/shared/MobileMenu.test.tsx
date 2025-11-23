import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MobileMenu } from '@/components/shared/MobileMenu';
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
    ],
  },
];

describe('MobileMenu', () => {
  it('renders when open', () => {
    render(<MobileMenu isOpen={true} onClose={() => {}} items={mockNavItems} />);
    expect(screen.getByText('Menu')).toBeInTheDocument();
  });

  it('is hidden when closed', () => {
    const { container } = render(<MobileMenu isOpen={false} onClose={() => {}} items={mockNavItems} />);
    const drawer = container.querySelector('.translate-x-full');
    expect(drawer).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn();
    render(<MobileMenu isOpen={true} onClose={onClose} items={mockNavItems} />);

    const closeButton = screen.getByLabelText('Close menu');
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalled();
  });

  it('renders navigation items', () => {
    render(<MobileMenu isOpen={true} onClose={() => {}} items={mockNavItems} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
  });

  it('renders CTA buttons', () => {
    render(<MobileMenu isOpen={true} onClose={() => {}} items={mockNavItems} />);
    expect(screen.getByText('Contact Sales')).toBeInTheDocument();
    expect(screen.getByText('Book a Trial')).toBeInTheDocument();
  });

  it('calls onClose when backdrop is clicked', () => {
    const onClose = vi.fn();
    const { container } = render(<MobileMenu isOpen={true} onClose={onClose} items={mockNavItems} />);

    const backdrop = container.querySelector('.fixed.inset-0.bg-black\\/50');
    if (backdrop) {
      fireEvent.click(backdrop);
      expect(onClose).toHaveBeenCalled();
    }
  });
});
