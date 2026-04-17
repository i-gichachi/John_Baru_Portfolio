import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'John Wachania Baru',
    short_name: 'John Baru',
    description: 'Global Finance & Operations Executive — CFO / COO | Global Health & Development',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B1628',
    theme_color: '#0B1628',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
