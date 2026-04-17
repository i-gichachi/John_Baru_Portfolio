import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: '#0B1628',
          borderRadius: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Violet accent bar — bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 28,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 32,
            height: 3,
            borderRadius: 2,
            background: '#7C3AED',
          }}
        />
        {/* JB monogram */}
        <span
          style={{
            color: '#FFFFFF',
            fontSize: 72,
            fontWeight: 700,
            fontFamily: 'Georgia, serif',
            letterSpacing: '-2px',
            lineHeight: 1,
          }}
        >
          JB
        </span>
      </div>
    ),
    { ...size }
  )
}
