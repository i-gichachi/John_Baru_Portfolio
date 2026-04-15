import type { Metadata } from "next";
import { meta } from "@/content/meta";
import PageTransition from "@/components/ui/PageTransition";
import AdvisoryHero from "@/components/advisory/AdvisoryHero";
import ServiceCards from "@/components/advisory/ServiceCards";
import HowItWorks from "@/components/advisory/HowItWorks";
import CredibilityStrip from "@/components/advisory/CredibilityStrip";
import AdvisoryCTA from "@/components/advisory/AdvisoryCTA";

export const metadata: Metadata = {
  title: meta.advisory.title,
  description: meta.advisory.description,
  keywords: meta.advisory.keywords,
  openGraph: {
    title: meta.advisory.title,
    description: meta.advisory.description,
    images: [{ url: meta.advisory.ogImage }],
  },
};

export default function AdvisoryPage() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <AdvisoryHero />
        <ServiceCards />
        <HowItWorks />
        <CredibilityStrip />
        <AdvisoryCTA />
      </main>
    </PageTransition>
  );
}
