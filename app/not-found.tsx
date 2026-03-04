import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="fixed inset-0 z-10 overflow-hidden">
      <video autoPlay loop muted className="absolute inset-0 h-full w-full object-cover">
        <source src="/page-not-found.webm" type="video/webm" />
      </video>
      <div className="not-found absolute inset-0 h-full w-full bg-white/90 dark:bg-black/90" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-14 text-center">
        <h1 className="text-balance text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-800 dark:text-neutral-200 sm:text-base">
          The page you are looking for does not exist.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-black shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground dark:text-white"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
