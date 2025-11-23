import { SectionHeading } from '@/components/shared/SectionHeading';
import { FeatureCard } from '@/components/shared/FeatureCard';
import { CTAButton } from '@/components/shared/CTAButton';
import { solutions } from '@/data/solutions';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transform Your{' '}
            <span className="bg-gradient-to-r from-airdocs-blue to-airdocs-blue-light bg-clip-text text-transparent">
              Customer Communications
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Streamline document generation, delivery, and management at scale with intelligent CCM solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="primary" size="lg" href="#trial" showIcon>
              Book a Trial
            </CTAButton>
            <CTAButton variant="outline" size="lg" href="#solutions">
              Explore Solutions
            </CTAButton>
          </div>
        </div>
      </section>

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
