import type { Metadata } from 'next'
import { meta } from '@/content/meta'
import PageTransition from "@/components/ui/PageTransition";
import LeadershipHero from "@/components/leadership/LeadershipHero";
import ExperienceTimeline from "@/components/leadership/ExperienceTimeline";
import EducationSection from "@/components/leadership/EducationSection";
import CertificationsSection from "@/components/leadership/CertificationsSection";
import LeadershipCTA from "@/components/leadership/LeadershipCTA";

export const metadata: Metadata = {
  title: meta.pages.leadership.title,
  description: meta.pages.leadership.description,
  keywords: meta.pages.leadership.keywords,
  metadataBase: new URL(meta.siteUrl),
  alternates: {
    canonical: meta.pages.leadership.path,
  },
  openGraph: {
    title: meta.pages.leadership.title,
    description: meta.pages.leadership.description,
    url: meta.siteUrl + meta.pages.leadership.path,
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
    title: meta.pages.leadership.title,
    description: meta.pages.leadership.description,
    images: ['/images/john-baru.jpg'],
  },
}

export default function Leadership() {
  return (
    <PageTransition>
      <LeadershipHero />
      <ExperienceTimeline />
      <EducationSection />
      <CertificationsSection />
      <LeadershipCTA />
    </PageTransition>
  );
}
