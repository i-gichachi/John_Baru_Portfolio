"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { about } from "@/content/about";

export default function AboutBridge() {
    const firstParagraph = about.paragraphs[0];

    return (
        <section className="w-full bg-navy-800 py-16 lg:py-24 border-b border-navy-700">
            <div className="max-w-7xl mx-auto px-5 lg:px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
                >
                    {/* Left Column: Hardcoded Philosophy Pull Quote */}
                    <div className="flex flex-col relative w-max lg:w-full max-w-[280px] sm:max-w-none">
                        <div className="text-5xl md:text-6xl font-display text-violet-400 mb-2 lg:mb-4 leading-none">
                            "
                        </div>
                        <h2 className="text-xl md:text-3xl font-display italic text-white leading-snug mb-2 pr-4 sm:pr-0">
                            Financial discipline is not a back-office function, it is the foundation that allows development programmes to deliver at scale.
                        </h2>
                        
                        {/* Violet horizontal rule */}
                        <div className="w-12 h-0.5 bg-violet-400 mt-6 mb-6"></div>
                        
                        {/* Attribution */}
                        <p className="font-body text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-[0.15em] sm:tracking-widest uppercase text-slate-400 w-full xl:whitespace-nowrap leading-relaxed">
                            JOHN WACHANIA BARU | GLOBAL FINANCE & OPERATIONS EXECUTIVE
                        </p>
                    </div>

                    {/* Right Column: Bio + CTAs */}
                    <div className="flex flex-col">
                        <div 
                            className="font-body text-[14px] md:text-base lg:text-lg text-white/80 leading-loose mb-10 space-y-6"
                            dangerouslySetInnerHTML={{ __html: firstParagraph }}
                        />
                        
                        <div className="flex flex-wrap items-center gap-4">
                            <Link 
                                href="/leadership"
                                className="inline-flex items-center justify-center whitespace-nowrap bg-violet-400 text-white font-body font-semibold text-[13px] md:text-sm px-6 lg:px-8 py-3.5 lg:py-4 rounded hover:bg-violet-500 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                            >
                                Read My Full Story →
                            </Link>
                            <a 
                                href="/cv/john-baru-cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="inline-flex items-center justify-center whitespace-nowrap bg-transparent border border-white/60 text-white font-body font-semibold text-[13px] md:text-sm px-6 lg:px-8 py-3.5 lg:py-4 rounded hover:bg-white hover:text-navy-900 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
