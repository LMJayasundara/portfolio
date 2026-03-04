import { avatar, baseUrl } from '@/constants';
import { heroContent } from '@/data';
import { SocialLinks } from '@/components/social-links';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About | Lahiru Jayasundara',
  description:
    'Learn more about software engineer Lahiru Jayasundara, his background, and focus on full‑stack development, AWS serverless architecture, and AI agent integration.',
  keywords: [
    'about Lahiru Jayasundara',
    'software engineer bio',
    'full-stack engineer',
    'AI engineer',
    'AWS serverless developer',
  ],
  openGraph: {
    title: 'About | Lahiru Jayasundara',
    description:
      'Bio and background of software engineer Lahiru Jayasundara, including focus areas in AI, serverless, and full‑stack development.',
    siteName: 'Lahiru Jayasundara Portfolio',
    images: [`${baseUrl}/open-garph.png`],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Lahiru Jayasundara',
    description:
      'Get to know software engineer Lahiru Jayasundara and his expertise in AI and serverless full‑stack development.',
    creator: '@lahirujayasundara',
    images: [`${baseUrl}/open-garph.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: `${baseUrl}`,
  },
};

export default function Home() {
  return (
    <section className="flex flex-1 flex-col items-center justify-start pt-8 pb-8 text-left">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-12 lg:px-24 space-y-10">
        {/* Profile image */}
        <div className="flex justify-start">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-border shadow-md">
            <Image
              src="/headshot.png"
              alt={avatar.name}
              fill
              priority
              className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="space-y-5">
          <div className="flex flex-row items-center justify-start gap-4">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl leading-tight">
              {avatar.name}
            </h1>
          </div>

          <div className="space-y-4">
            <p className="max-w-4xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {heroContent.bio}
            </p>
          </div>
        </div>

        {/* Social Links */}
        <SocialLinks />
      </div>
    </section>
  );
}
