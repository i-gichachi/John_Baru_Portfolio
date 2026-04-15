"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/content/services";
import { FiBriefcase, FiShield, FiSettings } from "react-icons/fi";

export default function AdvisoryPreview() {
    const previewServices = [services[0], services[2], services[4]];

    const stripHtml = (html: string) => html.replace(/<[^>]*>?/gm, '');

    const getTwoSentences = (text: string) => {
        const sentences = text.split('. ');
        if (sentences.length >= 2) {
            return sentences[0] + '. ' + sentences[1] + '.';
        }
        return text;
    };

    const IconMap: Record<string, React.ElementType> = {
        "briefcase": FiBriefcase,
        "shield": FiShield,
        "settings": FiSettings
    };

    return (
        <section className="w-full bg-navy-50 py-16 lg:py-24 border-b border-navy-100">
            <div className="max-w-7xl mx-auto px-5 lg:px-6">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 lg:mb-16 text-center max-w-3xl mx-auto"
                >
                    <span className="inline-block text-gold-500 font-body text-[10px] md:text-xs font-semibold uppercase tracking-widest mb-4 md:mb-6">
                        Advisory Services
                    </span>
                    <h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-navy-800 leading-tight mb-4 md:mb-8">
                        Expert Financial Guidance for NGOs & Donor Programmes
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {previewServices.map((service, index) => {
                        const IconComponent = IconMap[service.icon] || FiBriefcase;
                        return (
                            <motion.div 
                                key={service.id} 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="bg-white border border-navy-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] rounded-2xl p-6 lg:p-8 flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex justify-between items-start mb-6 lg:mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-100 flex items-center justify-center text-navy-800 shadow-sm">
                                        <IconComponent className="w-5 h-5 text-gold-500" />
                                    </div>
                                    <span className="font-display text-3xl md:text-4xl text-slate-300 font-bold leading-none">
                                        {index + 1}
                                    </span>
                                </div>

                                <h3 className="font-display font-semibold text-xl lg:text-2xl text-navy-800 mb-4 leading-snug">
                                    {service.cardTitle}
                                </h3>

                                <p className="font-body text-slate-600 text-[13px] md:text-[15px] leading-relaxed mb-8 flex-1">
                                    {getTwoSentences(stripHtml(service.summary))}
                                </p>

                                <div className="border-t border-slate-200/70 pt-5">
                                    <Link
                                        href={`/advisory#service-${index === 0 ? 1 : index === 1 ? 3 : 5}`}
                                        className="inline-flex items-center text-navy-800 font-body font-semibold text-[11px] md:text-[13px] hover:text-gold-500 transition-colors uppercase tracking-wider gap-2 w-full justify-between"
                                    >
                                        Explore Module
                                        <span className="text-xl leading-none font-normal">→</span>
                                    </Link>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 lg:mt-16 text-center"
                >
                    <Link
                        href="/advisory"
                        className="inline-flex items-center justify-center whitespace-nowrap border-2 border-navy-800 text-navy-800 font-body font-semibold text-sm px-6 lg:px-8 py-3.5 lg:py-4 rounded hover:bg-navy-800 hover:text-white transition-colors"
                    >
                        View All Advisory Options
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
