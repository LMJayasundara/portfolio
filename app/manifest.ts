import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lahiru Portfolio',
    short_name: 'Lahiru Portfolio',
    description:
      'Portfolio of Lahiru Jayasundara, software engineer specializing in full-stack development, AWS serverless architecture, and AI agent integration.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#111827',
    lang: 'en',
  };
}
