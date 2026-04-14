"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import cv from "@/content/cv.json";

const eduLogoMap: Record<string, string | null> = {
  "Kenyatta University": "/images/logos/kenyatta_university_logo.jfif",
  "Strathmore University": "/images/logos/strathmore_university_logo.jfif",
  "United States International University \u2013 Africa": "/images/logos/usiu_logo.png",
  "United States International University - Africa": "/images/logos/usiu_logo.png",
};

export default function EducationSection() {
  const calculateInitials = (name: string) => {
    const words = name.split(" ").filter((w) => w !== "-" && w !== "\u2013" && w.length > 1);
    if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <section className="bg-white w-full py-14 px-5 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-px bg-gold-500" />
            <span className="text-gold-600 uppercase tracking-[0.18em] text-[11px] font-semibold font-body">
              Academic Background
            </span>
          </div>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-navy-900">
            Education
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cv.education.map((edu, i) => {
            const logoSrc = eduLogoMap[edu.institution];
            const isOngoing = edu.status === "Ongoing";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-navy-50/60 rounded-xl border border-navy-100 p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow duration-300"
              >
                {/* Logo */}
                <div className="mb-5 h-11 flex items-center">
                  {logoSrc ? (
                    <Image
                      src={logoSrc}
                      alt={edu.institution}
                      width={90}
                      height={44}
                      className="object-contain h-full w-auto"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-navy-900 flex items-center justify-center">
                      <span className="text-gold-400 text-sm font-bold font-body">
                        {calculateInitials(edu.institution)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex-grow">
                  <h3 className="font-display font-bold text-navy-900 text-lg leading-snug mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-navy-700/70 font-body text-sm mb-3">{edu.field}</p>
                  <p className="text-gold-600 font-semibold font-body text-xs">{edu.institution}</p>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-navy-100">
                  <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider font-body">
                    {edu.year ? edu.year : isOngoing ? "Present" : ""}
                  </span>
                  {isOngoing && (
                    <span className="px-2.5 py-0.5 bg-gold-50 text-gold-700 text-[10px] font-bold uppercase tracking-wider rounded-full border border-gold-200 font-body">
                      In Progress
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
