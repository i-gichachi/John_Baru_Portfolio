'use client';

import { useEffect, useRef } from 'react';

// Replace this URL with John's specific Calendly link when available
const CALENDLY_URL = 'https://calendly.com/johnbaru2002';

export default function CalendlyEmbed() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const script = document.createElement('script')
          script.src = 'https://assets.calendly.com/assets/external/widget.js'
          script.async = true
          document.head.appendChild(script)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="calendly-inline-widget rounded-2xl overflow-hidden"
      data-url={CALENDLY_URL}
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
}
