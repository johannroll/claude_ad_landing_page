import { getAssetPath } from '@/lib/constants';

export interface Client {
  name: string;
  logo: string;
  alt: string;
  industry?: string;
  featured?: boolean;
  website?: string;
}

export const clients: Client[] = [
  {
    name: 'Generation',
    logo: getAssetPath('/images/trustedBy/generation-logo.png'),
    alt: 'Generation logo',
    industry: 'Financial Services',
    featured: true,
    website: 'https://generation.com.au',
  },
  {
    name: 'NextSense',
    logo: getAssetPath('/images/trustedBy/next-sense-logo.png'),
    alt: 'NextSense logo',
    industry: 'Healthcare',
    featured: true,
    website: 'https://nextsense.org.au',
  },
  {
    name: 'Nambawan Super',
    logo: getAssetPath('/images/trustedBy/nambawan-super-logo.png'),
    alt: 'Nambawan Super logo',
    industry: 'Financial Services',
    featured: true,
    website: 'https://nambawansuper.com.pg',
  },
  {
    name: 'Care',
    logo: getAssetPath('/images/trustedBy/care-logo.png'),
    alt: 'Care logo',
    industry: 'Healthcare',
    featured: true,
  },
  {
    name: 'BaptistCare',
    logo: getAssetPath('/images/trustedBy/baptistcare.png'),
    alt: 'BaptistCare logo',
    industry: 'Healthcare',
    featured: true,
  },
  {
    name: 'MyHomeCare',
    logo: getAssetPath('/images/trustedBy/myhomecare.png'),
    alt: 'MyHomeCare logo',
    industry: 'Healthcare',
    featured: true,
  },
  {
    name: 'Retire Australia',
    logo: getAssetPath('/images/trustedBy/retireaustralia-logo.png'),
    alt: 'Retire Australia logo',
    industry: 'Healthcare',
    featured: true,
  },
  {
    name: 'Aegon Insights',
    logo: getAssetPath('/images/trustedBy/aegon-insights.png'),
    alt: 'Aegon Insights logo',
    industry: 'Financial Services',
    featured: true,
  },
  {
    name: 'My Life Finance',
    logo: getAssetPath('/images/trustedBy/my-life-finance-logo.png'),
    alt: 'My Life Finance logo',
    industry: 'Financial Services',
    featured: true,
  },
  {
    name: 'The Salvation Army',
    logo: getAssetPath('/images/trustedBy/thesalvationarmy.png'),
    alt: 'The Salvation Army logo',
    industry: 'Non-Profit',
    featured: true,
  },
];

export const getFeaturedClients = (): Client[] => {
  return clients.filter((client) => client.featured);
};

export const getClientsByIndustry = (industry: string): Client[] => {
  return clients.filter((client) => client.industry === industry);
};

export const getClientByName = (name: string): Client | undefined => {
  return clients.find((client) => client.name === name);
};
