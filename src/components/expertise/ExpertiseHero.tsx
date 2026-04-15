"use client";

import { motion } from "framer-motion";

export default function ExpertiseHero() {
  return (
    <section className="bg-[#0B1628] py-28">
      <div className="text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-5 block">
            Core Competencies
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight">
            Where Strategy Meets <br />
            <span className="text-violet-400">Execution</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
