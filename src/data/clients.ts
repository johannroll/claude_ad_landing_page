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
    logo: '/images/clients/generation.png',
    alt: 'Generation logo',
    industry: 'Financial Services',
    featured: true,
    website: 'https://generation.com.au',
  },
  {
    name: 'NextSense',
    logo: '/images/clients/nextsense.png',
    alt: 'NextSense logo',
    industry: 'Healthcare',
    featured: true,
    website: 'https://nextsense.org.au',
  },
  {
    name: 'Nambawan Super',
    logo: '/images/clients/nambawan.png',
    alt: 'Nambawan Super logo',
    industry: 'Financial Services',
    featured: true,
    website: 'https://nambawansuper.com.pg',
  },
  {
    name: 'Australian Unity',
    logo: '/images/clients/australian-unity.png',
    alt: 'Australian Unity logo',
    industry: 'Healthcare',
    featured: true,
  },
  {
    name: 'Energy Australia',
    logo: '/images/clients/energy-australia.png',
    alt: 'Energy Australia logo',
    industry: 'Utilities',
    featured: true,
  },
  {
    name: 'Vicinity Centres',
    logo: '/images/clients/vicinity.png',
    alt: 'Vicinity Centres logo',
    industry: 'Retail',
    featured: true,
  },
  {
    name: 'RAMS',
    logo: '/images/clients/rams.png',
    alt: 'RAMS logo',
    industry: 'Financial Services',
  },
  {
    name: 'CommBank',
    logo: '/images/clients/commbank.png',
    alt: 'Commonwealth Bank logo',
    industry: 'Financial Services',
  },
  {
    name: 'QBE',
    logo: '/images/clients/qbe.png',
    alt: 'QBE Insurance logo',
    industry: 'Insurance',
  },
  {
    name: 'Medibank',
    logo: '/images/clients/medibank.png',
    alt: 'Medibank logo',
    industry: 'Healthcare',
  },
  {
    name: 'Origin Energy',
    logo: '/images/clients/origin.png',
    alt: 'Origin Energy logo',
    industry: 'Utilities',
  },
  {
    name: 'AGL',
    logo: '/images/clients/agl.png',
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
