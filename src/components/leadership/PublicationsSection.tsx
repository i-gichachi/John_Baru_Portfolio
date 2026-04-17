'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { publications } from '@/content/publications';

export default function PublicationsSection() {
  return (
    <section className="bg-white w-full py-16 px-5 md:px-6 border-t border-navy-50">
      <div className="max-w-5xl mx-auto">
        
        {/* Section header — matches Certifications and Education style */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-3 mb-3"
          >
            <span className="w-7 h-px bg-gold-500" />
            <span className="text-gold-600 uppercase tracking-[0.18em] text-[11px] font-semibold font-body">
              Thought Leadership
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="font-display font-bold text-2xl md:text-3xl text-navy-900"
          >
            Research, Field Work &amp; Features
          </motion.h2>
        </div>

        {/* Cards grid — Responsive optimization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative flex flex-col bg-white rounded-xl border border-navy-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${
                index === publications.length - 1 && publications.length % 2 !== 0
                  ? 'md:col-span-2'
                  : ''
              }`}
            >
              {/* Top accent line — same as Experience cards */}
              <div className="h-0.5 w-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300" />

              <div className="p-6 md:p-8 flex flex-col flex-1">
                {/* Type Badge & Date */}
                <div className="flex items-center justify-between mb-5">
                  <span className="px-2.5 py-0.5 bg-navy-50 text-navy-800 text-[10px] font-bold uppercase tracking-wider rounded-full border border-navy-100 font-body">
                    {pub.type}
                  </span>
                  <span className="text-[11px] text-slate-400 font-bold uppercase tracking-widest font-body">
                    {pub.date}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-navy-900 text-lg md:text-xl leading-snug mb-2 group-hover:text-gold-600 transition-colors duration-200">
                    {pub.title}
                  </h3>
                  
                  <p className="text-gold-600 font-semibold font-body text-xs uppercase tracking-wide mb-4">
                    {pub.publisher}
                  </p>

                  <p className="text-slate-600 font-body text-sm leading-relaxed line-clamp-4 md:line-clamp-none mb-6">
                    {pub.summary}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="pt-5 border-t border-navy-50 mt-auto">
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-navy-900 hover:text-gold-600 transition-colors duration-200 font-body group/link"
                  >
                    {pub.ctaLabel}
                    <ExternalLink
                      size={14}
                      className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 text-gold-500"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
