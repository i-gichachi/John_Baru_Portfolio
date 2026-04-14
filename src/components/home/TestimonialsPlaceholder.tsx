"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TestimonialsPlaceholder() {
    // Two empty placeholders
    const placeholders = [1, 2];

    return (
        <section className="w-full bg-gold-50 py-16 lg:py-24 border-b border-gold-100">
            <div className="max-w-7xl mx-auto px-5 lg:px-6">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 lg:mb-20 text-center"
                >
                    <span className="inline-block text-gold-600 font-body text-[10px] md:text-xs font-semibold uppercase tracking-widest mb-4">
                        Professional Endorsements
                    </span>
                    <h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-navy-800 leading-tight">
                        Leadership Perspectives
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {placeholders.map((idx, index) => (
                        <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="bg-white border border-navy-50 shadow-[0_8px_30px_rgba(0,0,0,0.02)] rounded-3xl p-8 lg:p-12 hover:-translate-y-2 hover:shadow-xl transition-all duration-500 relative flex flex-col justify-between"
                        >
                            {/* Stylized Quote Mark */}
                            <div className="absolute top-8 lg:top-10 left-8 lg:left-10 text-9xl leading-none font-display text-navy-50 pointer-events-none tracking-tighter mix-blend-multiply opacity-60">
                                "
                            </div>
                            
                            <div className="relative z-10 pt-6">
                                <div className="space-y-4 mb-10">
                                    <div className="h-4 bg-navy-100/50 rounded-full w-full animate-pulse"></div>
                                    <div className="h-4 bg-navy-100/50 rounded-full w-[90%] animate-pulse"></div>
                                    <div className="h-4 bg-navy-100/50 rounded-full w-[95%] animate-pulse"></div>
                                    <div className="h-4 bg-navy-100/50 rounded-full w-[60%] animate-pulse"></div>
                                </div>
                            </div>

                            <div className="relative z-10 flex items-center gap-4 border-t border-navy-50 pt-6 mt-auto">
                                <div className="w-12 h-12 bg-navy-100/50 rounded-full animate-pulse shrink-0"></div>
                                <div className="flex flex-col gap-2 w-full">
                                    <div className="h-3.5 bg-navy-100/70 rounded-full w-32 animate-pulse"></div>
                                    <div className="h-2.5 bg-gold-100 rounded-full w-48 animate-pulse"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 lg:mt-16 text-center flex justify-center"
                >
                    <Link
                        href="/testimonials"
                        className="inline-flex items-center justify-center whitespace-nowrap border-2 border-navy-800 text-navy-800 font-body font-semibold text-[13px] md:text-sm px-6 lg:px-8 py-3.5 lg:py-4 rounded hover:bg-navy-800 hover:text-white hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                    >
                        View All Testimonials
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
