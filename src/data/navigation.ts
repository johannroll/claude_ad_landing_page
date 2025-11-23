export interface NavigationItem {
  label: string;
  href: string;
  description?: string;
  children?: NavigationItem[];
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

export const navigationData = {
  platform: [
    {
      label: 'Overview',
      href: '/platform',
      description: 'Comprehensive CCM platform overview',
    },
    {
      label: 'Features',
      href: '/platform/features',
      description: 'Explore all platform capabilities',
    },
    {
      label: 'Integrations',
      href: '/platform/integrations',
      description: 'Connect with your existing systems',
    },
    {
      label: 'Security',
      href: '/platform/security',
      description: 'Enterprise-grade security and compliance',
    },
  ],

  capabilities: [
    {
      label: 'Document Generation',
      href: '/capabilities/document-generation',
      description: 'Automated document creation',
    },
    {
      label: 'Multi-Channel Delivery',
      href: '/capabilities/delivery',
      description: 'Email, SMS, print, and digital delivery',
    },
    {
      label: 'Template Management',
      href: '/capabilities/templates',
      description: 'Create and manage document templates',
    },
    {
      label: 'Analytics & Reporting',
      href: '/capabilities/analytics',
      description: 'Track and measure communications',
    },
  ],

  industries: [
    {
      label: 'Financial Services',
      href: '/industries/financial-services',
      description: 'Banking and insurance communications',
    },
    {
      label: 'Healthcare',
      href: '/industries/healthcare',
      description: 'Patient communications and records',
    },
    {
      label: 'Government',
      href: '/industries/government',
      description: 'Citizen engagement and notices',
    },
    {
      label: 'Utilities',
      href: '/industries/utilities',
      description: 'Billing and service communications',
    },
    {
      label: 'Retail',
      href: '/industries/retail',
      description: 'Customer communications at scale',
    },
  ],

  solutions: [
    {
      label: 'Clever Correspondence',
      href: '/solutions/correspondence',
      description: 'Intelligent correspondence management',
    },
    {
      label: 'Smart Agreements',
      href: '/solutions/agreements',
      description: 'Digital contract management',
    },
    {
      label: 'Dynamic Letters',
      href: '/solutions/letters',
      description: 'Personalized letter generation',
    },
    {
      label: 'Delivery Hub',
      href: '/solutions/delivery',
      description: 'Multi-channel delivery platform',
    },
    {
      label: 'SMS Gateway',
      href: '/solutions/sms',
      description: 'SMS communications at scale',
    },
    {
      label: 'Cloud Platform',
      href: '/solutions/cloud',
      description: 'Secure cloud infrastructure',
    },
  ],

  features: [
    {
      label: 'AI-Powered Templates',
      href: '/features/ai-templates',
      description: 'Intelligent document templates',
    },
    {
      label: 'Digital Signatures',
      href: '/features/signatures',
      description: 'eSignature integration',
    },
    {
      label: 'Workflow Automation',
      href: '/features/workflow',
      description: 'Streamline your processes',
    },
    {
      label: 'Compliance Management',
      href: '/features/compliance',
      description: 'Meet regulatory requirements',
    },
  ],

  company: [
    {
      label: 'About Us',
      href: '/about',
      description: 'Learn about Airdocs Global',
    },
    {
      label: 'Careers',
      href: '/careers',
      description: 'Join our team',
    },
    {
      label: 'Contact',
      href: '/contact',
      description: 'Get in touch with us',
    },
    {
      label: 'Blog',
      href: '/blog',
      description: 'Latest news and insights',
    },
  ],

  resources: [
    {
      label: 'Documentation',
      href: '/docs',
      description: 'Technical documentation',
    },
    {
      label: 'API Reference',
      href: '/api',
      description: 'API documentation',
    },
    {
      label: 'Case Studies',
      href: '/case-studies',
      description: 'Customer success stories',
    },
    {
      label: 'Support',
      href: '/support',
      description: 'Get help and support',
    },
  ],
};

export const mainNavigation: NavigationItem[] = [
  {
    label: 'Platform',
    href: '/platform',
    children: navigationData.platform,
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: navigationData.solutions,
  },
  {
    label: 'Industries',
    href: '/industries',
    children: navigationData.industries,
  },
  {
    label: 'Resources',
    href: '/resources',
    children: navigationData.resources,
  },
  {
    label: 'Company',
    href: '/company',
    children: navigationData.company,
  },
];

export const footerNavigation = {
  solutions: navigationData.solutions.slice(0, 4),
  company: navigationData.company,
  resources: navigationData.resources,
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'GDPR Compliance', href: '/gdpr' },
  ],
};
