"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const competenciesData = [
    {
        num: "01",
        title: "Financial Leadership",
        items: [
            "Strategic Financial Leadership in R&D Contexts",
            "Budget Recovery & Turnaround Management",
            "Donor Compliance & Grant Finance"
        ]
    },
    {
        num: "02",
        title: "Operational Transformation",
        items: [
            "Operational Excellence & Systems Transformation",
            "ERP Systems Optimisation & Digital Workflows",
            "Shared Services Design & Cost Optimisation"
        ]
    },
    {
        num: "03",
        title: "Governance & People",
        items: [
            "Governance, Risk & Donor Compliance",
            "Sub-Recipient & Partner Management",
            "Leadership & Cross-Country Team Development"
        ]
    }
];

export default function CompetencyPillars() {
    return (
        <section className="w-full bg-navy-50 py-16 lg:py-24 border-b border-navy-100">
            <div className="max-w-7xl mx-auto px-5 lg:px-6">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-gold-500 font-body text-[10px] md:text-xs font-semibold uppercase tracking-widest mb-4 md:mb-6">
                            Areas of Expertise
                        </span>
                        <h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-navy-800 leading-tight">
                            Three Pillars of Financial Excellence
                        </h2>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link
                            href="/expertise"
                            className="inline-flex items-center whitespace-nowrap text-navy-800 font-body font-semibold text-xs md:text-sm hover:text-gold-500 transition-colors uppercase tracking-widest gap-2"
                        >
                            Explore Full Expertise
                            <span className="text-lg leading-none">→</span>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {competenciesData.map((pillar, index) => (
                        <motion.div 
                            key={pillar.num} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="bg-white border border-navy-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] rounded-2xl p-6 lg:p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-gold-50 border border-gold-100 rounded-lg flex items-center justify-center font-display font-bold text-base md:text-lg text-gold-600 mb-6 lg:mb-8">
                                {pillar.num}
                            </div>
                            
                            <h3 className="font-display font-semibold text-xl lg:text-2xl text-navy-800 mb-4 lg:mb-6">
                                {pillar.title}
                            </h3>
                            
                            <ul className="space-y-3 md:space-y-4">
                                {pillar.items.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-600 font-body text-[13px] md:text-sm leading-relaxed">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gold-500 shrink-0 mt-0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
