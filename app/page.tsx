import { AnimatedHero } from "@/components/AnimatedHero";
import { AnimatedFeatures } from "@/components/AnimatedFeatures";
import { AnimatedTestimonials } from "@/components/AnimatedTestimonials";

export default function Home() {
  return (
    <div className="pt-16">
      <AnimatedHero />
      <AnimatedFeatures />
      <AnimatedTestimonials />
    </div>
  );
}
