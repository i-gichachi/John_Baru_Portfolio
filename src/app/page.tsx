import type { Metadata } from 'next'
import { meta } from '@/content/meta'
import PageTransition from "@/components/ui/PageTransition";
import Hero from "@/components/home/Hero";
import LogoStrip from "@/components/home/LogoStrip";
import AboutBridge from "@/components/home/AboutBridge";
import CompetencyPillars from "@/components/home/CompetencyPillars";
import FeaturedEngagements from "@/components/home/FeaturedEngagements";
import TestimonialsPlaceholder from "@/components/home/TestimonialsPlaceholder";
import AdvisoryPreview from "@/components/home/AdvisoryPreview";
import FooterCTA from "@/components/home/FooterCTA";

export const metadata: Metadata = {
  title: meta.pages.home.title,
  description: meta.pages.home.description,
  keywords: meta.pages.home.keywords,
  metadataBase: new URL(meta.siteUrl),
  alternates: {
    canonical: meta.pages.home.path,
  },
  openGraph: {
    title: meta.pages.home.title,
    description: meta.pages.home.description,
    url: meta.siteUrl + meta.pages.home.path,
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
    title: meta.pages.home.title,
    description: meta.pages.home.description,
    images: ['/images/john-baru.jpg'],
  },
}

export default function Home() {
  return (
    <PageTransition>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "John Wachania Baru",
            "jobTitle": "Global Finance & Operations Executive",
            "description": "Senior Finance and Operations Executive with 25+ years directing $150M+ in global health portfolios.",
            "url": "https://johnbaru.com",
            "email": "johnbaru2002@gmail.com",
            "telephone": "+254726509360",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nairobi",
              "addressCountry": "KE"
            },
            "sameAs": [
              "https://www.linkedin.com/in/baru-john/"
            ],
            "knowsAbout": [
              "Financial Management",
              "Donor Compliance",
              "Grants Management",
              "Global Health Finance",
              "Operations Management",
              "ERP Systems"
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "John Baru Advisory",
            "description": "Fractional CFO advisory and financial consulting for NGOs and donor-funded organisations.",
            "url": "https://johnbaru.com/advisory",
            "founder": {
              "@type": "Person",
              "name": "John Wachania Baru"
            },
            "areaServed": "Worldwide",
            "serviceType": [
              "Fractional CFO Advisory",
              "Donor Compliance Advisory",
              "NGO Finance Systems Setup"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nairobi",
              "addressCountry": "KE"
            }
          })
        }}
      />
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
