"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { logos } from "@/content/logos";

export default function LogoStrip() {
    // Create an elongated array to ensure smooth scrolling/swiping
    const marqueeSet = [...logos, ...logos, ...logos, ...logos];

    return (
        <section className="w-full bg-gold-50 py-12 md:py-16 border-b border-navy-100 overflow-hidden">
            <style jsx>{`
                @keyframes scrollLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); } 
                }
                .marquee-track {
                    display: flex;
                    width: max-content;
                    animation: scrollLeft 40s linear infinite;
                }
                .marquee-track:hover {
                    animation-play-state: paused;
                }
                .marquee-track:active {
                    animation-play-state: paused;
                }
                
                .marquee-container::-webkit-scrollbar {
                    display: none;
                }
                .marquee-container {
                    scrollbar-width: none;
                }
            `}</style>
            
            <div className="w-full mx-auto flex flex-col items-center">
                <motion.h3 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="font-body font-semibold text-[10px] md:text-xs tracking-[0.2em] uppercase text-slate-400 mb-6 md:mb-10 text-center px-6"
                >
                    Global Partnerships & Portfolios Directed
                </motion.h3>

                <div className="marquee-container relative w-full lg:overflow-hidden overflow-x-auto flex items-center min-h-[140px] md:min-h-[120px]">
                    {/* Left and Right edge gradients to fade logos seamlessly in and out on desktop */}
                    <div className="pointer-events-none absolute left-0 top-0 w-8 md:w-32 h-full bg-gradient-to-r from-gold-50 to-transparent z-10 hidden lg:block" />
                    <div className="pointer-events-none absolute right-0 top-0 w-8 md:w-32 h-full bg-gradient-to-l from-gold-50 to-transparent z-10 hidden lg:block" />

                    <div className="marquee-track px-4 py-8">
                        {marqueeSet.map((logo, index) => (
                            <div 
                                key={index} 
                                className="group relative flex flex-col items-center justify-center mx-6 md:mx-10 cursor-pointer h-full lg:transition-transform lg:duration-300 lg:hover:scale-105 min-w-[120px] md:min-w-[100px]"
                            >
                                {/* Desktop Custom Tooltip (Hidden on Mobile) */}
                                <div className="hidden lg:block absolute -top-8 left-1/2 -translate-x-1/2 bg-navy-900 border border-navy-700 text-gold-500 font-body text-[11px] px-4 py-1.5 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-50 tracking-widest uppercase font-semibold">
                                    {logo.name}
                                    {/* Down Arrow hook */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-navy-900 w-0 h-0"></div>
                                </div>

                                {/* Logo image retaining native colors */}
                                {logo.imagePath ? (
                                    <div className="relative h-10 md:h-12 w-24 md:w-32 flex items-center justify-center">
                                        <Image
                                            src={logo.imagePath}
                                            alt={logo.name}
                                            fill
                                            sizes="128px"
                                            className="object-contain"
                                        />
                                    </div>
                                ) : (
                                    <span className="font-display font-semibold text-xl md:text-2xl text-navy-800 tracking-tight text-center">
                                        {logo.name}
                                    </span>
                                )}

                                {/* Mobile Specific Text Visibility */}
                                <div className="lg:hidden mt-3 text-center text-[10px] font-body font-semibold text-navy-800/60 uppercase tracking-wider max-w-[140px] leading-snug px-2 select-none">
                                    {logo.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
