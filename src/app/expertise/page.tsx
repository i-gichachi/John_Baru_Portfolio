import type { Metadata } from 'next'
import { meta } from '@/content/meta'
import CompetencyPillars from "@/components/expertise/CompetencyPillars";
import ToolsGrid from "@/components/expertise/ToolsGrid";
import PageTransition from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  title: meta.pages.expertise.title,
  description: meta.pages.expertise.description,
  keywords: meta.pages.expertise.keywords,
  metadataBase: new URL(meta.siteUrl),
  alternates: {
    canonical: meta.pages.expertise.path,
  },
  openGraph: {
    title: meta.pages.expertise.title,
    description: meta.pages.expertise.description,
    url: meta.siteUrl + meta.pages.expertise.path,
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
    title: meta.pages.expertise.title,
    description: meta.pages.expertise.description,
    images: ['/images/john-baru.jpg'],
  },
}

export default function ExpertisePage() {
  return (
    <PageTransition>
      <main>
        <CompetencyPillars />
        <ToolsGrid />
      </main>
    </PageTransition>
  );
}
