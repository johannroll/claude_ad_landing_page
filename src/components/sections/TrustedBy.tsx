'use client';

import React from 'react';
import { LogoCloud } from '@/components/shared/LogoCloud';
import { getFeaturedClients } from '@/data/clients';
import { motion } from 'framer-motion';

interface TrustedByProps {
  className?: string;
}

export function TrustedBy({ className }: TrustedByProps) {
  const featuredClients = getFeaturedClients();

  return (
    <section className={`py-16 bg-white ${className || ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Trusted By
          </h2>
        </motion.div>

        <LogoCloud clients={featuredClients} />
      </div>
    </section>
  );
}
