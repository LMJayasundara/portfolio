import { Metadata } from 'next';
import { baseUrl } from '@/constants';
import Career from '@/components/career';

export const metadata: Metadata = {
  title: 'Career | Lahiru Jayasundara',
  description:
    'Professional career timeline of Lahiru Jayasundara, covering software engineering roles, IoT work, and experience with AWS, AI, and real-time systems.',
  keywords: [
    'Lahiru Jayasundara career',
    'software engineer experience',
    'senior software engineer resume',
    'AWS AI engineer career',
  ],
  openGraph: {
    title: 'Career | Lahiru Jayasundara',
    description:
      'Review the professional experience and career history of software engineer Lahiru Jayasundara.',
    siteName: 'Lahiru Jayasundara Portfolio',
    images: ['/open-garph.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career | Lahiru Jayasundara',
    description: 'Career highlights and experience of software engineer Lahiru Jayasundara.',
    creator: '@lahirujayasundara',
    images: ['/open-garph.png'],
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
    canonical: `${baseUrl}/career`,
  },
};

export default function CareerPage() {
  return (
    <section className="flex flex-1 flex-col items-center justify-start pt-12 pb-16">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-12 lg:px-24">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Career &amp; Works</h1>
        <Career />
      </div>
    </section>
  );
}
