"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
    { label: "Leadership", href: "/leadership" },
    { label: "Expertise", href: "/expertise" },
    { label: "Engagements", href: "/engagements" },
    { label: "Advisory", href: "/advisory" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white shadow-sm border-b border-slate-100 py-3 lg:py-4">
            <div className="max-w-7xl mx-auto px-5 lg:px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="font-display font-semibold text-xl md:text-2xl tracking-wide text-navy-800">
                    John Baru<span className="text-gold-500">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {LINKS.map(link => (
                        <Link 
                            key={link.href} 
                            href={link.href}
                            className={`font-body font-medium text-sm transition-colors text-slate-600 hover:text-gold-500 ${pathname === link.href ? "text-gold-500 font-semibold" : ""}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link 
                        href="/contact"
                        className="inline-flex items-center justify-center whitespace-nowrap font-body font-semibold text-sm rounded bg-navy-800 text-white hover:bg-gold-500 transition-colors px-6 py-2.5"
                    >
                        Book a Consultation
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden flex flex-col justify-center items-center w-12 h-12 z-50 text-navy-800 -mr-2 cursor-pointer active:scale-90 transition-transform duration-200"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"}`}></span>
                    <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
                    <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-6 px-6 lg:hidden flex flex-col gap-4"
                    >
                        {LINKS.map(link => (
                            <Link 
                                key={link.href} 
                                href={link.href} 
                                className={`font-display text-base tracking-wide border-b border-slate-50 pb-4 ${pathname === link.href ? "text-gold-500 font-bold" : "text-navy-800 font-semibold"}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/contact" className="inline-flex items-center justify-center bg-navy-800 text-white font-body font-semibold text-[13px] sm:text-sm rounded hover:-translate-y-0.5 active:scale-95 px-6 py-4 mt-2 w-full text-center hover:bg-gold-500 transition-all duration-200">
                            Book a Consultation
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
