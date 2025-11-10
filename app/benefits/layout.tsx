import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Franchise Benefits | CityWitty FOCO Model Advantages',
  description: 'Discover franchise benefits with CityWitty: managed operations, strong ROI, exclusive territory, brand power, continuous support, and growth opportunities.',
  keywords: 'franchise benefits, business benefits, ROI, passive income, franchise advantages, business ownership',
  openGraph: {
    title: 'Why Choose CityWitty Franchise?',
    description: 'Explore 9 key benefits of CityWitty FOCO franchise model for entrepreneurs in India.',
    type: 'website',
    url: 'https://franchise.citywitty.com/benefits',
  },
  alternates: {
    canonical: 'https://franchise.citywitty.com/benefits',
  },
};

export default function BenefitsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
