"use client";

import { motion } from "framer-motion";
import { competencies } from "@/content/competencies";

const pillars = [
  {
    id: "01",
    title: "Financial Leadership",
    subIds: [1, 5, 9],
  },
  {
    id: "02",
    title: "Operational Transformation",
    subIds: [2, 6, 8],
  },
  {
    id: "03",
    title: "Governance & People",
    subIds: [3, 4, 7],
  },
];

const EXECUTIVE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function CompetencyPillars() {
  return (
    <div className="overflow-hidden">
      {/* Pillars Loop */}
      {pillars.map((pillar, pillarIdx) => {
        const isFirst = pillarIdx === 0;
        const isLight = pillar.id === "02";
        const bgClass = isLight ? "bg-navy-50" : "bg-navy-900";
        const titleClass = isLight ? "text-navy-900" : "text-white";
        const numberClass = isLight ? "text-navy-900/40" : "text-gold-500/40";
        const cardBgClass = isLight ? "bg-white" : "bg-navy-700/30";
        const cardBorderClass = isLight ? "border-navy-100/50" : "border-navy-700/80";
        const cardTextClass = isLight ? "text-slate-600" : "text-slate-400";
        const cardTitleClass = isLight ? "text-navy-900 font-bold" : "text-white font-bold";

        return (
          <section key={pillar.id} className={`${bgClass} px-6 ${isFirst ? 'pt-20 md:pt-24 pb-12 md:pb-16' : 'py-12 md:py-16'}`}>
            <div className="max-w-7xl mx-auto">
              {/* Optional Section Intro (Integrated into first pillar section) */}
              {isFirst && (
                <div className="text-center mb-16 md:mb-24">
                  <motion.div
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: EXECUTIVE_EASE }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <span className="w-8 h-px bg-gold-500"></span>
                      <span className="text-gold-500 text-xs font-semibold uppercase tracking-[0.2em] font-body">
                        Expertise & Capabilities
                      </span>
                      <span className="w-8 h-px bg-gold-500"></span>
                    </div>
                    
                    <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                      The Full Expertise <br className="hidden md:block" />
                      <span className="text-gold-500">Picture</span>
                    </h1>
                    
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-body leading-relaxed">
                      Nine specific capabilities, built over 25 years and tested across 
                      institutions managing $150M+ in donor funding.
                    </p>
                  </motion.div>
                </div>
              )}

              {/* Pillar Header Row */}
              <motion.div 
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
                transition={{ duration: 0.8, ease: EXECUTIVE_EASE, delay: 0.2 }}
                viewport={{ once: true }}
                className={`flex items-end gap-4 md:gap-5 mb-8 md:mb-12 pb-6 border-b ${isLight ? 'border-navy-200' : 'border-white/10'}`}
              >
                <span className={`text-6xl md:text-9xl font-black font-display leading-[0.8] select-none ${numberClass}`}>
                  {pillar.id}
                </span>
                <div className="mb-2">
                  <h3 className={`font-display text-2xl md:text-3xl font-bold ${titleClass}`}>
                    {pillar.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-gold-500 mt-2"></div>
                </div>
              </motion.div>

              {/* Sub-competency Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pillar.subIds.map((subId, index) => {
                  const sub = competencies.find((c) => c.id === subId);
                  if (!sub) return null;

                  return (
                    <motion.div
                      key={subId}
                      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                      initial={{ opacity: 0, y: 30, scale: 0.98, filter: "blur(4px)" }}
                      transition={{ 
                        duration: 0.6, 
                        ease: EXECUTIVE_EASE, 
                        delay: (pillarIdx * 0.1) + (index * 0.1) 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -10, 
                        scale: 1.01,
                        boxShadow: isLight 
                          ? "0 20px 40px -15px rgba(0,0,0,0.1)" 
                          : "0 25px 50px -12px rgba(0,0,0,0.5)",
                        transition: { duration: 0.3, ease: EXECUTIVE_EASE }
                      }}
                      className={`group ${cardBgClass} backdrop-blur-md rounded-2xl border ${cardBorderClass} p-7 md:p-9 shadow-lg shadow-black/10 hover:border-gold-500/40 transition-all duration-300 ${isLight ? 'hover:shadow-xl' : 'hover:shadow-gold-500/10'}`}
                    >
                      <motion.div 
                        initial={false}
                        whileHover={{ scale: 1.1, backgroundColor: "#C8A97E" }}
                        className={`w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-8 group-hover:bg-gold-500 transition-colors duration-300`}
                      >
                        <span className="text-gold-500 text-sm font-bold group-hover:text-navy-900 transition-colors duration-300">
                          {parseInt(pillar.id)}.{index + 1}
                        </span>
                      </motion.div>
                      
                      <h4 className={`font-display text-xl mb-4 group-hover:text-gold-500 transition-colors duration-300 ${cardTitleClass}`}>
                        {sub.title}
                      </h4>
                      
                      <p 
                        className={`leading-relaxed text-[13px] md:text-sm font-body ${cardTextClass}`}
                        dangerouslySetInnerHTML={{ __html: sub.paragraph }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
