'use client';

import React from 'react';
import { LogoCloud } from '@/components/shared/LogoCloud';
import { getFeaturedClients } from '@/data/clients';

interface TrustedByProps {
  className?: string;
}

export function TrustedBy({ className }: TrustedByProps) {
  const featuredClients = getFeaturedClients();

  return (
    <section className={`py-16 bg-white ${className || ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <LogoCloud
          clients={featuredClients}
          conveyorBelt={true}
          animated={false}
        />
      </div>
    </section>
  );
}
