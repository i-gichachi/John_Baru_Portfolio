'use client';

import { motion } from 'framer-motion';

export default function ContactHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="bg-[#0a0a0b] pt-24 pb-12 md:pt-32 md:pb-16 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-violet-500/[0.03] to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            variants={itemVariants}
            className="text-violet-400 text-xs md:text-sm font-semibold uppercase tracking-[0.3em] mb-4 block"
          >
            Get in Touch
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="font-playfair text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            Let's Start a <br />
            <span className="bg-gradient-to-r from-violet-400 to-violet-100 bg-clip-text text-transparent">
              Conversation
            </span>
          </motion.h1>

          <motion.div 
            variants={itemVariants}
            className="w-12 h-[1px] bg-white/20 mx-auto mt-8 md:mt-10"
          />
        </motion.div>
      </div>
    </section>
  );
}
