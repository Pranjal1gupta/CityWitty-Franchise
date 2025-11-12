import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FOCO Franchise Model | Franchise Owned, Company Operated Business',
  description: 'Understand the FOCO business model by CityWitty. Franchise Owned, Company Operated - invest capital, we manage operations. Proven model across 50+ Indian cities.',
  keywords: 'FOCO model, franchise model, passive income, franchise business, business model',
  openGraph: {
    title: 'FOCO Franchise Model - Passive Income Opportunity',
    description: 'Learn how FOCO works: You invest, we operate, you earn. Perfect balance for busy entrepreneurs.',
    type: 'website',
    url: 'https://franchise.citywitty.com/model',
  },
  alternates: {
    canonical: 'https://franchise.citywitty.com/model',
  },
};

export default function ModelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
