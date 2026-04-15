"use client";

import { motion } from "framer-motion";
import cv from "@/content/cv.json";

const EXECUTIVE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ToolsGrid() {
  const { tools, languages } = cv;

  const getLanguageWidth = (proficiency: string) => {
    const p = proficiency.toLowerCase();
    if (p.includes("native") || p.includes("mother")) return "100%";
    if (p.includes("fluent") || p.includes("full professional")) return "80%";
    if (p.includes("conversational") || p.includes("working") || p.includes("basic")) return "60%";
    return "20%";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: EXECUTIVE_EASE }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Tools Section - Neutral Light */}
      <section className="bg-navy-50 py-16 md:py-20 px-6 border-t border-navy-100">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12">
            <motion.div
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              transition={{ duration: 0.8, ease: EXECUTIVE_EASE }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-6 h-px bg-gold-400"></span>
                <span className="text-gold-600 text-[10px] font-semibold uppercase tracking-widest font-body">
                  Technology Stack
                </span>
                <span className="w-6 h-px bg-gold-400"></span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Systems & Tools
              </h2>
            </motion.div>
          </div>

          {/* Tools Display */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap gap-2.5 justify-center"
          >
            {tools.map((tool, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                whileHover={{ y: -3, scale: 1.05, borderColor: "#C8A97E", backgroundColor: "#fff" }}
                className="px-5 py-2.5 rounded-lg border border-navy-200 bg-white text-navy-800 text-sm font-medium shadow-sm transition-colors duration-300 cursor-default font-body"
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Languages Section - Neutral Gray (Actually switched to Gold-50 for differentiation) */}
      <section className="bg-gold-50 py-16 md:py-20 px-6 border-t border-gold-100">
        <div className="max-w-2xl mx-auto">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-10 md:mb-12">
              <motion.div
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                transition={{ duration: 0.8, ease: EXECUTIVE_EASE }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="w-6 h-px bg-gold-400"></span>
                  <span className="text-gold-600 text-[10px] font-semibold uppercase tracking-widest font-body">
                    Global Communication
                  </span>
                  <span className="w-6 h-px bg-gold-400"></span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-navy-900 text-center">
                  Languages
                </h3>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {languages.map((lang, index) => (
                <motion.div 
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: EXECUTIVE_EASE }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-gold-100 shadow-sm"
                >
                  <span className="font-display text-lg font-bold text-navy-900 block">
                    {lang.language}
                  </span>
                  <span className="text-xs text-gold-600 font-semibold mt-1 block uppercase tracking-wide font-body">
                    {lang.proficiency}
                  </span>
                  <div className="mt-4 bg-gold-100 rounded-full h-1 w-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: getLanguageWidth(lang.proficiency) }}
                      transition={{ duration: 1.2, delay: 0.4 + (index * 0.1), ease: EXECUTIVE_EASE }}
                      viewport={{ once: true }}
                      className="bg-gold-500 h-full rounded-full relative"
                    >
                      <motion.div 
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full h-full"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
