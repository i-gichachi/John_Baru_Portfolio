"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { testimonials } from "@/content/testimonials";

export default function TestimonialsPlaceholder() {
    // Show only first two as requested
    const homeTestimonials = testimonials.slice(0, 2);

    return (
        <section className="w-full bg-gold-50 py-16 lg:py-20 border-b border-gold-100 relative overflow-hidden">
            {/* Subtle background texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#B39262 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            <div className="max-w-6xl mx-auto px-5 lg:px-6 relative z-10">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 lg:mb-16 text-center"
                >
                    <span className="inline-block text-gold-600 font-body text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] mb-4">
                        Professional Endorsements
                    </span>
                    <h2 className="font-display font-bold text-3xl md:text-5xl text-navy-800 leading-tight">
                        Leadership Perspectives
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {homeTestimonials.map((testimonial, index) => (
                        <motion.div 
                            key={testimonial.id} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group bg-white border border-navy-50 shadow-[0_4px_25px_rgba(0,0,0,0.02)] rounded-2xl p-6 lg:p-10 hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                        >
                            <div className="relative">
                                <span className="text-gold-300/30 font-display text-5xl absolute -top-8 -left-5 select-none hover:scale-110 transition-transform">"</span>
                                <div className="relative z-10 px-2 lg:px-4">
                                    <p className="text-slate-700 italic leading-relaxed mb-6 text-[15px] md:text-lg font-body group-hover:text-navy-900 transition-colors duration-500">
                                        {testimonial.quote}
                                    </p>
                                </div>
                                <div className="flex justify-end -mt-4 pr-2">
                                    <span className="text-gold-300/30 font-display text-5xl select-none leading-none hover:scale-110 transition-transform">"</span>
                                </div>
                            </div>

                            <div className="mt-auto relative z-10 flex items-center justify-between gap-5 pt-6 border-t border-navy-50/50">
                                <div className="flex flex-col">
                                    <h4 className="font-bold text-navy-800 text-base md:text-lg tracking-tight mb-0.5">
                                        {testimonial.name}
                                    </h4>
                                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                                        <p className="text-gold-600 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                                            {testimonial.title}
                                        </p>
                                        <span className="hidden md:block w-1 h-1 rounded-full bg-gold-200"></span>
                                        <p className="text-slate-400 text-[10px] md:text-xs font-medium">
                                            {testimonial.company}
                                        </p>
                                    </div>
                                </div>

                                {testimonial.logo && (
                                    <div className="flex-shrink-0 bg-slate-50 rounded-md p-1 border border-slate-100 group-hover:bg-white transition-all duration-500">
                                        <Image 
                                            src={testimonial.logo}
                                            alt={testimonial.company}
                                            width={40}
                                            height={40}
                                            className="object-contain h-10 w-10 rounded-sm"
                                        />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 lg:mt-16 text-center flex justify-center"
                >
                    <Link
                        href="/advisory#testimonials"
                        className="group inline-flex items-center justify-center whitespace-nowrap bg-navy-800 text-white font-body font-bold text-sm tracking-wide px-10 py-4 rounded-xl hover:bg-gold-600 hover:-translate-y-1 active:scale-95 transition-all duration-300 shadow-lg shadow-navy-100/20"
                    >
                        View All Testimonials
                        <motion.span 
                            className="ml-2"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            →
                        </motion.span>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}


