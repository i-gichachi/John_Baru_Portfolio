"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { caseStudies } from "@/content/caseStudies";
import { logos } from "@/content/logos";

export default function FeaturedEngagements() {
    const selectedEngagements = [caseStudies[0], caseStudies[3]];

    // Using dangerouslySetInnerHTML allows the strong tags from executive summaries to render
    return (
        <section className="w-full bg-navy-800 text-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-5 lg:px-6">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 lg:mb-20 text-center lg:text-left"
                >
                    <span className="inline-block border border-gold-500/30 text-gold-500 font-body text-[10px] md:text-xs font-semibold uppercase tracking-widest px-3 md:px-4 py-1.5 rounded-full mb-6">
                        Proof of Impact
                    </span>
                    <h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                        Selected Engagements
                    </h2>
                </motion.div>

                <div className="flex flex-col">
                    {selectedEngagements.map((study, index) => {
                        // Find the corresponding logo for this case study
                        const matchedLogo = logos.find(l => l.shortName === study.clientShortName);

                        return (
                            <motion.div 
                                key={study.id} 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 pb-16 md:pb-20 ${index !== 0 ? 'pt-16 md:pt-20 border-t border-white/10' : ''}`}
                            >
                                {/* Left Column: Metrics & Organization Info */}
                                <div className="w-full lg:w-[32%] flex flex-col shrink-0 items-start p-6 md:p-8 bg-navy-900 border border-white/5 rounded-2xl">
                                    <h3 className="font-display font-semibold text-6xl md:text-7xl text-gold-500 leading-none mb-3">
                                        {study.dominantMetric}
                                    </h3>
                                    <div className="font-body text-[11px] md:text-xs text-white/60 uppercase tracking-widest mb-10 leading-tight border-b border-white/10 pb-6 w-full">
                                        {study.metricLabel}
                                    </div>
                                    
                                    {/* Organizational Context block */}
                                    <div className="flex flex-col gap-4 mt-2">
                                        <div className="font-body text-[10px] uppercase tracking-widest text-white/40">
                                            Engagement Organization
                                        </div>
                                        {matchedLogo?.imagePath ? (
                                            <div className="bg-white/5 rounded p-2 md:p-3 flex items-center justify-center w-max h-14 md:h-16">
                                                <img 
                                                    src={matchedLogo.imagePath} 
                                                    alt={matchedLogo.name} 
                                                    className="h-full w-auto object-contain mix-blend-screen"
                                                    style={{ filter: 'brightness(1.1)' }}
                                                />
                                            </div>
                                        ) : study.clientShortName ? (
                                            <div className="font-display font-semibold text-xl text-white">
                                                {study.clientShortName}
                                            </div>
                                        ) : null}
                                        
                                        <span className="inline-block bg-white/5 border border-white/10 text-white/70 font-body text-[10.5px] uppercase tracking-widest px-3 py-1.5 rounded w-max mt-2">
                                            {study.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Right Column: Full Executive Summary Narrative */}
                                <div className="w-full lg:w-[68%] flex flex-col justify-center">
                                    <h4 className="font-display font-semibold text-2xl md:text-3xl text-white mb-6 lg:mb-8 leading-snug">
                                        {study.title}
                                    </h4>
                                    
                                    {/* Full Executive Summary Displayed Un-truncated */}
                                    <div 
                                        className="font-body text-[15px] md:text-base text-white/80 leading-relaxed mb-8 flex flex-col gap-4"
                                        dangerouslySetInnerHTML={{ __html: study.executiveSummary }}
                                    />
                                    
                                    <Link
                                        href="/engagements"
                                        className="inline-flex items-center justify-center whitespace-nowrap border border-white/30 text-white font-body font-semibold text-[13px] md:text-sm px-6 py-3.5 rounded hover:bg-white hover:text-navy-900 transition-colors w-max"
                                    >
                                        Explore the Full Methodology Model
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-6 flex justify-center lg:justify-start"
                >
                    <Link
                        href="/engagements"
                        className="inline-flex items-center text-gold-500 font-body font-semibold text-sm hover:text-white transition-colors uppercase tracking-widest gap-2"
                    >
                        View the Full Master Portfolio
                        <span className="text-xl leading-none">→</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
