import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ConditionalLayout from '@/components/ConditionalLayout';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CityWitty - Franchise Platform | Start Your Own Business',
  description: 'Join India\'s First Multi-City Multi-Brand Discount Card Platform. Empowering entrepreneurs to build a profitable business with the FOCO franchise model.',
  keywords: 'franchise, business opportunity, FOCO model, discount card, India franchise',
  openGraph: {
    title: 'CityWitty - Franchise Platform',
    description: 'Start Your Own Business with CityWitty Franchise',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ConditionalLayout>{children}</ConditionalLayout>
        <Toaster />
      </body>
    </html>
  );
}
