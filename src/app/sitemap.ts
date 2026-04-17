import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://johnbaru.com'
  const pages = [
    { path: '/', priority: 1.0, changeFrequency: 'monthly' },
    { path: '/leadership', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/expertise', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/engagements', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/advisory', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
  ]
  return pages.map(page => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency as any,
    priority: page.priority,
  }))
}
