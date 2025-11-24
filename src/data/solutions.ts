import { getAssetPath } from '@/lib/constants';

export interface Solution {
  id: string;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  image?: string;
  color: string;
  gradient: string;
}

export const solutions: Solution[] = [
  {
    id: 'correspondence',
    title: 'Clever Correspondence',
    shortTitle: 'Correspondence',
    icon: 'Mail',
    description: 'Intelligent correspondence management that transforms how you communicate with customers.',
    longDescription:
      'Streamline your customer communications with our intelligent correspondence management system. Create, manage, and deliver personalized communications at scale with ease.',
    features: [
      'AI-powered content generation',
      'Template management system',
      'Multi-language support',
      'Brand consistency controls',
      'Version control and approval workflows',
      'Real-time preview and testing',
    ],
    benefits: [
      'Reduce time to create communications by 70%',
      'Ensure brand consistency across all channels',
      'Improve customer satisfaction scores',
      'Decrease operational costs',
    ],
    image: getAssetPath('/images/solutions/correspondence.png'),
    color: '#10B981',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'agreements',
    title: 'Smart Agreements',
    shortTitle: 'Agreements',
    icon: 'FileText',
    description: 'Digital contract management with integrated eSignature capabilities for faster deal closure.',
    longDescription:
      'Modernize your agreement process with digital contracts, automated workflows, and seamless eSignature integration. Close deals faster and reduce paperwork.',
    features: [
      'Dynamic contract generation',
      'DocuSign and OneSpan integration',
      'Automated approval workflows',
      'Clause library management',
      'Audit trail and compliance',
      'Mobile-friendly signing',
    ],
    benefits: [
      'Close deals 50% faster',
      'Reduce contract errors by 90%',
      'Improve compliance and security',
      'Enable remote signing',
    ],
    image: getAssetPath('/images/solutions/agreements.png'),
    color: '#3B82F6',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'letters',
    title: 'Dynamic Letters',
    shortTitle: 'Letters',
    icon: 'File',
    description: 'Personalized letter generation with advanced formatting and delivery options.',
    longDescription:
      'Generate personalized letters at scale with advanced formatting, conditional content, and multiple delivery options including print, email, and digital.',
    features: [
      'Conditional content rules',
      'Advanced formatting options',
      'Personalization at scale',
      'Print and digital delivery',
      'Batch processing',
      'Quality assurance tools',
    ],
    benefits: [
      'Send 10,000+ personalized letters daily',
      'Reduce printing costs by 40%',
      'Improve delivery success rates',
      'Ensure regulatory compliance',
    ],
    image: getAssetPath('/images/solutions/letters.png'),
    color: '#8B5CF6',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    id: 'delivery',
    title: 'Delivery Hub',
    shortTitle: 'Delivery',
    icon: 'Send',
    description: 'Multi-channel delivery platform for email, print, and digital communications.',
    longDescription:
      'Centralized delivery hub that manages all your communication channels. Monitor delivery status, track engagement, and ensure successful delivery across all channels.',
    features: [
      'Multi-channel orchestration',
      'Delivery tracking and reporting',
      'Bounce handling and retry logic',
      'Priority routing',
      'SLA monitoring',
      'Fallback channel support',
    ],
    benefits: [
      '99.9% delivery success rate',
      'Real-time delivery insights',
      'Reduce failed deliveries by 80%',
      'Optimize delivery costs',
    ],
    image: getAssetPath('/images/solutions/delivery.png'),
    color: '#F59E0B',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 'sms',
    title: 'SMS Gateway',
    shortTitle: 'SMS',
    icon: 'MessageSquare',
    description: 'Enterprise SMS communications with high deliverability and global reach.',
    longDescription:
      'Send transactional and marketing SMS at scale with our enterprise SMS gateway. High deliverability, global coverage, and comprehensive analytics.',
    features: [
      'Global SMS coverage',
      'Two-way messaging',
      'Short code and long code support',
      'Message templates',
      'Delivery receipts',
      'Opt-in/opt-out management',
    ],
    benefits: [
      'Reach customers instantly',
      '98% open rate',
      'Global coverage in 190+ countries',
      'Cost-effective messaging',
    ],
    image: getAssetPath('/images/solutions/sms.png'),
    color: '#EC4899',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    id: 'cloud',
    title: 'Cloud Platform',
    shortTitle: 'Cloud',
    icon: 'Cloud',
    description: 'Secure, scalable cloud infrastructure with enterprise-grade security and compliance.',
    longDescription:
      'Built on modern cloud infrastructure, our platform provides enterprise-grade security, scalability, and reliability. Focus on your business while we handle the infrastructure.',
    features: [
      'Auto-scaling infrastructure',
      'SOC 2 Type II certified',
      'GDPR and HIPAA compliant',
      '99.99% uptime SLA',
      'Global CDN',
      'Disaster recovery',
    ],
    benefits: [
      'Zero infrastructure management',
      'Scale to millions of communications',
      'Enterprise-grade security',
      'Guaranteed uptime',
    ],
    image: getAssetPath('/images/solutions/cloud.png'),
    color: '#06B6D4',
    gradient: 'from-cyan-500 to-blue-600',
  },
];

export const getSolutionById = (id: string): Solution | undefined => {
  return solutions.find((solution) => solution.id === id);
};

export const getSolutionsByIds = (ids: string[]): Solution[] => {
  return solutions.filter((solution) => ids.includes(solution.id));
};
