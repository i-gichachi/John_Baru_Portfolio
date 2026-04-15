"use client";

import Link from "next/link";
import { FiLinkedin, FiMail, FiMapPin, FiGlobe, FiDownload, FiPhone } from "react-icons/fi";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-navy-900 text-white pt-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 pb-16">
                    
                    {/* Column 1 - Brand (Span 5) */}
                    <div className="md:col-span-12 lg:col-span-5 flex flex-col">
                        <div className="font-display font-semibold text-3xl tracking-wide mb-4 text-white">
                            John Baru<span className="text-gold-500">.</span>
                        </div>
                        
                        <p className="font-body text-xs font-semibold text-gold-500 uppercase tracking-widest mb-6">
                            Global Finance & Operations Executive
                        </p>
                        
                        <p className="font-body text-sm text-white/60 leading-relaxed max-w-sm mb-8">
                            Driving financial discipline, operational resilience and donor compliance across multi-country development portfolios.
                        </p>

                        <div className="flex gap-4">
                            <Link
                                href="https://www.linkedin.com/in/baru-john/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-white/70 hover:bg-gold-500 hover:text-navy-900 transition-colors"
                            >
                                <FiLinkedin className="w-4 h-4" />
                            </Link>
                            <Link
                                href="mailto:johnbaru2002@gmail.com"
                                className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-white/70 hover:bg-gold-500 hover:text-navy-900 transition-colors"
                            >
                                <FiMail className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div className="hidden lg:block lg:col-span-2"></div>

                    {/* Column 2 - Directory (Span 2) */}
                    <div className="md:col-span-6 lg:col-span-2 flex flex-col">
                        <h3 className="font-body font-semibold text-sm text-white mb-6 uppercase tracking-wider">Directory</h3>
                        <div className="flex flex-col gap-4">
                            <Link href="/leadership" className="font-body text-sm text-white/60 hover:text-gold-500 transition-colors w-max">Leadership</Link>
                            <Link href="/expertise" className="font-body text-sm text-white/60 hover:text-gold-500 transition-colors w-max">Expertise</Link>
                            <Link href="/engagements" className="font-body text-sm text-white/60 hover:text-gold-500 transition-colors w-max">Engagements</Link>
                            <Link href="/advisory" className="font-body text-sm text-white/60 hover:text-gold-500 transition-colors w-max">Advisory</Link>
                            <Link href="/contact" className="font-body text-sm text-white/60 hover:text-gold-500 transition-colors w-max">Contact</Link>
                        </div>
                    </div>

                    {/* Column 3 - Contact (Span 3) */}
                    <div className="md:col-span-6 lg:col-span-3 flex flex-col">
                        <h3 className="font-body font-semibold text-sm text-white mb-6 uppercase tracking-wider">Operations</h3>
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-3">
                                <FiMail className="w-4 h-4 text-gold-500 shrink-0" />
                                <Link href="mailto:johnbaru2002@gmail.com" className="font-body text-sm text-white/60 hover:text-white transition-colors">
                                    johnbaru2002@gmail.com
                                </Link>
                            </div>
                            <div className="flex items-center gap-3">
                                <FiPhone className="w-4 h-4 text-gold-500 shrink-0" />
                                <a href="tel:+254726509360" className="font-body text-sm text-white/60 hover:text-white transition-colors">
                                    +254 726 509 360
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <FiMapPin className="w-4 h-4 text-gold-500 shrink-0" />
                                <span className="font-body text-sm text-white/60">
                                    Nairobi, Kenya
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FiGlobe className="w-4 h-4 text-gold-500 shrink-0" />
                                <span className="font-body text-sm text-white/60">
                                    Remote engagements worldwide
                                </span>
                            </div>
                            <a
                                href="/cv/John-Baru-Executive-CV.pdf"
                                download
                                className="text-sm text-slate-400 hover:text-violet-400 transition-colors flex items-center gap-2 mt-3"
                            >
                                <FiDownload className="text-violet-400" /> Download Executive CV
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-body text-xs text-white/40 text-center md:text-left">
                        &copy; {currentYear} John Baru. All rights reserved.
                    </p>
                    <p className="font-body text-xs text-white/40 text-center md:text-right">
                        Senior Finance & Operations Executive
                    </p>
                </div>
            </div>
        </footer>
    );
}
