import type { Metadata } from "next";
import CompetencyPillars from "@/components/expertise/CompetencyPillars";
import ToolsGrid from "@/components/expertise/ToolsGrid";
import PageTransition from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  title: "Expertise | John Wachania Baru",
  description: "Comprehensive overview of financial leadership, operational transformation, and governance competencies.",
};

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
