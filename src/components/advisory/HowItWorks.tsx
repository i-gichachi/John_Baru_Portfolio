"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery Call",
    description: "A focused 30-minute call to understand your organisation's financial challenges, structure and immediate priorities."
  },
  {
    title: "Needs Assessment",
    description: "A structured review of your current finance systems, donor obligations and operational gaps to scope the right engagement."
  },
  {
    title: "Engagement Design",
    description: "A tailored proposal outlining scope, deliverables, timeline and session structure built around your calendar."
  },
  {
    title: "Ongoing Delivery",
    description: "Structured advisory sessions with clear outputs, regular progress reviews and measurable results tracked throughout."
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-16 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Intro */}
        <div className="text-center mb-12">
          <span className="text-violet-500 text-sm font-semibold uppercase tracking-widest mb-3 block">
            The Process
          </span>
          <h2 className="font-display text-4xl font-bold text-[#0B1628]">
            How an Engagement Works
          </h2>
        </div>

        {/* Steps Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <div key={index} className="relative text-center flex flex-col items-center group">
              {/* Connector Line (Desktop Only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-1/2 w-full h-px border-t-2 border-dashed border-violet-200 z-0" />
              )}

              {/* Step Number Circle */}
              <div className="w-14 h-14 rounded-full bg-violet-600 flex items-center justify-center mb-5 relative z-10 shadow-lg shadow-violet-200 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg font-display">
                  {index + 1}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="font-display text-lg font-bold text-[#0B1628] mb-2">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-slate-500 text-sm leading-relaxed max-w-[200px] mx-auto md:max-w-none">
                {step.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
