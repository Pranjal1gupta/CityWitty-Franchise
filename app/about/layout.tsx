import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About CityWitty | India\'s Leading business Franchise Platform',
  description: 'Learn about CityWitty\'s mission, vision, and values. India\'s trusted franchise platform empowering entrepreneurs across 50+ cities with proven FOCO business model.',
  openGraph: {
    title: 'About CityWitty - Franchise Leadership',
    description: 'Discover our mission to empower entrepreneurs and our proven track record in franchise excellence.',
    type: 'website',
    url: 'https://franchise.citywitty.com/about',
  },
  alternates: {
    canonical: 'https://franchise.citywitty.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
