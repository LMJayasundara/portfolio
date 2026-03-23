import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { GoogleAnalytics } from '@next/third-parties/google';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { baseUrl } from '@/constants';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Lahiru Jayasundara',
  applicationName: 'Lahiru Portfolio',
  manifest: '/manifest.webmanifest',
  description:
    'Portfolio of Lahiru Jayasundara, a software engineer specializing in full‑stack development, AWS serverless architecture, and AI agent integration.',
  keywords: [
    'Lahiru',
    'Madushan',
    'Jayasundara',
    'Lahiru Madushan',
    'Lahiru Jayasundara',
    'Lahiru Madushan Jayasundara',
    'software engineer',
    'software engineer',
    'full-stack developer',
    'Next.js',
    'React',
    'TypeScript',
    'AWS',
    'serverless',
    'AI',
    'Amazon Bedrock',
    'portfolio',
  ],
  openGraph: {
    title: 'Lahiru Jayasundara',
    description:
      'Explore the work, experience, and projects of Lahiru Jayasundara, a software engineer focused on full‑stack development, AWS serverless, and AI solutions.',
    siteName: 'Lahiru Portfolio',
    images: [`${baseUrl}/open-garph.png`],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lahiru Jayasundara',
    description:
      'Software engineer specializing in full‑stack development, AWS serverless architecture, and AI-powered applications.',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Lahiru Portfolio',
    alternateName: 'Lahiru Jayasundara',
    url: baseUrl,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-right" />
          <div className="relative flex min-h-screen flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex flex-1 flex-col pt-14 overflow-x-hidden">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-0Y0JC8NRTC" />
    </html>
  );
}
