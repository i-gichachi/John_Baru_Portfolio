"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FooterCTA() {
    return (
        <section className="w-full bg-gold-50 py-16 lg:py-24 px-5 lg:px-6">
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto bg-navy-800 rounded-2xl p-8 md:p-12 lg:p-20 text-center shadow-2xl relative overflow-hidden"
            >
                {/* Subtle Background Pattern matching the theme */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                
                <div className="relative z-10 max-w-2xl mx-auto">
                    <div className="inline-block border border-gold-500/30 text-gold-500 font-body text-[10px] md:text-xs font-semibold uppercase tracking-widest px-3 md:px-4 py-1.5 rounded-full mb-6">
                        Ready to Transform
                    </div>

                    <h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-5 md:mb-8">
                        Let's Strengthen Your Finance Function.
                    </h2>

                    <p className="font-body text-sm md:text-lg text-white/80 leading-relaxed mb-8 md:mb-12 px-2">
                        Secure donor confidence, rebuild operational systems, and drive absolute financial discipline across your portfolio.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center whitespace-nowrap bg-gold-500 text-navy-900 font-body font-semibold text-[13px] md:text-sm px-6 md:px-8 py-3.5 md:py-4 rounded hover:bg-white transition-colors"
                        >
                            Schedule a Consultation
                        </Link>
                        <Link
                            href="/engagements"
                            className="inline-flex items-center justify-center whitespace-nowrap border border-white/30 text-white font-body font-semibold text-[13px] md:text-sm px-6 md:px-8 py-3.5 md:py-4 rounded hover:bg-white/10 transition-colors"
                        >
                            View My Engagements
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
