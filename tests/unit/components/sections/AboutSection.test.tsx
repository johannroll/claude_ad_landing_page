import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AboutSection } from '@/components/sections/AboutSection';

describe('AboutSection', () => {
  it('renders About Airdocs label', () => {
    render(<AboutSection />);

    expect(screen.getByText('About Airdocs')).toBeInTheDocument();
  });

  it('displays main heading', () => {
    render(<AboutSection />);

    expect(
      screen.getByText('Transforming Customer Communications Since 2008')
    ).toBeInTheDocument();
  });

  it('renders company description paragraphs', () => {
    render(<AboutSection />);

    expect(
      screen.getByText(/Airdocs is a leading provider of Customer Communications Management/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/With over 15 years of experience/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/From small businesses to global enterprises/i)
    ).toBeInTheDocument();
  });

  it('displays mission statement', () => {
    render(<AboutSection />);

    expect(screen.getByText('Our Mission')).toBeInTheDocument();
    expect(
      screen.getByText(/To empower organizations to create exceptional customer experiences/i)
    ).toBeInTheDocument();
  });

  it('renders all four stats', () => {
    render(<AboutSection />);

    expect(screen.getByText('15+')).toBeInTheDocument();
    expect(screen.getByText('Years of Experience')).toBeInTheDocument();

    expect(screen.getByText('500+')).toBeInTheDocument();
    expect(screen.getByText('Enterprise Customers')).toBeInTheDocument();

    expect(screen.getByText('20+')).toBeInTheDocument();
    expect(screen.getByText('Countries Served')).toBeInTheDocument();

    expect(screen.getByText('99.9%')).toBeInTheDocument();
    expect(screen.getByText('Platform Uptime')).toBeInTheDocument();
  });

  it('renders CTA buttons', () => {
    render(<AboutSection />);

    expect(screen.getByText('Book a Trial')).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('has two-column grid layout', () => {
    const { container } = render(<AboutSection />);

    const grid = container.querySelector('.grid');
    expect(grid?.className).toContain('lg:grid-cols-2');
  });

  it('renders stat icons', () => {
    const { container } = render(<AboutSection />);

    // Should have icons for each stat
    const icons = container.querySelectorAll('svg');
    expect(icons.length).toBeGreaterThan(4);
  });

  it('has proper section background', () => {
    const { container } = render(<AboutSection />);

    const section = container.querySelector('section');
    expect(section?.className).toContain('bg-white');
  });

  it('renders placeholder headquarters image', () => {
    render(<AboutSection />);

    expect(screen.getByText('Airdocs Global Headquarters')).toBeInTheDocument();
  });

  it('displays stats in a grid', () => {
    const { container } = render(<AboutSection />);

    const statsGrid = container.querySelector('.grid.grid-cols-2');
    expect(statsGrid).toBeInTheDocument();
  });

  it('renders mission box with background', () => {
    const { container } = render(<AboutSection />);

    const missionBox = container.querySelector('.bg-primary\\/5');
    expect(missionBox).toBeInTheDocument();
  });
});
