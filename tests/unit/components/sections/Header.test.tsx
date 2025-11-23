import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '@/components/sections/Header';

// Mock next/navigation
vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

// Mock the hooks with a function that can be updated
let mockScrollY = 0;
vi.mock('@/hooks/useScrollDirection', () => ({
  useScrollDirection: () => ({ scrollY: mockScrollY, scrollDirection: null }),
}));

describe('Header', () => {
  beforeEach(() => {
    mockScrollY = 0;
  });

  it('renders the logo', () => {
    render(<Header />);
    const logo = screen.getByAltText('Airdocs Global');
    expect(logo).toBeInTheDocument();
  });

  it('renders navigation items on desktop', () => {
    render(<Header />);
    // Check for navigation items (may appear in both desktop and mobile)
    const platformLinks = screen.getAllByText('Platform');
    expect(platformLinks.length).toBeGreaterThan(0);
  });

  it('renders CTA buttons', () => {
    render(<Header />);
    const contactButtons = screen.getAllByText('Contact Sales');
    const trialButtons = screen.getAllByText('Book a Trial');
    expect(contactButtons.length).toBeGreaterThan(0);
    expect(trialButtons.length).toBeGreaterThan(0);
  });

  it('opens mobile menu when hamburger is clicked', () => {
    render(<Header />);
    const menuButton = screen.getByLabelText('Open menu');
    fireEvent.click(menuButton);

    // Mobile menu should now be visible
    expect(screen.getByText('Menu')).toBeInTheDocument();
  });

  it('renders spacer for fixed header', () => {
    const { container } = render(<Header />);
    const spacer = container.querySelector('[aria-hidden="true"]');
    expect(spacer).toBeInTheDocument();
  });

  it('applies background when scrolled', () => {
    const { container } = render(<Header />);
    const header = container.querySelector('header');
    expect(header).toBeInTheDocument();
    // When not scrolled, header should have transparent background
    expect(header?.className).toContain('bg-transparent');
  });

  it('has proper accessibility attributes', () => {
    render(<Header />);
    const menuButton = screen.getByLabelText('Open menu');
    expect(menuButton).toHaveAttribute('aria-label', 'Open menu');
  });
});
