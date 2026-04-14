import PageTransition from "@/components/ui/PageTransition";
import Hero from "@/components/home/Hero";
import LogoStrip from "@/components/home/LogoStrip";
import AboutBridge from "@/components/home/AboutBridge";
import CompetencyPillars from "@/components/home/CompetencyPillars";
import FeaturedEngagements from "@/components/home/FeaturedEngagements";
import TestimonialsPlaceholder from "@/components/home/TestimonialsPlaceholder";
import AdvisoryPreview from "@/components/home/AdvisoryPreview";
import FooterCTA from "@/components/home/FooterCTA";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <LogoStrip />
      <AboutBridge />
      <CompetencyPillars />
      <FeaturedEngagements />
      <TestimonialsPlaceholder />
      <AdvisoryPreview />
      <FooterCTA />
    </PageTransition>
  );
}
