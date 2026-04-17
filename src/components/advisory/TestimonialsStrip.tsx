"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { testimonials } from "@/content/testimonials";

export default function TestimonialsStrip() {
  return (
    <section id="testimonials" className="bg-slate-100 py-16 px-6 border-y border-slate-200 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Intro - More Compact */}
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-violet-600 text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block"
          >
            Client Endorsements
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-bold text-[#0B1628] leading-tight"
          >
            What Colleagues & Partners Say
          </motion.h2>
        </div>

        {/* Testimonials Grid - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-200/60 flex flex-col h-full hover:shadow-xl transition-all duration-500"
            >
              <div className="relative mb-6">
                <span className="text-violet-400/30 font-display text-5xl absolute -top-8 -left-5 select-none hover:scale-110 transition-transform">"</span>
                <div className="relative z-10 px-2 lg:px-4">
                  <p className="text-slate-700 italic leading-relaxed text-sm md:text-[15px] font-body group-hover:text-slate-900 transition-colors duration-500">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="flex justify-end -mt-4 pr-2">
                  <span className="text-violet-400/30 font-display text-5xl select-none leading-none hover:scale-110 transition-transform">"</span>
                </div>
              </div>

              <div className="mt-auto pt-5 border-t border-slate-50 flex items-center justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-bold text-[#0B1628] text-sm md:text-base tracking-tight mb-0.5">
                    {testimonial.name}
                  </h4>
                  <p className="text-violet-600 font-bold text-[10px] uppercase tracking-wider mb-0.5">
                    {testimonial.title}
                  </p>
                  <p className="text-slate-400 text-[10px] font-medium">
                    {testimonial.company}
                  </p>
                </div>
                
                {/* Logo - Standardized to Match Experience Section (40x40) */}
                {testimonial.logo && (
                  <div className="flex-shrink-0 bg-slate-50 rounded-md p-1 border border-slate-100 group-hover:bg-white transition-colors duration-500">
                    <Image
                      src={testimonial.logo}
                      alt={testimonial.company}
                      width={40}
                      height={40}
                      className="object-contain h-10 w-10 rounded-sm"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
