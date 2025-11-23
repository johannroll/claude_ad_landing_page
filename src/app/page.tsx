import { SectionHeading } from '@/components/shared/SectionHeading';
import { FeatureCard } from '@/components/shared/FeatureCard';
import { Hero } from '@/components/sections/Hero';
import { TrustedBy } from '@/components/sections/TrustedBy';
import { solutions } from '@/data/solutions';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Trusted By Section */}
      <TrustedBy />

      {/* Solutions Overview */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Solutions"
            subtitle="Comprehensive CCM platform for all your communication needs"
            badge="Solutions"
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
              />
            ))}
          </div>
        </div>
      </section>

      {/* Temporary spacer */}
      <div className="h-96"></div>
    </main>
  );
}
