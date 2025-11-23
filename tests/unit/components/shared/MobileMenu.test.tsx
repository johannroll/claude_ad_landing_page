import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MobileMenu } from '@/components/shared/MobileMenu';
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

  it('calls onClose when Escape key is pressed', () => {
    const onClose = vi.fn();
    render(<MobileMenu isOpen={true} onClose={onClose} items={mockNavItems} />);

    // Simulate Escape key press
    fireEvent.keyDown(document, { key: 'Escape' });

    expect(onClose).toHaveBeenCalled();
  });

  it('does not call onClose when Escape is pressed and menu is closed', () => {
    const onClose = vi.fn();
    render(<MobileMenu isOpen={false} onClose={onClose} items={mockNavItems} />);

    // Simulate Escape key press
    fireEvent.keyDown(document, { key: 'Escape' });

    expect(onClose).not.toHaveBeenCalled();
  });

  it('highlights active links', () => {
    render(<MobileMenu isOpen={true} onClose={() => {}} items={mockNavItems} />);
    const homeLink = screen.getByText('Home');

    // Home link should be highlighted as we're on '/' pathname
    expect(homeLink.className).toContain('text-airdocs-blue');
  });

  it('calls onClose when a navigation link is clicked', () => {
    const onClose = vi.fn();
    render(<MobileMenu isOpen={true} onClose={onClose} items={mockNavItems} />);

    const homeLink = screen.getByText('Home');
    fireEvent.click(homeLink);

    expect(onClose).toHaveBeenCalled();
  });

  it('prevents body scroll when open', () => {
    render(<MobileMenu isOpen={true} onClose={() => {}} items={mockNavItems} />);
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('restores body scroll when closed', () => {
    const { rerender } = render(<MobileMenu isOpen={true} onClose={() => {}} items={mockNavItems} />);
    expect(document.body.style.overflow).toBe('hidden');

    rerender(<MobileMenu isOpen={false} onClose={() => {}} items={mockNavItems} />);
    expect(document.body.style.overflow).toBe('');
  });
});
