import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#0B1628',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 100px',
          position: 'relative',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Violet accent line — left edge */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 80,
            bottom: 80,
            width: 5,
            background: '#7C3AED',
            borderRadius: '0 3px 3px 0',
          }}
        />

        {/* Top label */}
        <span
          style={{
            color: '#7C3AED',
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: 'uppercase',
            marginBottom: 24,
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Global Finance & Operations Executive
        </span>

        {/* Name */}
        <span
          style={{
            color: '#FFFFFF',
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: 28,
          }}
        >
          John Baru
        </span>

        {/* Role */}
        <span
          style={{
            color: '#94A3B8',
            fontSize: 28,
            fontFamily: 'Arial, sans-serif',
            marginBottom: 48,
          }}
        >
          CFO / COO  ·  Global Health & Development
        </span>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            gap: 60,
          }}
        >
          {[
            { value: '25+', label: 'Years Experience' },
            { value: '$150M+', label: 'Portfolios Directed' },
            { value: '98%+', label: 'Donor Compliance' },
            { value: '5', label: 'Countries Led' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <span
                style={{
                  color: '#FFFFFF',
                  fontSize: 36,
                  fontWeight: 700,
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  color: '#64748B',
                  fontSize: 14,
                  fontFamily: 'Arial, sans-serif',
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                  marginTop: 4,
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom right — domain */}
        <span
          style={{
            position: 'absolute',
            bottom: 48,
            right: 100,
            color: '#334155',
            fontSize: 18,
            fontFamily: 'Arial, sans-serif',
            letterSpacing: 1,
          }}
        >
          johnbaru.com
        </span>
      </div>
    ),
    { ...size }
  )
}
