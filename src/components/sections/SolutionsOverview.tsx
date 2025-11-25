'use client';

import React from 'react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { FeatureCard } from '@/components/shared/FeatureCard';
import { solutions } from '@/data/solutions';

interface SolutionsOverviewProps {
  className?: string;
}

export function SolutionsOverview({ className }: SolutionsOverviewProps) {
  return (
    <section className={`bg-gray-50 py-20 ${className || ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Solutions"
          subtitle="Comprehensive CCM platform for all your communication needs"
          badge="Solutions"
          badgeColor="indigo"
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <FeatureCard
              key={solution.id}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              index={index}
              href={`#${solution.id}`}
              color={solution.color}
              gradient={solution.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
