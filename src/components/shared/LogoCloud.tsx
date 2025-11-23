'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Client } from '@/data/clients';

interface Logo {
  name: string;
  src?: string;
  logo?: string;
  alt: string;
}

interface LogoCloudProps {
  logos?: Logo[];
  clients?: Client[];
  className?: string;
  animated?: boolean;
  grayscale?: boolean;
  columns?: 3 | 4 | 5 | 6;
}

const columnClasses = {
  3: 'grid-cols-2 md:grid-cols-3',
  4: 'grid-cols-2 md:grid-cols-4',
  5: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
  6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
};

export function LogoCloud({
  logos,
  clients,
  className,
  animated = true,
  grayscale = true,
  columns = 4,
}: LogoCloudProps) {
  // Normalize data to use either logos or clients
  const items = clients || logos || [];

  return (
    <div
      className={cn(
        'grid gap-8 items-center justify-items-center',
        columnClasses[columns],
        className
      )}
    >
      {items.map((item, index) => {
        const Container = animated ? motion.div : 'div';
        const animationProps = animated
          ? {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: index * 0.05 },
            }
          : {};

        // Support both logo and src properties
        const imageSrc = ('logo' in item ? item.logo : item.src) || '';

        return (
          <Container
            key={item.name}
            className={cn(
              'relative h-12 w-32 transition-all duration-300',
              grayscale && 'grayscale hover:grayscale-0 opacity-60 hover:opacity-100'
            )}
            {...animationProps}
          >
            <Image
              src={imageSrc}
              alt={item.alt}
              fill
              className="object-contain"
            />
          </Container>
        );
      })}
    </div>
  );
}
