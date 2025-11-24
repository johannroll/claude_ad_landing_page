'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  animated?: boolean;
  badge?: string;
  badgeColor?: 'blue' | 'citrus' | 'magenta' | 'coral' | 'amber' | 'indigo';
}

const alignClasses = {
  left: 'text-left items-start',
  center: 'text-center items-center',
  right: 'text-right items-end',
};

const badgeColorClasses = {
  blue: 'bg-airdocs-onahau text-airdocs-blue',
  citrus: 'bg-airdocs-citrus/10 text-airdocs-citrus',
  magenta: 'bg-airdocs-magenta/10 text-airdocs-magenta',
  coral: 'bg-airdocs-coral/10 text-airdocs-coral',
  amber: 'bg-airdocs-amber/10 text-airdocs-amber',
  indigo: 'bg-airdocs-indigo/10 text-airdocs-indigo',
};

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className,
  animated = false,
  badge,
  badgeColor = 'blue',
}: SectionHeadingProps) {
  const Container = animated ? motion.div : 'div';
  const animationProps = animated
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-100px' },
        transition: { duration: 0.6 },
      }
    : {};

  return (
    <Container
      className={cn('flex flex-col gap-3', alignClasses[align], className)}
      {...animationProps}
    >
      {badge && (
        <span className={cn(
          "inline-block px-4 py-1.5 rounded-full text-sm font-semibold w-fit",
          badgeColorClasses[badgeColor]
        )}>
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </Container>
  );
}
