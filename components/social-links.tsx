'use client';

import { links } from '@/constants';
import { useIsMobile } from '@/lib/use-mobile';

export function SocialLinks() {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-wrap justify-start gap-3 pt-4">
      {links.map(link => (
        <a
          key={link.title}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <link.icon className="h-4 w-4" />
          {!isMobile && <span>{link.title}</span>}
        </a>
      ))}
    </div>
  );
}
