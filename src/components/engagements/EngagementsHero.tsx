"use client";

import { motion } from "framer-motion";

export default function EngagementsHero() {
  return (
    <section className="bg-[#0B1628] py-28 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-violet-400 text-sm font-semibold uppercase tracking-widest mb-5">
            Selected Engagements
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight">
            Proof of <br />
            <span className="text-violet-400">Impact</span>
          </h1>
        </motion.div>
      </div>
      
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
      </div>
    </section>
  );
}
