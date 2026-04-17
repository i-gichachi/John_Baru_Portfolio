import type { Metadata } from 'next'
import { meta } from '@/content/meta'
import { Suspense } from "react";
import PageTransition from "@/components/ui/PageTransition";
import EngagementsHero from "@/components/engagements/EngagementsHero";
import CaseStudyList from "@/components/engagements/CaseStudyList";

export const metadata: Metadata = {
  title: meta.pages.engagements.title,
  description: meta.pages.engagements.description,
  keywords: meta.pages.engagements.keywords,
  metadataBase: new URL(meta.siteUrl),
  alternates: {
    canonical: meta.pages.engagements.path,
  },
  openGraph: {
    title: meta.pages.engagements.title,
    description: meta.pages.engagements.description,
    url: meta.siteUrl + meta.pages.engagements.path,
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
    title: meta.pages.engagements.title,
    description: meta.pages.engagements.description,
    images: ['/images/john-baru.jpg'],
  },
}

export default function EngagementsPage() {
  return (
    <PageTransition>
      <main>
        <EngagementsHero />
        <Suspense fallback={null}>
          <CaseStudyList />
        </Suspense>
      </main>
    </PageTransition>
  );
}
