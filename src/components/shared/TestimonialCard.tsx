'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  logo?: string;
  className?: string;
  animated?: boolean;
  index?: number;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  image,
  logo,
  className,
  animated = true,
  index = 0,
}: TestimonialCardProps) {
  const Container = animated ? motion.div : 'div';
  const animationProps = animated
    ? {
        initial: { opacity: 0, scale: 0.95 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true, margin: '-50px' },
        transition: { duration: 0.5, delay: index * 0.15 },
      }
    : {};

  return (
    <Container {...animationProps}>
      <Card
        className={cn(
          'h-full border-gray-200 bg-white shadow-md hover:shadow-xl transition-shadow duration-300',
          className
        )}
      >
        <CardContent className="p-6 md:p-8">
          {/* Quote Icon */}
          <div className="mb-4 text-airdocs-blue">
            <Quote className="h-8 w-8" />
          </div>

          {/* Quote Text */}
          <blockquote className="mb-6 text-gray-700 text-base md:text-lg leading-relaxed">
            "{quote}"
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center gap-4">
            {image && (
              <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={image}
                  alt={author}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex-1">
              <div className="font-semibold text-gray-900">{author}</div>
              <div className="text-sm text-gray-600">
                {role} {company && `• ${company}`}
              </div>
            </div>
            {logo && (
              <div className="relative h-8 w-20">
                <Image
                  src={logo}
                  alt={company}
                  fill
                  className="object-contain grayscale opacity-60"
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
