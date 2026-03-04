import { Metadata } from 'next';
import { baseUrl } from '@/constants';
import Projects from '@/components/projects';

export const metadata: Metadata = {
  title: 'Projects | Lahiru Jayasundara',
  description:
    'Selected software engineering projects by Lahiru Jayasundara, including AI agents, AWS serverless platforms, and production-grade full-stack applications.',
  keywords: [
    'Lahiru Jayasundara projects',
    'software projects',
    'AI projects',
    'AWS serverless projects',
    'Next.js portfolio projects',
  ],
  openGraph: {
    title: 'Projects | Lahiru Jayasundara',
    description:
      'Explore highlighted projects by Lahiru Jayasundara across AI, serverless architectures, and full‑stack web development.',
    siteName: 'Lahiru Jayasundara Portfolio',
    images: [`${baseUrl}/open-garph.png`],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Lahiru Jayasundara',
    description:
      'Highlighted AI, serverless, and full‑stack software projects by Lahiru Jayasundara.',
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
    canonical: `${baseUrl}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <section className="flex flex-1 flex-col items-center justify-start pt-12 pb-16">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-12 lg:px-24">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Projects &amp; Crafts</h1>
        <Projects />
      </div>
    </section>
  );
}
