"use client";

import { motion } from "framer-motion";
import { services } from "@/content/services";
import { 
  CheckCircle2, 
  ArrowRight, 
  Briefcase, 
  BarChart3, 
  ShieldCheck, 
  Users, 
  Settings,
  Clock,
  CircleDollarSign
} from "lucide-react";
import Link from "next/link";

const iconMap: any = {
  briefcase: Briefcase,
  chart: BarChart3,
  shield: ShieldCheck,
  users: Users,
  settings: Settings,
};

export default function ServiceCards() {
  return (
    <section className="bg-[#050914] py-16 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Services List */}
        <div className="flex flex-col gap-6">
          {services.map((service: any, index: number) => {
            const IconComponent = iconMap[service.icon] || Briefcase;

            return (
              <motion.div
                key={service.id || index}
                id={`service-${index + 1}`}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 32 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                viewport={{ once: true }}
                className="bg-navy-50 rounded-2xl md:rounded-[2.5rem] border border-slate-200 hover:border-blue-300 transition-all duration-500 overflow-hidden relative group scroll-mt-28 shadow-sm hover:shadow-xl"
              >
                {/* Subtle blue accent glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] to-transparent pointer-events-none" />
                
                <div className="p-8 md:p-14 relative z-10">
                  <div className="flex flex-col md:flex-row items-start gap-8 md:gap-14">
                    {/* Icon - High Visibility Blue */}
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100/50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                        <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
                      </div>
                    </div>

                    {/* Content Block */}
                    <div className="flex-1">
                      {/* Best for: Tag - Neutral Blue */}
                      <div className="inline-flex items-center gap-2 bg-blue-100/50 border border-blue-200/50 rounded-full px-4 py-1.5 mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-blue-800 text-[10px] md:text-xs font-bold tracking-wider uppercase">
                          {service.bestFor}
                        </span>
                      </div>

                      {/* Service Title - Dark Navy */}
                      <h3 className="font-display text-2xl md:text-4xl font-bold text-navy-900 mb-5 leading-tight">
                        {service.cardTitle}
                      </h3>

                      {/* Service Description - Professional Grey */}
                      <div 
                        className="text-slate-600 leading-relaxed text-sm md:text-lg mb-8 max-w-2xl font-body"
                        dangerouslySetInnerHTML={{ __html: service.summary }}
                      />

                      {/* Commitment Details (Timeframe & Investment) */}
                      <div className="flex flex-wrap gap-4 md:gap-8 mb-10 border-y border-slate-200/60 py-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                            <Clock className="w-5 h-5 text-blue-500" />
                          </div>
                          <p className="text-sm md:text-base font-semibold text-navy-900">{service.timeframe}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                            <CircleDollarSign className="w-5 h-5 text-emerald-600" />
                          </div>
                          <p className="text-sm md:text-base font-semibold text-navy-900">{service.investment}</p>
                        </div>
                      </div>

                      {/* CTA link */}
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.cardTitle)}`}
                        className="inline-flex items-center gap-3 bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg shadow-navy-100 group active:scale-95"
                      >
                        {service.cta || "Book Private Advisory"}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
