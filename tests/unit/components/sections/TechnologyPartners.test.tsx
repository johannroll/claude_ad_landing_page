import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TechnologyPartners } from '@/components/sections/TechnologyPartners';

describe('TechnologyPartners', () => {
  it('renders the section heading', () => {
    render(<TechnologyPartners />);

    expect(screen.getByText('Technology Partners')).toBeInTheDocument();
    expect(
      screen.getByText(/Seamlessly integrate with the tools and platforms/i)
    ).toBeInTheDocument();
  });

  it('renders featured partner logos', () => {
    const { container } = render(<TechnologyPartners />);

    // Check for partner logo images
    const images = container.querySelectorAll('img');
    expect(images.length).toBeGreaterThan(0);
  });

  it('renders partner links as external links', () => {
    const { container } = render(<TechnologyPartners />);

    const links = container.querySelectorAll('a[target="_blank"]');
    expect(links.length).toBeGreaterThan(0);

    // Check that links have proper security attributes
    links.forEach((link) => {
      expect(link.getAttribute('rel')).toBe('noopener noreferrer');
    });
  });

  it('displays additional integration text', () => {
    render(<TechnologyPartners />);

    expect(
      screen.getByText(/And many more integrations available/i)
    ).toBeInTheDocument();
  });

  it('applies grayscale effect to logos', () => {
    const { container } = render(<TechnologyPartners />);

    const logoContainers = container.querySelectorAll('.grayscale');
    expect(logoContainers.length).toBeGreaterThan(0);
  });

  it('has grid layout for partners', () => {
    const { container } = render(<TechnologyPartners />);

    const grid = container.querySelector('.grid');
    expect(grid).toBeInTheDocument();
    expect(grid?.className).toContain('grid-cols-2');
  });

  it('renders partner cards with hover effects', () => {
    const { container } = render(<TechnologyPartners />);

    const partnerCards = container.querySelectorAll('.group');
    expect(partnerCards.length).toBeGreaterThan(0);

    partnerCards.forEach((card) => {
      expect(card.className).toContain('hover:bg-gray-100');
    });
  });

  it('has proper section background', () => {
    const { container } = render(<TechnologyPartners />);

    const section = container.querySelector('section');
    expect(section?.className).toContain('bg-white');
  });
});
