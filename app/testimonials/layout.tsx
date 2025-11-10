import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Success Stories | CityWitty Franchise Testimonials',
  description: 'Read real testimonials from successful CityWitty franchise owners across India. Discover how entrepreneurs are earning consistent returns with our FOCO model.',
  keywords: 'franchise testimonials, success stories, franchise reviews, customer testimonials, franchise owners',
  openGraph: {
    title: 'CityWitty Franchise Success Stories',
    description: 'Hear from successful franchise partners earning great returns with CityWitty.',
    type: 'website',
    url: 'https://franchise.citywitty.com/testimonials',
  },
  alternates: {
    canonical: 'https://franchise.citywitty.com/testimonials',
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
