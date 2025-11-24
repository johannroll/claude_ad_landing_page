'use client';

import React from 'react';
import { CTAButton } from '@/components/shared/CTAButton';
import { Sparkles } from 'lucide-react';

interface FeaturedNewsProps {
  className?: string;
}

export function FeaturedNews({ className }: FeaturedNewsProps) {
  return (
    <section className={`py-16 bg-gradient-to-r from-airdocs-blue to-airdocs-blue-dark ${className || ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content Side */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-semibold">New Feature</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Introducing Support at Home
            </h2>

            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              Empower your support teams with our new at-home solution. Streamline remote customer service operations with seamless communication tools and real-time collaboration features.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton variant="secondary" size="md" href="#support-at-home">
                Learn More
              </CTAButton>
              <CTAButton
                variant="outline"
                size="md"
                href="#trial"
                className="border-white bg-transparent text-white hover:bg-white hover:text-airdocs-blue"
              >
                Try it Free
              </CTAButton>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="aspect-video bg-white/5 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex p-8 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                    <Sparkles className="h-16 w-16 text-white" />
                  </div>
                  <p className="text-white/80 text-sm">Support at Home Platform</p>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-xs text-white/80">Satisfaction</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-xs text-white/80">Availability</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white">-40%</div>
                  <div className="text-xs text-white/80">Response Time</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-airdocs-blue-light rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-airdocs-spray rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
