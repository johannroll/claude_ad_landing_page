'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Logo {
  name: string;
  src: string;
  alt: string;
}

interface LogoCloudProps {
  logos: Logo[];
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
  className,
  animated = true,
  grayscale = true,
  columns = 4,
}: LogoCloudProps) {
  return (
    <div
      className={cn(
        'grid gap-8 items-center justify-items-center',
        columnClasses[columns],
        className
      )}
    >
      {logos.map((logo, index) => {
        const Container = animated ? motion.div : 'div';
        const animationProps = animated
          ? {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: index * 0.05 },
            }
          : {};

        return (
          <Container
            key={logo.name}
            className={cn(
              'relative h-12 w-32 transition-all duration-300',
              grayscale && 'grayscale hover:grayscale-0 opacity-60 hover:opacity-100'
            )}
            {...animationProps}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain"
            />
          </Container>
        );
      })}
    </div>
  );
}
