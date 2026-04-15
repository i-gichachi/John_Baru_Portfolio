"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { about } from "@/content/about";

export default function LeadershipHero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="w-full bg-gold-50 relative overflow-hidden pt-24 pb-0">
      {/* Subtle warm grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#B39262 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-8 h-px bg-gold-500"></span>
          <span className="text-gold-600 uppercase tracking-[0.2em] text-xs font-semibold font-body">
            Leadership & Profile
          </span>
        </motion.div>

        {/* Main two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text block */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col"
          >
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-navy-900 leading-[1.1] mb-6">
              My Leadership
              <span className="block text-gold-500 mt-1">Story</span>
            </h1>

            <p className="font-body text-navy-700/70 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
              25+ years building financial resilience across global health &amp; development, from Nairobi to five continents.
            </p>

            {/* Divider */}
            <div className="w-12 h-px bg-gold-400 mb-10"></div>

            {/* Quote block */}
            <div className="relative">
              <span className="absolute -top-6 -left-2 text-7xl font-display text-gold-300/60 leading-none select-none">
                &ldquo;
              </span>
              <p
                className="text-navy-800/90 leading-relaxed text-lg pl-10"
                dangerouslySetInnerHTML={{ __html: about.leadershipSnapshot }}
              />
            </div>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Decorative offset border */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border-2 border-gold-300/40 pointer-events-none"></div>

              <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden bg-navy-100 shadow-2xl">
                {imgError ? (
                  <div className="flex flex-col items-center justify-center h-full w-full bg-navy-800">
                    <span className="font-display text-7xl text-white/10 tracking-tighter">JB</span>
                    <span className="text-white/30 text-sm mt-4 font-body">John Baru</span>
                  </div>
                ) : (
                  <Image
                    src="/images/john-baru.jpg"
                    alt="John Baru | Global Finance &amp; Operations Executive"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                    onError={() => setImgError(true)}
                  />
                )}
              </div>

              {/* Metric badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-5 -left-5 bg-navy-900 text-white rounded-2xl px-5 py-4 shadow-xl"
              >
                <p className="font-display font-bold text-2xl text-gold-400">25+</p>
                <p className="font-body text-[11px] text-white/60 uppercase tracking-wider mt-0.5">Years experience</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="absolute -top-5 -right-5 bg-white rounded-2xl px-5 py-4 shadow-xl border border-navy-100"
              >
                <p className="font-display font-bold text-xl text-navy-900">$150M+</p>
                <p className="font-body text-[11px] text-navy-400 uppercase tracking-wider mt-0.5">Portfolios led</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom wave transition */}
        <div className="mt-20 relative h-16 overflow-hidden">
          <svg
            viewBox="0 0 1440 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
