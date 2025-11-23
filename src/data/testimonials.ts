import { getAssetPath } from '@/lib/constants';

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  logo?: string;
  rating?: number;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Airdocs has transformed how we communicate with our customers. The automation and personalization capabilities have reduced our processing time by 70% while improving customer satisfaction.",
    author: 'Kit Tong',
    role: 'Marketing Technology Manager',
    company: 'Generation',
    image: getAssetPath('/images/testimonials/kit-tong.png'),
    logo: getAssetPath('/images/clients/generation.png'),
    rating: 5,
    featured: true,
  },
  {
    id: 2,
    quote:
      "The platform's reliability and scalability have been crucial for our growth. We now process over 100,000 communications daily without any issues.",
    author: 'Sarah Williams',
    role: 'Head of Operations',
    company: 'NextSense',
    image: getAssetPath('/images/testimonials/sarah-williams.png'),
    logo: getAssetPath('/images/clients/nextsense.png'),
    rating: 5,
    featured: true,
  },
  {
    id: 3,
    quote:
      "Airdocs' multi-channel delivery capabilities have allowed us to reach our members through their preferred channels, significantly improving engagement rates.",
    author: 'Michael Chen',
    role: 'IT Director',
    company: 'Nambawan Super',
    image: getAssetPath('/images/testimonials/michael-chen.png'),
    logo: getAssetPath('/images/clients/nambawan.png'),
    rating: 5,
    featured: true,
  },
  {
    id: 4,
    quote:
      "The integration with DocuSign has streamlined our agreement process. We're now closing deals 50% faster with complete audit trails.",
    author: 'Jessica Martinez',
    role: 'VP of Sales',
    company: 'Financial Solutions Corp',
    rating: 5,
  },
  {
    id: 5,
    quote:
      "Compliance and security were our top concerns, and Airdocs exceeded our expectations. The platform's SOC 2 certification and robust security features gave us complete confidence.",
    author: 'David Thompson',
    role: 'Chief Information Security Officer',
    company: 'Healthcare Alliance',
    rating: 5,
  },
  {
    id: 6,
    quote:
      "The ROI has been remarkable. We've reduced operational costs by 40% while significantly improving the quality and consistency of our customer communications.",
    author: 'Amanda Rodriguez',
    role: 'CFO',
    company: 'Utility Services Inc',
    rating: 5,
  },
  {
    id: 7,
    quote:
      "What impressed us most was the ease of implementation and the exceptional support team. We were up and running in just weeks.",
    author: 'Robert Chang',
    role: 'Director of Customer Experience',
    company: 'Retail Group',
    rating: 5,
  },
  {
    id: 8,
    quote:
      "The analytics and reporting capabilities provide valuable insights into our communication effectiveness. We can now make data-driven decisions to improve customer engagement.",
    author: 'Emily Parker',
    role: 'Marketing Director',
    company: 'Insurance Partners',
    rating: 5,
  },
];

export const getFeaturedTestimonials = (): Testimonial[] => {
  return testimonials.filter((testimonial) => testimonial.featured);
};

export const getTestimonialById = (id: number): Testimonial | undefined => {
  return testimonials.find((testimonial) => testimonial.id === id);
};

export const getTestimonialsByCompany = (company: string): Testimonial[] => {
  return testimonials.filter((testimonial) => testimonial.company === company);
};
