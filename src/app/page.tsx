import { Hero } from '@/components/sections/Hero';
import { TrustedBy } from '@/components/sections/TrustedBy';
import { FeaturedNews } from '@/components/sections/FeaturedNews';
import { SolutionsOverview } from '@/components/sections/SolutionsOverview';
import { SolutionsTabs } from '@/components/sections/SolutionsTabs';
import { ValueProposition } from '@/components/sections/ValueProposition';
import { ProblemSolution } from '@/components/sections/ProblemSolution';
import { Testimonials } from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Trusted By Section */}
      <TrustedBy />

      {/* Featured News Banner */}
      <FeaturedNews />

      {/* Solutions Overview */}
      <SolutionsOverview />

      {/* Solutions Tabs */}
      <SolutionsTabs />

      {/* Value Proposition Section */}
      <ValueProposition />

      {/* Problem/Solution Section */}
      <ProblemSolution />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Temporary spacer */}
      <div className="h-96"></div>
    </main>
  );
}
