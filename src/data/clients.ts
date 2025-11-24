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
    logo: getAssetPath('/images/clients/generation.svg'),
    alt: 'Generation logo',
    industry: 'Financial Services',
    featured: true,
    website: 'https://generation.com.au',
  },
  {
    name: 'NextSense',
    logo: getAssetPath('/images/clients/nextsense.svg'),
    alt: 'NextSense logo',
    industry: 'Healthcare',
    featured: true,
    website: 'https://nextsense.org.au',
  },
  {
    name: 'Nambawan Super',
    logo: getAssetPath('/images/clients/nambawan.svg'),
    alt: 'Nambawan Super logo',
    industry: 'Financial Services',
    featured: true,
    website: 'https://nambawansuper.com.pg',
  },
  {
    name: 'Australian Unity',
    logo: getAssetPath('/images/clients/australian-unity.svg'),
    alt: 'Australian Unity logo',
    industry: 'Healthcare',
    featured: true,
  },
  {
    name: 'Energy Australia',
    logo: getAssetPath('/images/clients/energy-australia.svg'),
    alt: 'Energy Australia logo',
    industry: 'Utilities',
    featured: true,
  },
  {
    name: 'Vicinity Centres',
    logo: getAssetPath('/images/clients/vicinity.svg'),
    alt: 'Vicinity Centres logo',
    industry: 'Retail',
    featured: true,
  },
  {
    name: 'RAMS',
    logo: getAssetPath('/images/clients/rams.svg'),
    alt: 'RAMS logo',
    industry: 'Financial Services',
  },
  {
    name: 'CommBank',
    logo: getAssetPath('/images/clients/commbank.svg'),
    alt: 'Commonwealth Bank logo',
    industry: 'Financial Services',
  },
  {
    name: 'QBE',
    logo: getAssetPath('/images/clients/qbe.svg'),
    alt: 'QBE Insurance logo',
    industry: 'Insurance',
  },
  {
    name: 'Medibank',
    logo: getAssetPath('/images/clients/medibank.svg'),
    alt: 'Medibank logo',
    industry: 'Healthcare',
  },
  {
    name: 'Origin Energy',
    logo: getAssetPath('/images/clients/origin.svg'),
    alt: 'Origin Energy logo',
    industry: 'Utilities',
  },
  {
    name: 'AGL',
    logo: getAssetPath('/images/clients/agl.svg'),
    alt: 'AGL Energy logo',
    industry: 'Utilities',
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
