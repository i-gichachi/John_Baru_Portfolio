"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LeadershipCTA() {
  return (
    /* Neutral blue-violet background that bridges toward the navy footer */
    <section
      className="w-full relative overflow-hidden py-14 md:py-20 px-5 md:px-6"
      style={{
        background: "linear-gradient(135deg, #e8eaf6 0%, #ede7f6 40%, #e3e8f5 100%)",
      }}
    >
      {/* Glassmorphic blob shapes for depth */}
      <div
        className="absolute top-[-60px] left-[-60px] w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,77,255,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-[-40px] right-[-40px] w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(92,107,192,0.12) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.65 }}
        className="relative max-w-3xl mx-auto"
      >
        {/* Glassmorphic card */}
        <div
          className="rounded-2xl border border-white/60 shadow-2xl p-8 md:p-12 text-center relative overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.45)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {/* Inner glow top-right */}
          <div
            className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(124,77,255,0.15) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10">
            {/* Label pill */}
            <span
              className="inline-block text-[10px] md:text-xs font-semibold font-body uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border"
              style={{
                color: "#5c6bc0",
                borderColor: "rgba(92,107,192,0.35)",
                background: "rgba(92,107,192,0.08)",
              }}
            >
              Ready to Collaborate
            </span>

            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-navy-900 leading-tight mb-4">
              Ready to explore a collaboration?
            </h2>

            <p className="font-body text-navy-700/70 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Download my full executive CV or book a consultation to discuss how I can add value to your organisation.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <a
                href="/cv/john-baru-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center justify-center whitespace-nowrap bg-navy-900 text-white font-body font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-navy-800 transition-colors duration-300 shadow-md"
              >
                Download Executive CV
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center whitespace-nowrap font-body font-semibold text-sm px-7 py-3.5 rounded-lg transition-colors duration-300 border"
                style={{
                  color: "#5c6bc0",
                  borderColor: "rgba(92,107,192,0.4)",
                  background: "rgba(92,107,192,0.07)",
                }}
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
