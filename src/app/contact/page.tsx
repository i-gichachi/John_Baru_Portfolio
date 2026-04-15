import type { Metadata } from 'next';
import { meta } from '@/content/meta';
import PageTransition from '@/components/ui/PageTransition';
import ContactHero from '@/components/contact/ContactHero';
import ContactSection from '@/components/contact/ContactSection';

export const metadata: Metadata = {
  title: meta.contact.title,
  description: meta.contact.description,
  keywords: meta.contact.keywords,
  openGraph: {
    title: meta.contact.title,
    description: meta.contact.description,
    images: [{ url: meta.contact.ogImage }],
  },
};

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <ContactHero />
        <ContactSection />
      </main>
    </PageTransition>
  );
}
