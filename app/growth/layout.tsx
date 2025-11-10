import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Growth Opportunities | Expand Your CityWitty Franchise',
  description: 'Unlock growth potential with CityWitty franchise. Scale from single territory to multi-unit ownership, increase revenue, and build your franchise empire.',
  keywords: 'franchise growth, business expansion, multi-unit franchise, scaling business, franchise opportunities',
  openGraph: {
    title: 'Grow Your CityWitty Franchise Business',
    description: 'Discover unlimited growth potential and scaling opportunities with CityWitty FOCO model.',
    type: 'website',
    url: 'https://franchise.citywitty.com/growth',
  },
  alternates: {
    canonical: 'https://franchise.citywitty.com/growth',
  },
};

export default function GrowthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
