'use client';

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Heart, Check } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';

interface ValueProp {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const valueProps: ValueProp[] = [
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: 'Faster Revenue Growth',
    description: 'Accelerate your sales cycle and close deals faster',
    benefits: [
      'Reduce time-to-revenue by 50%',
      'Automate quote generation and delivery',
      'Streamline approval workflows',
      'Real-time tracking and analytics',
    ],
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: 'Saved Labour Costs',
    description: 'Eliminate manual processes and reduce operational overhead',
    benefits: [
      'Cut document processing costs by 70%',
      'Automate repetitive communication tasks',
      'Reduce errors and rework',
      'Scale without adding headcount',
    ],
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Better Retention',
    description: 'Improve customer satisfaction and loyalty',
    benefits: [
      'Increase customer satisfaction by 40%',
      'Personalized communication at scale',
      'Faster response times',
      'Consistent brand experience',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

export function ValueProposition() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Delivering Real Business Value"
          subtitle="See the measurable impact Airdocs brings to your organization"
          align="center"
        />

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {prop.icon}
              </div>

              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                {prop.title}
              </h3>

              <p className="mb-6 text-gray-600">
                {prop.description}
              </p>

              <ul className="space-y-3">
                {prop.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
