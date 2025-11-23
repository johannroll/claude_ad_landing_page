'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import * as Icons from 'lucide-react';

// Icon name mapping type
type IconName = keyof typeof Icons;

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: IconName | string;
  iconComponent?: React.ReactNode;
  className?: string;
  animated?: boolean;
  index?: number;
  onClick?: () => void;
  href?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  iconComponent,
  className,
  animated = true,
  index = 0,
  onClick,
  href,
}: FeatureCardProps) {
  const Container = animated ? motion.div : 'div';
  const animationProps = animated
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-50px' },
        transition: { duration: 0.5, delay: index * 0.1 },
        whileHover: { y: -8, transition: { duration: 0.3 } },
      }
    : {};

  // Get the icon component from lucide-react
  const IconComponent = icon && typeof icon === 'string'
    ? (Icons[icon as IconName] as React.ComponentType<{ className?: string }>)
    : null;

  const cardContent = (
    <Card
      className={cn(
        'h-full border-gray-200 bg-white hover:border-airdocs-spray hover:shadow-xl transition-all duration-300 cursor-pointer group',
        className
      )}
    >
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-airdocs-onahau text-airdocs-blue transition-all duration-300 group-hover:bg-airdocs-blue group-hover:text-white">
          {IconComponent && <IconComponent className="h-6 w-6" />}
          {iconComponent && iconComponent}
        </div>
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-airdocs-blue transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-gray-600 leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );

  if (href) {
    return (
      <Container {...animationProps}>
        <a href={href} className="block h-full">
          {cardContent}
        </a>
      </Container>
    );
  }

  return (
    <Container onClick={onClick} {...animationProps}>
      {cardContent}
    </Container>
  );
}
