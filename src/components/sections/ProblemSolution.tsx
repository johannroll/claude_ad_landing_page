'use client';

import {
  Clock,
  FileText,
  AlertCircle,
  Users,
  Zap,
  CheckCircle2,
  TrendingUp,
  Shield,
  ArrowRight
} from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';

interface ComparisonItem {
  problemIcon: React.ReactNode;
  problemText: string;
  solutionIcon: React.ReactNode;
  solutionText: string;
}

const comparisons: ComparisonItem[] = [
  {
    problemIcon: <Clock className="h-6 w-6" />,
    problemText: 'Manual document creation taking hours per communication',
    solutionIcon: <Zap className="h-6 w-6" />,
    solutionText: 'Automated generation in seconds with smart templates',
  },
  {
    problemIcon: <FileText className="h-6 w-6" />,
    problemText: 'Inconsistent branding and messaging across channels',
    solutionIcon: <CheckCircle2 className="h-6 w-6" />,
    solutionText: 'Unified brand experience across all touchpoints',
  },
  {
    problemIcon: <AlertCircle className="h-6 w-6" />,
    problemText: 'High error rates from manual data entry and formatting',
    solutionIcon: <Shield className="h-6 w-6" />,
    solutionText: 'Error-free documents with automated validation',
  },
  {
    problemIcon: <Users className="h-6 w-6" />,
    problemText: 'Limited capacity requiring constant hiring',
    solutionIcon: <TrendingUp className="h-6 w-6" />,
    solutionText: 'Infinite scalability without additional headcount',
  },
];

export function ProblemSolution() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Transform Your Communication Process"
          subtitle="See how Airdocs solves the challenges of traditional customer communications"
          align="center"
        />

        <div className="mt-16 space-y-8">
          {/* Header Row */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1fr]">
            <div className="text-center">
              <h3 className="text-xl font-bold text-red-600">Before Airdocs</h3>
            </div>
            <div className="hidden md:block" />
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary">After Airdocs</h3>
            </div>
          </div>

          {/* Comparison Items */}
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1fr]"
            >
              {/* Problem */}
              <div className="flex items-center gap-4 rounded-xl bg-red-50 p-6">
                <div className="flex-shrink-0 text-red-600">
                  {comparison.problemIcon}
                </div>
                <p className="text-sm text-gray-700">
                  {comparison.problemText}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-gray-400 md:block hidden" />
              </div>

              {/* Solution */}
              <div className="flex items-center gap-4 rounded-xl bg-primary/5 p-6">
                <div className="flex-shrink-0 text-primary">
                  {comparison.solutionIcon}
                </div>
                <p className="text-sm text-gray-700">
                  {comparison.solutionText}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            Ready to transform your customer communications?
          </p>
        </div>
      </div>
    </section>
  );
}
