import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TrustedBy } from '@/components/sections/TrustedBy';
import * as clientsData from '@/data/clients';

// Mock the clients data
vi.mock('@/data/clients', () => ({
  getFeaturedClients: vi.fn(() => [
    {
      name: 'Test Company 1',
      logo: 'data:image/svg+xml;base64,test1',
      alt: 'Test Company 1 logo',
      featured: true,
    },
    {
      name: 'Test Company 2',
      logo: 'data:image/svg+xml;base64,test2',
      alt: 'Test Company 2 logo',
      featured: true,
    },
  ]),
}));

describe('TrustedBy', () => {
  it('renders the "Trusted By" heading', () => {
    render(<TrustedBy />);
    expect(screen.getByText(/Trusted By/i)).toBeInTheDocument();
  });

  it('calls getFeaturedClients to get client data', () => {
    const spy = vi.spyOn(clientsData, 'getFeaturedClients');
    render(<TrustedBy />);
    expect(spy).toHaveBeenCalled();
  });

  it('renders the LogoCloud component with clients', () => {
    const { container } = render(<TrustedBy />);
    const images = container.querySelectorAll('img');
    expect(images.length).toBeGreaterThan(0);
  });

  it('applies custom className when provided', () => {
    const { container } = render(<TrustedBy className="custom-test-class" />);
    const section = container.querySelector('section');
    expect(section?.className).toContain('custom-test-class');
  });

  it('renders with white background by default', () => {
    const { container } = render(<TrustedBy />);
    const section = container.querySelector('section');
    expect(section?.className).toContain('bg-white');
  });

  it('renders client logos with correct alt text', () => {
    render(<TrustedBy />);
    // In conveyor belt mode, logos are duplicated 3 times for seamless scrolling
    const company1Logos = screen.getAllByAltText('Test Company 1 logo');
    const company2Logos = screen.getAllByAltText('Test Company 2 logo');
    expect(company1Logos.length).toBeGreaterThan(0);
    expect(company2Logos.length).toBeGreaterThan(0);
  });
});
