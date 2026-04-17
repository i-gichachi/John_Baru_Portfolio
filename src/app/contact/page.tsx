import type { Metadata } from 'next'
import { meta } from '@/content/meta'
import { Suspense } from 'react';
import PageTransition from '@/components/ui/PageTransition';
import ContactHero from '@/components/contact/ContactHero';
import ContactSection from '@/components/contact/ContactSection';

export const metadata: Metadata = {
  title: meta.pages.contact.title,
  description: meta.pages.contact.description,
  keywords: meta.pages.contact.keywords,
  metadataBase: new URL(meta.siteUrl),
  alternates: {
    canonical: meta.pages.contact.path,
  },
  openGraph: {
    title: meta.pages.contact.title,
    description: meta.pages.contact.description,
    url: meta.siteUrl + meta.pages.contact.path,
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
    title: meta.pages.contact.title,
    description: meta.pages.contact.description,
    images: ['/images/john-baru.jpg'],
  },
}

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <ContactHero />
        <Suspense fallback={null}>
          <ContactSection />
        </Suspense>
      </main>
    </PageTransition>
  );
}
