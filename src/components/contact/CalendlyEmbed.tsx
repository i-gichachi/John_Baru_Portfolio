'use client';

import { useEffect } from 'react';

// Replace this URL with John's specific Calendly link when available
const CALENDLY_URL = 'https://calendly.com/johnbaru';

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Clean up script if necessary
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget rounded-2xl overflow-hidden"
      data-url={CALENDLY_URL}
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
}
