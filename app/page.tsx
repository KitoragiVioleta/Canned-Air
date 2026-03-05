import { HeroSection } from "@/components/hero-section";
import { TrustBadges } from "@/components/trust-badges";
import { FeaturedCollection } from "@/components/featured-collection";
import { HowItWorks } from "@/components/how-it-works";
import { WhyAirSection } from "@/components/why-air-section";
import { ReviewsSection } from "@/components/reviews-section";
import { FaqSection } from "@/components/faq-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <FeaturedCollection />
      <HowItWorks />
      <WhyAirSection />
      <ReviewsSection />
      <FaqSection />
    </>
  );
}
