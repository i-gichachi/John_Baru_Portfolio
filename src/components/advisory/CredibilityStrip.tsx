"use client";

import { motion } from "framer-motion";

const blocks = [
  { value: "$150M+", label: "Portfolios Directed" },
  { value: "98%+", label: "Donor Compliance Rate" },
  { value: "5", label: "Countries Led" },
  { value: "25+", label: "Years of Experience" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
} as const;

export default function CredibilityStrip() {
  return (
    <section className="bg-slate-900 py-12 md:py-16 px-6 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0">
          {blocks.map((block, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex items-center justify-center relative"
            >
              {/* Block Content */}
              <div className="text-center px-4">
                <h3 className="font-display text-3xl md:text-5xl font-bold text-white mb-2 tabular-nums">
                  {block.value}
                </h3>
                <p className="text-slate-400 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] whitespace-nowrap">
                  {block.label}
                </p>
              </div>

              {/* Vertical Divider (Desktop Only) */}
              {index < blocks.length - 1 && (
                <div className="hidden md:block absolute -right-[1px] w-px bg-slate-800 h-14 self-center" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
