"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
    end: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    label?: string;
    numberSize?: string;
    labelSize?: string;
}

export default function AnimatedCounter({
    end,
    suffix = "",
    prefix = "",
    duration = 2,
    label,
    numberSize = "text-4xl md:text-5xl",
    labelSize = "text-base md:text-lg",
}: AnimatedCounterProps) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <div ref={ref} className="flex flex-col items-center justify-center text-center">
            <div className={`font-display font-bold ${numberSize}`}>
                {inView ? (
                    <CountUp start={0} end={end} prefix={prefix} suffix={suffix} duration={2.5} enableScrollSpy={false} separator="," />
                ) : (
                    <span>{prefix}0{suffix}</span>
                )}
            </div>
            {label && <div className={`font-body mt-2 ${labelSize}`}>{label}</div>}
        </div>
    );
}
