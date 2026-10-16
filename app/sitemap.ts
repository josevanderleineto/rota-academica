import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/data/blogPosts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rota-academica.vercel.app/';

  const staticRoutes = [
    '',
    '/sobre',
    '/servicos',
    '/normalizacao-abnt',
    '/formatacao-tcc',
    '/consultoria-academica',
    '/projeto-de-pesquisa',
    '/referencias-abnt',
    '/apresentacao-tcc',
    '/blog',
    '/contato'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...blogRoutes];
}
