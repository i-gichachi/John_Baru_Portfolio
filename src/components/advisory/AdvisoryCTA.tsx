"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AdvisoryCTA() {
  return (
    <section className="bg-gradient-to-br from-violet-900 to-[#0B1628] py-20 px-6 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <span className="text-violet-300 text-sm font-semibold uppercase tracking-widest mb-5 block">
          Let's Work Together
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-10">
          Ready to Strengthen Your Finance Function?
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg shadow-violet-900/40"
          >
            Book a Consultation
          </Link>
          <Link
            href="/engagements"
            className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            View Engagements
          </Link>
        </div>

        <p className="text-slate-400 text-sm mt-8">
          Available for remote engagements worldwide. Structured sessions designed to fit your calendar.
        </p>
      </motion.div>
    </section>
  );
}
