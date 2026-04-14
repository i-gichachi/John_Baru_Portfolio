"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import cv from "@/content/cv.json";

type WorkExperience = {
  company: string;
  shortName: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  keyMetric: string;
  achievements: string[];
};

const logoMap: Record<string, string | null> = {
  "Elizabeth Glaser Pediatric AIDS Foundation":
    "/images/logos/elizabeth_glaser_pediatric_aids_foundation_logo.jfif",
  "Centres for Disease Control and Prevention":
    "/images/logos/centers_for_disease_control_and_prevention_logo.jfif",
  "Centers for Disease Control and Prevention":
    "/images/logos/centers_for_disease_control_and_prevention_logo.jfif",
  "Kenya Medical Research Institute": "/images/logos/Kemri_logo.jfif",
  "USAID": "/images/logos/Usaid_logo.png",
  "The Global Fund": "/images/logos/global_fund_logo.jfif",
  "Unga Feeds Limited": "/images/logos/unga_group_ltd_logo.jfif",
};

function getInitials(name: string) {
  const words = name.split(" ").filter((w) => w.length > 2);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

function TimelineDot({ index }: { index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="relative flex-shrink-0 flex flex-col items-center pt-5">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.08 + 0.15, type: "spring", stiffness: 220 }}
        className="w-3.5 h-3.5 rounded-full bg-white border-[2.5px] border-gold-500 shadow z-10 relative"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0.6 }}
          animate={inView ? { scale: 2.5, opacity: 0 } : {}}
          transition={{ duration: 0.9, delay: index * 0.08 + 0.4 }}
          className="absolute inset-0 rounded-full bg-gold-400"
        />
      </motion.div>
    </div>
  );
}

function ExperienceCard({ role, index }: { role: WorkExperience; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const logoSrc = logoMap[role.company];
  const hasMore = role.achievements.length > 3;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      className="flex-1 min-w-0 pb-2"
    >
      <motion.div
        whileHover={{ y: -2, boxShadow: "0 12px 36px rgba(10,17,40,0.09)" }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-xl border border-navy-100 shadow-sm overflow-hidden"
      >
        {/* Gold top accent */}
        <div className="h-0.5 w-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300" />

        <div className="p-5 md:p-6">
          {/* Header row */}
          <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
            {/* Compact logo area — same design as certifications */}
            <div className="flex-shrink-0 bg-navy-50 rounded-md p-1 border border-navy-100">
              {logoSrc ? (
                <Image
                  src={logoSrc}
                  alt={role.company}
                  width={40}
                  height={40}
                  className="object-contain h-10 w-10 rounded-sm"
                  sizes="40px"
                />
              ) : (
                <div className="h-10 w-10 rounded-sm bg-navy-900 flex items-center justify-center">
                  <span className="text-gold-400 text-[10px] font-bold font-body leading-none">
                    {getInitials(role.company)}
                  </span>
                </div>
              )}
            </div>

            {/* Date badge */}
            <span className="inline-flex items-center gap-1.5 bg-navy-900 text-white text-[11px] font-semibold font-body px-2.5 py-1 rounded-full whitespace-nowrap">
              <span className="w-1 h-1 rounded-full bg-gold-400 inline-block" />
              {role.startDate} &ndash; {role.endDate}
            </span>
          </div>

          {/* Role info */}
          <h3 className="font-display font-bold text-navy-900 text-lg leading-snug">
            {role.company}
          </h3>
          <p className="text-gold-600 font-semibold font-body mt-0.5 text-sm">
            {role.title}
          </p>
          <p className="text-slate-400 text-[11px] font-body uppercase tracking-wider mt-1">
            {role.location}
          </p>

          {/* Key metric chip */}
          <div className="mt-3 inline-block bg-gold-50 border border-gold-200 text-gold-700 text-[11px] font-semibold font-body px-2.5 py-0.5 rounded-full">
            {role.keyMetric}
          </div>

          {/* Responsibilities */}
          <div className="mt-4 pt-4 border-t border-navy-50">
            <p className="text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase mb-3 font-body">
              Key Responsibilities
            </p>
            <ul className="space-y-2.5">
              {role.achievements.slice(0, 3).map((ach, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-sm bg-gold-500 mt-[6px] flex-shrink-0" />
                  <span className="font-body text-sm leading-relaxed">{ach}</span>
                </li>
              ))}
            </ul>

            {hasMore && (
              <>
                <AnimatePresence>
                  {expanded && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32 }}
                      className="overflow-hidden space-y-2.5 mt-2.5"
                    >
                      {role.achievements.slice(3).map((ach, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-2.5 text-slate-700"
                        >
                          <span className="w-1.5 h-1.5 rounded-sm bg-gold-400 mt-[6px] flex-shrink-0" />
                          <span className="font-body text-sm leading-relaxed">{ach}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setExpanded((p) => !p)}
                  className="mt-4 text-gold-600 hover:text-gold-700 text-xs font-semibold font-body flex items-center gap-1.5 hover:underline transition-colors focus:outline-none"
                >
                  {expanded
                    ? "Show less"
                    : `+ See all ${role.achievements.length - 3} responsibilities`}
                </button>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ExperienceTimeline() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="bg-navy-50 w-full py-14 px-5 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <div ref={headerRef} className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-3 mb-3"
          >
            <span className="w-7 h-px bg-gold-500" />
            <span className="text-gold-600 uppercase tracking-[0.18em] text-[11px] font-semibold font-body">
              Career Path
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="font-display font-bold text-2xl md:text-3xl text-navy-900"
          >
            Professional Experience
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[6px] top-2 bottom-0 w-px bg-gradient-to-b from-gold-400/70 via-gold-300/30 to-transparent" />

          <div className="flex flex-col gap-6">
            {(cv.workExperience as WorkExperience[]).map((role, i) => (
              <div key={`${role.company}-${i}`} className="flex items-start gap-5 md:gap-6">
                <TimelineDot index={i} />
                <ExperienceCard role={role} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
