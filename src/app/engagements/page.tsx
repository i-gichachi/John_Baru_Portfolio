import type { Metadata } from "next";
import { meta } from "@/content/meta";
import { Suspense } from "react";
import PageTransition from "@/components/ui/PageTransition";
import EngagementsHero from "@/components/engagements/EngagementsHero";
import CaseStudyList from "@/components/engagements/CaseStudyList";

export const metadata: Metadata = {
  title: meta.engagements.title,
  description: meta.engagements.description,
  keywords: meta.engagements.keywords,
  openGraph: {
    title: meta.engagements.title,
    description: meta.engagements.description,
    images: [{ url: meta.engagements.ogImage }],
  },
};

export default function EngagementsPage() {
  return (
    <PageTransition>
      <main>
        <EngagementsHero />
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center text-slate-400">Loading engagements...</div>}>
          <CaseStudyList />
        </Suspense>
      </main>
    </PageTransition>
  );
}
