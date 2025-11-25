'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import * as Icons from 'lucide-react';

// Icon name mapping type
type IconName = keyof typeof Icons;

// Helper function to convert Tailwind gradient classes to color values
function getGradientColors(gradient: string): { from: string; to: string } {
  const colorMap: Record<string, string> = {
    'emerald-500': '#10B981',
    'teal-600': '#0D9488',
    'blue-500': '#3B82F6',
    'indigo-600': '#4F46E5',
    'violet-500': '#8B5CF6',
    'purple-600': '#9333EA',
    'amber-500': '#F59E0B',
    'orange-600': '#EA580C',
    'pink-500': '#EC4899',
    'rose-600': '#E11D48',
    'cyan-500': '#06B6D4',
  };

  const parts = gradient.split(' ');
  const fromColor = parts.find(p => p.startsWith('from-'))?.replace('from-', '') || 'blue-500';
  const toColor = parts.find(p => p.startsWith('to-'))?.replace('to-', '') || 'indigo-600';

  return {
    from: colorMap[fromColor] || '#3B82F6',
    to: colorMap[toColor] || '#4F46E5',
  };
}

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
  color?: string;
  gradient?: string;
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
  color,
  gradient,
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
        <div
          className={cn(
            "mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300",
            !gradient && "bg-airdocs-onahau text-airdocs-blue group-hover:bg-airdocs-blue group-hover:text-white"
          )}
          style={
            gradient
              ? {
                  background: `linear-gradient(to bottom right, ${getGradientColors(gradient).from}, ${getGradientColors(gradient).to})`,
                  color: 'white',
                }
              : color
              ? { backgroundColor: `${color}20`, color: color }
              : {}
          }
        >
          {IconComponent && <IconComponent className="h-6 w-6" />}
          {iconComponent && iconComponent}
        </div>
        <CardTitle
          className="text-xl font-bold text-gray-900 transition-colors duration-300"
          style={color ? { ['--hover-color' as string]: color } : {}}
        >
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
