import type { Metadata } from 'next';
import { AnimatedHero } from "@/components/AnimatedHero";
import { AnimatedFeatures } from "@/components/AnimatedFeatures";
import { AnimatedTestimonials } from "@/components/AnimatedTestimonials";

export const metadata: Metadata = {
  title: 'CityWitty Franchise | Business Franchise Opportunity in Greater Noida',
  description: 'Join India\'s leading franchise with FOCO model. Start your profitable business in Greater Noida with complete support. Low investment, high returns. Apply now for exclusive territory rights.',
  keywords: 'business franchise, franchise opportunity, business opportunity, FOCO model, Greater Noida franchise, India franchise',
  openGraph: {
    title: 'CityWitty Franchise - Start Your Business',
    description: 'Proven business franchise model with 50+ cities. Join successful entrepreneurs earning consistent returns with CityWitty FOCO franchise.',
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
