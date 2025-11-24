'use client';

import Image from 'next/image';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { getFeaturedPartners } from '@/data/partners';

export function TechnologyPartners() {
  const featuredPartners = getFeaturedPartners();

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technology Partners"
          subtitle="Seamlessly integrate with the tools and platforms you already use"
          align="center"
        />

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {featuredPartners.map((partner) => (
            <a
              key={partner.name}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center rounded-xl bg-gray-50 p-6 transition-all hover:bg-gray-100 hover:shadow-md"
              title={partner.description}
            >
              <div className="relative h-16 w-full grayscale transition-all duration-300 group-hover:grayscale-0">
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            And many more integrations available through our API and connectors
          </p>
        </div>
      </div>
    </section>
  );
}
