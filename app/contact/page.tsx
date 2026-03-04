import { Metadata } from 'next';
import { contactContent } from '@/data';
import { baseUrl } from '@/constants';
import ContactForm from '@/components/contact';

export const metadata: Metadata = {
  title: 'Contact | Lahiru Jayasundara',
  description:
    'Contact Lahiru Jayasundara for software engineering opportunities, collaborations, or questions about AI, serverless, and full‑stack projects.',
  keywords: [
    'contact Lahiru Jayasundara',
    'hire software engineer',
    'contact senior software engineer',
    'AI engineer contact',
  ],
  openGraph: {
    title: 'Contact | Lahiru Jayasundara',
    description:
      'Reach out to Lahiru Jayasundara for collaboration, consulting, or new software engineering opportunities.',
    siteName: 'Lahiru Jayasundara Portfolio',
    images: ['/open-garph.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Lahiru Jayasundara',
    description:
      'Get in touch with software engineer Lahiru Jayasundara for new opportunities and collaborations.',
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
    canonical: `${baseUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <section className="flex flex-1 flex-col items-center justify-start pt-12 pb-16">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-12 lg:px-24">
        <div className="space-y-3">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {contactContent.heading}
          </h1>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            {contactContent.description}
          </p>
        </div>

        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
