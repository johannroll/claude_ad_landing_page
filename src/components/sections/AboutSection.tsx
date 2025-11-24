'use client';

import { Building2, Users, Globe, Award } from 'lucide-react';
import { CTAButton } from '@/components/shared/CTAButton';

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    icon: <Building2 className="h-6 w-6" />,
    value: '15+',
    label: 'Years of Experience',
  },
  {
    icon: <Users className="h-6 w-6" />,
    value: '500+',
    label: 'Enterprise Customers',
  },
  {
    icon: <Globe className="h-6 w-6" />,
    value: '20+',
    label: 'Countries Served',
  },
  {
    icon: <Award className="h-6 w-6" />,
    value: '99.9%',
    label: 'Platform Uptime',
  },
];

export function AboutSection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Image/Visual */}
          <div className="relative">
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 lg:h-[500px]">
              {/* Placeholder for company image/illustration */}
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <Building2 className="mx-auto mb-4 h-24 w-24 text-primary" />
                  <p className="text-lg font-medium text-gray-600">
                    Airdocs Global Headquarters
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Cards Overlay */}
            <div className="absolute -bottom-8 left-4 right-4 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white p-4 text-center shadow-lg"
                >
                  <div className="mb-2 flex justify-center text-primary">
                    {stat.icon}
                  </div>
                  <div className="mb-1 text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center pt-12 lg:pt-0">
            <div className="mb-4 inline-flex items-center gap-2 text-primary">
              <div className="h-px w-8 bg-primary"></div>
              <span className="text-sm font-semibold uppercase tracking-wider">
                About Airdocs
              </span>
            </div>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Transforming Customer Communications Since 2008
            </h2>

            <div className="mb-6 space-y-4 text-lg text-gray-600">
              <p>
                Airdocs is a leading provider of Customer Communications
                Management (CCM) solutions, helping organizations deliver
                personalized, compliant, and engaging communications across all
                channels.
              </p>

              <p>
                With over 15 years of experience in the industry, we've built a
                platform that combines cutting-edge technology with deep domain
                expertise. Our solutions empower businesses to automate complex
                communication workflows while maintaining the personal touch
                that customers expect.
              </p>

              <p>
                From small businesses to global enterprises, our customers trust
                us to handle millions of communications daily with reliability,
                security, and scalability that grows with their needs.
              </p>
            </div>

            <div className="mb-8 rounded-xl bg-primary/5 p-6">
              <h3 className="mb-3 font-semibold text-gray-900">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To empower organizations to create exceptional customer
                experiences through innovative, reliable, and scalable
                communication solutions that drive engagement and business
                growth.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <CTAButton variant="primary" size="lg" href="#trial" showIcon>
                Book a Trial
              </CTAButton>
              <CTAButton variant="outline" size="lg" href="#contact">
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
