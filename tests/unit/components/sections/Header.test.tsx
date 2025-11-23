import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '@/components/sections/Header';

// Mock the hooks
vi.mock('@/hooks/useScrollDirection', () => ({
  useScrollDirection: () => ({ scrollY: 0, scrollDirection: null }),
}));

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />);
    const logo = screen.getByLabelText('Airdocs Global');
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
});
