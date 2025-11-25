'use client';

import { Star, Award, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { CTAButton } from '@/components/shared/CTAButton';

interface Feature {
  icon: React.ReactNode;
  text: string;
}

const features: Feature[] = [
  {
    icon: <Award className="h-5 w-5" />,
    text: 'Recognized Leader in CCM solutions',
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    text: 'Highest customer satisfaction score',
  },
  {
    icon: <Users className="h-5 w-5" />,
    text: 'Trusted by hundreds of organizations',
  },
  {
    icon: <CheckCircle className="h-5 w-5" />,
    text: 'Best-in-class implementation support',
  },
];

export function AspireFeature() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-white py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0)_1px,transparent_0)] [background-size:40px_40px]" />
      </div>

      {/* Top fade - fades from white to transparent */}
      <div
        className="absolute top-0 left-0 w-full h-24 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1), transparent)'
        }}
      />

      {/* Bottom fade - fades from white to transparent */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to top, rgba(255, 255, 255, 1), transparent)'
        }}
      />

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Side - Rating Display */}
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-lg">
              <span className="text-2xl font-bold text-primary">Aspire</span>
              <span className="text-gray-300">|</span>
              <span className="text-sm font-medium text-gray-600">Leaderboard</span>
            </div>

            <div className="mb-6">
              <div className="mb-3 flex items-end justify-center gap-2 lg:justify-start">
                <span className="text-7xl font-bold text-gray-900">9</span>
                <span className="mb-2 text-4xl font-bold text-gray-400">/10</span>
              </div>

              {/* Star Rating */}
              <div className="mb-4 flex justify-center gap-1 lg:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-8 w-8 fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="text-xl font-semibold text-gray-700">
                Outstanding Performance Rating
              </p>
            </div>

            <blockquote className="mb-8 border-l-4 border-primary pl-6 italic text-gray-600">
              Airdocs consistently delivers exceptional value with innovative
              solutions that transform customer communications at scale.
            </blockquote>

            <CTAButton variant="primary" size="lg" href="#trial" showIcon>
              See Why We're Rated 9/10
            </CTAButton>
          </div>

          {/* Right Side - Feature Highlights */}
          <div className="space-y-6">
            <h3 className="mb-8 text-3xl font-bold text-gray-900">
              Why Organizations Choose Airdocs
            </h3>

            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex-shrink-0 rounded-lg bg-primary/10 p-3 text-primary">
                  {feature.icon}
                </div>
                <p className="text-lg text-gray-700">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
