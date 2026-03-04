import { MetadataRoute } from 'next';
import { baseUrl } from '@/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/career', '/projects', '/contact'],
        disallow: ['/api', '/amplify', '/_next', '/_static'],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/', '/career', '/projects', '/contact'],
        disallow: ['/api', '/amplify', '/_next', '/_static'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
