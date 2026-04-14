"use client";

import { motion } from "framer-motion";
import { about } from "@/content/about";

export default function AboutSummary() {
  return (
    <section className="bg-navy-50 w-full relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto py-20 px-6 flex flex-col items-center text-center"
      >
        <span className="text-8xl font-display text-violet-400 leading-none mb-2">
          &ldquo;
        </span>
        <p
          className="text-xl md:text-2xl font-display italic text-navy-900 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: about.paragraphs[0] }}
        />
        <div className="w-16 h-0.5 bg-violet-400 mt-10"></div>
      </motion.div>
    </section>
  );
}
