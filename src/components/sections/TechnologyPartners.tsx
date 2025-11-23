'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { getFeaturedPartners } from '@/data/partners';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut' as const,
    },
  },
};

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

        <motion.div
          className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {featuredPartners.map((partner) => (
            <motion.a
              key={partner.name}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
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
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            And many more integrations available through our API and connectors
          </p>
        </div>
      </div>
    </section>
  );
}
