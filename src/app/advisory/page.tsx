import type { Metadata } from 'next'
import { meta } from '@/content/meta'
import PageTransition from "@/components/ui/PageTransition";
import AdvisoryHero from "@/components/advisory/AdvisoryHero";
import ServiceCards from "@/components/advisory/ServiceCards";
import TestimonialsStrip from "@/components/advisory/TestimonialsStrip";
import HowItWorks from "@/components/advisory/HowItWorks";
import CredibilityStrip from "@/components/advisory/CredibilityStrip";
import AdvisoryCTA from "@/components/advisory/AdvisoryCTA";

export const metadata: Metadata = {
  title: meta.pages.advisory.title,
  description: meta.pages.advisory.description,
  keywords: meta.pages.advisory.keywords,
  metadataBase: new URL(meta.siteUrl),
  alternates: {
    canonical: meta.pages.advisory.path,
  },
  openGraph: {
    title: meta.pages.advisory.title,
    description: meta.pages.advisory.description,
    url: meta.siteUrl + meta.pages.advisory.path,
    siteName: meta.siteName,
    type: 'website',
    images: [
      {
        url: '/images/john-baru.jpg',
        width: 1200,
        height: 630,
        alt: meta.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.pages.advisory.title,
    description: meta.pages.advisory.description,
    images: ['/images/john-baru.jpg'],
  },
}

export default function AdvisoryPage() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <AdvisoryHero />
        <ServiceCards />
        <TestimonialsStrip />
        <HowItWorks />
        <CredibilityStrip />
        <AdvisoryCTA />
      </main>
    </PageTransition>
  );
}
