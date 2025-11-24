'use client';

import { AnimatedTestimonials, AnimatedTestimonial } from '@/components/ui/animated-testimonials';
import { getFeaturedTestimonials } from '@/data/testimonials';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { getAssetPath } from '@/lib/constants';

export function Testimonials() {
  const featuredTestimonials = getFeaturedTestimonials();

  // Transform our testimonials data to match the AnimatedTestimonials format
  const animatedTestimonials: AnimatedTestimonial[] = featuredTestimonials.map(
    (testimonial) => ({
      quote: testimonial.quote,
      name: testimonial.author,
      designation: `${testimonial.role} at ${testimonial.company}`,
      src: testimonial.image || getAssetPath('/images/testimonials/placeholder.svg'),
    })
  );

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Join hundreds of organizations that trust Airdocs for their customer communications"
          align="center"
        />

        <div className="mt-8">
          <AnimatedTestimonials
            testimonials={animatedTestimonials}
            autoplay={true}
          />
        </div>
      </div>
    </section>
  );
}
