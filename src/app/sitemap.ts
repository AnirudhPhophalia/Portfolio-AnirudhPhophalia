import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://github.com/AnirudhPhophalia',
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
