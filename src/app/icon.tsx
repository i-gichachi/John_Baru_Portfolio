import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#0B1628',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Violet accent dot — top right */}
        <div
          style={{
            position: 'absolute',
            top: 4,
            right: 4,
            width: 5,
            height: 5,
            borderRadius: '50%',
            background: '#7C3AED',
          }}
        />
        {/* JB monogram */}
        <span
          style={{
            color: '#FFFFFF',
            fontSize: 13,
            fontWeight: 700,
            fontFamily: 'Georgia, serif',
            letterSpacing: '-0.5px',
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
