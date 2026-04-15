"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { caseStudies } from "@/content/caseStudies";

const logoMap: Record<string, string | null> = {
  "Elizabeth Glaser Pediatric AIDS Foundation": "/images/logos/elizabeth_glaser_pediatric_aids_foundation_logo.jpg",
  "EGPAF": "/images/logos/elizabeth_glaser_pediatric_aids_foundation_logo.jpg",
  "Centres for Disease Control and Prevention": "/images/logos/centers_for_disease_control_and_prevention_logo.jpg",
  "CDC": "/images/logos/centers_for_disease_control_and_prevention_logo.jpg",
  "Kenya Medical Research Institute": "/images/logos/Kemri_logo.jpg",
  "KEMRI": "/images/logos/Kemri_logo.jpg",
  "USAID": "/images/logos/Usaid_logo.png",
  "The Global Fund": "/images/logos/global_fund_logo.jpg",
  "Unga Feeds Limited": "/images/logos/unga_group_ltd_logo.jpg",
  "Unga Group Ltd": "/images/logos/unga_group_ltd_logo.jpg",
};

function getInitials(name: string) {
  if (!name) return "JB";
  const words = name.split(" ").filter((w) => w.length > 2);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

function CaseStudyCard({ 
  study, 
  index, 
  isAutoOpenRequested 
}: { 
  study: any; 
  index: number;
  isAutoOpenRequested: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Try to find logo by clientShortName or try to deduce from title if needed
  const orgName = study.clientShortName || study.clientName || ""; 
  const logoSrc = logoMap[orgName];
  const initials = getInitials(orgName || study.category);

  // Handle auto-open with 15s delay
  useEffect(() => {
    if (isAutoOpenRequested) {
      // 1. Scroll into view immediately after a tiny delay for page load
      const scrollTimeout = setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 500);

      // 2. Open automatically after 3 seconds
      const openTimeout = setTimeout(() => {
        setIsOpen(true);
      }, 3000);

      return () => {
        clearTimeout(scrollTimeout);
        clearTimeout(openTimeout);
      };
    }
  }, [isAutoOpenRequested]);

  return (
    <motion.div
      ref={cardRef}
      id={`case-${study.id}`}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 32 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm overflow-hidden scroll-mt-24"
    >
      {/* TOP ACCENT BAR */}
      <div className="h-1.5 w-full bg-gradient-to-r from-violet-600 to-violet-400" />

      {/* CARD HEADER */}
      <div className="p-6 md:p-10 pb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-6 md:mb-8">
          <div className="flex-1">
            <div className="text-[10px] md:text-xs text-violet-600 font-bold uppercase tracking-[0.15em] mb-2 opacity-80">
              {study.category}
            </div>
            <h3 className="font-display text-xl md:text-3xl font-bold text-[#0B1628] leading-tight">
              {study.title}
            </h3>
          </div>
          <div className="flex-shrink-0">
            {logoSrc ? (
              <div className="relative w-[100px] md:w-[120px] h-[40px] md:h-[48px]">
                <Image
                  src={logoSrc}
                  alt={orgName || "Organization Logo"}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="w-12 h-12 rounded-xl bg-[#0B1628] flex items-center justify-center text-violet-400 font-bold text-sm border border-violet-500/20 shadow-md">
                {initials}
              </div>
            )}
          </div>
        </div>

        {/* METRIC HIGHLIGHT - REFINED NAVY THEME */}
        <div className="mb-6 md:mb-8 bg-[#0B1628] border border-violet-500/20 rounded-xl md:rounded-2xl p-4 md:p-6 flex items-center gap-4 md:gap-5 shadow-lg shadow-violet-900/5">
          <div className="font-display text-3xl md:text-4xl font-bold text-violet-400 whitespace-nowrap">
            {study.dominantMetric}
          </div>
          <div className="w-px h-8 md:h-10 bg-violet-500/30" />
          <div className="text-[10px] md:text-xs text-slate-300 font-semibold uppercase tracking-widest leading-normal">
            {study.metricLabel}
          </div>
        </div>

        {/* EXECUTIVE SUMMARY */}
        <div className="mb-6 md:mb-8">
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#0B1628]/60 mb-2.5">
            Executive Summary
          </div>
          <p className="text-slate-800 leading-relaxed text-sm md:text-base font-medium">
            {study.executiveSummary}
          </p>
        </div>

        {/* ACCORDION TOGGLE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-violet-600 font-bold text-[13px] hover:text-violet-800 transition-colors cursor-pointer w-full justify-between px-0 py-3 border-t border-slate-100 outline-none group"
        >
          <span className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-200">
            {isOpen ? "Collapse Case Study" : "Explore Full Methodology"}
          </span>
          <ChevronDown
            className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* EXPANDED CONTENT */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-50"
          >
            <div className="px-6 md:px-10 pb-8 md:pb-10 pt-4 md:pt-6 bg-slate-50/30">
              <div className="grid grid-cols-1 gap-6 md:gap-8">
                {/* 1. CONTEXT */}
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#0B1628]/60 mb-2">
                    Context
                  </div>
                  <p className="text-slate-800 leading-relaxed text-[15px] font-medium">
                    {study.context}
                  </p>
                </div>

                {/* 2. THE CHALLENGE */}
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#0B1628]/60 mb-2">
                    The Challenge
                  </div>
                  <p className="text-slate-800 leading-relaxed text-[15px] font-medium">
                    {study.challenge}
                  </p>
                </div>

                {/* 3. STRATEGIC APPROACH */}
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#0B1628]/60 mb-2">
                    Strategic Approach
                  </div>
                  {Array.isArray(study.strategicApproach) ? (
                    <div className="space-y-3">
                      {study.strategicApproach.map((item: any, idx: number) => (
                        <div key={idx} className="flex gap-3 bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-sm transition-hover hover:border-violet-200">
                          <ChevronRight className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                          <div className="text-slate-800 leading-relaxed text-sm font-medium">
                            {item.phase && <span className="font-bold text-[#0B1628]">{item.phase}: </span>}
                            {item.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-800 leading-relaxed text-[15px] font-medium">
                      {study.strategicApproach}
                    </p>
                  )}
                </div>

                {/* 4. RESULTS (quantifiableOutcomes) */}
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#0B1628]/60 mb-2">
                    Quantifiable Outcomes
                  </div>
                  {Array.isArray(study.quantifiableOutcomes) ? (
                    <div className="space-y-3">
                      {study.quantifiableOutcomes.map((result: string, idx: number) => (
                        <div key={idx} className="flex gap-4 bg-violet-50/40 p-3.5 rounded-xl border border-violet-100 shadow-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0 mt-2" />
                          <div 
                            className="text-slate-800 leading-relaxed text-sm font-medium"
                            dangerouslySetInnerHTML={{ __html: result }}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-800 leading-relaxed text-[15px] font-medium">
                      {study.quantifiableOutcomes}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  {/* 5. CORE COMPETENCIES DEMONSTRATED */}
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#0B1628]/60 mb-3">
                      Core Competencies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {study.coreCompetencies?.map((comp: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-md bg-violet-100/60 text-[#0B1628] text-[11px] font-bold border border-violet-200/50"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 6. TECHNICAL PROFICIENCIES */}
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#0B1628]/60 mb-3">
                      Technical Proficiencies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {study.technicalProficiencies?.map((tech: any, idx: number) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-md border border-slate-200 bg-white text-slate-700 text-[11px] font-bold shadow-sm"
                        >
                          {typeof tech === "string" ? tech : tech.tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 7. TAKEAWAY */}
                {study.keyTakeaway && (
                  <div className="bg-[#0B1628] border-l-4 border-violet-500 rounded-lg md:rounded-xl p-5 md:p-8 mt-4 relative overflow-hidden group shadow-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-violet-500/10 transition-colors" />
                    
                    <div className="text-violet-400 text-[11px] font-bold uppercase tracking-[0.25em] mb-3 relative z-10">
                      Key Takeaway
                    </div>
                    <p className="font-display italic text-white text-base md:text-lg leading-relaxed relative z-10">
                      "{study.keyTakeaway}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CaseStudyList() {
  const searchParams = useSearchParams();
  const caseId = searchParams.get("case");

  return (
    <section id="case-studies" className="bg-slate-50 py-16 md:py-24 px-5 md:px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-10 md:gap-20">
        {caseStudies.map((study, index) => (
          <CaseStudyCard 
            key={study.id || index} 
            study={study} 
            index={index} 
            isAutoOpenRequested={caseId === String(study.id)}
          />
        ))}
      </div>
    </section>
  );
}
