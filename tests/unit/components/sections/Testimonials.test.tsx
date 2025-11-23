import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Testimonials } from '@/components/sections/Testimonials';

// Mock the testimonials data
vi.mock('@/data/testimonials', () => ({
  getFeaturedTestimonials: () => [
    {
      id: 1,
      quote: 'Airdocs has transformed how we communicate with our customers.',
      author: 'Kit Tong',
      role: 'Marketing Technology Manager',
      company: 'Generation',
      image: '/images/testimonials/kit-tong.png',
      featured: true,
    },
    {
      id: 2,
      quote: 'The platform reliability and scalability have been crucial.',
      author: 'Sarah Williams',
      role: 'Head of Operations',
      company: 'NextSense',
      image: '/images/testimonials/sarah-williams.png',
      featured: true,
    },
    {
      id: 3,
      quote: 'Multi-channel delivery capabilities are excellent.',
      author: 'Michael Chen',
      role: 'IT Director',
      company: 'Nambawan Super',
      image: '/images/testimonials/michael-chen.png',
      featured: true,
    },
  ],
}));

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />);

    expect(screen.getByText('What Our Customers Say')).toBeInTheDocument();
    expect(
      screen.getByText(/Join hundreds of organizations that trust Airdocs/i)
    ).toBeInTheDocument();
  });

  it('renders the first testimonial by default', () => {
    render(<Testimonials />);

    expect(screen.getByText('Kit Tong')).toBeInTheDocument();
    expect(
      screen.getByText('Marketing Technology Manager at Generation')
    ).toBeInTheDocument();
  });

  it('renders testimonial quote', () => {
    const { container } = render(<Testimonials />);

    // The quote is split into individual words for animation, so we check for partial text
    expect(container.textContent).toContain('Airdocs');
    expect(container.textContent).toContain('transformed');
    expect(container.textContent).toContain('communicate');
  });

  it('renders navigation buttons', () => {
    render(<Testimonials />);

    const prevButton = screen.getByLabelText('Previous testimonial');
    const nextButton = screen.getByLabelText('Next testimonial');

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('navigates to next testimonial when next button is clicked', async () => {
    render(<Testimonials />);

    const nextButton = screen.getByLabelText('Next testimonial');
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(screen.getByText('Sarah Williams')).toBeInTheDocument();
    });
  });

  it('navigates to previous testimonial when previous button is clicked', async () => {
    render(<Testimonials />);

    // First go to next testimonial
    const nextButton = screen.getByLabelText('Next testimonial');
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(screen.getByText('Sarah Williams')).toBeInTheDocument();
    });

    // Then go back to previous
    const prevButton = screen.getByLabelText('Previous testimonial');
    fireEvent.click(prevButton);

    await waitFor(() => {
      expect(screen.getByText('Kit Tong')).toBeInTheDocument();
    });
  });

  it('cycles through all testimonials', async () => {
    render(<Testimonials />);

    const nextButton = screen.getByLabelText('Next testimonial');

    // First testimonial (default)
    expect(screen.getByText('Kit Tong')).toBeInTheDocument();

    // Navigate to second
    fireEvent.click(nextButton);
    await waitFor(() => {
      expect(screen.getByText('Sarah Williams')).toBeInTheDocument();
    });

    // Navigate to third
    fireEvent.click(nextButton);
    await waitFor(() => {
      expect(screen.getByText('Michael Chen')).toBeInTheDocument();
    });

    // Navigate back to first (cycling)
    fireEvent.click(nextButton);
    await waitFor(() => {
      expect(screen.getByText('Kit Tong')).toBeInTheDocument();
    });
  });

  it('renders testimonial images', () => {
    const { container } = render(<Testimonials />);

    const images = container.querySelectorAll('img');
    expect(images.length).toBeGreaterThan(0);
  });

  it('has proper section background styling', () => {
    const { container } = render(<Testimonials />);

    const section = container.querySelector('section');
    expect(section?.className).toContain('bg-gray-50');
  });

  it('contains AnimatedTestimonials component', () => {
    const { container } = render(<Testimonials />);

    // Check for the presence of the testimonials container
    const testimonialsContainer = container.querySelector('.grid.grid-cols-1');
    expect(testimonialsContainer).toBeInTheDocument();
  });
});
