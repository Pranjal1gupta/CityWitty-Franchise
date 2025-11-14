import type { Metadata } from 'next';
import { AnimatedHero } from "@/components/AnimatedHero";
import { AnimatedFeatures } from "@/components/AnimatedFeatures";
import { AnimatedTestimonials } from "@/components/AnimatedTestimonials";

export const metadata: Metadata = {
  title: 'CityWitty Franchise | Business Franchise Opportunity Across India',
  description: 'Start your own profitable business with CityWitty’s FOCO franchise model. Available across all major cities in India with full operational support, low investment, and high returns.',
  keywords: 'business franchise, franchise opportunity India, FOCO model, business opportunity, India franchise, low investment franchise, profitable franchise India',
  openGraph: {
    title: 'CityWitty Franchise - Start Your Business From Anywhere in India',
    description: 'Join India’s fast-growing FOCO franchise network. Operate in any city across India with a proven business model trusted by entrepreneurs nationwide.',
    type: 'website',
    url: 'https://franchise.citywitty.com/',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://franchise.citywitty.com/',
  },
};


export default function Home() {
  return (
    <div className="pt-16">
      <AnimatedHero />
      <AnimatedFeatures />
      <AnimatedTestimonials />
    </div>
  );
}
