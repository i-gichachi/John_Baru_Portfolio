"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { hero } from "@/content/hero";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Hero() {
    return (
        <section className="w-full bg-navy-800 text-white pt-28 pb-16 lg:pt-36 lg:pb-20">
            <div className="max-w-7xl mx-auto px-5 lg:px-6">
                {/* 
                  Mobile: Flex Col, Image is order-1, Text is order-2 
                  Desktop: Grid, Image is right col naturally
                */}
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    
                    {/* Image Column (First on Mobile, Right on Desktop) */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-2 lg:col-span-5 w-full flex justify-center lg:justify-end"
                    >
                        <div className="w-full max-w-[280px] sm:max-w-sm md:max-w-md aspect-[4/5] rounded-xl overflow-hidden relative border border-white/10 shadow-2xl bg-navy-700">
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-0">
                                <span className="font-display font-semibold text-3xl sm:text-4xl text-white/20 mb-2">JB</span>
                                <span className="font-body text-[10px] sm:text-xs text-white/40 uppercase tracking-widest">Portrait Currently Unavailable</span>
                            </div>
                            
                            {hero.photo && (
                                <Image
                                    src={hero.photo}
                                    alt={hero.fullName}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 500px"
                                    className="object-cover object-center relative z-10"
                                    priority
                                />
                            )}
                        </div>
                    </motion.div>

                    {/* Text Column (Second on Mobile, Left on Desktop) */}
                    <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left mt-4 lg:mt-0">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="font-display font-semibold text-[32px] sm:text-4xl lg:text-7xl leading-tight mb-4 sm:mb-5 text-white"
                        >
                            {hero.name}
                        </motion.h1>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col items-center lg:items-start text-center lg:text-left mb-6 w-full"
                        >
                            <h2 className="text-[22px] sm:text-2xl md:text-4xl font-display font-bold text-white leading-tight">
                                {hero.roleTitle}
                            </h2>
                            <h3 className="text-xs sm:text-sm md:text-lg font-body tracking-widest uppercase text-violet-400 mt-1.5 md:mt-1">
                                {hero.roleSubtitle}
                            </h3>
                        </motion.div>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="font-body text-[13px] sm:text-[15px] lg:text-lg text-white/80 leading-relaxed max-w-xl mb-8 sm:mb-10"
                        >
                            {hero.tagline}
                        </motion.p>
                        
                        {/* Embedded Metrics Grid */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.35 }}
                            className="grid grid-cols-2 gap-6 mb-8 sm:mb-10 w-full"
                        >
                            {hero.metrics.map((metric, i) => (
                                <AnimatedCounter 
                                    key={i} 
                                    end={metric.value} 
                                    prefix={metric.prefix} 
                                    suffix={metric.suffix} 
                                    label={metric.label} 
                                    numberSize="text-3xl md:text-4xl text-white"
                                    labelSize="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider leading-tight mt-1"
                                />
                            ))}
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4 items-center justify-center lg:justify-start"
                        >
                            <Link 
                                href={hero.cta.primary.href}
                                className="inline-flex items-center justify-center whitespace-nowrap bg-violet-400 border border-violet-400 text-white font-body font-semibold text-[13px] sm:text-sm px-6 lg:px-8 py-3.5 lg:py-4 rounded hover:bg-violet-500 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-center w-full sm:w-auto"
                            >
                                {hero.cta.primary.label}
                            </Link>
                            <Link 
                                href="/contact#calendly"
                                className="inline-flex items-center justify-center whitespace-nowrap bg-transparent border border-white/60 text-white font-body font-semibold text-[13px] sm:text-sm px-6 lg:px-8 py-3.5 lg:py-4 rounded hover:bg-white hover:text-navy-900 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-center w-full sm:w-auto"
                            >
                                {hero.cta.secondary.label}
                            </Link>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
