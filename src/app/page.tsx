import { Hero } from '@/components/sections/Hero';
import { TrustedBy } from '@/components/sections/TrustedBy';
import { FeaturedNews } from '@/components/sections/FeaturedNews';
import { SolutionsOverview } from '@/components/sections/SolutionsOverview';
import { SolutionsTabs } from '@/components/sections/SolutionsTabs';

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

      {/* Temporary spacer */}
      <div className="h-96"></div>
    </main>
  );
}
