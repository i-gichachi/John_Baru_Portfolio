"use client";

import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsVisible(window.scrollY > 300);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Trigger once on mount
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
            className={`fixed z-[900] flex items-center justify-center rounded-full bg-[#6B5B8E] text-white
        shadow-[0_4px_16px_rgba(107,91,142,0.35)]
        hover:bg-[#8B7BAE] hover:shadow-[0_6px_20px_rgba(107,91,142,0.5)] hover:-translate-y-[2px]
        active:scale-95
        transition-all duration-200 ease-in-out
        right-[20px] bottom-[24px] w-[48px] h-[48px]
        sm:right-[32px] sm:bottom-[32px] sm:w-[56px] sm:h-[56px]
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6B5B8E]
        ${isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
            style={{
                transitionDuration: "0.3s",
                transitionProperty: "opacity, transform, background-color, box-shadow",
            }}
        >
            <FiChevronUp className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]" />
        </button>
    );
}
