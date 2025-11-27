'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CTAButton } from '@/components/shared/CTAButton';
import { solutions } from '@/data/solutions';
import * as Icons from 'lucide-react';
import { Check } from 'lucide-react';

type IconName = keyof typeof Icons;

interface SolutionsTabsProps {
  className?: string;
}

export function SolutionsTabs({ className }: SolutionsTabsProps) {
  const [activeTab, setActiveTab] = useState(solutions[0].id);
  const activeSolution = solutions.find(s => s.id === activeTab);

  return (
    <section className={`py-20 bg-white ${className || ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how each solution can transform your customer communications
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Tab Navigation */}
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-12 bg-transparent h-auto p-0">
            {solutions.map((solution) => {
              const IconComponent = Icons[solution.icon as IconName] as React.ComponentType<{ className?: string }>;
              const isActive = activeTab === solution.id;

              return (
                <TabsTrigger
                  key={solution.id}
                  value={solution.id}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 bg-white data-[state=active]:shadow-lg"
                  style={isActive ? {
                    borderColor: solution.color,
                    backgroundColor: `${solution.color}10`
                  } : {}}
                >
                  <div
                    className="p-2 rounded-lg transition-all duration-300"
                    style={isActive ? {
                      background: `linear-gradient(to bottom right, ${solution.color}, ${solution.color}dd)`
                    } : {}}
                  >
                    <IconComponent className={isActive ? "h-6 w-6 text-white" : "h-6 w-6 text-gray-600"} />
                  </div>
                  <span className="text-sm font-semibold" style={isActive ? { color: solution.color } : {}}>
                    {solution.shortTitle}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Tab Content */}
          {solutions.map((solution) => (
            <TabsContent key={solution.id} value={solution.id} className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                  {/* Content Side */}
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {solution.longDescription}
                    </p>

                    {/* Features List */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Key Features:
                      </h4>
                      <ul className="space-y-3">
                        {solution.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Check className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: solution.color }} />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <CTAButton variant="primary" size="md" href="#trial" showIcon>
                        Book a Demo
                      </CTAButton>
                      <CTAButton variant="outline" size="md" href={`/solutions/${solution.id}`}>
                        Learn More
                      </CTAButton>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="relative">
                    <div className={`bg-gradient-to-br ${solution.gradient} rounded-2xl p-8 shadow-2xl`}>
                      <div className="bg-white rounded-lg p-6 shadow-lg">
                        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                          {/* Video for all solutions */}
                          <video
                            className="w-full h-full object-cover rounded-lg"
                            autoPlay
                            muted
                            loop
                            playsInline
                            key={solution.id}
                          >
                            <source
                              src={`/claude_ad_landing_page/images/exploreOurSolutions/${
                                solution.id === 'correspondence' ? 'Correspondence' :
                                solution.id === 'agreements' ? 'Agreement' :
                                solution.id === 'letters' ? 'Letters' :
                                solution.id === 'delivery' ? 'Delivery' :
                                solution.id === 'sms' ? 'SMS' :
                                'Cloud'
                              }.mp4`}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                    </div>
                  </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
