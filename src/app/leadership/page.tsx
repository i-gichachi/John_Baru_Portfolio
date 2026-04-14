import type { Metadata } from "next";
import { meta } from "@/content/meta";
import PageTransition from "@/components/ui/PageTransition";
import LeadershipHero from "@/components/leadership/LeadershipHero";
import ExperienceTimeline from "@/components/leadership/ExperienceTimeline";
import EducationSection from "@/components/leadership/EducationSection";
import CertificationsSection from "@/components/leadership/CertificationsSection";
import LeadershipCTA from "@/components/leadership/LeadershipCTA";

export const metadata: Metadata = {
  title: meta.leadership.title,
  description: meta.leadership.description,
  keywords: meta.leadership.keywords,
  openGraph: {
    title: meta.leadership.title,
    description: meta.leadership.description,
    images: [{ url: meta.leadership.ogImage }],
  },
};

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
