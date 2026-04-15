"use client";

import { motion } from "framer-motion";

export default function AdvisoryHero() {
  return (
    <section className="bg-[#050914] pt-24 pb-12 relative overflow-hidden">
      {/* Sophisticated background accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="block text-violet-400 text-xs md:text-sm font-semibold uppercase mb-5"
          >
            Capabilities & Strategy
          </motion.span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Professional <br className="hidden sm:block" />
            <span className="text-violet-400 block mt-2">Advisory Services</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
