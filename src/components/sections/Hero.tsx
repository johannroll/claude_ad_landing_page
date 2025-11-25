'use client';

import React from 'react';
import { CTAButton } from '@/components/shared/CTAButton';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { AnimatedWord } from '@/components/ui/animated-word';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <section className={`relative overflow-hidden ${className || ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50" />

        {/* Dot Pattern */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle, #80c5cf 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Radial Gradient Overlay for Focus */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, transparent 0%, rgba(255, 255, 255, 0.3) 40%, white 80%)',
          }}
        />

        {/* Top and Bottom Fade */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, white 0%, transparent 15%, transparent 85%, white 100%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
        {/* Trust Indicator Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-airdocs-onahau/50 text-airdocs-blue px-4 py-2 rounded-full mb-6"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm font-semibold">Rated 9/10 on Aspire Leaderboard</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-normal"
        >
          <AnimatedWord
            words={[
              'Transform Your',
              'Revolutionize Your',
              'Elevate Your',
              'Streamline Your'
            ]}
            delay={0}
          />
          <span className="ml-2">
            Customer{' '}
            <span className="bg-gradient-to-r from-airdocs-blue via-airdocs-blue-light to-airdocs-magenta bg-clip-text text-transparent">
              Communications
            </span>
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-gray-600 mb-8 leading-relaxed"
        >
          Streamline document generation, delivery, and management at scale with intelligent CCM solutions
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <CTAButton variant="primary" size="md" href="#trial" showIcon>
            Book a Trial
          </CTAButton>
          <CTAButton variant="outline" size="md" href="#solutions">
            Explore Solutions
          </CTAButton>
        </motion.div>

        {/* Additional Trust Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-sm text-gray-500"
        >
          Trusted by leading organizations across Australia and the Pacific
        </motion.div>
        </div>
      </div>
    </section>
  );
}
