"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import cv from "@/content/cv.json";

const certLogoMap: Record<string, string | null> = {
  "ICPAK / Strathmore University": "/images/logos/icpak_logo.png",
  "ICPAK": "/images/logos/icpak_logo.png",
  "Strathmore University": "/images/logos/strathmore_university_logo.jfif",
  "PMD Pro": "/images/logos/PMD_pro_logo.jfif",
};

const certInitialsMap: Record<string, string> = {
  "Federal Grants Administration": "FGA",
  "U.S. Federal Financial Regulations": "FAL",
  "CDI-Africa Coaching Group": "CDI",
};

export default function CertificationsSection() {
  const getInitials = (name: string) => {
    if (certInitialsMap[name]) return certInitialsMap[name];
    const words = name.split(" ");
    if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <section className="bg-navy-50 w-full py-14 px-5 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-px bg-gold-500" />
            <span className="text-gold-600 uppercase tracking-[0.18em] text-[11px] font-semibold font-body">
              Credentials
            </span>
          </div>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-navy-900">
            Certifications &amp; Professional Training
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {cv.certifications.map((cert, i) => {
            const logoSrc = certLogoMap[cert.issuer];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -2 }}
                className="bg-white rounded-xl p-5 border-l-4 border-gold-400 shadow-sm hover:shadow-md flex items-start gap-4 transition-all duration-250"
              >
                {/* Logo / Initials */}
                <div className="flex-shrink-0 bg-navy-50 rounded-md p-1 border border-navy-100">
                  {logoSrc ? (
                    <Image
                      src={logoSrc}
                      alt={cert.issuer}
                      width={40}
                      height={40}
                      className="object-contain h-10 w-10 rounded-sm"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-sm bg-navy-900 flex items-center justify-center">
                      <span className="text-gold-400 text-xs font-bold font-body">
                        {getInitials(cert.issuer)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-between flex-grow min-w-0">
                  <h3 className="font-display font-bold text-navy-900 text-base leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-slate-500 font-body text-xs mt-1.5">{cert.issuer}</p>
                  {cert.year && (
                    <span className="mt-2 inline-block bg-navy-50 px-2 py-0.5 rounded text-slate-400 text-[10px] font-bold uppercase tracking-wider font-body">
                      {cert.year}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
