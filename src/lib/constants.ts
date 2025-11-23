/**
 * Application-wide constants
 */

// Site Information
export const SITE_NAME = 'Airdocs Global';
export const SITE_DESCRIPTION =
  'Transform your customer communications with intelligent CCM solutions. Streamline document generation, delivery, and management at scale.';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://airdocs.io';
export const SITE_DOMAIN = 'airdocs.io';

// Contact Information
export const CONTACT_EMAIL = 'contact@airdocs.io';
export const SALES_EMAIL = 'sales@airdocs.io';
export const SUPPORT_EMAIL = 'support@airdocs.io';
export const PHONE_NUMBER = '+1 (555) 123-4567';
export const PHONE_DISPLAY = '1-555-123-4567';

// Social Media Links
export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/airdocs',
  twitter: 'https://twitter.com/airdocs',
  facebook: 'https://www.facebook.com/airdocs',
  youtube: 'https://www.youtube.com/@airdocs',
  github: 'https://github.com/airdocs',
} as const;

// Office Locations
export const OFFICES = [
  {
    name: 'Sydney',
    address: '123 George Street, Sydney NSW 2000, Australia',
    phone: '+61 2 9876 5432',
    email: 'sydney@airdocs.io',
  },
  {
    name: 'Melbourne',
    address: '456 Collins Street, Melbourne VIC 3000, Australia',
    phone: '+61 3 9876 5432',
    email: 'melbourne@airdocs.io',
  },
  {
    name: 'Singapore',
    address: '1 Raffles Place, Singapore 048616',
    phone: '+65 6789 1234',
    email: 'singapore@airdocs.io',
  },
] as const;

// Company Stats
export const STATS = {
  clientsServed: '500+',
  documentsProcessed: '100M+',
  uptime: '99.99%',
  countries: '25+',
  yearsInBusiness: 15,
  teamSize: '200+',
  satisfactionRate: '98%',
} as const;

// Feature Highlights
export const KEY_FEATURES = [
  'AI-Powered Document Generation',
  'Multi-Channel Delivery',
  'Enterprise-Grade Security',
  'Seamless Integrations',
  'Real-time Analytics',
  'Global Scalability',
] as const;

// Value Propositions
export const VALUE_PROPS = {
  revenue: {
    title: 'Faster Revenue Growth',
    percentage: '35%',
    description: 'Accelerate revenue cycles with automated communications',
  },
  costs: {
    title: 'Saved Labour Costs',
    percentage: '70%',
    description: 'Reduce manual work through intelligent automation',
  },
  retention: {
    title: 'Better Customer Retention',
    percentage: '25%',
    description: 'Improve retention with timely, personalized communications',
  },
} as const;

// Industry Focus
export const INDUSTRIES = [
  'Financial Services',
  'Healthcare',
  'Government',
  'Utilities',
  'Retail',
  'Insurance',
  'Telecommunications',
  'Education',
] as const;

// Compliance & Certifications
export const CERTIFICATIONS = [
  'SOC 2 Type II',
  'ISO 27001',
  'GDPR Compliant',
  'HIPAA Compliant',
  'PCI DSS',
  'WCAG 2.1 AA',
] as const;

// API Endpoints (relative paths)
export const API_ENDPOINTS = {
  contact: '/api/contact',
  trial: '/api/trial',
  newsletter: '/api/newsletter',
  feedback: '/api/feedback',
} as const;

// Form Limits
export const FORM_LIMITS = {
  nameMin: 2,
  nameMax: 100,
  emailMax: 255,
  phoneMin: 8,
  phoneMax: 20,
  messageMin: 10,
  messageMax: 1000,
  companyMax: 200,
} as const;

// Animation Durations (in milliseconds)
export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
} as const;

// Breakpoints (matches Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Z-Index Layers
export const Z_INDEX = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
  notification: 1700,
} as const;

// Aspire Rating
export const ASPIRE_RATING = {
  score: 9,
  maxScore: 10,
  category: 'CCM Software',
  year: 2024,
} as const;

// Default Meta Tags
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-image.png`;
export const TWITTER_HANDLE = '@airdocs';

// External Links
export const EXTERNAL_LINKS = {
  documentation: 'https://docs.airdocs.io',
  apiReference: 'https://api.airdocs.io/docs',
  statusPage: 'https://status.airdocs.io',
  blog: 'https://blog.airdocs.io',
  support: 'https://support.airdocs.io',
} as const;

// Newsletter
export const NEWSLETTER = {
  description: 'Stay updated with the latest news, insights, and product updates.',
  frequency: 'Monthly',
} as const;

// CTA Messages
export const CTA_MESSAGES = {
  primary: 'Book a Trial',
  secondary: 'Explore Solutions',
  contact: 'Contact Sales',
  demo: 'Request a Demo',
  learnMore: 'Learn More',
  getStarted: 'Get Started',
} as const;
