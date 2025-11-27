'use client';

import React from 'react';
import { Sparkles, Palette, Zap, Send, Activity, Cloud } from 'lucide-react';
import { Safari } from '@/components/ui/safari';

interface FeaturedNewsProps {
  className?: string;
}

export function FeaturedNews({ className }: FeaturedNewsProps) {
  const features = [
    {
      text: "Design compliant, on-brand documents and templates",
      icon: Palette,
      color: "#10B981" // emerald
    },
    {
      text: "Automate generation and delivery using your source data",
      icon: Zap,
      color: "#F59E0B" // amber
    },
    {
      text: "Reach clients via email, SMS, post, portals and digital signature",
      icon: Send,
      color: "#3B82F6" // blue
    },
    {
      text: "Maintain realtime tracking, archiving and audit for every communication",
      icon: Activity,
      color: "#8B5CF6" // violet
    },
    {
      text: "No new infrastructure or capital expenditure required – cloud-native, multi-tenant deployment",
      icon: Cloud,
      color: "#06B6D4" // cyan
    }
  ];

  return (
    <section className={`py-20 bg-gradient-to-br from-airdocs-magenta via-airdocs-blue to-airdocs-blue-light relative overflow-hidden ${className || ''}`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-6 py-2.5 rounded-full mb-6 border border-white/20">
            <Sparkles className="h-5 w-5 text-white" />
            <span className="text-white font-semibold text-sm uppercase tracking-wide">Platform Overview</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            All In One Platform
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Centralize design, automation, and delivery of all customer communications from a single cloud platform.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {/* Large Video Card - Spans 2 columns and 2 rows */}
          <div className="md:col-span-2 lg:row-span-2 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 group hover:bg-white/15 transition-colors duration-300 overflow-hidden">
            <div className="relative">
              <Safari
                url="app.airdocs.com"
                videoSrc="/claude_ad_landing_page/images/featuredNews/Airdocs.MP4"
                width={1000}
                height={589}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Feature Cards - Right column */}
          {features.slice(0, 2).map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 group hover:bg-white/15 transition-all duration-300 hover:scale-105 flex flex-col justify-center"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl backdrop-blur-sm flex items-center justify-center border group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                    style={{
                      backgroundColor: `${feature.color}20`,
                      borderColor: `${feature.color}40`
                    }}
                  >
                    <Icon className="h-6 w-6" style={{ color: feature.color }} strokeWidth={2.5} />
                  </div>
                  <p className="text-white font-semibold text-lg leading-relaxed flex-1">
                    {feature.text}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Bottom row feature cards */}
          {features.slice(2).map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index + 2}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 group hover:bg-white/15 transition-all duration-300 hover:scale-105 flex flex-col justify-center"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl backdrop-blur-sm flex items-center justify-center border group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                    style={{
                      backgroundColor: `${feature.color}20`,
                      borderColor: `${feature.color}40`
                    }}
                  >
                    <Icon className="h-6 w-6" style={{ color: feature.color }} strokeWidth={2.5} />
                  </div>
                  <p className="text-white font-semibold text-lg leading-relaxed flex-1">
                    {feature.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
