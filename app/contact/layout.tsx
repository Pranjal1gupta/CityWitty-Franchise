import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact CityWitty | Franchise Enquiry & Support',
  description: 'Contact CityWitty franchise team for business enquiries, support, or to ask questions about franchise opportunities in Greater Noida and across India.',
  keywords: 'contact us, franchise enquiry, business support, Greater Noida contact, CityWitty franchise contact',
  openGraph: {
    title: 'Contact CityWitty Franchise',
    description: 'Get in touch with our franchise team for personalized guidance on starting your business.',
    type: 'website',
    url: 'https://franchise.citywitty.com/contact',
  },
  alternates: {
    canonical: 'https://franchise.citywitty.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
