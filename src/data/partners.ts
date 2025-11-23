export interface Partner {
  name: string;
  logo: string;
  alt: string;
  category: 'eSignature' | 'Document' | 'Cloud' | 'Integration' | 'Analytics';
  description?: string;
  website?: string;
  featured?: boolean;
}

export const partners: Partner[] = [
  {
    name: 'DocuSign',
    logo: '/images/partners/docusign.png',
    alt: 'DocuSign logo',
    category: 'eSignature',
    description: 'Leading eSignature and digital transaction management',
    website: 'https://www.docusign.com',
    featured: true,
  },
  {
    name: 'OneSpan',
    logo: '/images/partners/onespan.png',
    alt: 'OneSpan logo',
    category: 'eSignature',
    description: 'Digital identity and eSignature solutions',
    website: 'https://www.onespan.com',
    featured: true,
  },
  {
    name: 'Compart',
    logo: '/images/partners/compart.png',
    alt: 'Compart logo',
    category: 'Document',
    description: 'Enterprise document processing and composition',
    website: 'https://www.compart.com',
    featured: true,
  },
  {
    name: 'Microsoft Azure',
    logo: '/images/partners/azure.png',
    alt: 'Microsoft Azure logo',
    category: 'Cloud',
    description: 'Cloud computing platform and services',
    website: 'https://azure.microsoft.com',
    featured: true,
  },
  {
    name: 'AWS',
    logo: '/images/partners/aws.png',
    alt: 'Amazon Web Services logo',
    category: 'Cloud',
    description: 'Comprehensive cloud computing platform',
    website: 'https://aws.amazon.com',
    featured: true,
  },
  {
    name: 'Salesforce',
    logo: '/images/partners/salesforce.png',
    alt: 'Salesforce logo',
    category: 'Integration',
    description: 'CRM and customer success platform',
    website: 'https://www.salesforce.com',
    featured: true,
  },
  {
    name: 'SAP',
    logo: '/images/partners/sap.png',
    alt: 'SAP logo',
    category: 'Integration',
    description: 'Enterprise resource planning software',
    website: 'https://www.sap.com',
  },
  {
    name: 'Oracle',
    logo: '/images/partners/oracle.png',
    alt: 'Oracle logo',
    category: 'Integration',
    description: 'Database and enterprise software solutions',
    website: 'https://www.oracle.com',
  },
  {
    name: 'Adobe',
    logo: '/images/partners/adobe.png',
    alt: 'Adobe logo',
    category: 'Document',
    description: 'Digital media and document solutions',
    website: 'https://www.adobe.com',
  },
  {
    name: 'Twilio',
    logo: '/images/partners/twilio.png',
    alt: 'Twilio logo',
    category: 'Integration',
    description: 'Cloud communications platform',
    website: 'https://www.twilio.com',
  },
  {
    name: 'Google Cloud',
    logo: '/images/partners/google-cloud.png',
    alt: 'Google Cloud logo',
    category: 'Cloud',
    description: 'Cloud computing services',
    website: 'https://cloud.google.com',
  },
  {
    name: 'Tableau',
    logo: '/images/partners/tableau.png',
    alt: 'Tableau logo',
    category: 'Analytics',
    description: 'Business intelligence and analytics platform',
    website: 'https://www.tableau.com',
  },
];

export const getFeaturedPartners = (): Partner[] => {
  return partners.filter((partner) => partner.featured);
};

export const getPartnersByCategory = (
  category: Partner['category']
): Partner[] => {
  return partners.filter((partner) => partner.category === category);
};

export const getPartnerByName = (name: string): Partner | undefined => {
  return partners.find((partner) => partner.name === name);
};

export const partnerCategories = [
  'eSignature',
  'Document',
  'Cloud',
  'Integration',
  'Analytics',
] as const;
